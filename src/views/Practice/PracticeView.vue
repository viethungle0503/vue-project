<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
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
    published: boolean
  }[]
>([])

const pageCreated = (pageObj: any) => {
  pages.value.push(pageObj)
}

const emitter: any = inject('emitter')

onMounted(() => {
  getPages()

  emitter.on('navbarLinkActivated', (index: number) => {
    activePage.value = index
  })
})
</script>

<template>
  <main>
    <navbar-container
      :pages="pages"
      :activePage="activePage"
    ></navbar-container>
    <page-viewer v-if="pages.length > 0" :page="pages[activePage]"></page-viewer>
    <create-page @page-created="pageCreated"></create-page>
  </main>
</template>

<style scoped></style>
