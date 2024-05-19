<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { $api } = useNuxtApp()
const $router = useRouter()
const totalCredit = ref(0)
const totalCreditComplete = ref(0)
const loaded = ref(false)

const fetchTotalCredit = async () => {
  return await $api.users.totalCredit()
}

const fetchTotalCreditComplete = async () => {
  return await $api.users.totalCreditCompleted()
}

const featureds = ref([
  {
    title: 'Lịch theo tuần',
    img: '/images/iuh/icon_dkhp.png',
    path: '/calendar',
  },
  {
    title: 'Kết quả học tập',
    img: '/images/iuh/icon_lich.png',
    path: '/',
  },
  {
    title: 'Đăng ký học phần',
    img: '/images/iuh/icon_tiendo.png',
    path: '/',
  },
  {
    title: 'Tra cứu công nợ',
    img: '/images/iuh/icon_tracuucongno.png',
    path: '/',
  },
])

const changePage = (path) => {
  $router.push(path)
}

// Defining the series as a reactive reference
const series = computed(() => {
  return [((totalCreditComplete.value / totalCredit.value) * 100).toFixed(2)]
})

// Chart options defined as a reactive reference
const chartOptions = ref({
  chart: {
    height: 280, // Reduced height
    width: 280, // Reduced width, make it proportional to height
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px',
        },
        value: {
          color: '#111',
          fontSize: '36px',
          show: true,
          formatter(val) {
            return val + '%'
          },
        },
        total: {
          show: true,
          label: 'Đã học:',
          formatter() {
            return totalCreditComplete.value + '/' + totalCredit.value + ' tín chỉ'
          },
        },
      },
    },
  },
  labels: ['Tiến độ học tập'],
  colors: ['#00FF00'], // Adjust the color as needed
})

onBeforeMount(async () => {
  totalCredit.value = await fetchTotalCredit()
  totalCreditComplete.value = await fetchTotalCreditComplete()
  loaded.value = true
})
</script>
<template>
  <v-row>
    <v-col
      v-for="featured in featureds"
      :key="featured.title"
      class="py-0 mb-3"
      cols="12"
      lg="3"
      :revenuecard="featured"
      sm="6"
    >
      <VCard elevation="10" @click="changePage(featured.path)">
        <span class="lstick" />
        <v-card-text class="pa-5">
          <div class="d-flex align-center">
            <img alt="icon" :src="featured.img" />
            <div class="ml-4 mr-1">
              <h4 class="text-subtitle-1">
                {{ featured.title }}
              </h4>
            </div>
          </div>
        </v-card-text>
      </VCard>
    </v-col>
  </v-row>

  <v-row v-if="loaded">
    <v-col cols="3">
      <VCard class="py-0 mb-3">
        <span class="lstick" />
        <v-card-text class="pa-5">
          <div class="d-flex align-center">
            <img alt="icon" src="/images/iuh/icon_tiendo.png" />
            <div class="ml-4 mr-1">
              <h4 class="text-subtitle-1">Tiến độ học tập</h4>
            </div>
          </div>
          <apexchart :options="chartOptions" :series="series" type="radialBar" />
        </v-card-text>
      </VCard>
    </v-col>
  </v-row>
</template>

<style scoped>
.lstick {
  top: 35px;
}
</style>
