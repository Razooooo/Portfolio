<template>
  <div class="projects">
    <div class="projects-header">
      <h2 class="section-title reveal-on-scroll reveal-bottom">Mes Projets</h2>
      <p class="subtitle reveal-on-scroll reveal-bottom reveal-delay-1">Découvrez mes réalisations en BTS SIO</p>
    </div>

    <div
      class="projects-grid"
      style="
        display: grid !important;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
        gap: 1.5rem !important;
        width: 100% !important;
      "
    >
      <article
        v-for="project in projects"
        :key="project.id"
        class="project-card reveal-on-scroll"
        :class="project.id % 2 === 0 ? 'reveal-right' : 'reveal-left'"
        :style="{
          width: '100% !important',
          maxWidth: 'none !important',
        }"
      >
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
        </div>

        <div class="project-content">
          <header class="project-header reveal-on-scroll reveal-bottom reveal-delay-1">
            <h2 class="project-title">{{ project.title }}</h2>
            <p class="project-date">{{ project.date }}</p>
          </header>

          <p class="project-description reveal-on-scroll reveal-bottom reveal-delay-2">
            {{ project.description }}
          </p>

          <div class="project-details reveal-on-scroll reveal-bottom reveal-delay-3">
            <h3>Fonctionnalités principales :</h3>
            <ul class="features-list">
              <li
                v-for="(feature, index) in project.features"
                :key="feature"
                class="reveal-on-scroll reveal-left"
                :class="`reveal-delay-${(index % 5) + 1}`"
              >
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="tech-stack reveal-on-scroll reveal-bottom reveal-delay-4">
            <span
              v-for="(tech, index) in project.technologies"
              :key="tech"
              class="tech-tag reveal-on-scroll reveal-scale"
              :class="`reveal-delay-${(index % 5) + 1}`"
            >
              {{ tech }}
            </span>
          </div>

          <footer
            class="project-actions reveal-on-scroll reveal-bottom reveal-delay-5"
            style="display: flex !important; flex-direction: row !important"
          >
            <a :href="project.documentationUrl" target="_blank" class="btn btn-primary">
              <span class="icon">📄</span>
              Doc
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
import { useScrollReveal } from '@/composables/useScrollReveal'

// Initialisation de l'animation au défilement
useScrollReveal()

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
    image: './images/nursecare.png',
    features: [
      'Gestion des dossiers patients',
      'Planification des tournées',
      'Suivi des traitements',
      'Interface responsive',
      'Système de notifications',
    ],
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'MySQL'],
    documentationUrl: './docs/Livrable NurseCare.pdf',
    demoUrl: './docs/DocTechniqueNurseCare.docx.pdf',
  },
  {
    id: 2,
    title: 'DeliverEasy',
    date: '2024',
    description:
      'Application de livraison optimisant les trajets des livreurs et la gestion de ceux-ci.',
    image: './images/delivereasy.png',
    features: [
      'Commande en ligne',
      'Suivi en temps réel',
      'Optimisation des trajets',
      'Gestion des restaurants',
      'Système de notation',
    ],
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'MySQL'],
    documentationUrl: './docs/Livrable projet Deliver.pdf',
    demoUrl: './docs/DocTechniqueDeliver.pdf',
  },
  {
    id: 3,
    title: "Organi'zeur",
    date: '2024',
    description:
      "Application de gestion d'événements et de planification permettant aux utilisateurs d'organiser leur temps efficacement.",
    image: './images/logoOrganizeur.avif',
    features: [
      "Création et gestion d'événements",
      'Calendrier interactif',
      'Rappels et notifications',
      "Partage d'événements",
      'Synchronisation multi-appareils',
    ],
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'MySQL'],
    documentationUrl: './docs/Livrable Organizeur.pdf',
    demoUrl: './docs/DocTechniqueOrganizeur.pdf',
  },
])
</script>

<style scoped>
@import '@/assets/css/scrollReveal.css';

.projects {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  font-weight: 700;
  box-sizing: border-box;
}

.projects-header {
  margin-bottom: 2.5rem;
  text-align: center;
}

.section-title {
  font-size: 2.2rem;
  color: white;
  text-align: center;
  margin-bottom: 0.5rem;
  position: relative;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 900;
}

.section-title::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background-color: #41b883;
  margin: 0.5rem auto 0;
  transition: width 0.4s ease;
}

.section-title:hover::after {
  width: 150px;
}

.subtitle {
  color: white;
  font-size: 1.2rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  font-weight: 700;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

.project-card {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.4s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-color: #41b883;
}

.project-image {
  height: 180px;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.project-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(44, 62, 80, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-image::after {
  opacity: 1;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.4rem;
  color: white;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  font-weight: 800;
}

.project-card:hover .project-title {
  color: #41b883;
}

.project-date {
  color: #f0f0f0;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  font-weight: 600;
}

.project-description {
  margin-bottom: 0.75rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 700;
}

.project-details {
  margin: 0.75rem 0;
}

.project-details h3 {
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 700;
}

.features-list {
  padding-left: 1.5rem;
}

.features-list li {
  color: white;
  margin-bottom: 0.25rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 600;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: white;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  font-weight: 700;
}

.project-card:hover .tech-tag {
  background-color: rgba(65, 184, 131, 0.3);
}

.project-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
}

.btn {
  padding: 0.6rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 800;
  flex: 1;
  text-align: center;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  min-width: 100px;
  position: relative;
  overflow: hidden;
}

.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  100% {
    transform: scale(30, 30);
    opacity: 0;
  }
}

.btn:active::after {
  animation: ripple 1s ease-out;
}

.btn-primary {
  background-color: #2c3e50;
  color: white;
}

.btn-primary:hover {
  background-color: #41b883;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(65, 184, 131, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #41b883;
  border-color: #41b883;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.1);
}

/* Media queries */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr !important;
  }

  .project-actions {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .btn {
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .project-content {
    padding: 1rem;
  }
  
  .project-title {
    font-size: 1.3rem;
  }
  
  .project-details h3 {
    font-size: 1.1rem;
  }
}
</style>