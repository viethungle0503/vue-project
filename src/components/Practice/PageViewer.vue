<script setup lang="ts">
import { inject, onMounted, ref, watch } from 'vue'
// import { useRoute } from 'vue-router'

// const route = useRoute()

const props = defineProps<{
  index: number | string
}>()

const $pages = inject<{
  getSinglePage: (id: number) => { pageTitle: string; content: string }
  getPages: () => {
    link: { text: string; url: string }
    pageTitle: string
    content: string
    published: boolean
  }[]
}>('$pages')

const page = ref({
  pageTitle: 'Default Title',
  content: 'Default Content'
})

watch(
  () => props.index,
  (index) => {
    const pageData = $pages!.getSinglePage(index as number)
    page.value = pageData
  }
)

// watch(
//   () => route.params.index,
//   (index) => {
//     const pageData = pages!.getSinglePage(Number(index))
//     page.value = pageData
//   }
// )

onMounted(() => {
  const pageData = $pages!.getSinglePage(props.index as number)
  // const pageData = pages!.getSinglePage(Number(route.params.index))
  page.value = pageData
})


</script>

<template>
  <div v-if="page" id="content" class="container">
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
