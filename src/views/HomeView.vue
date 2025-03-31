<template>
  <div class="home">
    <!-- Section Présentation -->
    <section class="presentation">
      <h2 class="section-title reveal-on-scroll reveal-bottom">À Propos de Moi</h2>
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
            l'intelligence artificielle, je mets mes compétences au service de la création
            d'applications innovantes, sécurisées et performantes.
          </p>

          <p class="bio reveal-on-scroll reveal-right reveal-delay-3">
            Après deux années de formation en BTS Services Informatiques aux Organisations, j'aspire à
            approfondir mes connaissances et à relever de nouveaux défis dans ces domaines en
            constante évolution.
          </p>

          <p class="bio reveal-on-scroll reveal-right reveal-delay-3">
            À travers cette page, je partage mes réalisations issues de mes études et de mes
            expériences professionnelles.
          </p>

          <div
            class="social-links reveal-on-scroll reveal-bottom reveal-delay-4"
            style="justify-content: flex-start !important"
          >
            <a href="https://github.com/Razooooo" target="_blank" class="social-link">
              <span class="icon">📦</span> GitHub
            </a>
            <a href="https://linkedin.com/in/nathan-razafindrakoto" target="_blank" class="social-link">
              <span class="icon">💼</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Importation du composant Timeline -->
    <Timeline />

    <!-- Section Compétences -->
    <section class="skills">
      <h2 class="section-title reveal-on-scroll reveal-bottom">Mes Compétences</h2>

      <!-- Conteneurs des catégories de compétences -->
      <div class="skill-categories">
        <div
          v-for="(category, index) in skillCategories"
          :key="category.title"
          class="skill-category-container reveal-on-scroll reveal-bottom"
          :class="`reveal-delay-${(index % 5) + 1}
</style>`"
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

    <!-- Section Épreuve E5 -->
    <section class="e5-section">
      <h2 class="section-title reveal-on-scroll reveal-bottom">Épreuve E6</h2>
      
      <div class="e5-container">
        <div class="e5-text reveal-on-scroll reveal-left">
          <h3>Présentation de l'Épreuve E6</h3>
          <p>
            L'épreuve E6 du BTS SIO est une épreuve professionnelle qui évalue les compétences
            acquises en situation réelle. Elle consiste à présenter des projets développés durant
            la formation qui démontrent mes capacités à concevoir et réaliser des applications web et mobile
          </p>
          <p>
            Ces projets illustrent ma maîtrise des technologies, des méthodes de développement
            et ma capacité à répondre aux besoins des utilisateurs. Et pour cela j'ai choisi NurseCare et Carist-Si
          </p>
        </div>
        
        <div class="e5-carousel reveal-on-scroll reveal-right">
          <div class="carousel-container">
            <div class="carousel-track">
              <div v-for="project in e5Projects" :key="project.id" class="carousel-card">
                <div class="carousel-header">
                  <div class="image-container">
                    <img :src="project.image" :alt="project.title" class="carousel-logo" />
                  </div>
                  <h4>{{ project.title }}</h4>
                </div>
                <div class="carousel-desc">
                  <p>{{ project.description }}</p>
                </div>
                <div class="carousel-tech">
                  <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                  </span>
                </div>
                <div class="carousel-footer">
                  <a :href="project.documentationUrl" target="_blank" class="e5-doc-link">
                    <span class="icon">📄</span> Documentation
                  </a>
                  <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="e5-doc-link">
                    <span class="icon">🔗</span> Demo
                  </a>
                  <div class="nav-buttons">
                    <button @click.stop="prevSlide" class="nav-btn prev-btn">
                      <span class="arrow">&#10094;</span>
                    </button>
                    <button @click.stop="nextSlide" class="nav-btn next-btn">
                      <span class="arrow">&#10095;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Épreuve E4 - À ajouter après la section Épreuve E5 -->
<section class="e4-section">
  <h2 class="section-title reveal-on-scroll reveal-bottom">Épreuve E5</h2>
  
  <div class="e4-container">
    <div class="e4-content reveal-on-scroll reveal-bottom">
      <h3>Présentation de l'Épreuve E5</h3>
      <p>
        Cette épreuve met en avant mon parcours de professionnalisation et la mise en pratique 
        des connaissances acquises durant ma formation.
      </p>
      
      <div class="e4-buttons">
        <a href="./docs/E4- Tableau de synthèse Nathan.pdf" target="_blank" class="e4-button excel-button">
          <span class="button-icon">📊</span>
          <span class="button-text">Tableau de Synthèse E5</span>
        </a>
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import Timeline from '@/components/TimeLine.vue'  // Import du composant Timeline

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
        name: 'MySQL',
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
      {
        name: 'Postman',
        icon: './images/postman.png',
      },
      {
        name: 'Docker',
        icon: './images/docker',
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
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'MySQL'],
    documentationUrl: './docs/Livrable NurseCare.pdf',
    demoUrl: './docs/DocTechniqueNurseCare.docx.pdf',
  },
  {
    id: 2,
    title: 'DeliverEasy',
    description:
      'Application de livraison optimisant les trajets des livreurs et la gestion de ceux-ci.',
    image: './images/delivereasy.png',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'MySQL'],
    documentationUrl: './docs/Livrable projet Deliver.pdf',
    demoUrl: './docs/DocTechniqueDeliver.pdf',
  },
  {
    id: 3,
    title: "Organi'zeur",
    description:
      "Application de gestion d'événements et de planification permettant aux utilisateurs d'organiser leur temps efficacement",
    image: './images/logoOrganizeur.avif',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'MySQL'],
    documentationUrl: './docs/Livrable Organizeur.pdf',
    demoUrl: './docs/DocTechniqueDeliver.pdf',
  },
  {
    id: 4,
    title: "GLPI",
    description:
      "Application de gestion des services informatiques permettant aux utilisateurs de suivre les incidents",
    image: './images/glpi.png',
    technologies: ['GLPI'],
    documentationUrl: '',
    demoUrl: '',
  },
  {
    id: 5,
    title: "Carist-Si",
    description:
      "Une application mobile de gestion des stocks et des emplacements de colis permettant aux caristes de gérer efficacement l'entrepôt.",
    image: './images/carist.png',
    technologies: ['Kotlin', 'Application mobile'],
    documentationUrl: './docs/',
    demoUrl: './docs/',
  },
])

// Projets pour l'épreuve E5
const e5Projects = ref<Project[]>([
  {
    id: 101,
    title: "Projet E6 - NurseCare",
    description: "Application de gestion pour cabinet d'infirmiers permettant le suivi des patients et la planification des tournées",
    image: './images/nursecare.png',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'MySQL'],
    documentationUrl: './docs/Livrable NurseCare.pdf',
    demoUrl: './docs/DocTechniqueNurseCare.docx.pdf',
  },
  {
    id: 102,
    title: "Projet E6 - Carist-Si",
    description: "Une application mobile de gestion des stocks et des emplacements de colis permettant aux caristes de gérer efficacement l'entrepôt.",
    image: './images/carist.png',
    technologies: ['Kotlin', 'Application mobile'],
    documentationUrl: './docs/',
    demoUrl: './docs/',
  }
])

// Variables et fonctions pour le carrousel
const currentSlide = ref(0)
const slidesCount = computed(() => e5Projects.value.length)

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slidesCount.value
  updateCarousel()
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slidesCount.value) % slidesCount.value
  updateCarousel()
}

function updateCarousel() {
  const track = document.querySelector('.carousel-track') as HTMLElement
  if (track) {
    const slideWidth = document.querySelector('.carousel-card')?.clientWidth || 0
    track.style.transform = `translateX(-${currentSlide.value * slideWidth}px)`
  }
}

// Initialiser le carrousel après le montage du composant
onMounted(() => {
  updateCarousel()
  
  // Auto-rotation du carrousel toutes les 5 secondes
  const autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
  
  // Nettoyer l'intervalle lors de la destruction du composant
  onUnmounted(() => {
    clearInterval(autoplayInterval)
  })
  
  // Recalculer les positions lors du redimensionnement de la fenêtre
  window.addEventListener('resize', updateCarousel)
  onUnmounted(() => {
    window.removeEventListener('resize', updateCarousel)
  })
})
</script>

<style scoped>
@import '@/assets/css/scrollReveal.css';

.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  font-weight: 700; /* Applique une police grasse à tout le contenu */
  box-sizing: border-box;
}

.presentation {
  margin-bottom: 3rem;
  width: 100%;
}

.profile-container {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
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

/* Correction des sections compétences et projets */
.skills {
  margin: 0 auto 5rem auto;
  padding: 2rem 1rem;
  background-color: transparent;
  border-radius: 12px;
  box-shadow: none;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
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
  width: 100%;
  box-sizing: border-box;
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

/* Correction des projets */
.projects {
  margin: 0 auto 4rem auto;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
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
  width: 100%;
  max-width: 100%;
  backdrop-filter: blur(5px);
  box-sizing: border-box;
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

/* Styles pour la section Épreuve E5 */
.e5-section {
  margin: 0 auto 5rem auto;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
}

.e5-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: stretch; /* Change pour aligner verticalement */
}

.e5-text,
.e5-carousel {
  flex: 1 1 calc(50% - 1rem); /* Chaque élément prend exactement la moitié de l'espace moins la moitié du gap */
  min-width: 300px;
  display: flex;
  flex-direction: column;
}

.e5-text {
  flex: 1;
  min-width: 300px;
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border-left: 4px solid #41b883;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.e5-text:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.e5-text h3 {
  color: white;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 800;
}

.e5-text p {
  color: white;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 700;
}

.e5-carousel {
  flex: 1;
  min-width: 300px;
}

/* DÉBUT DES CORRECTIONS POUR LE CAROUSEL */
/* Ajustement du conteneur du carrousel */
.carousel-container {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(68, 163, 211, 0.7), rgba(20, 40, 60, 0.9));
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
}

/* Assurer que le carrousel ne déborde pas */
.carousel-track {
  display: flex;
  transition: transform 0.5s ease-out;
  width: 100%;
  flex: 1;
}

.carousel-card {
  min-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
}

.carousel-header {
  padding: 1.5rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

/* Conteneur d'image à taille fixe */
.image-container {
  width: 100%;
  height: 200px; /* Hauteur fixe pour tous les conteneurs */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  overflow: hidden; /* Empêche les images de déborder */
}

.carousel-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* L'image s'adapte au conteneur sans déformation */
}

.carousel-header h4 {
  font-size: 1.8rem;
  color: #ffffff;
  margin: 0.5rem 0;
  text-align: center;
  font-weight: 800;
}

/* Améliorer l'utilisation de l'espace dans les sections du carrousel */
.carousel-desc {
  padding: 1rem 1rem 0.5rem 1rem; /* Réduire le padding vertical */
  flex-grow: 1;
}

.carousel-desc p {
  color: white;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 600;
}

.carousel-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem 1rem 1rem;
}

.carousel-tech .tech-tag {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
}

/* CORRECTION DU FOOTER DU CAROUSEL */
.carousel-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-bottom: 0; /* Assurer qu'il n'y a pas de marge en bas */
  position: relative; /* Pour assurer un positionnement correct */
  width: 100%;
  box-sizing: border-box; /* Garantir que le padding est inclus dans la largeur */
}

.e5-doc-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #00574B;
  transition: all 0.3s ease;
  font-weight: 700;
  font-size: 1rem;
}

.e5-doc-link:hover {
  background-color: #00574B;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.nav-buttons {
  display: flex;
  gap: 0.5rem;
}

/* Améliorer la navigation sur écrans tactiles */
.nav-btn {
  min-width: 36px; /* Assurer une taille minimale pour le tactile */
  min-height: 36px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 87, 75, 0.7);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background-color: #00574B;
  transform: scale(1.1);
}

.nav-btn .arrow {
  font-size: 1.2rem;
  font-weight: bold;
}
/* FIN DES CORRECTIONS POUR LE CAROUSEL */

/* Styles modifiés pour la section Épreuve E4 avec un seul bouton centré */
.e4-section {
  margin: 0 auto 5rem auto;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
}

.e4-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.e4-content {
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border-left: 4px solid #41b883;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 800px;
}

.e4-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.e4-content h3 {
  color: white;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 800;
}

.e4-content p {
  color: white;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 700;
}

.e4-buttons {
  display: flex;
  justify-content: center; /* Centre le bouton horizontalement */
  margin-top: 2rem;
}

.e4-button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.excel-button {
  background-color: #1F7244;
  color: white;
  border: 2px solid #1F7244;
}

.excel-button:hover {
  background-color: #2A9157;
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(42, 145, 87, 0.3);
}

.pdf-button {
  background-color: #D14836;
  color: white;
  border: 2px solid #D14836;
}

.pdf-button:hover {
  background-color: #E45A48;
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(228, 90, 72, 0.3);
}

.button-icon {
  font-size: 1.3rem;
}

/* Media queries améliorées */
@media (min-width: 1025px) {
  .projects-grid,
  .skill-categories {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .projects-grid,
  .skill-categories {
    grid-template-columns: repeat(2, 1fr) !important;
  }
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
  
  .skills,
  .projects,
  .e5-section {
    padding: 1rem;
    width: 100%;
  }
  
  .skill-categories,
  .projects-grid {
    grid-template-columns: 1fr !important;
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
  
  .e5-container {
    flex-direction: column;
  }
  
  .e5-text, .e5-carousel {
    width: 100%;
  }
  
  .carousel-header h4 {
    font-size: 1.5rem;
  }
  
  .carousel-desc p {
    font-size: 1rem;
  }
  
  .e5-doc-link {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .e4-content {
    padding: 1.5rem;
  }
  
  .e4-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .e4-button {
    width: auto; /* Au lieu de 100% pour permettre un centrage naturel */
    min-width: 200px; /* Donne une largeur minimale pour la lisibilité */
    justify-content: center;
  }
}

/* CORRECTIONS POUR LE CAROUSEL SUR MOBILE */
@media (max-width: 480px) {
  .skills,
  .projects,
  .e5-section {
    padding: 0.5rem;
  }
  
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
  
  .project-links {
    flex-direction: column;
  }
  
  .doc-link,
  .demo-link {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  
  .carousel-header {
    padding: 0.75rem; /* Réduction du padding */
  }
  
  .image-container {
    height: 120px; /* Hauteur réduite pour mobile */
    margin-bottom: 0.5rem; /* Marge réduite */
  }
  
  .carousel-header h4 {
    font-size: 1.1rem; /* Texte plus petit sur mobile */
    margin: 0.25rem 0; /* Marges réduites */
  }
  
  .carousel-desc, .carousel-tech {
    padding: 0.75rem; /* Réduction du padding */
  }
  
  .carousel-desc p {
    font-size: 0.9rem; /* Texte plus petit */
    line-height: 1.4; /* Interligne réduit */
  }
  
  .carousel-tech .tech-tag {
    padding: 0.25rem 0.5rem; /* Tags plus petits */
    font-size: 0.8rem;
  }
  
  /* CORRECTION DU FOOTER DU CAROUSEL SUR MOBILE */
  .carousel-footer {
    padding: 0.75rem;
    flex-wrap: wrap; /* Permettre le retour à la ligne */
    gap: 0.5rem;
    flex-direction: row; /* Maintenir horizontal quand possible */
    justify-content: space-between;
    position: relative; /* Important pour le positionnement mobile */
    bottom: 0; /* Ancrer au bas du conteneur */
  }
  
  .nav-buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 0; /* Supprimer la marge supérieure */
    justify-content: center;
    width: auto;
  }
  
  .e5-doc-link {
    flex: 0 1 auto; /* Ne pas prendre tout l'espace disponible */
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    text-align: center;
    justify-content: center;
  }
  
  .nav-buttons {
    margin-top: 0; /* Espacement si les boutons passent à la ligne */
    width: auto; /* Prendre toute la largeur si nécessaire */
    justify-content: center; /* Centrer les boutons de navigation */
  }
  
  .nav-btn {
    width: 35px;
    height: 35px;
  }
  
  .e4-content {
    padding: 1rem;
  }
  
  .e4-content h3 {
    font-size: 1.4rem;
  }
  
  .e4-content p {
    font-size: 1rem;
  }
  
  .e4-button {
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    min-width: 180px;
  }
}

/* Ajustements pour les téléphones très petits */
@media (max-width: 360px) {
  .image-container {
    height: 100px; /* Encore plus petit sur très petits écrans */
  }
  
  /* CORRECTION SPÉCIALE POUR LES TRÈS PETITS ÉCRANS */
  .carousel-footer {
    flex-direction: column; /* Empiler les éléments */
    padding-bottom: 0.75rem; /* Assurer un padding en bas */
  }
  
  .e5-doc-link {
    width: 100%; /* Largeur complète */
    margin-bottom: 0.4rem;
  }
  
  .nav-buttons {
    width: 100%;
    justify-content: center;
    margin-top: 0.4rem;
  }
  
  .carousel-header h4 {
    font-size: 1rem; /* Taille de police encore plus petite */
  }
  
  .carousel-desc p {
    font-size: 0.85rem; /* Texte encore plus petit */
  }
  
  .tech-tag {
    font-size: 0.75rem; /* Tags encore plus petits */
    padding: 0.2rem 0.4rem;
  }
  
  .nav-btn {
    width: 32px;
    height: 32px;
  }
  
  .section-title {
    font-size: 1.8rem; /* Titre de section plus petit */
    margin-bottom: 1.5rem;
  }
  
  .e4-button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    min-width: 160px;
  }
}
</style>