<template>
  <div class="app">
    <!-- Fond d'écran aquatique -->
    <WaterBackground />

    <nav class="navbar">
      <div class="container">
        <div class="logo">Portfolio</div>
        <div class="nav-links">
          <RouterLink to="/" class="nav-link">Accueil</RouterLink>
          <RouterLink to="/projets" class="nav-link">Projets</RouterLink>
        </div>
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
        behavior: 'smooth', // 'auto' pour un défilement instantané, 'smooth' pour une animation
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
  width: 100% !important;
  min-width: 100% !important;
  max-width: 100vw !important;
  margin: 0 !important;
  padding: 0 !important;
  min-height: 100%;
  overflow-x: hidden !important;
  font-family: 'Montserrat', Arial, sans-serif; /* Police principale */
  font-weight: 700; /* Encore plus gras: passé de 600 à 700 */
  background-color: transparent;
  color: white;
  scroll-behavior: smooth; /* Permet un défilement doux global */
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Raleway', sans-serif;
  font-weight: 900; /* Poids de police augmenté de 800 à 900 */
  letter-spacing: 0.5px; /* Espacement légèrement augmenté */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Ombre pour renforcer la visibilité */
}

p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700; /* Augmenté de 600 à 700 */
  line-height: 1.6;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); /* Ombre ajoutée pour meilleure lisibilité */
}

/* Force l'application à prendre toute la largeur */
#app,
.app {
  width: 100% !important;
  min-height: 100vh !important;
  max-width: 100vw !important;
  display: flex !important;
  flex-direction: column !important;
  position: relative;
  overflow-x: hidden;
  min-width: 100%;
  background-color: transparent !important;
}
.container {
  width: 100% !important;
  max-width: 1200px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding: 0 2rem !important;
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
  width: 100vw !important;
  margin: 0 !important;
  padding: 1rem 0 !important;
  left: 1 !important;
  right: 1 !important;
  box-sizing: border-box !important;
  margin-left: 10 !important;
  margin-right: 10 !important;
  backdrop-filter: blur(10px);
}

.navbar {
  padding: 0.5rem 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw !important;
  animation: slideDown 0.5s ease-out forwards;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 60px;
}

.logo {
  color: white;
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: 900; /* Ultra-bold pour le logo */
  margin-right: auto;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5); /* Ombre renforcée pour le logo */
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

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  gap: 2rem;
  position: relative;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
  font-weight: 800; /* Augmenté de 700 à 800 */
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); /* Ombre ajoutée */
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
  width: 100vw !important;
  max-width: 100% !important;
  padding-right: 0 !important;
  padding-left: 0 !important;
  box-sizing: border-box !important;
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
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
  font-weight: 800; /* Passé de 700 à 800 */
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5); /* Ombre ajoutée */
}

/* Style pour les étiquettes de technologies */
.tech-tag {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800; /* Passé de 700 à 800 */
  letter-spacing: 0.3px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4); /* Ombre ajoutée */
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
  max-width: none !important;
  width: 100% !important;
  background-color: rgba(0, 0, 0, 0.2) !important;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Forcer un layout non-mobile sur tous les éléments */
.profile-container,
.projects-grid,
.skills-grid,
.project-links,
.project-actions {
  width: 100% !important;
}

/* Media queries */
@media (max-width: 768px) {
  .main-content {
    padding-top: 4rem;
  }

  .profile-container {
    flex-direction: column;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .skills-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-links,
  .project-actions {
    flex-direction: column;
  }
}

@media (min-width: 768px) {
  .profile-container {
    flex-direction: row !important;
    text-align: left !important;
  }

  .social-links {
    justify-content: flex-start !important;
  }

  .project-links,
  .project-actions {
    flex-direction: row !important;
  }
}

@media (min-width: 992px) {
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .projects-grid,
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 2rem;
  }

  .profile-container {
    display: flex;
    flex-direction: row !important;
    gap: 3rem;
    align-items: center;
    text-align: left !important;
  }

  .profile-image {
    flex: 0 0 auto;
  }

  .profile-text {
    flex: 1;
    padding-right: 2rem;
  }

  .project-links,
  .project-actions {
    flex-direction: row !important;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
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
