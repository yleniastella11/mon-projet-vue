<template>
    <header>
      <nav>
        <div class="menu">
        <router-link to="/about">Présentation</router-link>
        <router-link to="/contact">Contacts</router-link>
        <router-link to="/projects">Projets</router-link>
      </div>
        <h1>Portfolio de Ylenia Stella</h1>
        <figure>
      <a href="./assets/IMG_2731.JPG" target="_blank">
        <img src="@/assets/profile-picture.jpg" alt="photo de profil">
       </a>
      </figure>
      <div class="address">
      <h2>Mes contacts</h2>
      <address>
        <a href="25A rue de Schoeneck>25A">rue de Schoeneck</a>
        <a href="mailto:ylenia.stella@outlook.fr">ylenia.stella@outlook.fr</a>
        <a href="tel:0764331723">0764331723</a>
      </address>
    </div>
      </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const img = [
  {
    title: "profile-picture",
    image: "./assets/profile-picture.jpg"
  },
];
const logo = [
  {
    title: "logo",
    image: "./assets/img/logo.svg",
  },
];
</script>

<style scoped>
header {
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
  padding: 0.01rem;
}

header h1 {
  color: black;
  background-color: #69447D;
  font-family: 'Times New Roman', Times, serif;
}

header img {
  background-color: #A3547C;
  display: inline-block;
  justify-content: center;
  width: 220px;
  height: 235px;
  border-radius: 50%;
}

h2{
  color: black;
  text-align: center;
  font-size: larger;
}

.address {
  color: white;
  background-color: #D89EF0;
  padding: 1rem;
}

address a {
    color: white;
    text-align: left;
    padding: 5rem;  
}

address a {
    color: white;
    text-align: center;
    padding: 5rem;
}

address a {
    color: white;
    text-align: right;
    padding: 5rem;
}
</style>

