<script setup lang="ts">
import { ref, onMounted } from 'vue'

const fullText = 'Nathan Razafindrakoto'
const hasSeenAnimation = sessionStorage.getItem('homeAnimationSeen') === 'true'

const typedText = ref(hasSeenAnimation ? fullText : '')
const isTypingDone = ref(hasSeenAnimation)
const showContent = ref(hasSeenAnimation)

const skills = {
  frontend: ['HTML5', 'CSS3', 'TypeScript', 'JavaScript', 'Java', 'Kotlin', 'Vue.js'],
  backend: ['Node.js', 'Express.js', 'PHP', 'MySQL'],
  tools: ['Git', 'VS Code', 'Linux', 'IntelliJ IDEA', 'Postman', 'Docker']
}

const stats = [
  { value: '5+', label: 'Projets réalisés' },
  { value: '2+', label: 'Années d\'études' },
  { value: '∞', label: 'Lignes de code' }
]

onMounted(() => {
  if (hasSeenAnimation) return

  let i = 0
  const typeWriter = () => {
    if (i < fullText.length) {
      typedText.value += fullText.charAt(i)
      i++
      setTimeout(typeWriter, 80)
    } else {
      isTypingDone.value = true
      setTimeout(() => {
        showContent.value = true
        sessionStorage.setItem('homeAnimationSeen', 'true')
      }, 300)
    }
  }
  setTimeout(typeWriter, 500)
})
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-name">"{{ typedText }}"</span>
          <span class="cursor" :class="{ 'blink': isTypingDone }">|</span>
        </h1>

        <div class="hero-terminal" v-show="showContent">
          <div class="terminal">
            <div class="terminal-header">
              <span class="terminal-dot red"></span>
              <span class="terminal-dot yellow"></span>
              <span class="terminal-dot green"></span>
              <span class="terminal-title">about.sh</span>
            </div>
            <div class="terminal-body">
              <p><span class="prompt">$</span> cat about.txt</p>
              <p class="output">
                > Étudiant en <span class="highlight">Bachelor Systèmes d'Information</span><br>
                > Passionné par le <span class="highlight-alt">développement web/mobile</span>,<br>
                &nbsp;&nbsp;la <span class="highlight-alt">cybersécurité</span> et l'<span class="highlight-alt">IA</span><br>
                > Je crée des applications <span class="highlight">innovantes</span>,<br>
                &nbsp;&nbsp;<span class="highlight">sécurisées</span> et <span class="highlight">performantes</span>
              </p>
              <p><span class="prompt">$</span> <span class="blink-cursor">_</span></p>
            </div>
          </div>
        </div>

        <div class="hero-actions" v-show="showContent">
          <a href="https://github.com/Razooooo" target="_blank" class="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="https://linkedin.com/in/nathan-razafindrakoto" target="_blank" class="btn btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <div class="hero-visual" v-show="showContent">
        <div class="profile-image-container">
          <img src="@/assets/profile.png" alt="Nathan Razafindrakoto" class="profile-image" />
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section" v-show="showContent">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card" v-for="stat in stats" :key="stat.label">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section section" v-show="showContent">
      <div class="container">
        <h2 class="section-title">
          <span class="title-icon">&lt;/&gt;</span>
          Skills.map()
        </h2>

        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="skill-title">
              <span class="skill-icon">🎨</span>
              Frontend
            </h3>
            <div class="skill-tags">
              <span class="skill-tag" v-for="skill in skills.frontend" :key="skill">
                {{ skill }}
              </span>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="skill-title">
              <span class="skill-icon">⚙️</span>
              Backend
            </h3>
            <div class="skill-tags">
              <span class="skill-tag backend" v-for="skill in skills.backend" :key="skill">
                {{ skill }}
              </span>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="skill-title">
              <span class="skill-icon">🛠️</span>
              Outils
            </h3>
            <div class="skill-tags">
              <span class="skill-tag tools" v-for="skill in skills.tools" :key="skill">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" v-show="showContent">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2 class="cta-title">Intéressé par mon profil ?</h2>
            <p class="cta-text">
              <span class="code-comment">// </span>
              Découvrez mes projets
            </p>
          </div>
          <div class="cta-actions">
            <router-link to="/projets" class="btn btn-primary">
              Voir mes projets →
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding-bottom: 2rem;
}

/* Hero */
.hero {
  min-height: calc(100vh - 90px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 30px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent);
  margin-bottom: 1.5rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.hero-title {
  font-size: 2.5rem;
  font-family: var(--font-mono);
  margin-bottom: 2rem;
  line-height: 1.3;
}

.title-prefix {
  color: var(--accent-secondary);
  font-weight: 400;
}

.title-name {
  color: var(--accent);
}

.cursor {
  color: var(--accent);
  font-weight: 300;
}

.cursor.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-terminal {
  margin-bottom: 2rem;
  animation: slideUp 0.6s ease;
}

.terminal-body .prompt {
  color: var(--accent);
  margin-right: 0.5rem;
}

.terminal-body .output {
  color: var(--text-muted);
  margin: 1rem 0;
  padding-left: 1rem;
  border-left: 2px solid rgba(0, 255, 136, 0.3);
}

.terminal-body .highlight {
  color: var(--accent);
}

.terminal-body .highlight-alt {
  color: var(--accent-secondary);
}

.blink-cursor {
  animation: blink 1s step-end infinite;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  animation: slideUp 0.6s ease 0.2s backwards;
}

/* Profile Image */
.hero-visual {
  animation: slideUp 0.6s ease 0.3s backwards;
}

.profile-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image {
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 20px;
  border: 3px solid rgba(0, 255, 136, 0.3);
  box-shadow: 0 0 40px rgba(0, 255, 136, 0.2);
  transition: all 0.3s ease;
}

.profile-image:hover {
  border-color: rgba(0, 255, 136, 0.6);
  box-shadow: 0 0 60px rgba(0, 255, 136, 0.3);
  transform: scale(1.02);
}

/* Stats */
.stats-section {
  padding: 3rem 2rem;
  animation: slideUp 0.6s ease 0.4s backwards;
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.stat-card {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 3rem;
  font-weight: 700;
  font-family: var(--font-mono);
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

/* Skills */
.skills-section {
  animation: slideUp 0.6s ease 0.5s backwards;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title-icon {
  color: var(--accent);
  font-family: var(--font-mono);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.skill-category {
  background: var(--bg-secondary);
  border: 1px solid rgba(0, 255, 136, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: rgba(0, 255, 136, 0.3);
  transform: translateY(-5px);
  box-shadow: var(--shadow-glow);
}

.skill-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-mono);
}

.skill-icon {
  font-size: 1.5rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.4rem 0.8rem;
  background: rgba(0, 255, 136, 0.1);
  color: var(--accent);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(0, 255, 136, 0.2);
  transform: translateY(-2px);
}

.skill-tag.backend {
  background: rgba(0, 212, 255, 0.1);
  color: var(--accent-secondary);
  border-color: rgba(0, 212, 255, 0.2);
}

.skill-tag.backend:hover {
  background: rgba(0, 212, 255, 0.2);
}

.skill-tag.tools {
  background: rgba(168, 85, 247, 0.1);
  color: var(--accent-purple);
  border-color: rgba(168, 85, 247, 0.2);
}

.skill-tag.tools:hover {
  background: rgba(168, 85, 247, 0.2);
}

/* CTA */
.cta-section {
  padding: 3rem 0;
  animation: slideUp 0.6s ease 0.6s backwards;
}

.cta-card {
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 20px;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.cta-title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.cta-text {
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.code-comment {
  color: var(--accent);
  opacity: 0.6;
}

/* Animations */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.4); }
  50% { opacity: 0.8; box-shadow: 0 0 0 8px rgba(0, 255, 136, 0); }
}

/* Responsive */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    padding-top: 3rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-visual {
    max-width: 500px;
    margin: 0 auto;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .cta-card {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .hero-badge {
    font-size: 0.75rem;
  }

  .stats-grid {
    gap: 2rem;
  }

  .stat-value {
    font-size: 2rem;
  }
}
</style>
