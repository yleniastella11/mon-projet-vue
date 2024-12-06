<template>
  <Header />
  <div>
    <RouterView />
    <p />
  </div>
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
header, footer {
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.logo {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
}

header {
  display: flex;
  justify-content: center;
  line-height: 1.5;
  margin: auto;
}

header h1 {
  color: white;
  background-color: #69447D;
  font-size: larger;
  font-family: 'Times New Roman', Times, serif;
}

header img {
    display: inline-block;
    justify-content: center;
    width: 150px;
    height: 150px;
}

h2 {
  color: black;
}

address {
  width: 50%;
  margin: auto 5px;
  padding: 3rem;
  line-height: 1.5;
}


.aboutme {
  color:black
}

p {
  width: 650px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: #636097;
}

.gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 200px;
  height: 200px;
}

h3 {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  margin: auto;
  padding: 1rem;
  color: black;
  background-color: #00b9b1;
}

h4{
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  margin: auto;
  padding: 1rem;
}

footer {
  align-items: center;
  margin: auto;
  background-color: #69447D;
}

.logo-media {
    display: inline-block;
    justify-content: center;
    width: 50px;
    height: 50px;
}
</style>
