<template>
  <v-container>
    <v-card>
      <v-card-title>Controls</v-card-title>
      <v-card-text>
        <v-btn>
          Motor On
        </v-btn>
        <v-btn>
          Motor Off
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "ManualControl"
})
</script>

<style scoped>

</style>
