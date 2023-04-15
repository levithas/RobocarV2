<template>
  <v-card
    class="mx-auto"
    :height="height"
    :max-height="height"
  >
    <v-card-title>
      Local Controls
    </v-card-title>

    <v-divider></v-divider>



  </v-card>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import {number} from "vue-types";

export default defineComponent({
  name: "LocalControl",
  props: {
    height: number,
  },
  data: () => {
    return {
      items: Array.from({ length: 1000 }, (k, v) => v + 1),
    }
  }
})
</script>

<style scoped>

</style>
