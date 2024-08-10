<script setup lang="ts">
import Trading from '@/resources/explorer/tcbs/trading'
import { ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/styles.scss'

const priceData = ref<any[]>([])

const fetchPriceBoard = async () => {
  const trading = new Trading()
  try {
    const data = await trading.priceBoard(['MWG', 'HHV'])
    priceData.value = data
  } catch (error) {
    console.error('Error fetching price board:', error)
  }
}
</script>

<template>
  <div>
    <Button label="Fetch Price Board" icon="pi pi-arrow-down" @click="fetchPriceBoard"></Button>
    <div v-if="priceData.length != 0">
      <pre>{{ priceData }}</pre>
    </div>
  </div>
</template>

<style scoped></style>
