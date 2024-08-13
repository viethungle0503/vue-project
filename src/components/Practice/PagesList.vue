<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'

const pages = ref<any[]>()
const pagesInject = inject<{
  getSinglePage: (id: number) => { pageTitle: string; content: string }
  getAllPages: () => {
    link: { text: string; url: string }
    pageTitle: string
    content: string
    published: boolean
  }[]
}>('pages')

onMounted(() => {
  pages.value = pagesInject!.getAllPages()
})
</script>

<template>
  <p>This is the page list</p>
  <ul class="list-group">
    <li v-for="(page, index) in pages" :key="index" class="list-group-item list-group-item-warning">
      <router-link :to="{ name: 'page-viewer', params: { index } }">{{
        page.pageTitle
      }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
