<template>
  <v-container class="pb-10">
    <h1 class="text-h4 mb-6">Style Guide</h1>

    <!-- Colors -->
    <h2 class="text-h6 mb-3">Colors</h2>
    <v-row dense>
      <!-- 深さ 50–900 を表示 -->
      <v-col
        v-for="shade in shades"
        :key="shade"
        cols="4"
        md="2"
        class="text-center"
      >
        <div
          class="rounded"
          :style="swatchStyle(shade)"
        />
        <small class="d-block mt-1">{{ `primary-${shade}` }}</small>
      </v-col>
    </v-row>

    <!-- Buttons -->
    <h2 class="text-h6 mt-8 mb-3">Buttons</h2>
    <v-btn class="mr-2 gradient-btn" rounded="pill">Primary</v-btn>
    <v-btn class="mr-2 gradient-btn--secondary" rounded="pill">Secondary</v-btn>
    <v-btn variant="outlined" color="primary" rounded="pill">Outlined</v-btn>
  </v-container>
</template>

<script setup>
const shades = [50,100,200,300,400,500,600,700,800,900]

/**
 * 動的に style オブジェクトを返すヘルパ
 */
function swatchStyle (shade) {
  return {
    width: '56px',
    height: '56px',
    backgroundColor: `var(--v-theme-primary-${shade})`,
    borderRadius: 'var(--radius-sm)'
  }
}
</script>

<style scoped>
.gradient-btn {
  background-image: linear-gradient(
    90deg,
    var(--v-theme-primary),
    var(--v-theme-secondary)
  );
  color: #fff !important;
}

.gradient-btn--secondary {
  background-image: linear-gradient(
    90deg,
    var(--v-theme-secondary),
    var(--v-theme-accent)
  );
  color: #fff !important;
}
</style>
