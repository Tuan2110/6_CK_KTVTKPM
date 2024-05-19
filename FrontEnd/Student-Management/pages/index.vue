<script setup lang="ts">
import TheFeatureStudentCard from '@/components/dashboards/minimal/TheFeatureStudentCard.vue'
import TheStudentInformationCard from '@/components/dashboards/minimal/TheStudentInformationCard.vue'
import TheCalendarForTheWeekCard from '@/components/dashboards/minimal/TheCalendarForTheWeekCard.vue'
</script>

<template>
  <v-main>
    <v-container class="page-wrapper pb-sm-15 pb-10" fluid>
      <v-row class="mt-3">
        <!---Student Information---->
        <v-col cols="12" lg="8">
          <the-student-information-card />
        </v-col>
        <v-col cols="12" lg="4">
          <the-calendar-for-the-week-card />
        </v-col>
        <!---Feature Student card---->
        <v-col cols="12" lg="12">
          <the-feature-student-card />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
