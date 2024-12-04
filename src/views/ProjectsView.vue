<template>
    <main>
    <div class="gallery">
      <h3>Mes projets</h3>
        <section v:for="project in projects">
          <h4>{{ project.title }}</h4>
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
</style>