<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  condition: {
    leftOperator: {
      key: string | null
    }
    operator: {
      key: string | null
      range_from?: number | null
      range_to?: number | null
    }
    rightOperator: {
      key: string | null
      p_value?: number | null
    }
  }
  leftOperatorOptions: Array<{ name: string; code: string }>
}>()

const condition = ref({ ...props.condition })
</script>

<template>
  <Select
    v-model="condition.leftOperator.key"
    :options="leftOperatorOptions"
    optionLabel="name"
    option-value="code"
    placeholder="Chọn điều kiện"
    class="w-25"
  ></Select>
</template>

<style scoped>
.p-floatlabel {
  display: inline-block;
}
</style>
