import { onMounted, onBeforeUnmount } from 'vue'

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  const initScrollReveal = (): void => {
    // Options pour l'IntersectionObserver
    const options: IntersectionObserverInit = {
      root: null, // Utilise le viewport comme zone d'observation
      rootMargin: '0px', // Pas de marge
      threshold: 0.1, // Déclenchement quand 10% de l'élément est visible
    }

    // Création de l'observateur
    observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Si l'élément est visible
        if (entry.isIntersecting) {
          // Ajoute la classe de révélation
          entry.target.classList.add('revealed')

          // Arrête d'observer une fois que l'élément est révélé
          if (observer) {
            observer.unobserve(entry.target)
          }
        }
      })
    }, options)

    // Observe tous les éléments avec la classe 'reveal-on-scroll'
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      if (observer) {
        observer.observe(el)
      }
    })
  }

  onMounted(() => {
    // Délai de 100ms pour s'assurer que le DOM est complètement chargé
    setTimeout(initScrollReveal, 100)
  })

  onBeforeUnmount(() => {
    // Nettoyage de l'observateur
    if (observer) {
      observer.disconnect()
    }
  })

  return {}
}
