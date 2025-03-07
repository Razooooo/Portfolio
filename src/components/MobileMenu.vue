<template>
    <div class="mobile-menu">
      <button 
        class="hamburger-button" 
        :class="{ 'is-active': isMenuOpen }" 
        @click="toggleMenu"
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <transition name="menu">
        <div v-if="isMenuOpen" class="menu-overlay" @click="closeMenu">
          <div class="menu-content" @click.stop>
            <div class="menu-header">
              <div class="logo">Portfolio</div>
              <button class="close-button" @click="closeMenu" aria-label="Fermer">
                ✕
              </button>
            </div>
            <div class="menu-links">
              <RouterLink to="/" class="menu-link" @click="closeMenu">
                <span class="menu-icon">🏠</span>
                Accueil
              </RouterLink>
              <RouterLink to="/projets" class="menu-link" @click="closeMenu">
                <span class="menu-icon">📂</span>
                Projets
              </RouterLink>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'
  
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    
    // Empêcher le défilement du body quand le menu est ouvert
    if (isMenuOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
  
  const closeMenu = () => {
    isMenuOpen.value = false
    document.body.style.overflow = ''
  }
  </script>
  
  <style scoped>
 .mobile-menu {
  display: block;
}
  
.hamburger-button {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 15px; /* Éloigner du bord gauche */
  z-index: 1100;
}
  
  .hamburger-button span {
    width: 100%;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  .hamburger-button.is-active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .hamburger-button.is-active span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger-button.is-active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    backdrop-filter: blur(5px);
  }
  
  .menu-content {
  background-color: #192734; /* Fond complètement opaque au lieu de rgba avec transparence */
  height: 100%;
  width: 85%;
  max-width: 320px;
  padding: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.close-button {
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
  
.menu-links {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
}
  
.menu-link {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 15px 20px;
  font-size: 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  letter-spacing: 1px;
  font-weight: 700;
  background-color: #192734; /* Fond opaque pour chaque élément du menu */
}

.menu-icon {
  margin-right: 12px;
  font-size: 1.3rem;
}

.menu-link:hover, .menu-link.router-link-active {
  background-color: #2a5b47; /* Fond opaque au survol, plus foncé que la couleur principale */
  color: #41b883;
}
  
  .menu-link:hover {
    color: #41b883;
    transform: translateX(5px);
  }
  
  /* Animation */
  .menu-enter-active, .menu-leave-active {
    transition: all 0.3s ease;
  }
  
  .menu-enter-from, .menu-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
  
  /* Media queries */
  @media (max-width: 768px) {
    .mobile-menu {
      display: block;
    }
  }
  </style>