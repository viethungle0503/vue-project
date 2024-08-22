<script setup lang="ts">
import DatePicker from 'primevue/datepicker'
import MultiSelect from 'primevue/multiselect';
import { ref } from 'vue'

const date = ref(new Date())
const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>

<template>
  <div class="row mb-2">
      <DatePicker
        v-model="date"
        dateFormat="dd/mm/yy"
        selectionMode="range"
        :manualInput="false"
        showButtonBar
        class="col-md-4"
        />
        <FloatLabel class="col-md-6">
            <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" filter :maxSelectedLabels="3" class="w-full" />
            <label for="ms-cities">MultiSelect</label>
        </FloatLabel>
  </div>
</template>
