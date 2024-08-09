<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  pageTitle: String,
  content: String
})
</script>

<template>
  <div id="content" class="container">
    <h1>{{ pageTitle }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<style scoped></style>
