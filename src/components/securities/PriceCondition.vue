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
  priceOperatorOptions: Array<{ name: string; code: string }>
}>()

const condition = ref({ ...props.condition })
</script>
<template>
  <span class="d-flex justify-content-start gap-2">
    <Select
      v-model="condition.operator.key"
      :options="priceOperatorOptions"
      optionLabel="name"
      option-value="code"
      placeholder="Chọn biểu thức"
      class="w-25"
    ></Select>
    <span v-if="condition.operator.key != null">
      <span v-if="condition.operator.key == 'greater'">
        <FloatLabel>
          <InputNumber
            v-model="condition.rightOperator.p_value"
            id="psma"
            placeholder="Điền giá trị MA, ví dụ 10"
            class="w-25"
          ></InputNumber>
          <label for="psma">SMA cần so sánh</label>
        </FloatLabel>
      </span>
      <span v-if="condition.operator.key == 'decreasing'">
        <InputNumber
          v-model="condition.operator.range_from"
          placeholder="Từ bao nhiêu %"
          class="w-25 md:w-56"
        ></InputNumber>
        <InputNumber
          v-model="condition.operator.range_to"
          placeholder="Đến bao nhiêu %"
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
