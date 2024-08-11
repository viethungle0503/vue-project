<script setup lang="ts">
import { ref } from 'vue'

const pageTitle = ref<string>('')
const content = ref<string>('')
defineProps<{
  pageCreated: Function
}>()
</script>

<!-- 
:value="pageTitle"
@input="(e: Event) => {
  const target = e.target as HTMLInputElement
  if (target) {
    pageTitle = target.value
  }
}
" -->

<template>
  <div class="container mb-3">
    <form action="">
      <div class="row">
          <div class="col-md-8">
              <div class="mb-3">
                <label for="" class="form-label">Page Title</label>
                <input type="text" class="form-control" v-model="pageTitle" />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Content</label>
                <textarea type="text" class="form-control" rows="5" v-model="content"></textarea>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary" @click.prevent="pageCreated({ pageTitle, content })">
                  Create Page
                </button>
              </div>
          </div>
          <div class="col">
              <div class="mb-3">
                <label for="" class="form-label">Link Text</label>
                <input type="text" class="form-control"/>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Link URL</label>
                <input type="text" class="form-control"/>
              </div>
              <div class="row mb-3">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input">
                    <label class="form-check-label">Published</label>
                </div>
              </div>
          </div>
      </div>
    </form>
  </div>
</template>
