<template>
  <v-card
    class="mx-auto"
    height="700"
    max-height="700"
  >
    <v-card-title>
      Global Controls
    </v-card-title>

    <v-divider></v-divider>



  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { number } from 'vue-types'

export default defineComponent({
  name: "GlobalControl",
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
