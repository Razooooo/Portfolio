<template>
    <div class="veille">
      <div class="veille-header">
        <h2 class="section-title reveal-on-scroll reveal-bottom">Veille Technologique</h2>
        <p class="subtitle reveal-on-scroll reveal-bottom reveal-delay-1">Ressources et liens que j'utilise pour ma veille</p>
      </div>
  
      <div class="veille-content">
        <!-- Introduction à la veille -->
        <section class="veille-intro reveal-on-scroll reveal-bottom">
          <h3 class="subsection-title reveal-on-scroll reveal-bottom">Ma démarche de veille</h3>
          <p class="reveal-on-scroll reveal-bottom reveal-delay-1">
            Pour rester à jour dans le domaine du développement web et de la cybersécurité,
            je maintiens une veille technologique active en consultant régulièrement
            diverses sources d'informations (blogs, podcasts, newsletters, etc.) qui me permettent
            de suivre les dernières tendances et innovations.
          </p>
        </section>
  
        <!-- Grille des ressources de veille -->
        <section class="veille-resources">
          <h3 class="subsection-title reveal-on-scroll reveal-bottom">Mes sources d'information</h3>
          
          <div class="resources-grid">
            <div 
              v-for="(resource, index) in resources" 
              :key="resource.id"
              class="resource-card reveal-on-scroll"
              :class="index % 2 === 0 ? 'reveal-left' : 'reveal-right'"
            >
              <div class="resource-image">
                <img :src="resource.image" :alt="resource.name" />
              </div>
              <div class="resource-content">
                <h4>{{ resource.name }}</h4>
                <p>{{ resource.description }}</p>
                <div class="resource-tags">
                  <span v-for="(tag, tagIndex) in resource.tags" :key="tag" class="tag reveal-on-scroll reveal-scale" :class="`reveal-delay-${(tagIndex % 5) + 1}`">
                    {{ tag }}
                  </span>
                </div>
                <a :href="resource.url" target="_blank" rel="noopener noreferrer" class="resource-link">
                  <span class="icon">🔗</span> Consulter
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Section outils de veille -->
        <section class="veille-tools reveal-on-scroll reveal-bottom">
          <h3 class="subsection-title reveal-on-scroll reveal-bottom">Mes outils de veille</h3>
          <p class="reveal-on-scroll reveal-bottom reveal-delay-1">
            Pour organiser et optimiser ma veille technologique, j'utilise les outils suivants :
          </p>
          <ul class="tools-list">
            <li v-for="(tool, index) in tools" :key="index" class="reveal-on-scroll reveal-left" :class="`reveal-delay-${index + 1}`">
              <strong>{{ tool.name }} :</strong> {{ tool.description }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useScrollReveal } from '@/composables/useScrollReveal'
  
  // Initialisation de l'animation au défilement
  useScrollReveal()
  
  interface Resource {
    id: number
    name: string
    description: string
    image: string
    url: string
    tags: string[]
  }
  
  interface Tool {
    name: string
    description: string
  }
  
  // Liste des ressources de veille
  const resources = ref<Resource[]>([
    {
      id: 1,
      name: "Github Explore",
      description: "GitHub Explore propose des projets populaires et des tendances dans le domaine du développement. C'est une excellente manière de suivre les technologies émergentes et les nouveaux outils.",
      image: "./images/explore.png",
      url: "https://github.com/explore/",
      tags: ["Web", "Programmation", "Tutorials"]
    },
    {
      id: 2,
      name: "TLDR",
      description: "Blog dédié au CSS et aux technologies web frontend avec des articles détaillés sur les dernières pratiques et tendances.",
      image: "./images/tldr.png",
      url: "https://tldr.tech/",
      tags: ["Tech", "Innovation", "Tendances"]
    },
    {
      id: 3,
      name: "The Hacker News",
      description: "The Hacker News est une ressource clé pour suivre les dernières actualités en cybersécurité, couvrant les vulnérabilités, les menaces et les incidents majeurs. Idéal pour rester informé des tendances et des évolutions en sécurité informatique.",
      image: "./images/hacker.png",
      url: "https://thehackernews.com/",
      tags: ["Cybersécurité", "Vulnérabilités", "Hacking"]
    },
    {
      id: 4,
      name: "Reddit – programming",
      description: "Ce subreddit est dédié aux discussions autour du développement informatique. C'est une mine d'or pour les articles, les tutoriels et les discussions sur les nouvelles tendances.",
      image: "./images/reddit.png",
      url: "https://www.reddit.com/r/programming/",
      tags: ["Communauté", "Programmation", "Open Source"]
    },
    {
      id: 5,
      name: "TechCrunch",
      description: "TechCrunch couvre de près les avancées en intelligence artificielle (IA), en mettant en avant les nouvelles technologies, les levées de fonds des startups IA, et les impacts de l’IA sur différents secteurs comme la santé, la finance ou les médias.",
      image: "./images/tech.png",
      url: "https://techcrunch.com/",
      tags: ["Startups", "Intelligence Artificielle", "Big Tech"]
    },
    {
      id: 6,
      name: "ANSSI",
      description: "Autorité nationale en matière de sécurité et de défense des systèmes d'information en France.",
      image: "./images/anssi.png",
      url: "https://www.ssi.gouv.fr/",
      tags: ["Cybersécurité", "Veille", "France"]
    }
  ])
  
  // Liste des outils utilisés pour la veille
  const tools = ref<Tool[]>([
    {
      name: "Feedly",
      description: "Agrégateur de flux RSS pour suivre mes blogs et sites préférés en un seul endroit."
    },
    {
      name: "Pocket",
      description: "Service qui me permet de sauvegarder des articles pour les lire plus tard, même hors ligne."
    },
    {
      name: "Twitter/X",
      description: "Pour suivre des experts du domaine et les dernières actualités en temps réel."
    },
    {
      name: "GitHub Trends",
      description: "Pour découvrir les projets open source populaires et les nouvelles technologies."
    },
    {
      name: "Google Alerts",
      description: "Pour recevoir des notifications sur des sujets spécifiques qui m'intéressent."
    }
  ])
  </script>
  
  <style scoped>
  @import '@/assets/css/scrollReveal.css';
  
  .veille {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
    font-weight: 700;
    box-sizing: border-box;
  }
  
  .veille-header {
    margin-bottom: 2.5rem;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.2rem;
    color: white;
    text-align: center;
    margin-bottom: 0.5rem;
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
  
  .subtitle {
    color: white;
    font-size: 1.2rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    font-weight: 700;
  }
  
  .veille-content {
    width: 100%;
  }
  
  .veille-intro,
  .veille-tools {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-left: 4px solid #41b883;
  }
  
  .veille-intro:hover,
  .veille-tools:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  .subsection-title {
    color: white;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: 800;
  }
  
  .subsection-title::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #41b883;
    transition: width 0.3s ease;
  }
  
  .subsection-title:hover::after {
    width: 100%;
  }
  
  .veille-intro p,
  .veille-tools p {
    line-height: 1.6;
    margin-bottom: 1rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    font-weight: 700;
  }
  
  .veille-resources {
    margin-bottom: 2rem;
  }
  
  .veille-resources .subsection-title {
    text-align: center;
    margin-bottom: 1.5rem;
    display: block;
  }
  
  .veille-resources .subsection-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    width: 100%;
  }
  
  .resource-card {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
  }
  
  .resource-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: #41b883;
  }
  
  .resource-image {
    height: 200px;
    position: relative;
    overflow: hidden;
  }
  
  .resource-image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(44, 62, 80, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .resource-card:hover .resource-image::after {
    opacity: 1;
  }
  
  .resource-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
  }
  
  .resource-card:hover .resource-image img {
    transform: scale(1.1);
  }
  
  .resource-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .resource-content h4 {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
    color: white;
    transition: color 0.3s ease;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    font-weight: 800;
  }
  
  .resource-card:hover .resource-content h4 {
    color: #41b883;
  }
  
  .resource-content p {
    margin-bottom: 1rem;
    flex-grow: 1;
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    font-weight: 700;
  }
  
  .resource-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .tag {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    transition: all 0.3s ease;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    font-weight: 700;
  }
  
  .resource-card:hover .tag {
    background-color: rgba(65, 184, 131, 0.3);
  }
  
  .resource-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: #2c3e50;
    color: white;
    text-decoration: none;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    font-weight: 800;
    transition: all 0.3s ease;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .resource-link::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(30, 30);
      opacity: 0;
    }
  }
  
  .resource-link:active::after {
    animation: ripple 1s ease-out;
  }
  
  .resource-link:hover {
    background-color: #41b883;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(65, 184, 131, 0.3);
  }
  
  .tools-list {
    list-style-type: none;
    padding: 0;
  }
  
  .tools-list li {
    background-color: rgba(65, 184, 131, 0.2);
    margin-bottom: 0.75rem;
    padding: 0.8rem 1rem;
    border-radius: 6px;
    border-left: 3px solid #41b883;
    transition: all 0.3s ease;
    font-weight: 700;
  }
  
  .tools-list li:hover {
    background-color: rgba(65, 184, 131, 0.3);
    transform: translateX(5px);
    box-shadow: 0 2px 10px rgba(65, 184, 131, 0.2);
  }
  
  .tools-list li strong {
    font-weight: 800;
  }
  
  /* Media queries pour la responsivité */
  @media (max-width: 1024px) {
    .resources-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
    
    .subtitle {
      font-size: 1rem;
    }
    
    .subsection-title {
      font-size: 1.4rem;
    }
    
    .resources-grid {
      grid-template-columns: 1fr;
    }
    
    .resource-image {
      height: 180px;
    }
  }
  
  @media (max-width: 480px) {
    .veille-header {
      margin-bottom: 1.5rem;
    }
    
    .section-title {
      font-size: 1.8rem;
    }
    
    .subtitle {
      font-size: 0.9rem;
    }
    
    .veille-intro,
    .veille-tools {
      padding: 1rem;
    }
    
    .subsection-title {
      font-size: 1.3rem;
    }
    
    .resource-content {
      padding: 1rem;
    }
    
    .resource-content h4 {
      font-size: 1.2rem;
    }
    
    .resource-link {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }
    
    .tools-list li {
      padding: 0.6rem 0.8rem;
      font-size: 0.9rem;
    }
  }
  </style>