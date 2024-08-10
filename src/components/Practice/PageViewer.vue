<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
  page: {
    pageTitle: string
    content: string
  }
}>()

const page = computed(
  () =>
    props.page || {
      pageTitle: 'Default Title',
      content: 'Default Content'
    }
)
</script>

<template>
  <div id="content" class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<style scoped>
.emphasize {
  font-weight: bold;
  color: rgb(55, 118, 59);
}
</style>
