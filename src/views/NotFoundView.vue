<template>
    <h1>Erreur 404</h1>
    <figure>
      <a href="./src/assets/img/erreur-page-404.png">
        <img src="./assets/img/erreur-page-404.png" alt="Photo de la page 404">
      </a>
    </figure>
    <h2>La page est introuvable</h2>
    <Router-Link>Retour</Router-Link>
</template>

<script setup>
const imgElement = document.createElement ('img');
imgElement.src = Image;
document.body.appendChild(imgElement);
// Page 404
</script>

<style scoped>
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
</style>