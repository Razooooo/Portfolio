// src/composables/useGsapAnimations.ts
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Animation pour la page d'accueil - section header/profil
export function useHeaderAnimation() {
  let timeline: gsap.core.Timeline | null = null

  onMounted(() => {
    timeline = gsap.timeline()

    // Animation de la photo de profil
    timeline
      .from('.profile-image', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
      })
      // Animation du nom
      .from(
        '.profile-text h1',
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: 'back.out(1.7)',
        },
        '-=0.4',
      )
      // Animation du titre
      .from(
        '.profile-text h2',
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: 'back.out(1.7)',
        },
        '-=0.3',
      )
      // Animation de la bio
      .from(
        '.bio',
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        '-=0.2',
      )
      // Animation des liens sociaux
      .from(
        '.social-links a',
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.5,
        },
        '-=0.1',
      )
  })

  onUnmounted(() => {
    // Nettoyer les animations à la destruction du composant
    if (timeline) timeline.kill()
  })
}

// Animations déclenchées au scroll pour la page d'accueil
export function useHomeScrollAnimations() {
  const animations: gsap.core.Tween[] = []

  onMounted(() => {
    // Animation pour les titres de section
    animations.push(
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
      }),
    )

    // Animation pour les cartes de compétences
    animations.push(
      gsap.from('.skill-category', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 70%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.6,
      }),
    )

    // Animation pour les compétences individuelles
    animations.push(
      gsap.from('.skill-category li', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 60%',
        },
        opacity: 0,
        x: -20,
        stagger: 0.05,
        duration: 0.4,
        delay: 0.2,
      }),
    )

    // Animation pour les projets sur la page d'accueil
    animations.push(
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 60%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.7,
      }),
    )
  })

  onUnmounted(() => {
    // Nettoyer les animations à la destruction du composant
    animations.forEach((anim) => anim.kill())
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  })
}

// Animations pour la page des projets
export function useProjectsAnimation() {
  const animations: gsap.core.Tween[] = []

  onMounted(() => {
    // Animation pour l'en-tête des projets
    animations.push(
      gsap.from('.projects-header', {
        opacity: 0,
        y: -30,
        duration: 0.7,
        ease: 'power2.out',
      }),
    )

    // Animation pour les cartes de projets
    animations.push(
      gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      }),
    )

    // Animation pour les éléments internes des cartes
    animations.push(
      gsap.from('.project-title, .project-date', {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.6,
      }),
    )

    animations.push(
      gsap.from('.features-list li', {
        opacity: 0,
        x: -20,
        stagger: 0.05,
        duration: 0.4,
        delay: 0.8,
      }),
    )

    animations.push(
      gsap.from('.tech-tag', {
        scale: 0,
        opacity: 0,
        stagger: 0.03,
        duration: 0.3,
        delay: 1,
        ease: 'back.out(1.7)',
      }),
    )

    animations.push(
      gsap.from('.project-actions a', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        delay: 1.2,
      }),
    )
  })

  onUnmounted(() => {
    // Nettoyer les animations à la destruction du composant
    animations.forEach((anim) => anim.kill())
  })
}

// Animation pour les transitions de page
export function usePageTransition() {
  // Animation d'entrée de page
  function pageEnter(element: Element) {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        clearProps: 'all',
      },
    )
  }

  return {
    pageEnter,
  }
}

// Animation pour la navbar
export function useNavbarAnimation() {
  let timeline: gsap.core.Timeline | null = null

  onMounted(() => {
    timeline = gsap.timeline()

    timeline
      .from('.logo', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: 'power2.out',
      })
      .from(
        '.nav-links .nav-link',
        {
          opacity: 0,
          y: -10,
          stagger: 0.1,
          duration: 0.5,
        },
        '-=0.3',
      )
  })

  onUnmounted(() => {
    if (timeline) timeline.kill()
  })
}
