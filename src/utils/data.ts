const pagesKey = 'pages'

const pageJson = localStorage.getItem(pagesKey)
const pageStore = pageJson ? JSON.parse(pageJson) : {}

export default {
  getAllPages() {
    return pageStore
  },

  getSinglePage(index: number) {
    return pageStore[index]
  }
}
