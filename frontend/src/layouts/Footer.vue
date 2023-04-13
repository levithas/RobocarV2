<template>
  <v-footer
    class="bg-grey-lighten-1"
    absolute inset app height="100"
  >
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        {{ Date.now().toLocaleString() }} — <strong>Robocar</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "footer"
})
</script>

<style scoped>

</style>
