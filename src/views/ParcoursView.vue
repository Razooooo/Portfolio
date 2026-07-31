<script setup lang="ts">
interface TimelineItem {
  id: number
  type: 'education' | 'experience'
  title: string
  organization: string
  location: string
  period: string
  upcoming?: boolean
  description: string
  highlights?: string[]
  skills?: string[]
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'Mastère Dev. Manager Full Stack',
    organization: 'Efrei',
    location: 'Villejuif',
    period: 'Sept. 2026 — Juil. 2028',
    upcoming: true,
    description:
      'Admis en apprentissage. Je recherche une alternance de développeur full stack pour la rentrée de septembre 2026 — rythme 2 semaines en entreprise / 1 semaine en formation.',
    highlights: [
      'Conception et modélisation de l\'architecture logicielle',
      'Intégration et déploiement continu dans le SI'
    ],
    skills: ['Architecture logicielle', 'CI/CD', 'Gestion de projet']
  },
    {
    id: 2,
    type: 'experience',
    title: 'Développeur JavaScript Full-Stack — stage',
    organization: 'Buddl',
    location: 'Toulouse',
    period: 'Fév. 2026 — Juil. 2026',
    description:
      'Intégration d\'outils tiers dans la plateforme Buddl et développement d\'API côté back-end.',
    highlights: [
      'Intégré des outils tiers dans Buddl',
      'Maintenu et amélioré les connecteurs existants',
      'Conçu et développé des API robustes et évolutives',
      'Corrigé des bugs signalés par les clients'
    ],
    skills: ['JavaScript', 'API REST', 'Intégrations tierces', 'Debug']
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor Systèmes d\'Information',
    organization: 'Institut Limayrac',
    location: 'Toulouse',
    period: 'Oct. 2025 — Août 2026',
    description:
      'Parcours développement des systèmes numériques : conception d\'applications et gestion de projets IT.',
    highlights: ['HTML / CSS / JSP', 'Back-end PHP'],
    skills: ['Architecture SI', 'PHP', 'Développement web']
  },
  {
    id: 4,
    type: 'education',
    title: 'BTS Services Informatiques aux Organisations',
    organization: 'Esicad',
    location: 'Labège',
    period: 'Sept. 2023 — Juil. 2025',
    description:
      'Parcours Solutions Logicielles et Applications Métiers (SLAM).',
    highlights: [
      'Conception et adaptation de solutions logicielles',
      'Programmation orientée objet'
    ],
    skills: ['Vue.js', 'TypeScript', 'PHP', 'MySQL', 'Kotlin']
  },
  {
    id: 5,
    type: 'experience',
    title: 'Assistant au développement de solutions SOFT — stage',
    organization: 'Quadient',
    location: 'Paris',
    period: 'Déc. 2024 — Fév. 2025',
    description:
      'Conception et développement d\'un assistant virtuel sur Teams pour le support technique.',
    skills: ['Écosystème Microsoft', 'Chatbot', 'Travail en équipe']
  },
  {
    id: 6,
    type: 'experience',
    title: 'Technicien de proximité — stage',
    organization: 'SmartOne Madagascar',
    location: 'Tananarive',
    period: 'Juil. 2024 — Août 2024',
    description: 'Support et infrastructure sur un parc de 1 000 postes.',
    highlights: [
      'Assuré le support niveau 1 et 2 sur un parc de 1 000 postes',
      'Formé les utilisateurs aux nouveaux logiciels',
      'Refondu l\'infrastructure réseau',
      'Rédigé des procédures pour les utilisateurs et l\'équipe IT'
    ],
    skills: ['Support N1/N2', 'Réseau', 'Documentation']
  },
  {
    id: 7,
    type: 'education',
    title: 'Baccalauréat général',
    organization: 'Lycée français de Tananarive',
    location: 'Tananarive',
    period: 'Sept. 2020 — Juil. 2022',
    description: 'Spécialités Mathématiques et Numérique & Sciences Informatiques.',
    skills: ['Mathématiques', 'NSI']
  }
]

const labels: Record<TimelineItem['type'], string> = {
  education: 'Formation',
  experience: 'Expérience'
}
</script>

<template>
  <div class="parcours">
    <div class="container">
      <header class="page-head">
        <p v-reveal class="eyebrow">Formation &amp; expériences</p>
        <h1 v-reveal="0.06" class="display page-title">Parcours</h1>
        <p v-reveal="0.12" class="lede">
          Du bac NSI au Mastère à l'Efrei, en passant par trois stages en
          entreprise.
        </p>
      </header>

      <ol class="timeline">
        <li
          v-for="(item, i) in timeline"
          :key="item.id"
          v-reveal="0.05 * i"
          class="entry"
          :class="[item.type, { upcoming: item.upcoming }]"
        >
          <div class="entry-meta">
            <span class="entry-period">{{ item.period }}</span>
            <span class="entry-type">{{ labels[item.type] }}</span>
          </div>

          <div class="entry-body">
            <h2 class="entry-title">
              {{ item.title }}
              <span v-if="item.upcoming" class="entry-flag">À venir</span>
            </h2>

            <p class="entry-org">
              {{ item.organization }}
              <span class="entry-location">— {{ item.location }}</span>
            </p>

            <p class="entry-description">{{ item.description }}</p>

            <ul v-if="item.highlights" class="entry-highlights">
              <li v-for="line in item.highlights" :key="line">{{ line }}</li>
            </ul>

            <div v-if="item.skills" class="entry-skills">
              <span v-for="skill in item.skills" :key="skill" class="tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.parcours {
  padding: 3.5rem 0 5rem;
  min-height: calc(100vh - 92px);
}

.page-head {
  max-width: var(--measure);
  margin-bottom: 4.5rem;
}

.page-title {
  margin: 1.25rem 0;
}

/* ---------- Chronologie ---------- */
.timeline {
  list-style: none;
  position: relative;
  border-top: 1px solid var(--line);
}

.entry {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 3rem;
  padding: 2.75rem 0;
  border-bottom: 1px solid var(--line);
  position: relative;
}

.entry::before {
  content: '';
  position: absolute;
  top: 3.3rem;
  left: -14px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 0.4s var(--ease), transform 0.4s var(--ease);
}

.entry.experience::before {
  background: var(--sage);
}

.entry:hover::before {
  opacity: 1;
  transform: scale(1);
}

.entry-meta {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding-top: 0.35rem;
}

.entry-period {
  font-size: 0.85rem;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}

.entry-type {
  align-self: flex-start;
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  color: var(--accent-deep);
  background: var(--accent-wash);
}

.entry.experience .entry-type {
  color: var(--sage);
  background: var(--sage-wash);
}

.entry-title {
  font-size: 1.65rem;
  margin-bottom: 0.25rem;
}

.entry-flag {
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.6rem;
  font-family: var(--font-sans);
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  color: var(--paper);
  background: var(--accent);
}

.entry-org {
  font-size: 0.9rem;
  color: var(--accent);
  margin-bottom: 0.9rem;
}

.entry.experience .entry-org {
  color: var(--sage);
}

.entry-location {
  color: var(--muted);
}

.entry-description {
  color: var(--ink-soft);
  max-width: 58ch;
  margin-bottom: 1.1rem;
}

.entry-highlights {
  list-style: none;
  margin-bottom: 1.25rem;
  max-width: 58ch;
}

.entry-highlights li {
  position: relative;
  padding: 0.28rem 0 0.28rem 1.1rem;
  font-size: 0.92rem;
  color: var(--ink-soft);
}

.entry-highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.95rem;
  width: 6px;
  height: 1px;
  background: var(--accent);
}

.entry.experience .entry-highlights li::before {
  background: var(--sage);
}

.entry-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

/* ---------- Responsive ---------- */
@media (max-width: 860px) {
  .entry {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 0;
  }

  .entry-meta {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding-top: 0;
  }

  .entry-title {
    font-size: 1.35rem;
  }

  .page-head {
    margin-bottom: 3rem;
  }
}
</style>
