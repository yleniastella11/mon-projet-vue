<template>
    <header>
      <nav>
        <div class="menu">
        <router-link to="/#about">Présentation</router-link>
        <router-link to="/#contact">Contacts</router-link>
        <router-link to="/#projects">Projets</router-link>
      </div>
        <h1>Portfolio de Ylenia Stella</h1>
        <figure>
      <a href="./src/assets/IMG_2731.JPG" target="_blank">
        <img src="./assets/profile-picture.jpg" alt="photo de profil">
       </a>
      </figure>
      <div class="address">
      <h2>Mes contacts</h2>
      <address>
        <a href="25A rue de Schoeneck>25A">rue de Schoeneck</a>
        <a href="mailto:ylenia.stella@outlook.fr">ylenia.stella@outlook.fr</a>
        <a href="tel:0764331723">0764331723</a>
      </address>
    </div>
      <div class="aboutme">
        <p>
    Je m'appelle Stella Ylenia, j'apprends le développement web via le CEF. 
    Avant de me lancer dans cette formation, je voulais entrer dans la gendarmerie mais ayant eu un petit soucis au niveau de ma santé physique après une opération de la main quelques années auparavant, j'ai dû me résoudre abandonner ce projet. 
    </p>
    <p>
    J'avais arrêté mes études humanités et sciences sociales afin de me préparer au mieux au concours qui m'aurait permis d'entrer dans la gendarmerie, mais mon médecin ne m'a pas remplie la feuille attestant que j'étais bien apte à passer l'épreuve sportive car le problème de ma main était quelque peu instable. 
    Ne savant pas quoi faire, j'ai décidé de travailler en gardant en tête le concours de gendarmerie. Ma main allait de mieux en mieux et je m'étais dit que c'était le moment de recommencer le concours. 
    </p>
    <p>
    Cependant, ma main m'a (re)lachée brusquement. J'ai vu des spécialistes qui m'ont affirmés que même si ça ira mieux, j'aurai toujours une certaine fragilité à ce niveau.
    Mes rêves d'entrée un jour dans la gendarmerie se sont donc éteints, il fallait que je trouve quelque chose pour mon avenir. 
    </p>
    <p>
    Je suis tombée sur une vidéo parlant du développement web. Je me suis d'abord informée sur ce métier pendant plusieurs mois avant de me lancer.
    Après plusieurs mois de réfléxion, je me suis donc lancée dans la formation de développeuse web via le CEF. Je souhaite me perfectionner dans ce domaine qui m'intéresse de plus en plus. Je vous laisse mes projets déjà réalisés via le CEF que vous pourrez visionner.
  </p> 
      </div>
      </nav>
    </header>
</template>

<script setup>
const img = [
  {
    title: "profile-picture",
    image: "./assets/profile-picture.jpg"
  },
  ];
  // Afficher la photo de profil 
</script>

<style scoped>
header {
    color: black;
    line-height: 1.5;
    margin: auto;
}

header h1 {
    color: black;
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

</style>

