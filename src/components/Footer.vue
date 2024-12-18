<template>
     <footer>
    <div class="logo_media">
      <a href="https://github.com/yleniastella11/" target="_blank">
        <img src="@/assets/img/logo/github.svg" alt="logo de GitHub">
      </a>
      <a href="https://linkedin.com" target="_blank">
        <img src="@/assets/img/logo/linkedin.svg" alt="logo de Linkedin">
      </a>
      <a href="https://instagram.com/yleniia.stella/" target="_blank">
        <img src="@/assets/img/logo/instagram.png" alt="logo de instagram">
      </a>
    </div>
  </footer>
</template>

<script setup>
const logo = [
  {
    title: "GitHub",
    image: "./assets/img/logo/github.svg",
  },
  {
    title: "Linkedin",
    image: "./assets/img/logo/linkedin.svg",
  },
  {
    title: "Instagram",
    image: "./assests/img/logo/instagram.png",
  },
];
</script>

<style scoped>
footer {
  padding: 6rem;
}

.logo_media {
  background-color: #69447D;
  display: inline-block;
  justify-content: space-between;
  align-items: center;
  width: 35px;
  height: 35px;
} 


</style>