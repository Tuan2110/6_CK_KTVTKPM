<script setup>
const { $api } = useNuxtApp()

const student = ref({})

const fetchUser = async () => {
  await $api.users.user().then((response) => {
    student.value = response.data
  })
}

onMounted(() => {
  fetchUser()
})
</script>

<template>
  <v-card elevation="10">
    <span class="lstick" />
    <v-card-text>
      <div>
        <div>
          <h3 class="text-h5 title mb-1">Thông tin sinh viên</h3>
        </div>
        <v-row>
          <v-col cols="12">
            <v-row class="pa-4" no-gutters>
              <v-col class="d-flex align-center justify-center" cols="4">
                <v-avatar size="125">
                  <v-img alt="Avatar Student" :src="'/images/profile/1.jpg'" />
                </v-avatar>
              </v-col>
              <v-col cols="8">
                <v-card-text class="d-flex justify-space-between">
                  <div>
                    <div>
                      <strong>MSSV:</strong>
                      {{ student?.studentId }}
                    </div>
                    <div>
                      <strong>Họ tên:</strong>
                      {{ student?.name }}
                    </div>
                    <div>
                      <strong>Giới tính:</strong>
                      Nam
                    </div>
                    <div>
                      <strong>Ngày sinh:</strong>
                      09/06/2002
                    </div>
                    <div>
                      <strong>Nơi sinh:</strong>
                      Tỉnh Bến Tre
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong>Lớp học:</strong>
                      DHKTPM16A
                    </div>
                    <div>
                      <strong>Khóa học:</strong>
                      2020 - 2021
                    </div>
                    <div>
                      <strong>Bậc đào tạo:</strong>
                      Đại học
                    </div>
                    <div>
                      <strong>Loại hình đào tạo:</strong>
                      Chính quy
                    </div>
                    <div>
                      <strong>Ngành:</strong>
                      Kỹ thuật phần mềm
                    </div>
                  </div>
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss"></style>
