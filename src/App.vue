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
</script>

<style scoped>
header, footer {
  width: 750px;
  margin: auto;
  justify-content: space-between;
}

.logo {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
}

header {
  display: block;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  margin: auto;
  padding: 0.01rem;
}

header h1 {
  color: white;
  background-color: #69447D;
  font-size: larger;
  font-family: 'Times New Roman', Times, serif;
}

header img {
    background-color: #69447D;
    display: inline-block;
    justify-content: center;
    width: 150px;
    height: 150px;
    padding: 3rem;
    border-radius: 55%;
}

header h2 {
  color: black;
  background-color: #00b9b1;
}

.address {
  width: 94.5%;
  display: flex;
  justify-content: space-between;
  margin: auto 5px;
  padding: 3rem;
  line-height: 1.5;
}


.aboutme {
  width: 50%;
  margin: auto;
  color:black
}

p {
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: #636097;
  margin: auto;
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
  display: block;
  justify-content: center;
  align-items: center;
  background-color: #69447D;
  padding: 0.01rem;
}

.logo-media {
  display: flex;
  margin: auto;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 1rem;
}

.notfound {
  h1 {
    color: white;
    background-color: gray;
    font-family: 'Times New Roman', Times, serif;
    font-size: xx-large;
  }
  h2 {
    color: white;
    background-color: gray;
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
  }
  img {
    margin: auto;
    width: 400px;
    height: 400px;
    padding: 1rem;
    display: block;
  }
}
</style>
