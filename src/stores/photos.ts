
import { defineStore } from 'pinia'
export const useImageStore = defineStore('counter', {
  state: () => ({ allImages: [] })
})
