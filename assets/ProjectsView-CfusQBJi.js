import{d as u,u as v,r as g,c as i,a as e,F as l,b as d,n as c,t as r,e as f,f as p,o as a,_}from"./index-DX-bdFog.js";const h={class:"projects"},y={class:"projects-grid",style:{display:"grid !important","grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr)) !important",gap:"1.5rem !important",width:"100% !important"}},b={class:"project-image"},S=["src","alt"],j={class:"project-content"},x={class:"project-header reveal-on-scroll reveal-bottom reveal-delay-1"},U={class:"project-title"},C={class:"project-date"},k={class:"project-description reveal-on-scroll reveal-bottom reveal-delay-2"},D={class:"project-details reveal-on-scroll reveal-bottom reveal-delay-3"},L={class:"features-list"},N={class:"tech-stack reveal-on-scroll reveal-bottom reveal-delay-4"},T={class:"project-actions reveal-on-scroll reveal-bottom reveal-delay-5",style:{display:"flex !important","flex-direction":"row !important"}},V=["href"],P=["href"],z=u({__name:"ProjectsView",setup(G){v();const m=g([{id:1,title:"NurseCare",date:"2025",description:"Application de gestion pour cabinet d'infirmiers permettant le suivi des patients et la planification des tournées.",image:"./images/nursecare.png",features:["Gestion des dossiers patients","Planification des tournées","Suivi des traitements","Interface responsive","Système de notifications"],technologies:["Vue.js","TypeScript","Node.js","MySQL"],documentationUrl:"./docs/Livrable NurseCare.pdf",demoUrl:"./docs/DocTechniqueNurseCare.docx.pdf"},{id:2,title:"DeliverEasy",date:"2024",description:"Application de livraison optimisant les trajets des livreurs et la gestion de ceux-ci.",image:"./images/delivereasy.png",features:["Commande en ligne","Suivi en temps réel","Optimisation des trajets","Gestion des restaurants","Système de notation"],technologies:["Vue.js","TypeScript","Node.js","MySQL"],documentationUrl:"./docs/Livrable projet Deliver.pdf",demoUrl:"./docs/DocTechniqueDeliver.pdf"},{id:3,title:"Organi'zeur",date:"2024",description:"Application de gestion d'événements et de planification permettant aux utilisateurs d'organiser leur temps efficacement.",image:"./images/logoOrganizeur.avif",features:["Création et gestion d'événements","Calendrier interactif","Rappels et notifications","Partage d'événements","Synchronisation multi-appareils"],technologies:["Vue.js","TypeScript","Node.js","MySQL"],documentationUrl:"./docs/Livrable Organizeur.pdf",demoUrl:"./docs/DocTechniqueOrganizeur.pdf"},{id:4,title:"GLPI",date:"2024",description:"Application de gestion des services informatiques permettant aux utilisateurs de suivre les incidents",image:"./images/glpi.png",features:["Gestion des tickets et des incidents","Suivi et gestion des actifs IT","Rapports et analyses détaillés"],technologies:["GLPI"],documentationUrl:"",demoUrl:""},{id:5,title:"Carist-Si",date:"2025",description:"Une application mobile de gestion des stocks et des emplacements de colis permettant aux caristes gérer efficacement l'entrepôt.",image:"./images/carist.png",features:["Gestion des emplacements de colis","Création des emplacements","Création des colis"],technologies:["Kotlin","Application mobile"],documentationUrl:"./docs/",demoUrl:"./docs/"}]);return(I,s)=>(a(),i("div",h,[s[3]||(s[3]=e("div",{class:"projects-header"},[e("h2",{class:"section-title reveal-on-scroll reveal-bottom"},"Mes Projets"),e("p",{class:"subtitle reveal-on-scroll reveal-bottom reveal-delay-1"},"Découvrez mes réalisations en BTS SIO")],-1)),e("div",y,[(a(!0),i(l,null,d(m.value,t=>(a(),i("article",{key:t.id,class:c(["project-card reveal-on-scroll",t.id%2===0?"reveal-right":"reveal-left"]),style:{width:"100% !important",maxWidth:"none !important"}},[e("div",b,[e("img",{src:t.image,alt:t.title},null,8,S)]),e("div",j,[e("header",x,[e("h2",U,r(t.title),1),e("p",C,r(t.date),1)]),e("p",k,r(t.description),1),e("div",D,[s[0]||(s[0]=e("h3",null,"Fonctionnalités principales :",-1)),e("ul",L,[(a(!0),i(l,null,d(t.features,(o,n)=>(a(),i("li",{key:o,class:c(["reveal-on-scroll reveal-left",`reveal-delay-${n%5+1}`])},r(o),3))),128))])]),e("div",N,[(a(!0),i(l,null,d(t.technologies,(o,n)=>(a(),i("span",{key:o,class:c(["tech-tag reveal-on-scroll reveal-scale",`reveal-delay-${n%5+1}`])},r(o),3))),128))]),e("footer",T,[e("a",{href:t.documentationUrl,target:"_blank",class:"btn btn-primary"},s[1]||(s[1]=[e("span",{class:"icon"},"📄",-1),p(" Doc ")]),8,V),t.demoUrl?(a(),i("a",{key:0,href:t.demoUrl,target:"_blank",class:"btn btn-secondary"},s[2]||(s[2]=[e("span",{class:"icon"},"🔗",-1),p(" Démo ")]),8,P)):f("",!0)])])],2))),128))])]))}}),w=_(z,[["__scopeId","data-v-28b1ce85"]]);export{w as default};
