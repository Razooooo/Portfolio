<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import AuroraBackground from '@/components/AuroraBackground.vue'

const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const currentTime = ref('')
let timeInterval: number | undefined

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
  { to: '/parcours', label: 'Parcours' }
]

const updateTime = () => {
  currentTime.value = new Date().toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const scrollProgress = ref(0)

const onScroll = () => {
  isScrolled.value = window.scrollY > 12
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = scrollable > 0 ? window.scrollY / scrollable : 0
}

onMounted(() => {
  updateTime()
  timeInterval = window.setInterval(updateTime, 10000)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  clearInterval(timeInterval)
  window.removeEventListener('scroll', onScroll)
})

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="app">
    <AuroraBackground />

    <header class="header" :class="{ compact: isScrolled }">
      <div class="header-inner">
        <RouterLink to="/" class="wordmark" @click="closeMenu">
          Nathan Razafindrakoto
        </RouterLink>

        <nav class="nav">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="nav-link"
            :class="{ active: route.path === link.to }"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <div class="header-aside">
          <span class="clock"><i class="clock-dot"></i>{{ currentTime }}</span>
          <button
            class="menu-toggle"
            :class="{ open: isMenuOpen }"
            :aria-expanded="isMenuOpen"
            aria-label="Menu"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div class="progress" :style="{ transform: `scaleX(${scrollProgress})` }"></div>
    </header>

    <Transition name="drawer">
      <nav v-if="isMenuOpen" class="drawer">
        <RouterLink
          v-for="(link, i) in links"
          :key="link.to"
          :to="link.to"
          class="drawer-link"
          :style="{ transitionDelay: `${0.04 * i}s` }"
          @click="closeMenu"
        >
          <span class="drawer-index">{{ String(i + 1).padStart(2, '0') }}</span>
          {{ link.label }}
        </RouterLink>
      </nav>
    </Transition>

    <main class="main">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="footer-name">Nathan Razafindrakoto</span>
          <span class="footer-role">
            Développeur full stack — alternance septembre 2026
          </span>
        </div>

        <div class="footer-links">
          <a href="https://github.com/Razooooo" target="_blank" rel="noopener">GitHub</a>
          <a href="https://linkedin.com/in/nathan-razafindrakoto" target="_blank" rel="noopener">LinkedIn</a>
        </div>

        <span class="footer-year">© {{ new Date().getFullYear() }}</span>
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
  z-index: 1;
}

/* ---------- En-tête ---------- */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.4s var(--ease), border-color 0.4s var(--ease),
              backdrop-filter 0.4s var(--ease);
  border-bottom: 1px solid transparent;
}

.header.compact {
  background: rgba(247, 244, 239, 0.72);
  backdrop-filter: blur(14px) saturate(1.2);
  border-bottom-color: var(--line-soft);
}

.header-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  transition: padding 0.4s var(--ease);
}

.header.compact .header-inner {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* Fine ligne de progression de lecture. */
.progress {
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 1.5px;
  width: 100%;
  background: var(--accent);
  transform-origin: left;
  transform: scaleX(0);
  opacity: 0;
  transition: opacity 0.4s var(--ease);
}

.header.compact .progress {
  opacity: 1;
}

.wordmark {
  font-family: var(--font-display);
  font-size: 1.2rem;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  position: relative;
  font-size: 0.9rem;
  color: var(--muted);
  padding: 0.2rem 0;
  transition: color 0.3s var(--ease);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 1px;
  width: 100%;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.45s var(--ease);
}

.nav-link:hover {
  color: var(--ink);
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-link.active {
  color: var(--ink);
}

.nav-link.active::after {
  background: var(--accent);
  transform: scaleX(1);
}

.header-aside {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.clock {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.clock-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.7;
}

/* ---------- Menu mobile ---------- */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 34px;
  height: 34px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--ink);
  transition: transform 0.4s var(--ease), opacity 0.3s var(--ease);
}

.menu-toggle.open span:nth-child(1) {
  transform: translateY(3.75px) rotate(45deg);
}

.menu-toggle.open span:nth-child(2) {
  transform: translateY(-3.75px) rotate(-45deg);
}

.drawer {
  position: fixed;
  top: 68px;
  left: 0;
  right: 0;
  z-index: 99;
  background: rgba(247, 244, 239, 0.97);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
  padding: 1rem 1.25rem 1.75rem;
}

.drawer-link {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  font-family: var(--font-display);
  font-size: 1.9rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--line-soft);
}

.drawer-link:last-child {
  border-bottom: none;
}

.drawer-index {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: var(--accent);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.35s var(--ease), transform 0.35s var(--ease);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* ---------- Transitions de page ---------- */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s var(--ease), transform 0.35s var(--ease);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* ---------- Contenu ---------- */
.main {
  flex: 1;
  padding-top: 92px;
  position: relative;
  z-index: 1;
}

/* ---------- Pied de page ---------- */
.footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--line);
  margin-top: 4rem;
}

.footer-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-brand {
  display: flex;
  flex-direction: column;
}

.footer-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
}

.footer-role {
  font-size: 0.8rem;
  color: var(--muted);
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  font-size: 0.875rem;
}

.footer-links a {
  color: var(--ink-soft);
  border-bottom: 1px solid var(--line);
  padding-bottom: 2px;
  transition: color 0.3s var(--ease), border-color 0.3s var(--ease);
}

.footer-links a:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.footer-year {
  font-size: 0.78rem;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}

/* ---------- Responsive ---------- */
@media (max-width: 860px) {
  .nav { display: none; }
  .menu-toggle { display: flex; }
  .header-inner { padding: 1.1rem 1.25rem; }
  .main { padding-top: 76px; }
}

@media (max-width: 560px) {
  .clock { display: none; }
  .wordmark { font-size: 1.05rem; }
  .footer-inner { flex-direction: column; align-items: flex-start; }
}
</style>
