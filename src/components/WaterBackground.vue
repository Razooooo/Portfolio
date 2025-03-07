<template>
  <div id="water-background" ref="container">
    <div class="color-background"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import * as THREE from 'three'
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js'

// Définition d'une interface pour la configuration
interface WaterConfig {
  sphereRadius: number;
  detail: number;
  noiseStrength: number;
  noiseSpeed: number;
  waveHeight: number;
  color: number;
  opacity: number;
  droplets: {
    count: number;
    size: number[];
    distance: number[];
    speed: number[];
    offset: number[];
    inclination: number[];
    tailLength: number;
    tailFade: number;
  }
}

// Interface pour les données utilisateur des gouttelettes
interface DropletUserData {
  distance: number;
  speed: number;
  offset: number;
  inclination: number;
  tailPositions: THREE.Vector3[];
  head: THREE.Mesh;
}

const container = ref<HTMLDivElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let sphere: THREE.Mesh
let noise: SimplexNoise
let clock: THREE.Clock
let animationFrameId: number
const droplets: THREE.Object3D[] = [] // Pour stocker les gouttelettes
const tails: THREE.Object3D[] = [] // Pour stocker les queues des gouttelettes

// Détection de mobile/tablette
const isMobile = computed(() => {
  return window.innerWidth < 768
})

// Configuration adaptative basée sur le type d'appareil
const getConfig = (): WaterConfig => {
  // Configuration de base avec ajustements pour mobile
  return {
    sphereRadius: 1.5, // Taille de la sphère
    detail: isMobile.value ? 20 : 64, // Réduire la complexité sur mobile
    noiseStrength: 0.1, // Intensité des déformations
    noiseSpeed: isMobile.value ? 0.3 : 0.5, // Vitesse réduite sur mobile
    waveHeight: 0.2, // Hauteur des vagues
    color: 0x4ba3d4, // Bleu plus clair, légèrement plus turquoise
    opacity: 0.75, // Légèrement plus transparent pour un effet plus léger

    // Configuration des gouttelettes
    droplets: {
      count: isMobile.value ? 1 : 3, // Moins de gouttelettes sur mobile
      size: [0.08, 0.06, 0.07], // Tailles des gouttelettes
      distance: [2.8, 3.3, 3.0], // Distance par rapport à la sphère
      speed: [0.3, 0.4, 0.25], // Vitesses de rotation
      offset: [0, Math.PI * 0.66, Math.PI * 1.33], // Offsets de position pour éviter l'alignement
      inclination: [0.3, 0.7, 0.5], // Inclinaison des orbites
      tailLength: isMobile.value ? 8 : 15, // Queue plus courte sur mobile
      tailFade: 0.9, // Facteur de diminution de taille pour chaque segment de queue
    },
  }
}

// Fonction d'initialisation
const init = () => {
  if (!container.value) return

  const config = getConfig()

  // Création de la scène
  scene = new THREE.Scene()

  // Création de la caméra
  const aspect = window.innerWidth / window.innerHeight
  camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000)
  camera.position.z = 5

  // Création du renderer avec des options optimisées
  renderer = new THREE.WebGLRenderer({
    antialias: !isMobile.value, // Désactiver l'antialiasing sur mobile
    alpha: true, // Assure que le fond du renderer est transparent
    powerPreference: 'high-performance', // Optimisation pour les performances
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(isMobile.value ? 1 : window.devicePixelRatio) // Résolution réduite sur mobile

  // Nettoyage du conteneur et ajout du canvas
  if (container.value) {
    // On préserve l'élément div.color-background s'il existe
    const colorBackground = container.value.querySelector('.color-background')
    while (container.value.firstChild) {
      if (container.value.firstChild !== colorBackground) {
        container.value.removeChild(container.value.firstChild)
      } else {
        break
      }
    }
    container.value.appendChild(renderer.domElement)
    // Assurons-nous que le color-background reste derrière le canvas
    if (colorBackground) {
      container.value.insertBefore(colorBackground, container.value.firstChild)
    }
  }

  // Création du bruit pour l'animation
  noise = new SimplexNoise()

  // Création de la sphère d'eau
  createWaterSphere(config)

  // Création des gouttelettes
  if (!isMobile.value || (isMobile.value && window.innerWidth > 480)) {
    // Ne pas créer les gouttelettes sur les très petits écrans
    createTadpoleDroplets(config)
  }

  // Horloge pour l'animation
  clock = new THREE.Clock()

  // Ajout de l'évenement de redimensionnement
  window.addEventListener('resize', onWindowResize)
}

// Création de la sphère d'eau
const createWaterSphere = (config: WaterConfig) => {
  // Géométrie de la sphère
  const geometry = new THREE.IcosahedronGeometry(config.sphereRadius, config.detail)

  // Création d'une carte d'environnement pour les reflets (seulement sur desktop)
  let cubeRenderTarget: THREE.WebGLCubeRenderTarget | null = null
  let cubeCamera: THREE.CubeCamera | null = null
  
  if (!isMobile.value) {
    cubeRenderTarget = new THREE.WebGLCubeRenderTarget(isMobile.value ? 128 : 256)
    cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget)
    scene.add(cubeCamera)
  }

  // Matériau pour l'effet d'eau avec reflets améliorés
  const material = new THREE.MeshPhysicalMaterial({
    color: config.color,
    transparent: true,
    opacity: config.opacity,
    roughness: isMobile.value ? 0.2 : 0.1, // Moins de détails sur mobile
    metalness: 0.05, // Moins de métallicité pour un aspect plus aquatique
    clearcoat: isMobile.value ? 0.5 : 1.0, // Réduire les effets sur mobile
    clearcoatRoughness: isMobile.value ? 0.1 : 0.05, // Surface plus lisse pour la couche transparente
    envMap: cubeRenderTarget ? cubeRenderTarget.texture : null,
    envMapIntensity: isMobile.value ? 1.2 : 1.8, // Intensité des reflets
    reflectivity: isMobile.value ? 0.8 : 1.0, // Réflectivité
    emissive: 0x103c4a, // Légère émission de lumière pour éclaircir les zones sombres
    emissiveIntensity: 0.2, // Intensité modérée pour ne pas perdre l'effet d'eau
  })

  // Création du maillage
  sphere = new THREE.Mesh(geometry, material)

  // Copie des positions initiales des vertices
  geometry.userData.originalPositions = geometry.attributes.position.clone()

  // Stockage de la caméra cube pour les reflets
  if (cubeCamera) {
    sphere.userData.cubeCamera = cubeCamera
  }

  // Ajout de lumières (optimisé pour mobile)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7) // Lumière ambiante 
  scene.add(ambientLight)

  const light1 = new THREE.DirectionalLight(0xffffff, 1.0)
  light1.position.set(1, 1, 1)
  light1.castShadow = false // Désactive les ombres projetées
  scene.add(light1)

  // Lumières additionnelles seulement sur desktop
  if (!isMobile.value) {
    const light2 = new THREE.DirectionalLight(0x6fccea, 0.6)
    light2.position.set(-1, -1, -1)
    light2.castShadow = false
    scene.add(light2)

    // Lumière ponctuelle pour des reflets plus prononcés - couleur bleu clair
    const pointLight = new THREE.PointLight(0xadd8e6, 1.2, 8)
    pointLight.position.set(2, 2, 2)
    pointLight.castShadow = false
    scene.add(pointLight)

    // Ajout d'une deuxième lumière ponctuelle pour plus de brillance
    const pointLight2 = new THREE.PointLight(0xffffff, 0.8, 6)
    pointLight2.position.set(-1.5, 1, 3)
    pointLight2.castShadow = false
    scene.add(pointLight2)

    // Ajout d'une lumière ponctuelle pour éclairer le dessous et réduire les ombres
    const fillLight = new THREE.PointLight(0xd4f1f9, 0.7, 10)
    fillLight.position.set(0, -3, 0)
    fillLight.castShadow = false
    scene.add(fillLight)
  }

  // Ajout de la sphère à la scène
  scene.add(sphere)
}

// Création des gouttelettes têtards avec queue
const createTadpoleDroplets = (config: WaterConfig) => {
  for (let i = 0; i < config.droplets.count; i++) {
    // Création d'un groupe pour la gouttelette et sa queue
    const dropletGroup = new THREE.Group()

    // Forme de goutte d'eau (tête du têtard)
    const headGeom = new THREE.SphereGeometry(
      config.droplets.size[i], 
      isMobile.value ? 8 : 12, 
      isMobile.value ? 8 : 12
    )

    // Pour donner une forme légèrement allongée
    headGeom.scale(1, 0.9, 1)

    const headMaterial = new THREE.MeshPhysicalMaterial({
      color: config.color,
      transparent: true,
      opacity: 0.9,
      roughness: isMobile.value ? 0.1 : 0.05,
      metalness: 0.02,
      clearcoat: isMobile.value ? 0.5 : 1.0,
      clearcoatRoughness: isMobile.value ? 0.05 : 0.02,
      emissive: 0x103c4a,
      emissiveIntensity: 0.3,
    })

    const head = new THREE.Mesh(headGeom, headMaterial)
    dropletGroup.add(head)

    // Création de la queue (série de sphères de plus en plus petites)
    const tailGroup = new THREE.Group()
    const tailPositions: THREE.Vector3[] = []

    // Stockage des positions de queue initiales
    for (let j = 0; j < config.droplets.tailLength; j++) {
      tailPositions.push(new THREE.Vector3(0, 0, 0))
    }

    // Créer les segments de queue
    for (let j = 0; j < config.droplets.tailLength; j++) {
      const segmentSize = config.droplets.size[i] * Math.pow(config.droplets.tailFade, j)
      const segmentGeom = new THREE.SphereGeometry(
        segmentSize,
        isMobile.value ? 6 : 8,
        isMobile.value ? 6 : 8
      )

      const segmentMaterial = new THREE.MeshPhysicalMaterial({
        color: config.color,
        transparent: true,
        opacity: 0.7 * (1 - j / config.droplets.tailLength),
        roughness: 0.05,
        metalness: 0.02,
        clearcoat: isMobile.value ? 0.4 : 0.8,
        clearcoatRoughness: 0.02,
        emissive: 0x103c4a,
        emissiveIntensity: 0.2 * (1 - j / config.droplets.tailLength),
      })

      const segment = new THREE.Mesh(segmentGeom, segmentMaterial)
      tailGroup.add(segment)
    }

    // Ajouter la queue au groupe
    dropletGroup.add(tailGroup)
    scene.add(dropletGroup)

    // Stocker la gouttelette et sa queue
    droplets.push(dropletGroup)
    tails.push(tailGroup)

    // Stockage des paramètres et des positions de queue
    dropletGroup.userData = {
      distance: config.droplets.distance[i],
      speed: config.droplets.speed[i],
      offset: config.droplets.offset[i],
      inclination: config.droplets.inclination[i],
      tailPositions: tailPositions,
      head: head,
    } as DropletUserData
  }
}

// Animation de la sphère d'eau et des gouttelettes - optimisée pour mobile
const animate = () => {
  const time = clock.getElapsedTime()
  const config = getConfig()

  // Animation de la sphère principale
  if (sphere && sphere.geometry) {
    // Obtention des attributs de position
    const positions = sphere.geometry.attributes.position
    const originalPositions = sphere.geometry.userData.originalPositions

    // Animation de chaque vertex - optimisée pour mobile
    const updateFrequency = isMobile.value ? 2 : 1 // Mise à jour moins fréquente sur mobile
    
    if (Math.floor(time * 60) % updateFrequency === 0) {
      for (let i = 0; i < positions.count; i++) {
        // Position originale
        const x = originalPositions.getX(i)
        const y = originalPositions.getY(i)
        const z = originalPositions.getZ(i)

        // Vecteur initial pour calculer la direction normale
        const vector = new THREE.Vector3(x, y, z).normalize()

        // Création d'un effet de vague avec du bruit
        const noiseValue = noise.noise3d(
          vector.x + time * config.noiseSpeed,
          vector.y + time * config.noiseSpeed * 0.8,
          vector.z + time * config.noiseSpeed * 0.6,
        )

        // Application du bruit à la position
        const distortion = vector.multiplyScalar(
          config.noiseStrength * noiseValue + config.waveHeight * Math.sin(time * 2 + vector.y * 5),
        )

        // Mise à jour de la position
        positions.setXYZ(i, x + distortion.x, y + distortion.y, z + distortion.z)
      }

      // Mise à jour des positions des vertices
      positions.needsUpdate = true
    }

    // Rotation lente de la sphère
    sphere.rotation.x = time * 0.1
    sphere.rotation.y = time * 0.15

    // Mise à jour des reflets (seulement sur desktop)
    if (!isMobile.value && sphere.userData.cubeCamera) {
      sphere.visible = false
      sphere.userData.cubeCamera.position.copy(sphere.position)
      sphere.userData.cubeCamera.update(renderer, scene)
      sphere.visible = true
    }
  }

  // Animation des gouttelettes avec queue
  droplets.forEach((droplet, dropletIndex) => {
    if (droplet && droplet.userData) {
      const params = droplet.userData as DropletUserData
      const head = params.head

      // Orbite autour de la sphère principale
      const angle = time * params.speed + params.offset

      // Calculer la nouvelle position
      const newX = Math.cos(angle) * params.distance
      const newY = Math.sin(angle) * params.distance * Math.sin(params.inclination)
      const newZ = Math.sin(angle) * params.distance * Math.cos(params.inclination)

      // Mettre à jour la position de la tête
      droplet.position.set(newX, newY, newZ)

      // Orientation de la tête dans la direction du mouvement
      if (params.tailPositions.length > 1) {
        const prevPos = params.tailPositions[0]
        if (prevPos) {
          const direction = new THREE.Vector3().subVectors(
            new THREE.Vector3(newX, newY, newZ),
            prevPos,
          )

          if (direction.length() > 0.001) {
            head.lookAt(prevPos)
          }
        }
      }

      // Mise à jour des positions de queue avec fréquence réduite sur mobile
      const updateFrequency = isMobile.value ? 2 : 1
      
      if (Math.floor(time * 60) % updateFrequency === 0) {
        // Déplacer toutes les positions anciennes
        for (let i = params.tailPositions.length - 1; i > 0; i--) {
          params.tailPositions[i].copy(params.tailPositions[i - 1])
        }

        // Ajouter la position actuelle au début
        params.tailPositions[0] = new THREE.Vector3(newX, newY, newZ)

        // Mise à jour des positions des segments de queue
        const tailGroup = tails[dropletIndex]
        tailGroup.children.forEach((segment, i) => {
          if (i < params.tailPositions.length && i > 0) {
            const pos = params.tailPositions[i]
            segment.position.copy(pos)
            segment.position.sub(droplet.position) // Position relative au groupe parent

            // Réduire progressivement la taille le long de la queue
            const scale = 1 - (i / params.tailPositions.length) * 0.7
            segment.scale.set(scale, scale, scale)
          }
        })
      }

      // Petite animation de pulsation pour la tête du têtard
      const headScale = 1 + 0.05 * Math.sin(time * 5 + params.offset)
      head.scale.set(headScale, headScale * 0.9, headScale)
    }
  })

  // Rendu de la scène
  renderer.render(scene, camera)

  // Boucle d'animation
  animationFrameId = requestAnimationFrame(animate)
}

// Gestion du redimensionnement de la fenêtre avec optimisation
const onWindowResize = () => {
  // Détection de changement entre mobile et desktop
  const wasMobile = isMobile.value
  const newIsMobile = window.innerWidth < 768
  
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(newIsMobile ? 1 : window.devicePixelRatio)
  
  // Si on passe de mobile à desktop ou inversement, on réinitialise la scène
  if (wasMobile !== newIsMobile) {
    cleanup()
    init()
  }
}

// Fonction de nettoyage pour libérer les ressources
const cleanup = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }

  // Nettoyage de la mémoire
  if (sphere) {
    sphere.geometry.dispose()
    if (sphere.material instanceof THREE.Material) {
      sphere.material.dispose()
    } else if (Array.isArray(sphere.material)) {
      sphere.material.forEach((material) => material.dispose())
    }
  }

  // Nettoyage des gouttelettes et leurs queues
  droplets.forEach((droplet) => {
    if (droplet) {
      droplet.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose()
          if (child.material instanceof THREE.Material) {
            child.material.dispose()
          } else if (Array.isArray(child.material)) {
            child.material.forEach((material) => material.dispose())
          }
        }
      })
    }
  })

  // Vider les tableaux
  droplets.length = 0
  tails.length = 0

  if (renderer) {
    renderer.dispose()
  }

  // Vider la scène
  if (scene) {
    scene.clear()
  }
}

// Hooks du cycle de vie
onMounted(() => {
  init()
  animate()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
  cleanup()
})
</script>

<style scoped>
#water-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

/* Élément pour le fond coloré */
.color-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* S'assure que c'est derrière le canvas Three.js */

  /* Option 1: Gradient linéaire */
  background: linear-gradient(135deg, #f5f3f2, #cad9df, #aecad6);
}

/* Optimisations mobiles */
@media (max-width: 768px) {
  .color-background {
    /* Gradient simplifié pour mobile */
    background: linear-gradient(to bottom, #f5f3f2, #aecad6);
  }
}
</style>