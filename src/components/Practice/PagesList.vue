<script setup lang="ts">
import type { PagesInjection } from '@/utils/interfaces'
import { inject, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const pages = ref<any[]>()
const $pages = inject<PagesInjection>('$pages')

const counter = reactive({
  count: 0,
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  }
})

const router = useRouter()
const goToPage = (index: number) => {
  router.push({ name: 'page-edit', params: { index } })
}

onMounted(() => {
  pages.value = $pages!.getAllPages()
})
</script>

<template>
  <h4>This is the page list</h4>
  <ul class="list-group">
    <li v-for="(page, index) in pages" :key="index" class="list-group-item list-group-item-warning">
      <router-link :to="{ name: 'page-viewer', params: { index } }">{{ page.pageTitle }}</router-link>
    </li>
  </ul>

  <h4>Pages</h4>
  <div class="text-end">
    <router-link to="/practice/pages/create" class="btn btn-primary btn-sm text-white"
      >New Page</router-link
    >
  </div>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Title</th>
        <th>Link Text</th>
        <th>Is Published</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(page, index) in $pages?.getAllPages()" :key="index" @click="goToPage(index)">
        <td>{{ page.pageTitle }}</td>
        <td>{{ page.link.text }}</td>
        <td>{{ page.published ? 'yes' : 'no' }}</td>
      </tr>
    </tbody>
  </table>

  <p>{{ counter.count }}</p>
  <button @click.prevent="counter.increment" class="btn btn-success me-1">Tăng</button>
  <button @click.prevent="counter.decrement" class="btn btn-danger ms-1">Giảm</button>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

.table.table-hover tr:hover {
  cursor: pointer;
}
</style>
