<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import NavbarContainer from '@/components/Practice/NavbarContainer.vue'

const activePage = ref<number>(0)
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

const pages = ref<
  {
    link: {
      text: string
      url: string
    }
    pageTitle: string
    content: string
    published: boolean
  }[]
>([])

const pageCreated = (pageObj: any) => {
  pages.value.push(pageObj)
}

const emitter: any = inject('emitter')

onMounted(async () => {
  await getPages()

  emitter.on('navbarLinkActivated', (index: number) => {
    activePage.value = index
  })
})
</script>

<template>
  <main v-if="!isLoading">
    <navbar-container :pages="pages" :activePage="activePage"></navbar-container>
    <router-view></router-view>
  </main>
  <div v-else>Loading...</div>
</template>

<style scoped></style>
