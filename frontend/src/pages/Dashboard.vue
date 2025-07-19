<template>
  <v-container>
    <h1 class="text-h4 mb-6">Dashboard</h1>
    <v-row dense>
      <v-col v-for="m in metrics" :key="m.title" cols="12" md="4">
        <v-card class="metric pa-5" elevation="6">
          <v-avatar size="40" color="accent">
            <v-icon color="secondary">{{ m.icon }}</v-icon>
          </v-avatar>
          <div class="mt-3 text-subtitle-1">{{ m.title }}</div>
          <div class="text-h4 font-weight-bold">{{ m.value }}</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const metrics = [
  { title: 'Active Users', value: '1,248', icon: 'mdi-account-group' },
  { title: 'MRR', value: '$24.2 k', icon: 'mdi-currency-usd' },
  { title: 'Bounce Rate', value: '32 %', icon: 'mdi-trending-down' }
];
</script>

<style scoped>
.metric {
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
}
.metric::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-accent))
  );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
}
</style>
