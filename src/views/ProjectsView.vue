<template>
  <div class="projects">
    <div class="projects-header">
      <h1>Mes Projets</h1>
      <p class="subtitle">Découvrez mes réalisations en BTS SIO</p>
    </div>

    <div class="projects-grid">
      <article v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
        </div>

        <div class="project-content">
          <header class="project-header">
            <h2 class="project-title">{{ project.title }}</h2>
            <p class="project-date">{{ project.date }}</p>
          </header>

          <p class="project-description">{{ project.description }}</p>

          <div class="project-details">
            <h3>Fonctionnalités principales :</h3>
            <ul class="features-list">
              <li v-for="feature in project.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="tech-stack">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>

          <footer class="project-actions">
            <a :href="project.documentationUrl" download class="btn btn-primary">
              <span class="icon">📄</span>
              Documentation
            </a>

            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              class="btn btn-secondary"
            >
              <span class="icon">🔗</span>
              Démo
            </a>
          </footer>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  id: number
  title: string
  date: string
  description: string
  image: string
  features: string[]
  technologies: string[]
  documentationUrl: string
  demoUrl?: string
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'NurseCare',
    date: '2025',
    description:
      "Application de gestion pour cabinet d'infirmiers permettant le suivi des patients et la planification des tournées.",
    image: '/images/nursecare.png',
    features: [
      'Gestion des dossiers patients',
      'Planification des tournées',
      'Suivi des traitements',
      'Interface responsive',
      'Système de notifications',
    ],
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'MySQL'],
    documentationUrl: '/docs/documentation-nursecare.pdf',
    demoUrl: 'https://nursecare-demo.com',
  },
  {
    id: 2,
    title: 'DeliverEasy',
    date: '2024',
    description:
      'Plateforme de livraison de repas optimisant les trajets des livreurs et la gestion des commandes.',
    image: '/images/delivereasy.png',
    features: [
      'Commande en ligne',
      'Suivi en temps réel',
      'Optimisation des trajets',
      'Gestion des restaurants',
      'Système de notation',
    ],
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io'],
    documentationUrl: '/docs/documentation-delivereasy.pdf',
    demoUrl: 'https://delivereasy-demo.com',
  },
])
</script>

<style scoped>
.projects {
  padding: 2rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
}

.projects-header {
  margin-bottom: 2rem;
}

.project-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.project-content {
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1a2634;
}

.project-description {
  margin-bottom: 0.75rem;
  color: #4a4a4a;
}

.project-details {
  margin: 0.75rem 0;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background-color: #e9ecef;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #2d3436;
}

.project-actions {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  flex: 1;
  text-align: center;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.projects-header h1 {
  color: #1a2634;
}

.subtitle {
  color: #4a4a4a;
}

.project-date {
  color: #2d3436;
}

.project-details h3 {
  color: #1a2634;
  margin-bottom: 0.5rem;
}

.features-list li {
  color: #4a4a4a;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
