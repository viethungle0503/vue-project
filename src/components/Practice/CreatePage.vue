<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  pageCreated: Function
}>()

const isFormValid = computed(() => {
  return !pageTitle.value || !content.value || !linkText.value || !linkUrl.value
})

const pageTitle = ref<string>('')
const content = ref<string>('')
const linkText = ref<string>('')
const linkUrl = ref<string>('')
const published = ref<boolean>(true)
const submitForm = () => {
  if (!pageTitle.value || !content.value || !linkText.value || !linkUrl.value) {
    alert('Please fill out the form')
    return
  }
  props.pageCreated({
    pageTitle: pageTitle.value,
    content: content.value,
    link: {
      text: linkText.value,
      url: linkUrl.value
    },
    published: published.value
  })
  pageTitle.value = ''
  content.value = ''
  linkText.value = ''
  linkUrl.value = ''
}

watch(pageTitle, (newTitle, oldTitle) => {
  console.log(`pageTitle changed from ${oldTitle} to ${newTitle}`);
  if(linkText.value == oldTitle) {
    linkText.value = newTitle
  }
});
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
            <button class="btn btn-primary" @click.prevent="submitForm" :disabled="isFormValid">
              Create Page
            </button>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="" class="form-label">Link Text</label>
            <input type="text" class="form-control" v-model="linkText" />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Link URL</label>
            <input type="text" class="form-control" v-model="linkUrl" />
          </div>
          <div class="row mb-3">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" v-model="published" />
              <label class="form-check-label">Published</label>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
