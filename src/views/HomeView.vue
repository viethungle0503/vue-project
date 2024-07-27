<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
const links = [
  { text: 'Home', url: '/home' },
  { text: 'About', url: '/about' },
  { text: 'Contact', url: '/contact' }
]
const pageTitle = 'Hello, Vue'
const content = 'Welcome to my wonderful world of Vue app!'
</script>

<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Vue</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(link, index) in links" class="nav-item" v-bind:key="index">
            <a
              v-bind:href="link.url"
              class="nav-link"
              aria-current="page"
              :title="`This link goes to somewhere ${link.text}`"
              >{{ link.text }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <h1>{{ pageTitle }}</h1>
    <p>{{ content }}</p>
  </main>
</template>
