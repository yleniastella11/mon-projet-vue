<template>
  <Header />
  <main>
    <RouterView />
    <p />
  </main>
  <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
const logo = [
  {
    title: "link-img",
    image: "src/assets/logo.svg",
  },
  ];
  // Affciher le logo au survol

</script>

<style scoped>
header, main, footer {
    width: 700px;
    display: flex; /* Ajouté pour activer Flexbox */
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
}

header {
    color: black;
    background-color: #1F72D4;
    line-height: 1.5;
    margin: auto;
}

header h1 {
    color: black;
    background-color: white;
    font-size: larger;
    font-family: 'Times New Roman', Times, serif;
}

header img {
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: auto;
    padding: 1rem;
}

main {
  color: black;
  background-color: #C9A6EB;
  margin: auto; 
}

footer {
    align-items: center;
    margin: auto;
    background-color: #1F72D4;
}

.logo-media {
    display: inline-flex;
    justify-content: center;
    width: 50px;
    height: 50px;
}
</style>
