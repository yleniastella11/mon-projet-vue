<template>
    <div class="gallery">
      <h3>Mes projets</h3>
        <section v-for="project in projects">
          <h4>{{ project.title }}</h4>
            <img :src="project.image" alt="projects.image">
            <button @click.exact="onClick">Voir plus</button>
        </section>
    </div>
</template>

<script setup>
const projects = [
  {
    title: "CV",
    image: "./src/assets/img/cv.png",
    technos: "html, css",
    link: "https://github.com/yleniastella11/cv-main",
    time: "3/7/2024",
  },
  {
    title: "Dynamiser un espace commentaire",
    image: "./src/assets/img/dynamiserunespacecommentaire.png",
    technos: "javascript",
    link: "https://github.com/yleniastella11/commentaire",
    time: "30/8/2024",
  },
  {
    title: "Le cahier des charges",
    image: "./src/assets/img/lecahierdescharges.png",
    technos: "word",
    time: "19/6/2024",
  },
];


const onClick = () => {
  console.log('Le projet est ouvert !');
};
</script>

<style scoped>
button {
  color: black; 
  padding: 12px; 
  border: none; 
  border-radius: 5px; 
}
img {
  display: block;
  width: 75px;
  height: 75px;
}

h3 {
  display: block;
  justify-content: center;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: medium;
  padding: 0.5rem;
  color: black;
  background-color: #00b9b1;
}

h4{
  display: block;
  text-align: left;
  font-family: 'Times New Roman', Times, serif;
  margin: auto;
  padding: 1rem;
}
</style>