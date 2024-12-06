<template>
    <div class="logo">
      <a href="./src/assets/logo.svg" target="_blank">
        <img src="./src/assets/logo.svg" alt="logo">
      </a>
    </div>
</template>

<script setup>
const logo = [
  {
    title: "link-img",
    image: "./src/assets/logo.svg",
  },
  ];
  // Affciher le logo au survol

</script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
}
</style>

