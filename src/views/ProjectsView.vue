<template>
    <main>
    <div class="gallery">
      <h4>Mes projets</h4>
        <section v:for="project in projects">
          <h5>{{ project.title }}</h5>
        </section>
    </div>
    </main>
</template>

<script setup>
const projects = [
    {
      title: "CV",
      image: "./src/assets/img/cv.png",
      technos : "html,css",
      link: "https://github.com/yleniastella11/cv-main"
    },
    {
      title: "Dynamiser un espace commentaire",
      image: "./src/assets/img/dynamiserunespacecommentaire.png",
      technos: "javascript",
      link: "https://github.com/yleniastella11/commentaire"
    },
    {
      title: "Le cahier des charges",
      image: "./src/assets/img/cahierdescharges.pdf",
      technos: "word",
    },
  ];

  
</script>

<style scoped>
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
</style>