<script setup>
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const { $api } = useNuxtApp()

const calendar = ref([])

// Define the events here or fetch them from an API
const events = ref([
  {
    title: 'Kiến trúc và Thiết kế phần mềm',
    start: '2024-05-04T13:00:00',
    end: '2024-05-04T15:00:00',
    extendedProps: { location: 'Phòng: X11.08', teacher: 'GV: Võ Văn Hải' },
  },
  {
    title: 'Kiến trúc và Thiết kế phần mềm',
    start: '2024-05-04T18:00:00',
    end: '2024-05-04T21:00:00',
    extendedProps: { location: 'Phòng: A2.01', teacher: 'GV: Võ Văn Hải' },
  },
])

const calendarOptions = computed(() => ({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'timeGridWeek',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay',
  },
  timeZone: 'UTC',
  events: calendar.value,
  eventContent(arg) {
    const content = document.createElement('div')
    content.innerHTML = `
      <strong>${arg.event.title}</strong><br>
      <small>${arg.event.extendedProps.location}</small><br>
      <small>${arg.event.extendedProps.teacher}</small>
    `
    return { domNodes: [content] }
  },
}))

const fetchCalendar = async () => {
  await $api.users.calendar().then((response) => {
    calendar.value = response.map((item) => ({
      title: item.creditClass?.classCode,
      start: item.start,
      end: item.end,
      extendedProps: { location: item.location, teacher: item.teacher },
    }))
  })
}

onBeforeMount(async () => {
  await fetchCalendar()
})
</script>

<template>
  <div>
    <h1>Lịch học theo tuần</h1>
    <full-calendar :options="calendarOptions" />
  </div>
</template>

<style scoped lang="scss">
/* You can customize your calendar CSS here */
</style>
