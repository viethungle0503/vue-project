<script setup lang="ts">
import { defineProps, computed, ref, onMounted } from 'vue'
import NavbarLink from '@/components/Practice/NavbarLink.vue'

defineProps<{
  pages: {
    link: {
      text: string
      url: string
    }
    pageTitle: string
    content: string
  }[]
  activePage: number
  navLinkClick: Function
}>()

const theme = ref<string>('light')

const changeTheme = () => {
  if (theme.value === 'light') {
    theme.value = 'dark'
  } else {
    theme.value = 'light'
  }
  storeThemeSetting()
}

const storeThemeSetting = () => {
  localStorage.setItem('theme', theme.value)
}

const getThemeSetting = () => {
  const themeSetting = localStorage.getItem('theme')
  if (themeSetting) {
    theme.value = themeSetting
  }
}

onMounted(() => {
  getThemeSetting()
})

//#region <Old Colde>
// const navbarClass = computed(() => {
//   return {
//     'navbar-light': !useDarkNavBar.value,
//     'bg-light': !useDarkNavBar.value,
//     'navbar-dark': useDarkNavBar.value,
//     'bg-dark': useDarkNavBar.value
//   }
// })
// const useDarkNavBar = ref<boolean>(true)

// const theme = computed(() => {
//   return useDarkNavBar.value ? 'dark' : 'light'
// })

// const changeTheme = () => {
//   if (theme.value === 'dark') {
//     useDarkNavBar.value = false
//   } else {
//     useDarkNavBar.value = true
//   }
// }
// v-bind="activePage === index ? { class: 'nav-link active' } : { class: 'nav-link' }"
// :class="{ 'navbar-light bg-light': !useDarkNavBar, 'navbar-dark bg-dark': useDarkNavBar }"
// :class="navbarClass"
// :class="[useDarkNavBar ? 'navbar-dark bg-dark' : 'navbar-light bg-light','navbar', 'navbar-expand-lg']"
//#endregion
</script>

<template>
  <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="(page, index) in pages" class="nav-item" v-bind:key="index">
          <navbar-link
            :page="page"
            :isActive="activePage == index"
            @click.prevent="navLinkClick(index)"
          ></navbar-link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme">Toggle Navbar</button>
      </form>
    </div>
  </nav>
</template>
