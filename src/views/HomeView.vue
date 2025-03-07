<template>
  <div class="home">
    <!-- Section Présentation -->
    <section class="presentation">
      <div
        class="profile-container reveal-on-scroll reveal-bottom"
        style="
          display: flex !important;
          flex-direction: row !important;
          text-align: left !important;
        "
      >
        <div class="profile-image reveal-on-scroll reveal-left reveal-delay-1">
          <img src="/images/profile.jpg.webp" alt="Photo de profil" />
        </div>
        <div class="profile-text">
          <h1 class="reveal-on-scroll reveal-right reveal-delay-1">Nathan Razafindrakoto</h1>
          <h2 class="reveal-on-scroll reveal-right reveal-delay-2">Étudiant en BTS SIO</h2>
          <p class="bio reveal-on-scroll reveal-right reveal-delay-3">
            Passionné par le développement web et mobile, ainsi que par la cybersécurité et
            l’intelligence artificielle, je mets mes compétences au service de la création
            d’applications innovantes, sécurisées et performantes.
          </p>

          <p class="bio reveal-on-scroll reveal-right reveal-delay-3">
            Toujours en quête de perfectionnement, j’explore les dernières technologies pour
            concevoir des solutions modernes adaptées aux besoins des utilisateurs. Après deux
            années de formation en BTS Services Informatiques aux Organisations, j’aspire à
            approfondir mes connaissances et à relever de nouveaux défis dans ces domaines en
            constante évolution.
          </p>

          <p class="bio reveal-on-scroll reveal-right reveal-delay-3">
            À travers cette page, je partage mes réalisations issues de mes études et de mes
            expériences professionnelles. Mon objectif est d’échanger avec d’autres passionnés,
            d’apprendre continuellement et de contribuer à des projets ambitieux dans le monde du
            numérique.
          </p>

          <div
            class="social-links reveal-on-scroll reveal-bottom reveal-delay-4"
            style="justify-content: flex-start !important"
          >
            <a href="https://github.com/Razooooo" target="_blank" class="social-link">
              <span class="icon">📦</span> GitHub
            </a>
            <a href="https://linkedin.com/in/votre-profile" target="_blank" class="social-link">
              <span class="icon">💼</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Compétences -->
    <section class="skills">
      <h2 class="section-title reveal-on-scroll reveal-bottom">Mes Compétences</h2>

      <!-- Conteneurs des catégories de compétences -->
      <div class="skill-categories">
        <div
          v-for="(category, index) in skillCategories"
          :key="category.title"
          class="skill-category-container reveal-on-scroll reveal-bottom"
          :class="`reveal-delay-${(index % 5) + 1}`"
        >
          <h3>{{ category.title }}</h3>

          <!-- Grille des compétences individuelles -->
          <div class="skills-items-grid">
            <div
              v-for="(skill, skillIndex) in category.skills"
              :key="skill.name"
              class="skill-box reveal-on-scroll reveal-scale"
              :class="`reveal-delay-${(skillIndex % 5) + 1}`"
            >
              <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Projets -->
    <section class="projects">
      <h2 class="section-title reveal-on-scroll reveal-bottom">Mes Projets</h2>
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
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card reveal-on-scroll reveal-bottom"
          :class="`reveal-delay-${(index % 5) + 1}`"
          :style="{
            width: '100% !important',
            maxWidth: 'none !important',
          }"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="tech-stack">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div
              class="project-links"
              style="display: flex !important; flex-direction: row !important"
            >
              <a :href="project.documentationUrl" target="_blank" class="doc-link">
                <span class="icon">📄</span>
                Doc
              </a>
              <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="demo-link">
                <span class="icon">🔗</span>
                Démo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

// Initialisation de l'animation au défilement
useScrollReveal()

interface SkillItem {
  name: string
  icon: string
}

interface SkillCategory {
  title: string
  skills: SkillItem[]
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  documentationUrl: string
  demoUrl?: string
}

const skillCategories = ref<SkillCategory[]>([
  {
    title: 'Frontend',
    skills: [
      {
        name: 'HTML5',
        icon: './images/html5.png',
      },
      {
        name: 'CSS3',
        icon: './images/css3.png',
      },
      {
        name: 'TypeScript',
        icon: './images/ts.png',
      },
      {
        name: 'JavaScript',
        icon: './images/js.png',
      },
      {
        name: 'Kotlin',
        icon: './images/kotlin.png',
      },
      {
        name: 'Vue.js',
        icon: './images/vue.png',
      },
      {
        name: 'React',
        icon: './images/react.png',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node.js',
        icon: './images/nodejs.png',
      },
      {
        name: 'PHP',
        icon: './images/php.png',
      },
      {
        name: 'SQL / MySQL',
        icon: './images/mysql-logo.svg',
      },
    ],
  },
  {
    title: 'Outils & Méthodes',
    skills: [
      {
        name: 'Git / GitHub',
        icon: './images/github.png',
      },
      {
        name: 'VS Code',
        icon: './images/vscode.png',
      },
      {
        name: 'Linux',
        icon: './images/linux.png',
      },
      {
        name: 'IntelliJ Idea',
        icon: './images/IntelliJ_IDEA_logo_01.png',
      },
    ],
  },
])

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'NurseCare',
    description:
      "Application de gestion pour cabinet d'infirmiers permettant le suivi des patients et la planification des tournées.",
    image: './images/nursecare.png',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'Node.js'],
    documentationUrl: '/docs/Livrable NurseCare.pdf',
    demoUrl: '/docs/DocTechniqueNurseCare.docx.pdf',
  },
  {
    id: 2,
    title: 'DeliverEasy',
    description:
      'Application de livraison optimisant les trajets des livreurs et la gestion de ceux-ci.',
    image: './images/delivereasy.png',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'Node.js'],
    documentationUrl: '/docs/Livrable projet Deliver.pdf',
    demoUrl: '/docs/DocTechniqueDeliver.pdf',
  },
  {
    id: 3,
    title: "Organi'zeur",
    description:
      "Application de gestion d'événements et de planification permettant aux utilisateurs d'organiser leur temps efficacement",
    image: './images/logoOrganizeur.avif',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'Node.js'],
    documentationUrl: '/docs/Livrable Organizeur.pdf',
    demoUrl: '/docs/DocTechniqueDeliver.pdf',
  },
])
</script>

<style scoped>
@import '@/assets/css/scrollReveal.css';

.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  font-weight: 700; /* Applique une police grasse à tout le contenu */
}

.presentation {
  margin-bottom: 3rem;
}

.profile-container {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
}

.profile-image {
  flex-shrink: 0;
}

.profile-image img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease;
}

.profile-image img:hover {
  transform: scale(1.05) rotate(3deg);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.profile-text {
  flex: 1;
}

.profile-text h1 {
  font-size: 2.5rem;
  color: rgb(0, 0, 0);
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 900; /* Police ultra-grasse */
}

.profile-text h2 {
  font-size: 1.5rem;
  color: #000000;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 800; /* Police très grasse */
}

.bio {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgb(0, 0, 0);
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  font-weight: 700; /* Police grasse */
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  color: white;
  background-color: rgba(44, 62, 80, 0.7); /* Fond semi-transparent comme le header */
  backdrop-filter: blur(5px); /* Effet de flou similaire au header */
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-weight: 800;
  border: 1px solid rgba(255, 255, 255, 0.1); /* Bordure subtile */
}

.social-link:hover {
  background-color: rgba(52, 73, 94, 0.8);
  transform: translateY(-3px);
  border-color: #41b883; /* Bordure verte au survol */
}

.social-link::after {
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

.social-link:active::after {
  animation: ripple 1s ease-out;
}

.section-title {
  font-size: 2.2rem;
  color: white;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 900; /* Police ultra-grasse */
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

.skills {
  margin-bottom: 5rem;
  padding: 2rem;
  background-color: transparent;
  border-radius: 12px;
  box-shadow: none;
}

/* Nouveau style pour les conteneurs de catégories de compétences */
.skill-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
}

.skill-category-container {
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border-left: 4px solid #41b883;
  backdrop-filter: blur(5px);
}

.skill-category-container:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.skill-category-container h3 {
  color: white;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  text-align: left;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 800; /* Police très grasse */
}

/* Grille pour les boîtes de compétences individuelles */
.skills-items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

.skill-box {
  background: rgba(0, 0, 0, 0.3);
  padding: 0.8rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-box:hover {
  transform: translateY(-5px);
  background: rgba(65, 184, 131, 0.2);
  border-color: #41b883;
}

.skill-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.skill-box:hover .skill-icon {
  transform: scale(1.2);
}

.skill-name {
  color: white;
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 700; /* Police grasse */
}

.projects {
  margin-bottom: 4rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

.project-card {
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  height: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 100%;
  backdrop-filter: blur(5px);
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-color: #41b883;
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  font-size: 1.25rem;
  color: white;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  font-weight: 800; /* Police très grasse */
}

.project-card:hover .project-title {
  color: #41b883;
}

.project-description {
  flex-grow: 1;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 700; /* Police grasse */
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  font-weight: 700; /* Police grasse */
}

.project-card:hover .tech-tag {
  background-color: rgba(65, 184, 131, 0.3);
  color: white;
}

.project-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
}

.doc-link,
.demo-link {
  text-decoration: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  text-align: center;
  flex: 1;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  min-width: 80px;
  font-weight: 800; /* Police très grasse */
}

.doc-link {
  background-color: #2c3e50;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.demo-link {
  color: white;
  border: 1px solid white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.doc-link:hover {
  background-color: #41b883;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(65, 184, 131, 0.3);
}

.demo-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
  border-color: #41b883;
  color: #41b883;
}

@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
    text-align: center;
  }

  .profile-image img {
    width: 150px;
    height: 150px;
  }

  .profile-text h1 {
    font-size: 2rem;
  }

  .profile-text h2 {
    font-size: 1.2rem;
  }

  .social-links {
    justify-content: center;
  }

  .skills-items-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .home,
  .projects {
    width: 100%;
  }

  .section {
    margin-bottom: 3rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-links {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .doc-link,
  .demo-link {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 480px) {
  .skills-items-grid {
    grid-template-columns: 1fr;
  }

  .skill-box {
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    padding: 0.6rem;
  }

  .skill-icon {
    margin-bottom: 0;
    margin-right: 0.8rem;
    width: 24px;
    height: 24px;
  }
}
</style>
