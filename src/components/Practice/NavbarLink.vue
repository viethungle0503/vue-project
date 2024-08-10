<script setup lang="ts">
import { defineProps, computed } from 'vue';
const props = defineProps<{
    page: {
        link: {
            text: string;
            url: string;
        };
        pageTitle: string;
        content: string;
    };
    isActive: boolean;
}>();

const activeClasses = computed(() => {
    return {
        active: props.isActive,
        emphasize: props.isActive,
    };
});
</script>

<template>
  <a
    v-bind:href="page.link.url"
    class="nav-link"
    :class="activeClasses"
    aria-current="page"
    :title="`This link goes to somewhere ${page.link.text}`"
    >{{ page.link.text }}</a
  >
</template>

<style scoped>
.emphasize {
  font-weight: bold;
  text-decoration: underline !important;
}
</style>
