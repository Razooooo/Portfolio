<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <!-- Section Présentation -->
    <section class="presentation">
      <div class="profile-container">
        <div class="profile-image">
          <img src="/images/profile.jpg.webp" alt="Photo de profil" />
        </div>
        <div class="profile-text">
          <h1>Nathan Razafindrakoto</h1>
          <h2>Étudiant en BTS SIO</h2>
          <p class="bio">
            Passionné par le développement web et mobile, ainsi que par la Cybersécurité et l'IA, je
            crée des applications modernes et performantes en utilisant les dernières technologies.
            Après 2 années en BTS SIO, je souhaite continuer de développer mes compétences dans le
            domaine du développement.
          </p>
          <div class="social-links">
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
      <h2 class="section-title">Mes Compétences</h2>
      <div class="skills-grid">
        <div v-for="category in skillCategories" :key="category.title" class="skill-category">
          <h3>{{ category.title }}</h3>
          <ul>
            <li v-for="skill in category.skills" :key="skill.name">
              <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
              {{ skill.name }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Section Projets -->
    <section class="projects">
      <h2 class="section-title">Mes Projets</h2>
      <div class="projects-grid">
        <article v-for="project in projects" :key="project.id" class="project-card">
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
            <div class="project-links">
              <a :href="project.documentationUrl" download class="doc-link">
                <span class="icon">📄</span>
                Documentation
              </a>
              <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="demo-link">
                Voir la démo
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
        name: 'HTML5 / CSS3',
        icon: 'public/images/hmtl.png',
      },
      {
        name: 'JavaScript / TypeScript',
        icon: 'public/images/javascript.png',
      },
      {
        name: 'Kotlin',
        icon: '/images/kotlin.png',
      },
      {
        name: 'Vue.js',
        icon: '/images/vue.png',
      },
      {
        name: 'React',
        icon: '/images/react.png',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node.js',
        icon: 'public/images/nodejs.png',
      },
      {
        name: 'PHP',
        icon: '/images/php.png',
      },
      {
        name: 'SQL / MySQL',
        icon: 'public/images/sql.png',
      },
    ],
  },
  {
    title: 'Outils & Méthodes',
    skills: [
      {
        name: 'Git / GitHub',
        icon: '/images/github.png',
      },
      {
        name: 'VS Code',
        icon: '/images/vscode.png',
      },
      {
        name: 'Linux',
        icon: '/images/linux.png',
      },
      {
        name: 'IntelliJ Idea',
        icon: '/images/IntelliJ.png',
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
    image: '/images/nursecare.png',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'Node.js'],
    documentationUrl: 'public/docs/Livrable NurseCare.pdf',
    demoUrl: 'public/docs/DocTechniqueNurseCare.docx.pdf',
  },
  {
    id: 2,
    title: 'DeliverEasy',
    description:
      'Plateforme de livraison de repas optimisant les trajets des livreurs et la gestion des commandes.',
    image: '/images/delivereasy.png',
    technologies: ['Vue.js', 'TypeScript', 'Express.js', 'Node.js'],
    documentationUrl: 'public/docs/DocNurseCare.docx.pdf',
    demoUrl: 'https://delivereasy-demo.com',
  },
])
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.presentation {
  margin-bottom: 4rem;
}

.profile-container {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.profile-image {
  flex-shrink: 0;
}

.profile-image img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-text {
  flex: 1;
}

.profile-text h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.profile-text h2 {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 1rem;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1.5rem;
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
  background-color: #2c3e50;
  transition: background-color 0.3s;
}

.social-link:hover {
  background-color: #34495e;
}

.section-title {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.skills {
  margin-bottom: 4rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  color: #2c3e50;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  text-align: center;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  padding: 0.75rem 0;
  color: #444;
  display: flex;
  align-items: center;
}

.skill-icon {
  width: 20px;
  height: 20px;
  margin-right: 0.75rem;
  vertical-align: middle;
}

.projects {
  margin-bottom: 4rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: scale(1.02);
}

.project-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 0.75rem;
}

.project-description {
  flex-grow: 1;
  margin-bottom: 1rem;
  color: #666;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background-color: #f0f0f0;
  color: #2c3e50;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.doc-link,
.demo-link {
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.doc-link {
  background-color: #2c3e50;
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.demo-link {
  color: #2c3e50;
  border: 1px solid #2c3e50;
}

.doc-link:hover {
  background-color: #34495e;
}

.demo-link:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .skills-grid {
    grid-template-columns: 1fr;
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

  .section-title {
    text-align: center;
    margin-bottom: 2rem;
    color: #2c3e50;
  }
}
</style>
