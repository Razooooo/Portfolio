<script setup lang="ts">
/**
 * Fond animé : dégradé organique rendu en WebGL (ogl).
 * Rendu à faible résolution puis étiré par le CSS — le flou est gratuit.
 * Le mouvement est autonome : il ne dépend ni de la souris ni du scroll.
 * Le canvas déborde du viewport (OVERSCAN) pour ne jamais laisser voir un bord.
 */
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { Renderer, Program, Mesh, Triangle, Color } from 'ogl'

const OVERSCAN = 1.18

const canvas = ref<HTMLCanvasElement | null>(null)
let cleanup: (() => void) | null = null

const vertex = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const fragment = /* glsl */ `
  precision mediump float;

  uniform float uTime;
  uniform vec2 uAspect;
  uniform vec3 uWarm;
  uniform vec3 uSage;
  uniform vec3 uSand;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(p);
      p *= 2.02;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 p = (vUv - 0.5) * uAspect * 2.2;

    // Dérive lente et autonome, sur deux périodes non harmoniques pour que la
    // boucle ne soit pas perceptible.
    p += vec2(
      sin(uTime * 0.043) * 0.42,
      cos(uTime * 0.031) * 0.34
    );

    float t = uTime * 0.11;

    // Domain warping : le champ se déforme lui-même, ce qui donne un mouvement
    // bien plus lisible qu'une simple translation.
    vec2 q = vec2(fbm(p + vec2(0.0, t * 0.6)), fbm(p + vec2(4.7, -t * 0.45)));
    vec2 r = vec2(
      fbm(p + 2.0 * q + vec2(1.7, 9.2) + t * 0.4),
      fbm(p + 2.0 * q + vec2(8.3, 2.8) - t * 0.35)
    );

    float n1 = fbm(p + 2.4 * r);
    float n2 = fbm(p * 1.4 + 3.0 * r + 11.0);

    vec3 col = mix(uSand, uWarm, smoothstep(0.26, 0.74, n1));
    col = mix(col, uSage, smoothstep(0.36, 0.88, n2) * 0.8);

    float mass = smoothstep(0.18, 0.82, n1 * 0.62 + n2 * 0.38);
    float edge = smoothstep(0.10, 0.95, length((vUv - vec2(0.5, 0.35)) * vec2(1.0, 1.25)));

    gl_FragColor = vec4(col, mass * (0.36 + edge * 0.46));
  }
`

onMounted(() => {
  const el = canvas.value
  if (!el) return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let renderer: Renderer
  try {
    renderer = new Renderer({
      canvas: el,
      alpha: true,
      antialias: false,
      dpr: 0.45, // basse volontairement : le CSS étire et lisse le résultat
      powerPreference: 'low-power'
    })
  } catch {
    // Pas de WebGL : le dégradé CSS sous le canvas prend le relais.
    return
  }

  const gl = renderer.gl
  gl.clearColor(0, 0, 0, 0)

  const program = new Program(gl, {
    vertex,
    fragment,
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uAspect: { value: [1, 1] },
      uWarm: { value: new Color('#d5825a') },
      uSage: { value: new Color('#88a496') },
      uSand: { value: new Color('#f2e6d6') }
    }
  })

  const mesh = new Mesh(gl, { geometry: new Triangle(gl), program })

  const resize = () => {
    // ogl écrit lui-même canvas.style.width/height : on lui donne donc
    // directement la taille finale, sinon le CSS est écrasé et un bord
    // non peint apparaît à droite et en bas.
    const w = Math.ceil(window.innerWidth * OVERSCAN)
    const h = Math.ceil(window.innerHeight * OVERSCAN)
    renderer.setSize(w, h)
    program.uniforms.uAspect.value = w > h ? [w / h, 1] : [1, h / w]
  }

  resize()
  window.addEventListener('resize', resize)

  let frame = 0
  let last = performance.now()
  let elapsed = 0

  const render = (now: number) => {
    frame = requestAnimationFrame(render)
    // Clamp : au retour d'onglet, pas de saut d'animation.
    elapsed += Math.min(now - last, 60) / 1000
    last = now

    program.uniforms.uTime.value = elapsed
    renderer.render({ scene: mesh })
  }

  if (reducedMotion) {
    // Une seule passe : on garde la texture, on retire le mouvement.
    program.uniforms.uTime.value = 12
    renderer.render({ scene: mesh })
  } else {
    frame = requestAnimationFrame(render)
  }

  const onVisibility = () => {
    if (reducedMotion) return
    if (document.hidden) {
      cancelAnimationFrame(frame)
    } else {
      last = performance.now()
      frame = requestAnimationFrame(render)
    }
  }
  document.addEventListener('visibilitychange', onVisibility)

  cleanup = () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('resize', resize)
    document.removeEventListener('visibilitychange', onVisibility)
    gl.getExtension('WEBGL_lose_context')?.loseContext()
  }
})

onBeforeUnmount(() => cleanup?.())
</script>

<template>
  <div class="backdrop" aria-hidden="true">
    <div class="backdrop-base"></div>
    <canvas ref="canvas" class="backdrop-canvas"></canvas>
    <div class="backdrop-grain"></div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background: var(--paper);
}

/* Repli si WebGL est indisponible. */
.backdrop-base {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(70% 55% at 15% 0%, rgba(213, 130, 90, 0.18), transparent 65%),
    radial-gradient(60% 50% at 90% 100%, rgba(136, 164, 150, 0.18), transparent 60%),
    var(--paper);
}

/* Centré : le canvas déborde de OVERSCAN de chaque côté. */
.backdrop-canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  mix-blend-mode: multiply;
}

/* Grain papier : casse le rendu « dégradé parfait ». */
.backdrop-grain {
  position: absolute;
  inset: 0;
  opacity: 0.32;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.42'/%3E%3C/svg%3E");
}
</style>
