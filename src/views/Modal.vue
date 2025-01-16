<script setup>
import { ref } from "vue";
const props = defineProps({
  isOpen: Boolean,
  currentProject: Object,
});

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

<template>
  <div v-if="isModalOpen" class="modal" @click="closeModal">
    <img :src="currentImage" class="modal-image" />
  </div>

</template>



