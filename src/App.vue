// src/App.vue
<template>
  <div class="app">
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
      <div class="container">
        <RouterView />
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} Portfolio BTS SIO</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;
}

.navbar,
.footer {
  background-color: #2c3e50;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(10vw + 50%);
}

.navbar {
  padding: 0rem 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0%; /* Ajout de padding à gauche */
}

.logo {
  color: white;
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  margin-right: auto;
  letter-spacing: 1px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  display: flex;
  gap: 2rem;
}

.nav-link:hover,
.router-link-active {
  background-color: #34495e;
}

.main-content {
  flex: 1;
  padding-top: 5rem;
  width: 100%;
}

.footer {
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin-top: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .main-content {
    padding-top: 4rem;
  }
}
</style>
