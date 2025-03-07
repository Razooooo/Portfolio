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
            <div class="menu-links">
              <RouterLink to="/" class="menu-link" @click="closeMenu">Accueil</RouterLink>
              <RouterLink to="/projets" class="menu-link" @click="closeMenu">Projets</RouterLink>
              <!-- Ajouter d'autres liens de menu si nécessaire -->
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
    display: none; /* Masqué par défaut, visible uniquement sur mobile */
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
    background-color: rgba(44, 62, 80, 0.95);
    height: 100%;
    max-width: 300px;
    width: 80%;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .menu-links {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }
  
  .menu-link {
    color: white;
    text-decoration: none;
    padding: 1rem 0;
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
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