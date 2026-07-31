<script setup lang="ts">
const skills = [
  {
    label: 'Frameworks',
    items: ['Vue.js', 'React', 'Node.js', 'Express.js', 'Laravel']
  },
  {
    label: 'Langages',
    items: ['TypeScript', 'JavaScript', 'PHP', 'Java', 'Kotlin', 'Python', 'C#', 'HTML & CSS']
  },
  {
    label: 'Bases de données',
    items: ['MySQL', 'MariaDB', 'MongoDB']
  },
  {
    label: 'Outils',
    items: ['Git & GitHub', 'VS Code', 'IntelliJ IDEA', 'PyCharm', 'WampServer', 'Looping', 'Unity']
  }
]

const languages = [
  { name: 'Français', level: 'Courant' },
  { name: 'Malgache', level: 'Courant' },
  { name: 'Anglais', level: 'B2' },
  { name: 'Espagnol', level: 'B1' }
]

const stats = [
  { value: '7', label: 'Projets réalisés' },
  { value: '3', label: 'Stages en entreprise' },
  { value: '2028', label: 'Diplôme Bac+5 visé' }
]
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero container">
      <div class="hero-text">
        <p v-reveal class="availability">
          <span class="availability-dot"></span>
          Recherche une alternance — rentrée septembre 2026
        </p>

        <h1 v-reveal="0.08" class="display hero-title">
          Nathan<br />
          Razafindrakoto<span class="period">.</span>
        </h1>

        <p v-reveal="0.16" class="lede hero-lede">
          Développeur full stack, admis en Mastère Dev. Manager Full Stack
          à l'<strong>Efrei</strong>. Je conçois des applications web et mobile. 
          Je sors de six mois de développement JavaScript full stack chez <strong>Buddl</strong>.
          Et je suis actuellement à la recherche d'une alternance à Paris ou Toulouse pour septembre 2026 afin de poursuivre ma formation.
        </p>

        <p v-reveal="0.2" class="hero-rhythm">
          Rythme d'alternance&nbsp;: 2 semaines en entreprise / 1 semaine en formation.
        </p>

        <div v-reveal="0.24" class="hero-actions">
          <router-link to="/projets" class="btn btn-primary">
            Voir mes projets
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </router-link>
          <a
            href="https://github.com/Razooooo"
            target="_blank"
            rel="noopener"
            class="btn btn-secondary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nathan-razafindrakoto"
            target="_blank"
            rel="noopener"
            class="btn btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <figure v-reveal="0.12" class="hero-portrait">
        <img src="@/assets/profile.png" alt="Portrait de Nathan Razafindrakoto" />
        <figcaption>Nathan Razafindrakoto</figcaption>
      </figure>
    </section>

    <!-- Chiffres -->
    <section class="container">
      <div v-reveal class="stats">
        <div v-for="stat in stats" :key="stat.label" class="stat">
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- Compétences -->
    <section class="section container">
      <header v-reveal class="section-head">
        <p class="eyebrow">Ce que j'utilise</p>
        <h2 class="section-heading">Compétences</h2>
      </header>

      <div class="skills">
        <div
          v-for="(group, i) in skills"
          :key="group.label"
          v-reveal="0.07 * i"
          class="skill-group"
        >
          <h3 class="skill-label">
            <span class="skill-index">{{ String(i + 1).padStart(2, '0') }}</span>
            {{ group.label }}
          </h3>
          <ul class="skill-list">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <div v-reveal class="languages">
        <h3 class="skill-label languages-label">Langues</h3>
        <ul class="languages-list">
          <li v-for="lang in languages" :key="lang.name">
            <span class="language-name">{{ lang.name }}</span>
            <span class="language-level">{{ lang.level }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Appel à l'action -->
    <section class="container">
      <div v-reveal class="cta">
        <div>
          <h2 class="cta-title">Une alternance à pourvoir<br />pour septembre 2026&nbsp;?</h2>
          <p class="cta-text">
            Développeur full stack, 2 semaines en entreprise / 1 semaine en formation. Paris ou Toulouse.
          </p>
        </div>
        <a
          href="https://linkedin.com/in/nathan-razafindrakoto"
          target="_blank"
          rel="noopener"
          class="btn btn-primary cta-btn"
        >
          Me contacter
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding-bottom: 2rem;
}

/* ---------- Hero ---------- */
.hero {
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 4.5rem;
  align-items: center;
  padding-top: 3.5rem;
  padding-bottom: 5rem;
  min-height: calc(100vh - 92px);
}

.availability {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.35rem 0.95rem 0.35rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 253, 250, 0.6);
  font-size: 0.78rem;
  color: var(--ink-soft);
}

.availability-dot {
  position: relative;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
}

.availability-dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--accent);
  animation: ping 2.4s var(--ease) infinite;
}

@keyframes ping {
  0% { transform: scale(1); opacity: 0.6; }
  70%, 100% { transform: scale(3.2); opacity: 0; }
}

.hero-title {
  margin: 1.5rem 0 1.75rem;
}

.period {
  color: var(--accent);
}

.hero-lede {
  font-size: 1.1rem;
  max-width: 50ch;
}

.hero-lede strong {
  font-weight: 500;
  color: var(--ink);
}

.hero-rhythm {
  margin-top: 0.9rem;
  font-size: 0.88rem;
  color: var(--muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.25rem;
}

/* ---------- Portrait ---------- */
.hero-portrait {
  position: relative;
}

.hero-portrait img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: var(--radius-lg);
  filter: saturate(0.92) contrast(1.02);
  box-shadow: var(--shadow-lg);
  animation: drift 9s ease-in-out infinite;
  transition: transform 0.7s var(--ease);
}

@keyframes drift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-portrait:hover img {
  animation-play-state: paused;
  transform: translateY(-6px) scale(1.012);
}

.hero-portrait figcaption {
  position: absolute;
  left: -1.5rem;
  bottom: 1.75rem;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}

/* ---------- Chiffres ---------- */
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.stat {
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.stat + .stat {
  border-left: 1px solid var(--line-soft);
  padding-left: 2rem;
}

.stat-value {
  font-family: var(--font-display);
  font-size: 3rem;
  line-height: 1;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--muted);
}

/* ---------- Compétences ---------- */
.section-head {
  margin-bottom: 3rem;
}

.skills {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
}

.skill-group {
  border-top: 1px solid var(--ink);
  padding-top: 1.25rem;
}

.skill-label {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.skill-index {
  font-size: 0.7rem;
  color: var(--accent);
}

.skill-list {
  list-style: none;
}

.skill-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--line-soft);
  font-size: 0.92rem;
  color: var(--ink-soft);
  transition: color 0.3s var(--ease), padding-left 0.3s var(--ease);
}

.skill-list li:hover {
  color: var(--accent);
  padding-left: 0.4rem;
}

/* ---------- Langues ---------- */
.languages {
  margin-top: 3.5rem;
  border-top: 1px solid var(--line);
  padding-top: 1.75rem;
}

.languages-label {
  margin-bottom: 1rem;
}

.languages-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 2rem;
}

.languages-list li {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--line-soft);
}

.language-name {
  font-size: 0.95rem;
}

.language-level {
  font-size: 0.8rem;
  color: var(--muted);
}

/* ---------- CTA ---------- */
.cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  flex-wrap: wrap;
  padding: 3.25rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.cta-title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  margin-bottom: 0.6rem;
}

.cta-text {
  color: var(--muted);
  font-size: 0.95rem;
}

/* ---------- Responsive ---------- */
@media (max-width: 1080px) {
  .skills {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.25rem;
  }
}

@media (max-width: 960px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 3rem;
    min-height: 0;
    padding-top: 2.5rem;
  }

  .hero-portrait {
    max-width: 320px;
  }

  .hero-portrait figcaption {
    display: none;
  }

  .languages-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .skills {
    grid-template-columns: 1fr;
  }

  .languages-list {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .stat + .stat {
    border-left: none;
    border-top: 1px solid var(--line-soft);
    padding-left: 0;
  }

  .stat {
    padding: 1.4rem 0;
    flex-direction: row;
    align-items: baseline;
    gap: 1rem;
  }

  .stat-value {
    font-size: 2.25rem;
    min-width: 3ch;
  }

  .cta {
    padding: 2rem 1.5rem;
  }
}
</style>
