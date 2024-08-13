<script setup lang="ts">
import { onMounted, ref } from 'vue'
import NavbarContainer from '@/components/Practice/NavbarContainer.vue'
import type { DetailedPage } from '@/utils/interfaces'

const isLoading = ref(true)

const getPages = async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}pages.json`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError("Oops, we haven't got JSON!")
    }
    const data = await response.json()
    pages.value = data
    localStorage.setItem('pages', JSON.stringify(data))
    isLoading.value = false
  } catch (error) {
    console.log('Failed to fetch pages:', error)
  }
}

const pages = ref<DetailedPage[]>([])

const pageCreated = (pageObj: any) => {
  pages.value.push(pageObj)
}

onMounted(async () => {
  await getPages()
})
</script>

<template>
  <main v-if="!isLoading">
    <navbar-container></navbar-container>
    <router-view></router-view>
  </main>
  <div v-else>Loading...</div>
</template>

<style scoped></style>
