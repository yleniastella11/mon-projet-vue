<template>
    <div class="home">
      <a href="./src/assets/img/logo.svg" target="_blank">
        <img src="@/assets/img/logo.svg" alt="logo">
      </a>
    </div>
</template>

<script setup>
const logo = [
  {
    title: "link-img",
    image: "@/src/assets/img/logo.svg",
  },
  ];

</script>

<style scoped>
.home a {
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
}
</style>

