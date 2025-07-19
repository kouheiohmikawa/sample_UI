<template>
  <v-container>
    <v-btn color="primary" rounded="pill" @click="dialog = true">
      Open Confirm
    </v-btn>

    <v-dialog v-model="dialog" max-width="420">
      <v-card rounded="md">
        <div class="header pa-4 white--text text-h6">Delete item?</div>

        <v-card-text>This action cannot be undone.</v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="dialog = false">Cancel</v-btn>
          <v-btn color="error" rounded="pill" dark @click="dialog = false">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
const dialog = ref(false);
</script>

<style scoped>
.header {
  background-image: linear-gradient(
    90deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-primaryDark))
  );
}
</style>
