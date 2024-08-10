<script setup lang="ts">
import { computed, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import PageViewer from '../components/PageViewer.vue'
const activePage = ref<number>(0)
const useDarkNavBar = ref<boolean>(true)
const navbarClass = computed(() => {
  return {
    'navbar-light': !useDarkNavBar.value,
    'bg-light': !useDarkNavBar.value,
    'navbar-dark': useDarkNavBar.value,
    'bg-dark': useDarkNavBar.value
  }
})
const theme = computed(() => {
  return useDarkNavBar.value ? 'dark' : 'light'
})

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

// v-bind="activePage === index ? { class: 'nav-link active' } : { class: 'nav-link' }"
// :class="{ 'navbar-light bg-light': !useDarkNavBar, 'navbar-dark bg-dark': useDarkNavBar }"
// :class="navbarClass"
// :class="[useDarkNavBar ? 'navbar-dark bg-dark' : 'navbar-light bg-light','navbar', 'navbar-expand-lg']"
</script>

<template>
  <main>
    <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Vue</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(page, index) in pages" class="nav-item" v-bind:key="index">
            <a
              v-bind:href="page.link.url"
              class="nav-link"
              :class="{ active: activePage == index }"
              aria-current="page"
              :title="`This link goes to somewhere ${page.link.text}`"
              @click.prevent="activePage = index"
              >{{ page.link.text }}</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-primary" @click.prevent="useDarkNavBar = !useDarkNavBar">
            Toggle Navbar
          </button>
        </form>
      </div>
    </nav>
    <PageViewer
      v-bind:pageTitle="pages[activePage].pageTitle"
      :content="pages[activePage].content"
    />
  </main>
</template>
