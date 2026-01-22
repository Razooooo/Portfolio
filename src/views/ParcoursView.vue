<script setup lang="ts">
interface TimelineItem {
  id: number
  type: 'education' | 'experience'
  title: string
  organization: string
  period: string
  description: string
  skills?: string[]
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'Bachelor Systèmes d\'Information',
    organization: 'Institut Limayrac',
    period: '2025 - 2026',
    description: 'Formation approfondie en systèmes d\'information, gestion de projets IT et développement web/applicatif.',
    skills: ['Gestion de projet', 'Architecture SI', 'Développement']
  },
  {
    id: 2,
    type: 'education',
    title: 'BTS SIO - Option SLAM',
    organization: 'ESICAD',
    period: '2024 - 2025',
    description: 'Formation approfondie en développement d\'applications web et mobile adaptées aux besoins des entreprises.',
    skills: ['Vue.js', 'PHP', 'MySQL', 'TypeScript', 'Kotlin']
  },
  {
    id: 3,
    type: 'experience',
    title: 'Stage Assistant au développement de solutions SOFT',
    organization: 'Quadient',
    period: 'Décembre 2024 - Février 2025',
    description: 'Création et à intégration d\'un bot Teams pour les techniciens.',
    skills: ['Gestion des outils de développement Microsoft', 'Travail en équipe']
  },
  {
    id: 4,
    type: 'experience',
    title: 'Stage téchnicien de proximité',
    organization: 'Smartone.ai',
    period: 'juillet 2024 - août 2024',
    description: 'Support technique auprès des utilisateurs.',
    skills: ['Assistance technique', 'Gestion des tickets de support']
  },
  {
    id: 5,
    type: 'education',
    title: 'BTS SIO',
    organization: 'ESICAD',
    period: '2023 - 2024',
    description: 'Formation  en systèmes informatiques avec une approche orientée développemen et systèmes/réseaux .',
    skills: ['Développement Web', 'Systèmes et Réseaux']
  }
]
</script>

<template>
  <div class="parcours-page">
    <div class="container">
      <!-- Header -->
      <header class="page-header">
        <h1 class="page-title">
          <span class="title-bracket">{</span>
          Mon Parcours
          <span class="title-bracket">}</span>
        </h1>
        <p class="page-subtitle">
          <span class="code-comment">// </span>
          Formation et expériences professionnelles
        </p>
      </header>

      <!-- Timeline -->
      <div class="timeline">
        <div
          v-for="item in timeline"
          :key="item.id"
          class="timeline-item"
          :class="item.type"
        >
          <div class="timeline-marker">
            <span class="marker-icon">
              {{ item.type === 'education' ? '🎓' : '💼' }}
            </span>
          </div>

          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="timeline-title">{{ item.title }}</h3>
              <span class="timeline-period">{{ item.period }}</span>
            </div>

            <p class="timeline-organization">{{ item.organization }}</p>
            <p class="timeline-description">{{ item.description }}</p>

            <div v-if="item.skills" class="timeline-skills">
              <span
                v-for="skill in item.skills"
                :key="skill"
                class="skill-tag"
                :class="item.type"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parcours-page {
  padding: 2rem 0 4rem;
  min-height: calc(100vh - 90px);
}

/* Header */
.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 2.5rem;
  font-family: var(--font-mono);
  margin-bottom: 1rem;
}

.title-bracket {
  color: var(--accent);
}

.page-subtitle {
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.code-comment {
  color: var(--accent);
  opacity: 0.6;
}

/* Timeline */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 60px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--accent) 0%, var(--accent-secondary) 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  animation: slideIn 0.6s ease backwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-item:nth-child(4) { animation-delay: 0.4s; }

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.timeline-marker {
  position: absolute;
  left: -60px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border: 2px solid var(--accent);
  border-radius: 50%;
  z-index: 1;
}

.timeline-item.experience .timeline-marker {
  border-color: var(--accent-secondary);
}

.marker-icon {
  font-size: 1.5rem;
}

.timeline-content {
  background: var(--bg-secondary);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.timeline-item.experience .timeline-content {
  border-color: rgba(0, 212, 255, 0.2);
}

.timeline-content:hover {
  border-color: rgba(0, 255, 136, 0.4);
  transform: translateX(10px);
  box-shadow: 0 10px 40px rgba(0, 255, 136, 0.1);
}

.timeline-item.experience .timeline-content:hover {
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 10px 40px rgba(0, 212, 255, 0.1);
}

.timeline-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.timeline-title {
  font-size: 1.2rem;
  font-family: var(--font-mono);
  color: var(--text);
}

.timeline-period {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent);
  padding: 0.2rem 0.6rem;
  background: rgba(0, 255, 136, 0.1);
  border-radius: 4px;
}

.timeline-item.experience .timeline-period {
  color: var(--accent-secondary);
  background: rgba(0, 212, 255, 0.1);
}

.timeline-organization {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0.8rem;
}

.timeline-description {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  background: rgba(0, 255, 136, 0.1);
  color: var(--accent);
  border-radius: 4px;
  border: 1px solid rgba(0, 255, 136, 0.2);
}

.skill-tag.experience {
  background: rgba(0, 212, 255, 0.1);
  color: var(--accent-secondary);
  border-color: rgba(0, 212, 255, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 1.8rem;
  }

  .timeline {
    padding-left: 40px;
  }

  .timeline::before {
    left: 14px;
  }

  .timeline-marker {
    left: -40px;
    width: 35px;
    height: 35px;
  }

  .marker-icon {
    font-size: 1rem;
  }

  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .timeline-content {
    padding: 1rem;
  }
}
</style>
