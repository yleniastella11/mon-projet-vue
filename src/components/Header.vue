<template>
    <header>
      <nav>
      <div class="menu">
        <router-link to="/#about">Présentation</router-link>
        <router-link to="/#contact">Contacts</router-link>
        <router-link to="/#projects">Projets</router-link>
      </div>
      </nav>
      <figure>
      <a href="./src/assets/IMG_2731.JPG" target="_blank">
        <img src="./assets/profile-picture.jpg" alt="photo de profil">
       </a>
      </figure>
    </header>
</template>

<script setup>
import AboutMeView from "../views/AboutMeView.vue";
import ContactMeView from "../views/ContactMeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
</script>
