<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const dates = ref()

async function getSecuritiesDailyOhlc() {
  const basaeUrl = import.meta.env.VITE_SSI_BASE_URL
  const endpoint = 'api/v1/ssi/daily-ohlc'
  const response = await axios.get(`${basaeUrl}${endpoint}`)
  if (response.status === 200) {
    console.log(response.data)
  }
}

const leftOperatorOptions = ref([
  { name: 'Vui lòng chọn điều kiện', code: null },
  { name: 'Giá', code: 'price' },
  { name: 'Khối lượng', code: 'volume' }
])

const priceOperatorOptions = ref([
  { name: 'Lớn hơn', code: 'greater' },
  { name: 'Đang giảm', code: 'decreasing' }
])

const volumeOperatorOptions = ref([{ name: 'Lớn hơn', code: 'greater' }])

const priceRightConditions = ref([
  { name: '%', code: 'percentage' },
  { name: 'SMA', code: 'SMA' }
])

const volumeRightConditions = ref([{ name: 'Trung bình', code: 'average' }])

interface Condition {
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

const conditions = ref<Condition[]>([
  {
    leftOperator: { key: 'price' },
    operator: { key: 'greater' },
    rightOperator: { key: 'SMA', p_value: 10 }
  },
  {
    leftOperator: { key: 'volume' },
    operator: { key: 'greater' },
    rightOperator: { key: 'average', p_value: 1000000 }
  },
  {
    leftOperator: { key: 'price' },
    operator: { key: 'decreasing', range_from: 0, range_to: 10 },
    rightOperator: { key: 'percentage' }
  }
])
const addCondition = () => {
  conditions.value.push({
    leftOperator: {
      key: null
    },
    operator: {
      key: null,
      range_from: null,
      range_to: null
    },
    rightOperator: {
      key: null,
      p_value: null
    }
  })
}
const submit = () => {
  console.log(conditions.value)
}
</script>

<template>
  <div>
    <div class="row mb-2">
      <label for="range">Chọn khoảng thời gian</label>
      <DatePicker
        v-model="dates"
        dateFormat="dd/mm/yy"
        selectionMode="range"
        :manualInput="true"
        showButtonBar
        class="col-md-4"
        id="range"
      />
    </div>
    <Button label="Add Condition" icon="pi pi-plus" @click="addCondition()"></Button>
    <div v-for="(condition, index) in conditions" :key="index" class="mt-2">
      <div class="flex justify-center">
        <Select
          v-model="condition.leftOperator.key"
          :options="leftOperatorOptions"
          optionLabel="name"
          option-value="code"
          placeholder="Chọn điều kiện"
          class="w-25 md:w-56"
          @change="() => console.log(condition.leftOperator.key)"
        ></Select>
        <span v-if="condition.leftOperator.key != null">
          <span v-if="condition.leftOperator.key == 'price'">
            <Select
              v-model="condition.operator.key"
              :options="priceOperatorOptions"
              optionLabel="name"
              option-value="code"
              placeholder="Chọn biểu thức"
              class="w-25 md:w-56"
            ></Select>
          </span>
          <span v-if="condition.leftOperator.key == 'volume'">
            <Select
              v-model="condition.operator.key"
              :options="volumeOperatorOptions"
              optionLabel="name"
              option-value="code"
              placeholder="Chọn biểu thức"
              class="w-25 md:w-56"
            ></Select>
          </span>
        </span>
        <span v-if="condition.operator.key != null">
          <span v-if="condition.leftOperator.key == 'price' && condition.operator.key == 'greater'">
            <FloatLabel>
              <InputNumber
                v-model="condition.rightOperator.p_value"
                id="psma"
                placeholder="Điền giá trị MA, ví dụ 10"
                class="w-25 md:w-56"
              ></InputNumber>
              <label for="psma">SMA cần so sánh</label>
            </FloatLabel>
          </span>
          <span
            v-if="condition.leftOperator.key == 'price' && condition.operator.key == 'decreasing'"
          >
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
          <span>
            <span
              v-if="condition.leftOperator.key == 'volumn' && condition.operator.key == 'average'"
            >
              <InputNumber
                v-model="condition.rightOperator.p_value"
                placeholder="Điền khối lượng volumn trung bình"
                class="w-25 md:w-56"
              ></InputNumber>
            </span>
          </span>
        </span>
      </div>
    </div>
    <Button label="Submit" severity="success" class="mt-2" @click="submit()"></Button>
  </div>
</template>

<style scoped>
.p-floatlabel {
  display: inline-block;
}
</style>
