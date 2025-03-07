<template>
  <div class="app">
    <!-- Fond d'écran aquatique -->
    <WaterBackground />

    <nav class="navbar">
      <div class="container">
        <div class="logo">Portfolio</div>
        <!-- Menu navigation visible seulement sur desktop -->
        <div class="nav-links desktop-only">
          <RouterLink to="/" class="nav-link">Accueil</RouterLink>
          <RouterLink to="/projets" class="nav-link">Projets</RouterLink>
        </div>
        <!-- Menu hamburger visible seulement sur mobile -->
        <MobileMenu class="mobile-only" />
      </div>
    </nav>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref, watch, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import WaterBackground from './components/WaterBackground.vue'
import MobileMenu from './components/MobileMenu.vue'

const route = useRoute()
const router = useRouter()
const isRouteChanging = ref(false)

// Gestion de la transition de page
watch(
  () => route.path,
  () => {
    isRouteChanging.value = true

    // Remonter en haut de la page lors du changement de route
    nextTick(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })

    setTimeout(() => {
      isRouteChanging.value = false
    }, 500)
  },
)

// Solution alternative: utiliser le hook de navigation de Vue Router
onMounted(() => {
  router.afterEach((to, from) => {
    // Vérifier si la route a changé
    if (to.path !== from.path) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  })
})
</script>

<style>
/* Importation des polices de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700;800;900&display=swap');

/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  margin: 0;
  padding: 0;
  min-height: 100%;
  overflow-x: hidden;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  background-color: transparent;
  color: white;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* Force l'application à prendre toute la largeur */
#app,
.app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  background-color: transparent !important;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}

/* Loader pour les transitions de page */
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(to right, #41b883, #34495e);
  z-index: 9999;
  transition: width 0.5s ease-out;
}

.page-loader.is-active {
  width: 100%;
}

/* Animation de transition entre pages */
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Navbar */
.navbar {
  background-color: rgba(44, 62, 80, 0.8);
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  animation: slideDown 0.5s ease-out forwards;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.logo {
  color: white;
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  margin-right: auto;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

.logo::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #41b883;
  transition: width 0.4s ease;
}

.logo:hover::after {
  width: 100%;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #41b883;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.nav-link:hover::after,
.router-link-active::after {
  transform: translateX(0);
}

.nav-link:hover,
.router-link-active {
  background-color: rgba(52, 73, 94, 0.8);
  transform: translateY(-2px);
}

.main-content {
  flex: 1;
  padding-top: 5rem;
  width: 100%;
  max-width: 100%;
  position: relative;
  z-index: 1;
  background-color: transparent !important;
}

/* Ajout de styles pour améliorer la lisibilité du contenu sur le fond animé */
.home,
.projects {
  background-color: transparent;
  border-radius: 12px;
  box-shadow: none;
  margin: 0 auto;
  padding: 2rem;
}

/* Style pour les boutons et liens */
.social-link,
.doc-link,
.demo-link,
button {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Style pour les étiquettes de technologies */
.tech-tag {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

/* Classes utilitaires pour responsive */
.desktop-only {
  display: flex;
}

.desktop-nav {
  display: flex; /* Visible par défaut sur desktop */
}

.mobile-only {
  display: none;
}

/* Reste des styles inchangés... */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

/* Style pour le nom */
.name-title {
  text-align: left;
  margin-bottom: 1rem;
}

.name-title h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 0.25rem;
}

.name-title h2 {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 1rem;
}

.project-card {
  background-color: rgba(0, 0, 0, 0.2) !important;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Media queries */
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  
  .desktop-nav {
    display: none; /* Masqué sur mobile */
  }
  
  .mobile-only {
    display: block;
  }
  
  .navbar .container {
    padding: 0 1rem;
    height: auto;
    min-height: 60px;
  }
  
  .logo {
    font-size: 2rem;
    margin: 0.5rem 0;
  }
  
  .main-content {
    padding-top: 4.5rem;
  }
  
  .home,
  .projects {
    padding: 1rem;
  }
  
  .profile-container {
    flex-direction: column !important;
    text-align: center !important;
    gap: 1rem;
  }
  
  .social-links {
    justify-content: center !important;
  }
  
  .skills-grid,
  .projects-grid {
    grid-template-columns: 1fr !important;
  }
  
  .project-links,
  .project-actions {
    flex-direction: column !important;
    gap: 0.5rem;
  }
  
  .name-title h1 {
    font-size: 2rem;
  }
  
  .name-title h2 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .logo {
    font-size: 1.8rem;
  }
  
  .main-content {
    padding-top: 4rem;
  }
  
  .home,
  .projects {
    padding: 0.5rem;
  }
  
  .social-link, 
  .doc-link, 
  .demo-link, 
  button {
    width: 100%;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
  
  .project-image {
    height: auto;
    aspect-ratio: 16/9;
  }
  
  .tech-stack {
    justify-content: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .projects-grid,
  .skills-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (min-width: 1025px) {
  .projects-grid,
  .skills-grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>