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
  background-color: #69447D;
  max-height: 80px;
}

.logo_media a {
  display: inline-block;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 1rem;
}
</style>