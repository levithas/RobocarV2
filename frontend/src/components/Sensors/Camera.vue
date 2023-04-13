<template>
  <v-container>
    <img src="http://192.168.0.155:4567/stream.mjpg" :width="width" :height="height">
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {number} from "vue-types";

export default defineComponent({
  name: 'Camera',
  props: {
    width: number,
    height: number,
  }
})
</script>

<style scoped>

</style>
