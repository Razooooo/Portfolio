<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const isLoaded = ref(false)
const currentTime = ref('')

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

onMounted(() => {
  isLoaded.value = true
  updateTime()
  setInterval(updateTime, 1000)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="app" :class="{ loaded: isLoaded }">
    <!-- Animated background -->
    <div class="bg-grid"></div>
    <div class="bg-glow"></div>

    <!-- Floating particles -->
    <div class="particles">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>

    <!-- Terminal-style header -->
    <header class="header">
      <div class="header-content">
        <RouterLink to="/" class="logo" @click="closeMenu">
          <span class="logo-text">Portfolio Nathan</span>
        </RouterLink>

        <nav class="nav-desktop">
          <RouterLink to="/" class="nav-link" :class="{ active: route.path === '/' }">
            <span class="nav-prefix">~/</span>accueil
          </RouterLink>
          <RouterLink to="/projets" class="nav-link" :class="{ active: route.path === '/projets' }">
            <span class="nav-prefix">~/</span>projets
          </RouterLink>
          <RouterLink to="/parcours" class="nav-link" :class="{ active: route.path === '/parcours' }">
            <span class="nav-prefix">~/</span>parcours
          </RouterLink>
        </nav>

        <div class="header-right">
          <span class="status-bar">
            <span class="status-dot"></span>
            <span class="status-text">{{ currentTime }}</span>
          </span>

          <button class="menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile menu -->
    <Transition name="slide">
      <nav v-if="isMenuOpen" class="nav-mobile">
        <RouterLink to="/" class="nav-link-mobile" @click="closeMenu">
          <span class="cmd-prompt">$</span> cd ~/accueil
        </RouterLink>
        <RouterLink to="/projets" class="nav-link-mobile" @click="closeMenu">
          <span class="cmd-prompt">$</span> cd ~/projets
        </RouterLink>
        <RouterLink to="/parcours" class="nav-link-mobile" @click="closeMenu">
          <span class="cmd-prompt">$</span> cd ~/parcours
        </RouterLink>
      </nav>
    </Transition>

    <!-- Main content -->
    <main class="main">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <span class="footer-text">
          <span class="code-comment">// </span>
          Built with Vue.js & passion
        </span>
        <span class="footer-text">
          <span class="code-comment">// </span>
          {{ new Date().getFullYear() }} Nathan Razafindrakoto
        </span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.app.loaded {
  opacity: 1;
}

/* Animated background */
.bg-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
}

.bg-glow {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 30% 20%, rgba(0, 255, 136, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(0, 212, 255, 0.08) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
  animation: glowMove 20s ease-in-out infinite;
}

@keyframes glowMove {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(5%, 5%); }
}

/* Floating particles */
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(0, 255, 136, 0.3);
  border-radius: 50%;
  animation: floatUp 15s linear infinite;
}

.particle:nth-child(1) {
  left: 10%;
  animation-delay: 0s;
  animation-duration: 18s;
}

.particle:nth-child(2) {
  left: 25%;
  animation-delay: 2s;
  animation-duration: 20s;
  width: 3px;
  height: 3px;
  background: rgba(0, 212, 255, 0.25);
}

.particle:nth-child(3) {
  left: 40%;
  animation-delay: 4s;
  animation-duration: 16s;
}

.particle:nth-child(4) {
  left: 55%;
  animation-delay: 1s;
  animation-duration: 22s;
  width: 5px;
  height: 5px;
  background: rgba(0, 255, 136, 0.2);
}

.particle:nth-child(5) {
  left: 70%;
  animation-delay: 3s;
  animation-duration: 17s;
  width: 3px;
  height: 3px;
  background: rgba(0, 212, 255, 0.3);
}

.particle:nth-child(6) {
  left: 85%;
  animation-delay: 5s;
  animation-duration: 19s;
}

.particle:nth-child(7) {
  left: 15%;
  animation-delay: 7s;
  animation-duration: 21s;
  width: 2px;
  height: 2px;
  background: rgba(0, 212, 255, 0.2);
}

.particle:nth-child(8) {
  left: 60%;
  animation-delay: 6s;
  animation-duration: 23s;
  width: 3px;
  height: 3px;
}

@keyframes floatUp {
  0% {
    transform: translateY(100vh) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(20px);
    opacity: 0;
  }
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(20px);
  background: rgba(10, 10, 15, 0.8);
  border-bottom: 1px solid rgba(0, 255, 136, 0.1);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0;
}

.logo-bracket {
  color: var(--accent);
}

.logo-text {
  color: var(--text);
}

.logo-slash {
  color: var(--accent-secondary);
}

.nav-desktop {
  display: flex;
  gap: 2rem;
}

.nav-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  color: var(--text-muted);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--text);
  background: rgba(0, 255, 136, 0.1);
}

.nav-link.active {
  color: var(--accent);
}

.nav-link.active::after {
  content: '_';
  animation: blink 1s step-end infinite;
}

.nav-prefix {
  color: var(--accent-secondary);
  opacity: 0.7;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.status-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--text-muted);
  padding: 0.4rem 0.8rem;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.1);
  border-radius: 20px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.4); }
  50% { opacity: 0.8; box-shadow: 0 0 0 8px rgba(0, 255, 136, 0); }
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 2px;
  background: var(--text);
  transition: all 0.3s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile nav */
.nav-mobile {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(20px);
  padding: 1rem;
  z-index: 99;
  border-bottom: 1px solid rgba(0, 255, 136, 0.1);
}

.nav-link-mobile {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  color: var(--text-muted);
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-link-mobile:hover {
  color: var(--text);
  background: rgba(0, 255, 136, 0.1);
}

.cmd-prompt {
  color: var(--accent);
  margin-right: 0.5rem;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Main */
.main {
  flex: 1;
  padding-top: 90px;
  position: relative;
  z-index: 1;
}

/* Footer */
.footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(0, 255, 136, 0.1);
  background: rgba(10, 10, 15, 0.5);
  backdrop-filter: blur(10px);
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.code-comment {
  color: var(--accent);
  opacity: 0.6;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .status-bar {
    display: none;
  }

  .header-content {
    padding: 1rem;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
