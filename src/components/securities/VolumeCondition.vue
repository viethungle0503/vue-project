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
  volumeOperatorOptions: Array<{ name: string; code: string }>
}>()

const condition = ref({ ...props.condition })
</script>
<template>
  <span class="d-flex justify-content-start gap-2">
    <Select
      v-model="condition.operator.key"
      :options="volumeOperatorOptions"
      optionLabel="name"
      option-value="code"
      placeholder="Chọn biểu thức"
      class="w-100 md:w-56"
    ></Select>
    <span v-if="condition.operator.key != null">
      <span v-if="condition.operator.key == 'greater'" class="w-100">
        <InputNumber
          v-model="condition.rightOperator.p_value"
          placeholder="Điền khối lượng volumn trung bình"
          class="w-25 md:w-56"
        ></InputNumber>
      </span>
    </span>
  </span>
</template>

<style scoped>
.p-floatlabel {
  display: inline-block;
}
</style>
