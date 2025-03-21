import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Si vous utilisez le plugin vue-devtools, importez-le aussi
import VueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'node:path'
import fs from 'node:fs'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/',
  plugins: [
    vue(),
    VueDevTools(), // Si vous l'utilisez
    {
      name: 'copy-404-html',
      closeBundle() {
        // Créer et copier le fichier 404.html après la génération du bundle
        if (process.env.NODE_ENV === 'production') {
          // Lire le contenu de index.html
          const indexPath = resolve(__dirname, 'dist/index.html')
          const indexContent = fs.readFileSync(indexPath, 'utf-8')
          
          // Créer le contenu du fichier 404.html
          const content404 = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="./images/logoP.jpg" sizes="128x128" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Nathan</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
      rel="stylesheet"
    />
    <script>
      // Récupérer le chemin actuel et le stocker
      const pathSegments = window.location.pathname.split('/');
      const repoName = pathSegments[1]; // Récupérer le nom du repo (Portfolio)
      const path = '/' + pathSegments.slice(2).join('/'); // Récupérer le chemin après le nom du repo
      
      // Stocker le chemin sans le nom du repo dans sessionStorage
      sessionStorage.setItem('redirect', path);
      
      // Rediriger vers la page d'index du repo
      window.location.href = '/' + repoName;
    </script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>`
          
          // Écrire le fichier 404.html
          fs.writeFileSync(resolve(__dirname, 'dist/404.html'), content404, 'utf-8')
          
          // Modifier l'index.html pour ajouter le script de redirection
          let modifiedIndex = indexContent
          
          // Vérifier si le script de redirection existe déjà
          if (!modifiedIndex.includes('sessionStorage.getItem(\'redirect\')')) {
            // Ajouter le script avant les autres scripts
            modifiedIndex = modifiedIndex.replace(
              '<head>',
              `<head>
    <script>
      // Vérifier s'il y a une redirection à traiter
      const redirect = sessionStorage.getItem('redirect');
      if (redirect) {
        // Effacer la redirection du sessionStorage
        sessionStorage.removeItem('redirect');
        // Pousser le chemin dans l'historique sans recharger la page
        history.pushState(null, null, redirect);
      }
    </script>`
            )
            
            // Écrire le fichier index.html modifié
            fs.writeFileSync(indexPath, modifiedIndex, 'utf-8')
          }
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // Améliorer la gestion des assets
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})