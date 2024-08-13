<script setup lang="ts">
import { computed, ref, onMounted, inject } from 'vue'
import NavbarLink from '@/components/Practice/NavbarLink.vue'

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

const pages = ref<any[]>()
const $pages = inject<{
  getSinglePage: (id: number) => { pageTitle: string; content: string }
  getAllPages: () => {
    link: { text: string; url: string }
    pageTitle: string
    content: string
    published: boolean
  }[]
}>('$pages')

const publishedPages = computed(() => {
  return pages?.value?.filter((page) => page.published) || []
})

const emitter = inject<any>('emitter')

onMounted(() => {
  getThemeSetting()
  pages.value = $pages!.getAllPages()
  emitter.on('page-updated', () => {
    pages.value = [...$pages!.getAllPages()]
  })
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
        <li class="nav-item" v-for="(page, index) in publishedPages" v-bind:key="index">
          <navbar-link :page="page" :index="index"></navbar-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/practice/pages"
            class="nav-link"
            active-class="active emphasize"
            aria-current="page"
            title="Manage pages"
            >Manage Pages
          </router-link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme">Toggle Navbar</button>
      </form>
    </div>
  </nav>
</template>

<style scoped>
.emphasize {
  font-weight: bold;
  text-decoration: underline !important;
}
</style>
