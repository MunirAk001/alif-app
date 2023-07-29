<template>
<div class="max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden">
  <img :src="currentImage.img_src" :alt="`Image from Sol ${currentImage.sol}`" class="w-full h-64 object-cover">
  <div class="px-6 py-4">
    <h2 class="text-xl font-bold mb-2">{{ currentImage.camera.full_name }}</h2>
    <p class="text-gray-700 mb-4">Taken on {{currentImage.earth_date}}</p>
    <p class="text-gray-700">Rover: {{ currentImage.rover.name }}</p>
    <p class="text-gray-700">Status: {{ currentImage.rover.status }}</p>
  </div>
</div>

</template>
<script setup lang="ts">
import { useImageStore } from '@/stores/photos'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { NasaImage } from '@/utils/globalTypes'
const route = useRoute()
const currentImage = ref()
const loadDetails = () => {
  useImageStore().allImages.forEach((image:NasaImage) => {
    if (image.id === parseInt(route.query.id?.toString() ?? '1')) {
      currentImage.value = image
    }
  })
}
loadDetails()
</script>
