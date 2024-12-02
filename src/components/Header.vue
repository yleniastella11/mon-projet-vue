<template>
    <header>
      <nav>
        <h1>Portfolio de Ylenia Stella</h1>
        <figure>
      <a href="./src/assets/IMG_2731.JPG" target="_blank">
        <img src="./assets/profile-picture.jpg" alt="photo de profil">
       </a>
      </figure>
      <div class="menu">
        <router-link to="/#about">Présentation</router-link>
        <router-link to="/#contact">Contacts</router-link>
        <router-link to="/#projects">Projets</router-link>
      </div>
      </nav>
    </header>
</template>

<script setup>
const img = [
  {
    title: "profile-picture",
    image: "./assets/profile-picture.jpg"
  },
  ];
  // Afficher la photo de profil 
</script>

