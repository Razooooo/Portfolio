<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  year: string
  features: string[]
  demoUrl?: string
  demoLabel?: string
}

const projects: Project[] = [
  {
    id: 7,
    title: 'CYNA DEV',
    description: 'Plateforme e-commerce SaaS dédiée à la cybersécurité.',
    longDescription:
      'Plateforme e-commerce SaaS de solutions de sécurité : catalogue d\'abonnements, espace client et support intégré.',
    technologies: ['React', 'TypeScript', 'Laravel', 'PHP', 'MySQL'],
    year: '2026',
    features: [
      'Gestion des abonnements',
      'Espace client',
      'Chatbot de support'
    ]
  },
  {
    id: 6,
    title: 'Mistral Automotive',
    description: 'Site vitrine pour un revendeur de pièces automobiles à Madagascar.',
    longDescription:
      'Site vitrine d\'un revendeur de pièces automobiles à Madagascar, pensé pour présenter le catalogue et faciliter la prise de contact.',
    technologies: ['Vue.js'],
    year: '2025',
    features: ['Filtres de catalogue', 'Formulaire de contact', 'Site en ligne'],
    demoUrl: 'https://mistral-automotive.com/',
    demoLabel: 'Voir le site'
  },
  {
    id: 1,
    title: 'NurseCare',
    description: 'Application de gestion pour un cabinet d\'infirmiers.',
    longDescription:
      'Application complète permettant le suivi des patients et la planification des tournées pour un cabinet d\'infirmiers.',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'MySQL'],
    year: '2025',
    features: [
      'Dossiers patients',
      'Gestion des tournées',
      'Suivi des traitements',
      'Génération de factures PDF',
      'Interface responsive'
    ],
    demoUrl: '/docs/DocFonctionnelleNurseCare.pdf',
    demoLabel: 'Documentation'
  },
  {
    id: 2,
    title: 'Carist-SI',
    description: 'Gestion des stocks et des emplacements en entrepôt.',
    longDescription:
      'Application lourde permettant la gestion des stocks et des emplacements de colis dans un entrepôt logistique.',
    technologies: ['Kotlin', 'MySQL', 'Application desktop'],
    year: '2025',
    features: [
      'Gestion des emplacements',
      'Création de colis',
      'Suivi des stocks',
      'Interface desktop'
    ],
    demoUrl: '/docs/DocFonctionnelleCarist-SI.pdf',
    demoLabel: 'Documentation'
  },
  {
    id: 3,
    title: 'DeliverEasy',
    description: 'Plateforme d\'optimisation des livraisons pour restaurants.',
    longDescription:
      'Plateforme web optimisant les trajets des livreurs et la gestion des commandes pour les restaurants.',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'MySQL'],
    year: '2024',
    features: [
      'Commande en ligne',
      'Suivi en temps réel',
      'Optimisation des trajets',
      'Gestion des restaurants',
      'Système de notation'
    ],
    demoUrl: '/docs/DocFonctionnelleDeliver.pdf',
    demoLabel: 'Documentation'
  },
  {
    id: 4,
    title: 'Organi\'zeur',
    description: 'Application de gestion d\'événements et de planification.',
    longDescription:
      'Application web permettant d\'organiser son temps efficacement via la gestion d\'événements et la planification.',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'MySQL'],
    year: '2024',
    features: [
      'Création d\'événements',
      'Calendrier interactif',
      'Rappels et notifications',
      'Partage'
    ],
    demoUrl: '/docs/DocFonctionnelleOrganizeur.pdf',
    demoLabel: 'Documentation'
  },
  {
    id: 5,
    title: 'GLPI',
    description: 'Gestion des services informatiques et des actifs IT.',
    longDescription:
      'Application de gestion des services informatiques permettant le suivi des incidents et des actifs IT.',
    technologies: ['GLPI', 'PHP', 'MySQL'],
    year: '2024',
    features: ['Gestion des tickets', 'Suivi des actifs IT', 'Rapports détaillés'],
    demoUrl: '/docs/DocFonctionnelleGLPI.pdf',
    demoLabel: 'Documentation'
  }
]

// Les PDF vivent dans public/ : il faut préfixer par la base Vite ('/Portfolio/'),
// sinon le lien pointe à la racine du domaine en production.
const resolveUrl = (url: string) =>
  url.startsWith('/') ? import.meta.env.BASE_URL.replace(/\/$/, '') + url : url

const filters = ['Tous', '2026', '2025', '2024']
const filter = ref('Tous')
const selectedProject = ref<Project | null>(null)

const filteredProjects = computed(() =>
  filter.value === 'Tous'
    ? projects
    : projects.filter((p) => p.year === filter.value)
)

const openProject = (project: Project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeModal()
}

// Le fond ne doit pas défiler derrière la fiche projet.
watch(selectedProject, (project) => {
  document.body.style.overflow = project ? 'hidden' : ''
  if (project) {
    window.addEventListener('keydown', onKeydown)
  } else {
    window.removeEventListener('keydown', onKeydown)
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="projects">
    <div class="container">
      <header class="page-head">
        <p v-reveal class="eyebrow">Sélection de travaux</p>
        <h1 v-reveal="0.06" class="display page-title">Projets</h1>
        <p v-reveal="0.12" class="lede">
          Applications réalisées durant ma formation et mes expériences en
          entreprise.
        </p>
      </header>

      <div v-reveal class="filters">
        <button
          v-for="option in filters"
          :key="option"
          class="filter"
          :class="{ active: filter === option }"
          @click="filter = option"
        >
          {{ option }}
        </button>
        <span class="filter-count">
          {{ filteredProjects.length }} projet{{ filteredProjects.length > 1 ? 's' : '' }}
        </span>
      </div>

      <ul class="project-list">
        <li
          v-for="(project, i) in filteredProjects"
          :key="project.id"
          v-reveal="0.04 * i"
        >
          <button class="project" @click="openProject(project)">
            <span class="project-index">{{ String(i + 1).padStart(2, '0') }}</span>

            <span class="project-main">
              <span class="project-title">{{ project.title }}</span>
              <span class="project-description">{{ project.description }}</span>
              <span class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tag">
                  {{ tech }}
                </span>
              </span>
            </span>

            <span class="project-year">{{ project.year }}</span>

            <span class="project-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </li>
      </ul>
    </div>

    <!-- Fiche projet -->
    <Transition name="sheet">
      <div v-if="selectedProject" class="overlay" @click.self="closeModal">
        <div class="sheet" role="dialog" aria-modal="true">
          <button class="sheet-close" aria-label="Fermer" @click="closeModal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <p class="sheet-year">{{ selectedProject.year }}</p>
          <h2 class="sheet-title">{{ selectedProject.title }}</h2>
          <p class="sheet-description">{{ selectedProject.longDescription }}</p>

          <div class="sheet-grid">
            <section>
              <h3 class="sheet-label">Technologies</h3>
              <div class="sheet-tags">
                <span v-for="tech in selectedProject.technologies" :key="tech" class="tag">
                  {{ tech }}
                </span>
              </div>
            </section>

            <section>
              <h3 class="sheet-label">Fonctionnalités</h3>
              <ul class="sheet-features">
                <li v-for="feature in selectedProject.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </section>
          </div>

          <a
            v-if="selectedProject.demoUrl"
            :href="resolveUrl(selectedProject.demoUrl)"
            target="_blank"
            rel="noopener"
            class="btn btn-primary sheet-action"
          >
            {{ selectedProject.demoLabel ?? 'En savoir plus' }}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.projects {
  padding: 3.5rem 0 5rem;
  min-height: calc(100vh - 92px);
}

.page-head {
  max-width: var(--measure);
  margin-bottom: 3rem;
}

.page-title {
  margin: 1.25rem 0;
}

/* ---------- Filtres ---------- */
.filters {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1.25rem;
  margin-bottom: 0.5rem;
}

.filter {
  background: none;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.35rem 1rem;
  font-size: 0.85rem;
  color: var(--muted);
  cursor: pointer;
  transition: color 0.3s var(--ease), border-color 0.3s var(--ease),
              background 0.3s var(--ease);
}

.filter:hover {
  color: var(--ink);
  border-color: var(--ink);
}

.filter.active {
  color: var(--paper);
  background: var(--ink);
  border-color: var(--ink);
}

.filter-count {
  margin-left: auto;
  font-size: 0.78rem;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}

/* ---------- Liste de projets ---------- */
.project-list {
  list-style: none;
  border-top: 1px solid var(--line);
}

.project-list > li {
  border-bottom: 1px solid var(--line);
}

.project {
  width: 100%;
  display: grid;
  grid-template-columns: 56px 1fr auto 40px;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0.75rem 2rem 0;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: padding 0.5s var(--ease), background 0.5s var(--ease);
}

.project:hover {
  padding-left: 1rem;
  padding-right: 0.25rem;
  background: linear-gradient(90deg, var(--accent-wash), transparent 65%);
}

.project-index {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}

.project-main {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.project-title {
  font-family: var(--font-display);
  font-size: 1.85rem;
  line-height: 1.15;
  transition: color 0.35s var(--ease);
}

.project:hover .project-title {
  color: var(--accent);
}

.project-description {
  font-size: 0.92rem;
  color: var(--ink-soft);
  max-width: 52ch;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.35rem;
}

.project-year {
  font-size: 0.85rem;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}

.project-arrow {
  display: flex;
  justify-content: flex-end;
  color: var(--muted);
  transition: color 0.35s var(--ease), transform 0.45s var(--ease);
}

.project:hover .project-arrow {
  color: var(--accent);
  transform: translateX(4px);
}

/* ---------- Fiche projet ---------- */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(22, 19, 14, 0.35);
  backdrop-filter: blur(6px);
}

.sheet {
  position: relative;
  width: 100%;
  max-width: 640px;
  max-height: 84vh;
  overflow-y: auto;
  padding: 3rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.sheet-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  display: flex;
  padding: 0.5rem;
  background: none;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: var(--muted);
  cursor: pointer;
  transition: color 0.3s var(--ease), border-color 0.3s var(--ease);
}

.sheet-close:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.sheet-year {
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.sheet-title {
  font-size: clamp(2rem, 5vw, 2.75rem);
  margin-bottom: 1rem;
}

.sheet-description {
  color: var(--ink-soft);
  margin-bottom: 2.25rem;
}

.sheet-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-top: 1.75rem;
  border-top: 1px solid var(--line);
}

.sheet-label {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1rem;
}

.sheet-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.sheet-features {
  list-style: none;
  font-size: 0.92rem;
  color: var(--ink-soft);
}

.sheet-features li {
  padding: 0.35rem 0 0.35rem 1rem;
  position: relative;
}

.sheet-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 1rem;
  width: 5px;
  height: 1px;
  background: var(--accent);
}

.sheet-action {
  margin-top: 2.25rem;
}

/* ---------- Transitions ---------- */
.sheet-enter-active,
.sheet-leave-active {
  transition: opacity 0.35s var(--ease);
}

.sheet-enter-active .sheet,
.sheet-leave-active .sheet {
  transition: transform 0.45s var(--ease), opacity 0.35s var(--ease);
}

.sheet-enter-from,
.sheet-leave-to {
  opacity: 0;
}

.sheet-enter-from .sheet,
.sheet-leave-to .sheet {
  opacity: 0;
  transform: translateY(16px) scale(0.985);
}

/* ---------- Responsive ---------- */
@media (max-width: 860px) {
  .project {
    grid-template-columns: 36px 1fr;
    gap: 1rem;
    padding: 1.5rem 0;
  }

  .project-title {
    font-size: 1.4rem;
  }

  .project-year,
  .project-arrow {
    display: none;
  }

  .project:hover {
    padding-left: 0.5rem;
  }

  .overlay {
    padding: 0;
    align-items: flex-end;
  }

  .sheet {
    max-width: none;
    max-height: 92vh;
    padding: 2.25rem 1.5rem;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  }

  .sheet-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
