export interface PageLink {
  text: string
  url: string
}

export interface Page {
  pageTitle: string
  content: string
}

export interface DetailedPage extends Page {
  link: PageLink
  published: boolean
}

export interface PagesInjection {
  addPage(page: DetailedPage): void
  getAllPages(): DetailedPage[]
  getSinglePage(index: number): DetailedPage
  editPage(index: number, page: DetailedPage): void
}
