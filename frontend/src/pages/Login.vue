<template>
  <v-container
    class="fill-height d-flex justify-center align-center"
    style="background: var(--v-theme-background)"
  >
    <v-card width="420" elevation="8" class="rounded-md">
      <div class="header text-h5 white--text pa-4">Sign in</div>

      <v-card-text>
        <v-form>
          <v-text-field
            label="E‑mail"
            prepend-icon="mdi-email"
            variant="outlined"
            rounded="sm"
            density="comfortable"
            color="accent"
            class="mb-4"
          />
          <v-text-field
            label="Password"
            type="password"
            prepend-icon="mdi-lock"
            variant="outlined"
            rounded="sm"
            density="comfortable"
            color="accent"
          />

          <v-btn block rounded="pill" class="cta mt-6 py-3">Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.header {
  background-image: linear-gradient(
    90deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-primaryDark))
  );
  border-top-left-radius: var(--radius-md);
  border-top-right-radius: var(--radius-md);
}
.cta {
  background-image: linear-gradient(
    90deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-primaryDark))
  );
  color: #fff !important;
}
</style>
