<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  year: string
  features: string[]
  image: string
  color: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    id: 6,
    title: 'Mistral Automotive',
    description: 'Site Vitrine',
    longDescription: 'Site vitrine d\'un revendeur de pièce automobile à Madagascar.',
    technologies: ['Vue.js'],
    year: '2025',
    features: ['Filtre', 'Contact'],
    image: '🌐',
    color: '#3b82f6',
  },
  {
    id: 1,
    title: 'NurseCare',
    description: 'Application de gestion pour cabinet d\'infirmiers',
    longDescription: 'Application complète permettant le suivi des patients et la planification des tournées pour un cabinet d\'infirmiers.',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'MySQL'],
    year: '2025',
    features: ['Dossiers patients', 'Planification tournées', 'Suivi traitements', 'Génération PDF', 'Interface responsive'],
    image: '🏥',
    color: '#00ff88',
    demoUrl: '/docs/DocFonctionnelleNurseCare.pdf'
  },
  {
    id: 2,
    title: 'Carist-Si',
    description: 'Application de gestion des stocks en entrepôt',
    longDescription: 'Application lourde permettant la gestion des stocks et des emplacements de colis dans un entrepôt logistique.',
    technologies: ['Kotlin', 'MySQL', 'Desktop App'],
    year: '2025',
    features: ['Gestion emplacements', 'Création colis', 'Suivi stocks', 'Interface desktop'],
    image: '📦',
    color: '#00d4ff',
    demoUrl: '/docs/DocFonctionnelleCarist-SI.pdf'
  },
  {
    id: 3,
    title: 'DeliverEasy',
    description: 'Application d\'optimisation des livraisons',
    longDescription: 'Plateforme web optimisant les trajets des livreurs et la gestion des commandes pour les restaurants.',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'MySQL'],
    year: '2024',
    features: ['Commande en ligne', 'Suivi temps réel', 'Optimisation trajets', 'Gestion restaurants', 'Système de notation'],
    image: '🚴',
    color: '#a855f7',
    demoUrl: '/docs/DocFonctionnelleDeliver.pdf'
  },
  {
    id: 4,
    title: 'Organi\'zeur',
    description: 'Application de gestion d\'événements',
    longDescription: 'Application web permettant d\'organiser son temps efficacement via la gestion d\'événements et la planification.',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'MySQL'],
    year: '2024',
    features: ['Création événements', 'Calendrier interactif', 'Rappels & notifications', 'Partage'],
    image: '📅',
    color: '#ff6b6b',
    demoUrl: '/docs/DocFonctionnelleOrganizeur.pdf'
  },
  {
    id: 5,
    title: 'GLPI',
    description: 'Gestion des services informatiques',
    longDescription: 'Application de gestion des services informatiques permettant le suivi des incidents et des actifs IT.',
    technologies: ['GLPI', 'PHP', 'MySQL'],
    year: '2024',
    features: ['Gestion tickets', 'Suivi actifs IT', 'Rapports détaillés'],
    image: '🎫',
    color: '#ffd93d',
    demoUrl: '/docs/DocFonctionnelleGLPI.pdf'
  },
]

const selectedProject = ref<Project | null>(null)
const filter = ref('all')

const filteredProjects = computed(() => {
  if (filter.value === 'all') return projects
  return projects.filter(p => p.year === filter.value)
})

const openProject = (project: Project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}
</script>

<template>
  <div class="projects-page">
    <div class="container">
      <!-- Header -->
      <header class="page-header">
        <h1 class="page-title">
          <span class="title-bracket">{</span>
          Mes Projets
          <span class="title-bracket">}</span>
        </h1>
        <p class="page-subtitle">
          <span class="code-comment">// </span>
          Une sélection de projets réalisés durant mes études et expériences
        </p>
      </header>

      <!-- Filters -->
      <div class="filters">
        <button
          class="filter-btn"
          :class="{ active: filter === 'all' }"
          @click="filter = 'all'"
        >
          <span class="filter-icon">*</span> Tous
        </button>
        <button
          class="filter-btn"
          :class="{ active: filter === '2025' }"
          @click="filter = '2025'"
        >
          <span class="filter-icon">#</span> 2025
        </button>
        <button
          class="filter-btn"
          :class="{ active: filter === '2024' }"
          @click="filter = '2024'"
        >
          <span class="filter-icon">#</span> 2024
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
          :style="{ '--project-color': project.color }"
          @click="openProject(project)"
        >
          <div class="project-image">
            <span class="project-emoji">{{ project.image }}</span>
          </div>

          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <span class="project-year">{{ project.year }}</span>
            </div>

            <p class="project-description">{{ project.description }}</p>

            <div class="project-tech">
              <span
                v-for="tech in project.technologies.slice(0, 3)"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
              <span v-if="project.technologies.length > 3" class="tech-more">
                +{{ project.technologies.length - 3 }}
              </span>
            </div>

            <div class="project-footer">
              <span class="view-more">
                Voir détails
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>

          <div class="project-glow"></div>
        </article>
      </div>

    </div>

    <!-- Modal -->
    <Transition name="modal">
      <div v-if="selectedProject" class="modal-overlay" @click.self="closeModal">
        <div class="modal" :style="{ '--project-color': selectedProject.color }">
          <button class="modal-close" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <div class="modal-header">
            <span class="modal-emoji">{{ selectedProject.image }}</span>
            <div>
              <h2 class="modal-title">{{ selectedProject.title }}</h2>
              <span class="modal-year">{{ selectedProject.year }}</span>
            </div>
          </div>

          <p class="modal-description">{{ selectedProject.longDescription }}</p>

          <div class="modal-section">
            <h4 class="modal-section-title">
              <span class="section-icon">&lt;/&gt;</span>
              Technologies
            </h4>
            <div class="modal-tech">
              <span v-for="tech in selectedProject.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="modal-section">
            <h4 class="modal-section-title">
              <span class="section-icon">✓</span>
              Fonctionnalités
            </h4>
            <ul class="modal-features">
              <li v-for="feature in selectedProject.features" :key="feature">
                <span class="feature-bullet">→</span>
                {{ feature }}
              </li>
            </ul>
          </div>

          <div v-if="selectedProject.demoUrl" class="modal-actions">
            <a :href="selectedProject.demoUrl" target="_blank" class="btn-demo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              Voir la démo
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.projects-page {
  padding: 2rem 0 4rem;
  min-height: calc(100vh - 90px);
}

/* Header */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-family: var(--font-mono);
  margin-bottom: 1rem;
}

.title-bracket {
  color: var(--accent);
}

.page-subtitle {
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.code-comment {
  color: var(--accent);
  opacity: 0.6;
}

/* Filters */
.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.filter-btn {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  padding: 0.6rem 1.2rem;
  background: var(--bg-secondary);
  color: var(--text-muted);
  border: 1px solid rgba(0, 255, 136, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: rgba(0, 255, 136, 0.3);
  color: var(--text);
}

.filter-btn.active {
  background: rgba(0, 255, 136, 0.1);
  border-color: var(--accent);
  color: var(--accent);
}

.filter-icon {
  color: var(--accent);
  margin-right: 0.3rem;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.project-card {
  position: relative;
  background: var(--bg-secondary);
  border: 1px solid rgba(0, 255, 136, 0.1);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
}

.project-card:hover {
  border-color: var(--project-color);
  transform: translateY(-8px);
}

.project-card:hover .project-glow {
  opacity: 1;
}

.project-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, var(--project-color), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 0;
}

.project-image {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%);
  position: relative;
  z-index: 1;
}

.project-emoji {
  font-size: 4rem;
  filter: drop-shadow(0 0 20px var(--project-color));
}

.project-content {
  padding: 1.5rem;
  position: relative;
  z-index: 1;
}

.project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.project-title {
  font-size: 1.3rem;
  font-family: var(--font-mono);
}

.project-year {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--project-color);
  padding: 0.2rem 0.6rem;
  background: rgba(0, 255, 136, 0.1);
  border-radius: 4px;
}

.project-description {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  background: rgba(0, 255, 136, 0.1);
  color: var(--accent);
  border-radius: 4px;
  border: 1px solid rgba(0, 255, 136, 0.2);
}

.tech-more {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

.project-footer {
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 255, 136, 0.1);
}

.view-more {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--project-color);
  transition: gap 0.3s ease;
}

.project-card:hover .view-more {
  gap: 1rem;
}

/* Terminal decoration */
.terminal-decoration {
  max-width: 500px;
  margin: 0 auto;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 2rem;
}

.modal {
  position: relative;
  background: var(--bg-secondary);
  border: 1px solid var(--project-color);
  border-radius: 20px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 0 60px rgba(0, 255, 136, 0.1);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--text-muted);
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(255, 107, 107, 0.2);
  color: #ff6b6b;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.modal-emoji {
  font-size: 4rem;
}

.modal-title {
  font-size: 1.8rem;
  font-family: var(--font-mono);
  margin-bottom: 0.3rem;
}

.modal-year {
  font-family: var(--font-mono);
  color: var(--project-color);
}

.modal-description {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.modal-section {
  margin-bottom: 1.5rem;
}

.modal-section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--project-color);
}

.section-icon {
  opacity: 0.7;
}

.modal-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.modal-features {
  list-style: none;
}

.modal-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.feature-bullet {
  color: var(--project-color);
  font-family: var(--font-mono);
}

.modal-actions {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 255, 136, 0.1);
}

.btn-demo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, var(--project-color), rgba(0, 212, 255, 0.8));
  color: var(--bg);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-demo:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: scale(0.9);
}

/* Terminal styles */
.terminal-body .prompt {
  color: var(--accent);
  margin-right: 0.5rem;
}

.terminal-body .output {
  color: var(--text-muted);
  margin: 0.3rem 0;
  padding-left: 1rem;
}

.blink-cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 1.8rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .filters {
    flex-wrap: wrap;
  }

  .modal {
    padding: 1.5rem;
  }

  .modal-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>
