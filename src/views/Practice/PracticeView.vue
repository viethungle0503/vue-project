<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PageViewer from '@/components/Practice/PageViewer.vue'
import NavbarContainer from '@/components/Practice/NavbarContainer.vue'

const activePage = ref<number>(0)

const getPages = async () => {
  let response = await fetch('pages.json')
  let data = await response.json()
  pages.value = data
}

const pages = ref<
  {
    link: {
      text: string
      url: string
    }
    pageTitle: string
    content: string
  }[]
>([])

onMounted(() => {
  getPages()
})
</script>

<template>
  <main>
    <NavbarContainer
      :pages="pages"
      :activePage="activePage"
      :navLinkClick="(index: number) => (activePage = index)"
    />
    <PageViewer v-if="pages.length > 0" :page="pages[activePage]" />
  </main>
</template>

<style scoped></style>
