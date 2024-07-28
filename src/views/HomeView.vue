<script setup lang="ts">
import { ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
const activePage = ref<number>(0)
const pages = [
  {
    link: { text: 'Home', url: '/home' },
    pageTitle: 'Home Page',
    content: 'This is the home content'
  },
  {
    link: { text: 'About', url: '/about' },
    pageTitle: 'About Page',
    content: 'This is the about content'
  },
  {
    link: { text: 'Contact', url: '/contact' },
    pageTitle: 'Contact Page',
    content: 'This is the contact content'
  }
]
</script>

<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Vue</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(page, index) in pages" class="nav-item" v-bind:key="index">
            <a
              v-bind:href="page.link.url"
              v-bind="activePage === index ? { class: 'nav-link active' } : { class: 'nav-link' }"
              aria-current="page"
              :title="`This link goes to somewhere ${page.link.text}`"
              @click.prevent="activePage = index"
              >{{ page.link.text }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <h1>{{ pages[activePage].pageTitle }}</h1>
    <p>{{ pages[activePage].content }}</p>
  </main>
</template>
