<template>
  <v-container>
    <v-tabs
      v-model="tab"
      grow
      color="primary"
      background-color="primary"
      dark
      class="rounded-sm mb-4"
    >
      <v-tab value="info">Info</v-tab>
      <v-tab value="settings">Settings</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="info">
        <!-- 2‑column form -->
        <v-row dense>
          <v-col cols="12" md="6">
            <v-text-field label="First Name" v-model="form.first" rounded="sm" />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Last Name" v-model="form.last" rounded="sm" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Email" v-model="form.email" rounded="sm" />
          </v-col>
        </v-row>
      </v-window-item>

      <v-window-item value="settings">
        <v-switch label="Receive newsletter?" v-model="form.news" color="primary" />
      </v-window-item>
    </v-window>

    <v-btn class="cta mt-6" rounded="pill" large @click="save">Save</v-btn>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
const tab = ref('info');
const form = ref({ first: 'Alice', last: 'Doe', email: 'alice@example.com', news: true });
const save = () => {};
</script>

<style scoped>
.cta {
  background-image: linear-gradient(
    90deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-primaryDark))
  );
  color: #fff !important;
}
</style>
