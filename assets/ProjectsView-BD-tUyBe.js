import{d as u,u as v,r as f,c as a,a as e,F as n,b as c,n as d,t as r,e as g,f as p,o as i,_}from"./index-BdagKJGg.js";const h={class:"projects"},y={class:"projects-grid",style:{display:"grid !important","grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr)) !important",gap:"1.5rem !important",width:"100% !important"}},b={class:"project-image"},S=["src","alt"],j={class:"project-content"},x={class:"project-header reveal-on-scroll reveal-bottom reveal-delay-1"},D={class:"project-title"},k={class:"project-date"},C={class:"project-description reveal-on-scroll reveal-bottom reveal-delay-2"},N={class:"project-details reveal-on-scroll reveal-bottom reveal-delay-3"},U={class:"features-list"},T={class:"tech-stack reveal-on-scroll reveal-bottom reveal-delay-4"},V={class:"project-actions reveal-on-scroll reveal-bottom reveal-delay-5",style:{display:"flex !important","flex-direction":"row !important"}},L=["href"],z=["href"],O=u({__name:"ProjectsView",setup(w){v();const m=f([{id:1,title:"NurseCare",date:"2025",description:"Application de gestion pour cabinet d'infirmiers permettant le suivi des patients et la planification des tournées.",image:"./images/nursecare.png",features:["Gestion des dossiers patients","Planification des tournées","Suivi des traitements","Interface responsive","Système de notifications"],technologies:["Vue.js","TypeScript","Node.js","MySQL"],documentationUrl:"public/docs/Livrable NurseCare.pdf",demoUrl:"public/docs/DocTechniqueNurseCare.docx.pdf"},{id:2,title:"DeliverEasy",date:"2024",description:"Application de livraison optimisant les trajets des livreurs et la gestion de ceux-ci.",image:"./images/delivereasy.png",features:["Commande en ligne","Suivi en temps réel","Optimisation des trajets","Gestion des restaurants","Système de notation"],technologies:["Vue.js","TypeScript","Node.js","MySQL"],documentationUrl:"public/docs/Livrable projet Deliver.pdf",demoUrl:"public/docs/DocTechniqueDeliver.pdf"},{id:3,title:"Organi'zeur",date:"2024",description:"Application de gestion d'événements et de planification permettant aux utilisateurs d'organiser leur temps efficacement.",image:"./images/logoOrganizeur.avif",features:["Création et gestion d'événements","Calendrier interactif","Rappels et notifications","Partage d'événements","Synchronisation multi-appareils"],technologies:["Vue.js","TypeScript","Node.js","MySQL"],documentationUrl:"public/docs/Livrable Organizeur.pdf",demoUrl:"public/docs/DocTechniqueOrganizeur.pdf"}]);return(P,s)=>(i(),a("div",h,[s[3]||(s[3]=e("div",{class:"projects-header reveal-on-scroll reveal-bottom"},[e("h1",null,"Mes Projets"),e("p",{class:"subtitle"},"Découvrez mes réalisations en BTS SIO")],-1)),e("div",y,[(i(!0),a(n,null,c(m.value,t=>(i(),a("article",{key:t.id,class:d(["project-card reveal-on-scroll",t.id%2===0?"reveal-right":"reveal-left"]),style:{width:"100% !important",maxWidth:"none !important"}},[e("div",b,[e("img",{src:t.image,alt:t.title},null,8,S)]),e("div",j,[e("header",x,[e("h2",D,r(t.title),1),e("p",k,r(t.date),1)]),e("p",C,r(t.description),1),e("div",N,[s[0]||(s[0]=e("h3",null,"Fonctionnalités principales :",-1)),e("ul",U,[(i(!0),a(n,null,c(t.features,(o,l)=>(i(),a("li",{key:o,class:d(["reveal-on-scroll reveal-left",`reveal-delay-${l%5+1}`])},r(o),3))),128))])]),e("div",T,[(i(!0),a(n,null,c(t.technologies,(o,l)=>(i(),a("span",{key:o,class:d(["tech-tag reveal-on-scroll reveal-scale",`reveal-delay-${l%5+1}`])},r(o),3))),128))]),e("footer",V,[e("a",{href:t.documentationUrl,target:"_blank",class:"btn btn-primary"},s[1]||(s[1]=[e("span",{class:"icon"},"📄",-1),p(" Doc ")]),8,L),t.demoUrl?(i(),a("a",{key:0,href:t.demoUrl,target:"_blank",class:"btn btn-secondary"},s[2]||(s[2]=[e("span",{class:"icon"},"🔗",-1),p(" Démo ")]),8,z)):g("",!0)])])],2))),128))])]))}}),M=_(O,[["__scopeId","data-v-f2375f35"]]);export{M as default};
