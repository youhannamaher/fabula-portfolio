# Portfolio de Fabula Ayman

Bienvenue dans ton portfolio professionnel ! Ce site a été conçu pour t'aider dans ta candidature au **Master 1 Création numérique, mention Arts et Technologies** à l'Université Toulouse Jean Jaurès.

## 🚀 Comment l'utiliser (Pour Windows)

C'est très simple, tu n'as pas besoin de coder.

### 1. Voir ton portfolio
Double-clique sur le fichier :
👉 **`open-portfolio-preview.cmd`**

Cela va :
- Installer ce qu'il faut (la première fois).
- Scanner tes vidéos.
- Ouvrir ton navigateur automatiquement sur ton portfolio.

---

### 📱 Voir sur ton Téléphone
Pour tester ton portfolio sur ton téléphone :
1. Connecte ton téléphone au **même réseau WiFi** que ton ordinateur.
2. Lance le site avec `open-portfolio-preview.cmd`.
3. Tape l'adresse suivante dans le navigateur de ton téléphone :
   👉 **`http://172.20.10.4:5173`**

---

### 2. Ajouter des vidéos
1. Va dans le dossier **`public/videos/`**.
2. Copie tes fichiers vidéo dedans (formats `.mp4`, `.webm`, `.mov`).
3. Pour que les titres soient jolis, nomme tes fichiers comme ceci : `Ma_Super_Video.mp4` deviendra "Ma Super Video" sur le site.
4. Une fois les vidéos ajoutées, double-clique sur :
👉 **`update-videos-preview.cmd`**
5. Rafraîchis la page de ton navigateur.

### 3. Changer ta photo de profil
1. Mets ta photo dans **`public/images/`** et nomme-la `profile.jpg`.
2. Le site la reconnaîtra automatiquement (ou tu peux modifier le chemin dans `src/data/profile.ts`).

### 4. Ajouter ton CV
1. Mets ton CV en PDF dans **`public/documents/`**.
2. Nomme-le exactement : `Fabula-Ayman-CV.pdf`.

---

## 🛠 Personnalisation (Optionnel)

Si tu veux changer tes textes, ton email ou tes expériences :
1. Ouvre le fichier **`src/data/profile.ts`** avec un bloc-notes.
2. Modifie les textes entre les guillemets `" "`.
3. Enregistre le fichier.

---

## 📄 Exporter pour l'université (Book de pratique)

Le site est optimisé pour l'impression :
1. Ouvre ton portfolio dans Chrome ou Edge.
2. Appuie sur `Ctrl + P` (Imprimer).
3. Choisis "Enregistrer au format PDF".
4. Le site cachera automatiquement les boutons et le menu pour créer un document propre et professionnel.

---

## 🌍 Déploiement (Plus tard)

Quand tu seras prête à mettre le site en ligne (gratuitement sur GitHub Pages par exemple), il faudra :
1. Créer un compte GitHub.
2. Pousser les fichiers sur un "Repository".
3. Utiliser une "GitHub Action" pour déployer le dossier `dist/`.

*(Je peux t'aider pour cette étape quand tu le souhaites !)*
