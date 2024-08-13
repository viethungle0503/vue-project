<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  page: {
    link: {
      text: string
      url: string
    }
    pageTitle: string
    content: string
  }
  index: number
}>()
</script>

<template>
    <router-link
      :to="`/practice/${index}`"
      :index="index"
      class="nav-link"
      :title="`This link goes to somewhere ${page.link.text}`"
      active-class="active emphasize"
      aria-current="page"
      v-bind:href="page.link.url"
      >{{ page.link.text }}</router-link
    >
</template>

<style scoped>
.emphasize {
  font-weight: bold;
  text-decoration: underline !important;
}
</style>
