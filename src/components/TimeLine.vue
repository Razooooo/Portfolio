<template>
    <section class="education">
      <h2 class="section-title reveal-on-scroll reveal-bottom">Mon Parcours</h2>
      
      <div class="timeline-container reveal-on-scroll reveal-bottom">
        <div class="timeline-line"></div>
        
        <div 
          v-for="(item, index) in timelineItems" 
          :key="index" 
          class="timeline-item reveal-on-scroll"
          :class="{ 
            'right': index % 2 === 0, 
            'left': index % 2 !== 0,
            'reveal-left': index % 2 !== 0,
            'reveal-right': index % 2 === 0,
            [`reveal-delay-${index % 3 + 1}`]: true,
            'stage-item': item.isStage
          }"
          @mouseenter="hoverItem = index"
          @mouseleave="hoverItem = null"
        >
          <div class="timeline-content" :class="{ 'active': hoverItem === index, 'stage-content': item.isStage }">
            <div class="timeline-date" :class="{ 'stage-date': item.isStage }">{{ item.period }}</div>
            <h3 class="timeline-title">{{ item.title }}</h3>
            <div class="timeline-institution">{{ item.institution }}</div>
            <p class="timeline-description">{{ item.description }}</p>
            <div v-if="item.skills && item.skills.length > 0" class="timeline-skills">
              <span v-for="(skill, skillIndex) in item.skills" :key="skillIndex" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
          <div class="timeline-point" :class="{ 'active': hoverItem === index, 'stage-point': item.isStage }"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useScrollReveal } from '@/composables/useScrollReveal'
  
  // Initialisation de l'animation au défilement
  useScrollReveal()
  
  interface TimelineItem {
    period: string;
    title: string;
    institution: string;
    description: string;
    skills?: string[];
    isStage?: boolean;
  }
  
  // Variable pour gérer l'effet hover sur les éléments de la frise
  const hoverItem = ref<number | null>(null);
  
  // Données de la frise chronologique
  const timelineItems = ref<TimelineItem[]>([
    {
      period: '2022',
      title: 'Baccalauréat Général',
      institution: 'Lycée Français de Tananarive',
      description: 'Spécialités Mathématiques et Numérique Sciences Informatiques (NSI). Mention Assez-Bien.',
      skills: ['Mathématiques', 'Python', 'Algorithmique']
    },
    {
      period: '2022-2023',
      title: 'BUT GEII - Génie Electrique et Informatique Industrielle',
      institution: 'IUT Paul Sabatier',
      description: 'Formation approfondie en génie électrique, informatique industrielle et automatisme, axée sur la conception, la mise en œuvre et la maintenance de systèmes électroniques et informatiques pour les applications industrielles.',
      skills: ['HTML/CSS', 'JavaScript', 'Responsive Design']
    },
    {
      period: '2023 - 2024',
      title: 'BTS SIO - Services Informatiques aux Organisations',
      institution: 'ESICAD',
      description: 'Formation approfondie en systèmes informatiques et technologies de l\'information, avec une approche orientée vers le développement, la gestion et l\'optimisation des infrastructures réseaux et des systèmes informatiques.',
      skills: ['Développement Web', 'Typescript', 'PHP', 'Bases de données', 'Cybersécurité']
    },
    {
      period: 'Juillet 2024 - Aout 2024',
      title: 'Stage Technicien de proximité',
      institution: 'SmartOne',
      description: 'Participation à l\'assistance et au support technique auprès des utilisateurs, gestion de l\'installation et de la maintenance des équipements informatiques, résolution de problèmes matériels et logiciels, ainsi que la configuration et l\'optimisation des postes de travail dans un environnement professionnel.',
      skills: ['Assistance technique', 'Gestion des tickets de support', 'Administration réseau'],
      isStage: true
    },
    {
      period: 'Décembre 2024 - Fevrier 2024',
      title: 'Stage Assistant au développement de solutions Soft',
      institution: 'Quadient',
      description: 'Participation à la création et à l\'intégration d\'un bot Teams, en utilisant les outils Microsoft et les fonctionnalités préexistantes. Le stage a impliqué la configuration et la personnalisation du bot, ainsi que l\'ajout de quelques fonctionnalités simples via des scripts et l\'utilisation des rubriques de développement adaptées.',
      skills: ['Développement de bots', 'Gestion des outils de développement Microsoft', 'Test et validation de fonctionnalités'],
      isStage: true
    },
    {
      period: '2024 - 2025',
      title: 'BTS SIO - Services Informatiques aux Organisations - Option SLAM ',
      institution: 'ESICAD',
      description: 'Formation approfondie en développement d\'applications web et mobile avec une forte orientation vers la programmation et l\' intégration d\'applications adaptées aux besoins des entreprises. Et à la gestion de projets informatiques ',
      skills: ['Développement Web', 'Typescript', 'PHP', 'Bases de données', 'Cybersécurité']
    },
  ]);
  </script>
  
  <style scoped>
  @import '@/assets/css/scrollReveal.css';
  
  .education {
    margin: 0 auto 5rem auto;
    padding: 2rem 1rem;
    background-color: transparent;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
  }
  
  .timeline-container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
  }
  
  .timeline-line {
    content: '';
    position: absolute;
    width: 4px;
    background-color: #41b883; /* Couleur verte comme dans votre thème */
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    z-index: 0; /* Assure que la ligne est derrière les points */
  }
  
  .timeline-item {
    padding: 10px 40px;
    position: relative;
    width: 50%;
    margin-bottom: 30px;
  }
  
  .timeline-point {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #41b883;
    border-radius: 50%;
    top: 30px;
    transition: all 0.3s ease;
    z-index: 2; /* Assure que les points sont au-dessus de la ligne */
  }
  
  /* Styles pour les points des stages */
  .stage-point {
    background-color: #FF9800; /* Orange pour les stages */
  }
  
  .timeline-point.active {
    background-color: #fff;
    transform: scale(1.5);
    box-shadow: 0 0 15px rgba(65, 184, 131, 0.6);
  }
  
  .stage-point.active {
    box-shadow: 0 0 15px rgba(255, 152, 0, 0.6); /* Orange glow pour les stages */
  }
  
  .left .timeline-point {
    right: -10px;
  }
  
  .right .timeline-point {
    left: -10px;
  }
  
  .timeline-content {
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.2); /* Fond semi-transparent comme vos autres conteneurs */
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    border-left: 4px solid #41b883;
    backdrop-filter: blur(5px);
  }
  
  /* Style pour les contenus des stages */
  .stage-content {
    border-left: 4px solid #FF9800; /* Orange pour les stages */
  }
  
  .timeline-content.active {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
    background-color: rgba(65, 184, 131, 0.2);
  }
  
  .stage-content.active {
    background-color: rgba(255, 152, 0, 0.2); /* Fond orange semi-transparent pour les stages */
  }
  
  .left {
    left: 0;
  }
  
  .right {
    left: 50%;
  }
  
  .timeline-date {
    display: inline-block;
    font-weight: bold;
    color: #41b883;
    margin-bottom: 5px;
    font-size: 0.9em;
  }
  
  /* Date en orange pour les stages */
  .stage-date {
    color: #FF9800;
  }
  
  .timeline-title {
    margin: 2px 0 5px 0;
    color: white;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    font-weight: 800;
  }
  
  .timeline-institution {
    font-style: italic;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 700;
  }
  
  .timeline-description {
    color: white;
    line-height: 1.5;
    margin-bottom: 10px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    font-weight: 700;
  }
  
  .timeline-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  
  .timeline-skills .skill-tag {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    transition: all 0.3s ease;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    font-weight: 700;
  }
  
  .timeline-content:hover .skill-tag {
    background-color: rgba(65, 184, 131, 0.3);
  }
  
  /* Styles pour la section-title similaires à HomeView.vue */
  .section-title {
    font-size: 2.2rem;
    color: white;
    text-align: center;
    margin-bottom: 2.5rem;
    position: relative;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: 900;
  }
  
  .section-title::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #41b883;
    margin: 0.5rem auto 0;
    transition: width 0.4s ease;
  }
  
  .section-title:hover::after {
    width: 150px;
  }
  
  /* Responsive design pour la frise chronologique */
  @media screen and (max-width: 768px) {
    /* En mode mobile, on repositionne la ligne */
    .timeline-line {
      left: 20px;
      transform: none;
    }
    
    .timeline-item {
      width: 100%;
      padding-left: 50px;
      padding-right: 10px;
      margin-bottom: 40px;
    }
    
    .left, .right {
      left: 0;
    }
    
    /* IMPORTANT: Positionnement précis des points sur la ligne en mobile */
    .left .timeline-point,
    .right .timeline-point {
      left: 10px; /* Moitié de la largeur du point */
      right: auto;
    }
    
    .timeline-content {
      border-left: 4px solid #41b883;
    }
    
    .stage-content {
      border-left: 4px solid #FF9800;
    }
  }
  
  @media screen and (max-width: 480px) {
    .timeline-content {
      padding: 15px;
    }
    
    .timeline-title {
      font-size: 1.1rem;
    }
    
    .timeline-description {
      font-size: 0.9rem;
    }
  }
  </style>