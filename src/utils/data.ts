import type { DetailedPage } from './interfaces'

const pagesKey = 'pages'

const pageJson = localStorage.getItem(pagesKey)
const pageStore = pageJson ? JSON.parse(pageJson) : {}

export default {
  addPage(page: DetailedPage) {
    pageStore.push(page)
    localStorage.setItem(pagesKey, JSON.stringify(pageStore))
  },

  getAllPages() {
    return pageStore
  },

  getSinglePage(index: number) {
    return pageStore[index]
  },

  editPage(index: number, page: DetailedPage) {
    pageStore[index] = page
    localStorage.setItem(pagesKey, JSON.stringify(pageStore))
  }
}
