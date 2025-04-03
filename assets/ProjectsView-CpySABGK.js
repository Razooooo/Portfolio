import{d as u,u as v,r as g,c as i,a as e,F as n,b as d,n as c,t as r,e as f,f as p,o as a,_}from"./index-BzP3bguJ.js";const h={class:"projects"},y={class:"projects-grid",style:{display:"grid !important","grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr)) !important",gap:"1.5rem !important",width:"100% !important"}},b={class:"project-image"},x=["src","alt"],S={class:"project-content"},U={class:"project-header reveal-on-scroll reveal-bottom reveal-delay-1"},j={class:"project-title"},C={class:"project-date"},k={class:"project-description reveal-on-scroll reveal-bottom reveal-delay-2"},D={class:"project-details reveal-on-scroll reveal-bottom reveal-delay-3"},L={class:"features-list"},P={class:"tech-stack reveal-on-scroll reveal-bottom reveal-delay-4"},T={class:"project-actions reveal-on-scroll reveal-bottom reveal-delay-5",style:{display:"flex !important","flex-direction":"row !important"}},w=["href"],G=["href"],V=u({__name:"ProjectsView",setup(I){v();const m=g([{id:1,title:"GLPI",date:"2024",description:"Application de gestion des services informatiques permettant aux utilisateurs de suivre les incidents",image:"./images/glpi.png",features:["Gestion des tickets et des incidents","Suivi et gestion des actifs IT","Rapports et analyses détaillés"],technologies:["GLPI"],documentationUrl:"./docs/Livrable_GLPI.pdf",demoUrl:""},{id:2,title:"Organi'zeur",date:"2024",description:"Application web de gestion d'événements et de planification permettant aux utilisateurs d'organiser leur temps efficacement.",image:"./images/logoOrganizeur.avif",features:["Création et gestion d'événements","Calendrier interactif","Rappels et notifications","Partage d'événements"],technologies:["Vue.js","TypeScript","Express.js","MySQL"],documentationUrl:"./docs/Livrable_Organizeur.pdf",demoUrl:"./docs/DocTechniqueOrganizeur.pdf"},{id:3,title:"DeliverEasy",date:"2024",description:"Application web de livraison optimisant les trajets des livreurs et la gestion de ceux-ci.",image:"./images/delivereasy.png",features:["Commande en ligne","Suivi en temps réel","Optimisation des trajets","Gestion des restaurants","Système de notation"],technologies:["Vue.js","TypeScript","Express.js","MySQL"],documentationUrl:"./docs/Livrable_Deliver.pdf",demoUrl:"./docs/DocTechniqueDeliver.pdf"},{id:4,title:"NurseCare",date:"2025",description:"Application web de gestion pour cabinet d'infirmiers permettant le suivi des patients et la planification des tournées.",image:"./images/nursecare.png",features:["Gestion des dossiers patients","Planification des tournées","Suivi des traitements","Génération de PDF","Interface responsive"],technologies:["Vue.js","TypeScript","Express.js","MySQL"],documentationUrl:"./docs/Livrable_NurseCare.pdf",demoUrl:"./docs/DocTechniqueNurseCare2.pdf"},{id:5,title:"Carist-Si",date:"2025",description:"Une application lourde de gestion des stocks et des emplacements de colis permettant aux caristes de gérer efficacement l'entrepôt.",image:"./images/carist.png",features:["Gestion des emplacements de colis","Création des emplacements","Création des colis"],technologies:["Kotlin","Application lourde"],documentationUrl:"./docs/",demoUrl:"./docs/"}]);return(z,s)=>(a(),i("div",h,[s[3]||(s[3]=e("div",{class:"projects-header"},[e("h2",{class:"section-title reveal-on-scroll reveal-bottom"},"Mes Projets"),e("p",{class:"subtitle reveal-on-scroll reveal-bottom reveal-delay-1"},"Découvrez mes réalisations en BTS SIO")],-1)),e("div",y,[(a(!0),i(n,null,d(m.value,t=>(a(),i("article",{key:t.id,class:c(["project-card reveal-on-scroll",t.id%2===0?"reveal-right":"reveal-left"]),style:{width:"100% !important",maxWidth:"none !important"}},[e("div",b,[e("img",{src:t.image,alt:t.title},null,8,x)]),e("div",S,[e("header",U,[e("h2",j,r(t.title),1),e("p",C,r(t.date),1)]),e("p",k,r(t.description),1),e("div",D,[s[0]||(s[0]=e("h3",null,"Fonctionnalités principales :",-1)),e("ul",L,[(a(!0),i(n,null,d(t.features,(o,l)=>(a(),i("li",{key:o,class:c(["reveal-on-scroll reveal-left",`reveal-delay-${l%5+1}`])},r(o),3))),128))])]),e("div",P,[(a(!0),i(n,null,d(t.technologies,(o,l)=>(a(),i("span",{key:o,class:c(["tech-tag reveal-on-scroll reveal-scale",`reveal-delay-${l%5+1}`])},r(o),3))),128))]),e("footer",T,[e("a",{href:t.documentationUrl,target:"_blank",class:"btn btn-primary"},s[1]||(s[1]=[e("span",{class:"icon"},"📄",-1),p(" Doc ")]),8,w),t.demoUrl?(a(),i("a",{key:0,href:t.demoUrl,target:"_blank",class:"btn btn-secondary"},s[2]||(s[2]=[e("span",{class:"icon"},"🔗",-1),p(" Démo ")]),8,G)):f("",!0)])])],2))),128))])]))}}),O=_(V,[["__scopeId","data-v-178fc20a"]]);export{O as default};
