<template>
  <div v-if="AllImages" class="mt-3 px-4">
    <div class="grid grid-cols-2 lg:grid-cols-8 gap-3">
      <RouterLink v-for="(nasaImage,index) in AllImages" :key="index" :to="{name:'Details',query:{id:nasaImage.id}}">
      <div  class=" shadow relative group px-2 py-2 rounded-xl !overflow-hidden hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer">
        <img :src="nasaImage.img_src" class="w-full h-[200px]  !rounded-xl" />
       <div class="flex justify-between">
        <div>
          <div class=" px-2 text-black group-hover:text-white py-2 w-full" >
            <div class="font-medium">
              {{ nasaImage.rover.name +" Rover" }}
            </div>
            <div class="text-sm">
              {{ nasaImage.camera.full_name   }}
            </div>
           </div>
        </div>
        <div class="py-3">
            <img src="chevron_right.svg" class="h-10 w-10 group-hover:bg-white rounded-lg"  />
        </div>
       </div>
      </div>
    </RouterLink>
    </div>
  </div>
  <div v-else>
    <Skeletonn></Skeletonn>
  </div>
</template>
<script setup lang="ts">
import { apiClient } from '@/utils/api'
import { reactive } from 'vue'
import Skeletonn from './Skeleton.vue'
import { NasaImage } from '@/utils/globalTypes'
import { useImageStore } from '@/stores/photos'
const AllImages = reactive<NasaImage[]>([])
const loadProducts = () => {
  apiClient().then(res => res.json()).then(d => {
    AllImages.push(...d.photos)
    useImageStore().allImages = d.photos
  }).catch(e => {
    alert(e)
  })
}
loadProducts()
</script>
