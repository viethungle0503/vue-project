<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PageViewer from '@/components/Practice/PageViewer.vue'
import NavbarContainer from '@/components/Practice/NavbarContainer.vue'
import CreatePage from '@/components/Practice/CreatePage.vue'

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

const pageCreated = (pageObj: any) => {
  console.log(pageObj)
}

onMounted(() => {
  getPages()
})
</script>

<template>
  <main>
    <navbar-container
      :pages="pages"
      :activePage="activePage"
      :navLinkClick="(index: number) => (activePage = index)"
    ></navbar-container>
    <page-viewer v-if="pages.length > 0" :page="pages[activePage]"></page-viewer>
    <create-page :page-created="pageCreated"></create-page>
  </main>
</template>

<style scoped></style>
