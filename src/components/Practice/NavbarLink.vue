<script setup lang="ts">
import { defineProps, computed, inject } from 'vue'
const props = defineProps<{
  page: {
    link: {
      text: string
      url: string
    }
    pageTitle: string
    content: string
  }
  isActive: boolean
  index: number
}>()

const activeClasses = computed(() => {
  return {
    active: props.isActive,
    emphasize: props.isActive
  }
})

const emitter: any = inject('emitter')

const navbarLinkClick = (index: number) => {
  emitter.emit('navbarLinkActivated', index)
}
</script>

<template>
  <li>
    <a
      v-bind:href="page.link.url"
      class="nav-link"
      :class="activeClasses"
      aria-current="page"
      :title="`This link goes to somewhere ${page.link.text}`"
      @click.prevent="navbarLinkClick(index)"
      >{{ page.link.text }}</a
    >
  </li>
</template>

<style scoped>
.emphasize {
  font-weight: bold;
  text-decoration: underline !important;
}
</style>
