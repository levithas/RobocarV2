<template>
  <v-container>
    <v-card>
      <v-card-title>Camera</v-card-title>
      <video
        :src="CameraURL" width="640" height="480"
      >
      </video>
    </v-card>
  </v-container>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import store from "@/plugins/store";

export default defineComponent({
  name: 'Camera',
  computed: {
    CameraURL() : string {
      return store.getters["configuration/BackendURL"] + "/stream"
    }
  }
})
</script>

<style scoped>

</style>
