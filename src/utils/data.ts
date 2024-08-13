import type { DetailedPage } from './interfaces'

const pagesKey = 'pages'

const pageJson = localStorage.getItem(pagesKey)
const pageStore = pageJson ? JSON.parse(pageJson) : {}

const save = () => {
  localStorage.setItem(pagesKey, JSON.stringify(pageStore))
}

export default {
  addPage(page: DetailedPage) {
    pageStore.push(page)
    save()
  },

  getAllPages() {
    return pageStore
  },

  getSinglePage(index: number) {
    return pageStore[index]
  },

  editPage(index: number, page: DetailedPage) {
    pageStore[index] = page
    save()
  },

  removePage(index: number) {
    pageStore.splice(index, 1)
    save()
  }
}
