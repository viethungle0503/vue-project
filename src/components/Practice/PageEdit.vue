<script setup lang="ts">
import type { PagesInjection } from '@/utils/interfaces'
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { index } = defineProps<{
  index: number | string
}>()

const $pages = inject<PagesInjection>('$pages')
const page = $pages!.getSinglePage(Number(index))

const emitter = inject<any>('emitter')

const submit = () => {
  $pages!.editPage(Number(index), page)
  emitter.emit('page-updated', { index, page })
  goToPagesList()
}

const goToPagesList = () => {
  router.push({ name: 'pages-list' })
}

const deletePage = () => {
  $pages!.removePage(Number(index))
  emitter.emit('page-deleted', { index })
  goToPagesList()
}
</script>

<template>
  <div class="container mb-3">
    <h4>Edit Page</h4>
    <form action="">
      <div class="row">
        <div class="col-md-8">
          <div class="mb-3">
            <label for="" class="form-label">Page Title</label>
            <input type="text" class="form-control" v-model="page.pageTitle" />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Content</label>
            <textarea type="text" class="form-control" rows="5" v-model="page.content"></textarea>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="" class="form-label">Link Text</label>
            <input type="text" class="form-control" v-model="page.link.text" />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" v-model="page.published" />
              <label class="form-check-label">Published</label>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary me-2" @click.prevent="submit()">Edit</button>
        <button class="btn btn-secondary" @click.prevent="goToPagesList">Cancel</button>
        <button class="btn btn-danger ms-2" @click.prevent="deletePage()">Delete</button>
      </div>
    </form>
  </div>
</template>
