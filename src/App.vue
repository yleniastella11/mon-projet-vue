<template>
  <Header />
  <main>
  <div>
    <RouterView />
    <p />
  </div>
  </main>
  <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
import Contact from "./views/ContactMeView.vue"
const logo = [
  {
    title: "link-img",
    image: "src/assets/logo.svg",
  },
  ];
</script>

<style scoped>
header {
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  padding: 0.01rem;
  background-color: #9899E8;
}

header h1 {
  color: black;
  background-color: #69447D;
  font-size: larger;
  font-family: 'Times New Roman', Times, serif;
}

header img {
  background-color: #A3547C;
  display: inline-block;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 55%;
}

.address {
  color: white;
  background-color: #D89EF0;
}

address a {
    color: white;
    text-align: left;  
    padding: 3rem;
}

address a {
    color: white;
    text-align: center;
    padding: 3rem;
}

address a {
    color: white;
    text-align: right;
    padding: 3rem;
}

main {
  background-color: #2290A9;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.contact {
  width: 50%;
  display: inline-block;
  justify-content: space-between;
  margin: auto 5px;
  padding: 5rem;
  line-height: 1.5;
}

p {
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: #636097;
  margin: auto;
}

.gallery {
  img {
  display: block;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  }

  h3 {
  display: block;
  justify-content: center;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  margin: auto;
  padding: 1rem;
  color: black;
  background-color: #00b9b1;
  }

  h4{
  display: block;
  justify-content: center;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  margin: auto;
  padding: 1rem;
  }
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
  background-color: #69447D;
}

.logo_media a {
  display: inline-block;
  justify-content: left;
  align-items: left;
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
