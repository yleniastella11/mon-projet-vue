<template>
  <Header />
  <main>
    <RouterView />
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
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  background-color: #1F72D4;
  line-height: 1.5;
}

header img {
  display: block;
  width: 400px;
  height: 400px;
  margin: auto 4px;
}

h1 {
  color: black;
  background-color: white;
  font-size: larger;
  margin: auto;
}

img {
  display: block;
  width: 200px;
  height: 200px;
}

h2 {
  color: black;
  margin: auto;
  font-size: 45px;
}

main {
  width: 65%;
  margin: 2.5rem;
  color: white;
}

nav {
  width: 100%;
  font-size: 15px;
  text-align: center;
  margin-top: 1rem;
  color: white;
}

footer {
  background-color: #0682D3;
  padding: 0.1rem;
}

.logo-media {
  display: block;
  margin: 0 auto 2rem;
}

footer img {
  display: block;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}
</style>