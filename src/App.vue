<template>
  <header>
    <figure>
      <a href="file:///Users/stellaylenia/Desktop/vue-project/src/assets/IMG_2731.JPG" target="_blank">
        <img src="./assets/profile-picture.jpg" alt="photo de profil">
       </a>
    </figure>
 
    <nav>
    <router-link class="link-img">
      <img src="./assets/logo.svg" alt="logo">
    </router-link>

    <div class="menu">
      <router-link to="/#about">Présentation</router-link>
      <router-link to="/#contact">Contacts</router-link>
      <router-link to="/#projects">Projets</router-link>
    </div>
   
    <div class="address">
      <h3>Mes contacts</h3>
      <address>
        <a href="https://maps.app.goo.gl/W46LJRdHmQdYxzQFA">25A rue de Schhoeneck</a>
        <a href="mailto:ylenia.stella@outlook.fr">ylenia.stella@outlook.fr</a>
        <a href="tel:0764331723">0764331723</a>
      </address>
    </div>
  </nav>
  </header>

  <main>
    <aside>
      <article>
        <p>
          Je m'appelle Stella Ylenia, j'apprends le développement web via le CEF. Je souhaite me perfectionner dans ce domaine qui m'intéresse de plus en plus. Je vous laisse mes projets déjà réalisés via le CEF que vous pourrez visionner.
        </p> 
      </article>
    </aside>
    <div class="gallery">
      <h4>Mes projets</h4>
    </div>
    <h4>Mes projets</h4>
    <a href="file:///Users/stellaylenia/Desktop/developpement%20web/devoir%20niveau%201/cv-main/index.html">CV</a>
    <a href="file:///Users/stellaylenia/Desktop/Capture%20d’écran%202024-09-19%20à%2009.45.14.png">Dynamyser un espace commentaire</a>
    <a href="file:///Users/stellaylenia/Desktop/developpement%20web/devoir%20niveau%201/devoir-le%20cahier%20des%20charges/cahier%20des%20charges.pdf">Le cahier des charges</a>
    </main>
 
  <footer>
    <div class="logo_media">
      <a href="https://github.com/yleniastella11/" target="_blank">
        <img src="./assets/img/logo/github.svg" alt="logo de GitHub">
      </a>
      <a href="https://linkedin.com" target="_blank">
        <img src="./assets/img/logo/linkedin.svg" alt="logo de Linkedin">
      </a>
      <a href="https://instagram.com/yleniia.stella/" target="_blank">
        <img src="./assets/img/logo/instagram.png" alt="logo de instagram">
      </a>
    </div>
  </footer>
</template>

<script setup>
const logo = [
  {
    title: "link-img",
    image: "file:///Users/stellaylenia/Desktop/vue-project/src/assets/logo.svg",
  },
  ];
  // Affciher le logo au survol

  const profilepicture = [
    {
      title: "profile-picture", 
      image: "file:///Users/stellaylenia/Desktop/vue-project/src/assets/IMG_2731.JPG", 
    },
    ];
    // Afficher la photo de profil 
  
  const projects = [
    {
      title: "CV",
      image: "file:///Users/stellaylenia/Desktop/developpement%20web/devoir%20niveau%201/cv-main/index.html",
    },
    {
      title: "Dynamiser un espace commentaire",
      image: "file:///Users/stellaylenia/Desktop/Capture%20d’écran%202024-09-19%20à%2009.45.14.png",
    },
    {
      title: "Le cahier des charges",
      image: "file:///Users/stellaylenia/Desktop/developpement%20web/devoir%20niveau%201/devoir-le%20cahier%20des%20charges/cahier%20des%20charges.pdf",
    },
  ];
 
  const gallery = document.getElementById ('gallery');
  projects.forEach (projects => {
    const imgElement = 
    document.createElement ('img');
    imgElement.src = projects.image;
    imgElement.alt = projects.title;
    imgElement.title = projects.title;
    // Afficher le titre au survol

    gallery.appendChild (imgElement);
  });


</script>

<style scoped>
header, main, footer {
  width: 100%;
}

header {
  line-height: 1.5;
  width: 100%;
  color: white;
  background-color: #1F72D4;
}

header img {
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border-radius: 30%;
  padding: 2rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;

}

header address {
  color: black;
  background-color: #209CD8;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 3rem;
}

nav {
  width: 100%;
  font-size: 15px;
  text-align: center;
  margin-top: 1rem;
  color: white;
}

main {
  color: black;
  background-color: #438BDE;
  width: 100%;
  display: flex;
  text-align: center;
  margin-top: 1rem;
}

h4 {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #00b9b1;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  width: 200px;
  height: 150px;
  border-radius: 5px;
}

footer {
  background-color: #0682D3;
  padding: 0.1rem;
}

footer img {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
}

</style>