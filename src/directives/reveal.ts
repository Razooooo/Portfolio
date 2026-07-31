import type { Directive } from 'vue'

/**
 * v-reveal — fait apparaître l'élément quand il entre dans le viewport.
 * `v-reveal="0.15"` décale l'apparition de 0,15 s (effet d'escalier).
 */
const observed = new WeakMap<Element, () => void>()

let observer: IntersectionObserver | null = null

const getObserver = () => {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        observed.get(entry.target)?.()
        observer?.unobserve(entry.target)
        observed.delete(entry.target)
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
  )
  return observer
}

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    el.classList.add('reveal')
    const delay = binding.value ?? 0

    let timer: number | undefined
    const show = () => {
      clearTimeout(timer)
      el.style.transitionDelay = delay ? `${delay}s` : ''
      el.classList.add('is-visible')
    }

    observed.set(el, show)
    getObserver().observe(el)

    // Filet de sécurité : le contenu ne doit jamais rester invisible si
    // l'observer ne se déclenche pas (onglet en arrière-plan au chargement,
    // navigateur exotique...).
    timer = window.setTimeout(show, 2500)
  },
  unmounted(el) {
    observer?.unobserve(el)
    observed.delete(el)
  }
}
