<template>
  <v-container>
    <h1 class="text-h4 mb-6">User List</h1>

    <v-text-field
      v-model="search"
      prepend-icon="mdi-magnify"
      density="comfortable"
      variant="solo-filled"
      color="primary"
      rounded="sm"
      label="Search users"
      class="mb-4"
    />

    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      density="comfortable"
      class="table"
    >
      <template #item.actions>
        <v-btn icon size="small" color="primaryDark">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
const search = ref('');
const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Role', key: 'role' },
  { title: 'Actions', key: 'actions', sortable: false }
];
const items = ref([
  { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob', email: 'bob@example.com', role: 'Member' },
  { name: 'Charlie', email: 'charlie@example.com', role: 'Member' }
]);
</script>

<style scoped>
.table >>> thead tr {
  background-image: linear-gradient(
    90deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-primaryDark))
  );
  color: #fff;
}
.table >>> tr.v-data-table__selected {
  background-color: rgba(65, 184, 131, 0.12) !important;
}
</style>
