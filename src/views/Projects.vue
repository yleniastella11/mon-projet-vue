<template>
  <div>
    <div v-for="project in projects" :key="project.title">
      <h3>{{ project.title }}</h3>
      <img 
        :src="project.image" 
        :alt="project.title" 
        @click="openModal(project.image)" 
        style="cursor: pointer; width: 100px; height: auto;" 
      />
      <p>{{ project.technos }}</p>
      <p>{{ project.time }}</p>
      <a :href="project.link" target="_blank">Voir le projet</a>
    </div>

    
    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <img :src="currentImage" class="modal-image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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

const isModalOpen = ref(false);
const currentImage = ref('');

const openModal = (image) => {
  currentImage.value = image;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  currentImage.value = '';
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
}
img {
  display: inline-block;
  width: 100px;
  height: 100px;
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