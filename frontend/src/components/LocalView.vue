<template>
  <v-container
   :style="`height: ${this.height}px; width: ${this.width}px;background-color: #BBAABB;`"
  >

  </v-container>
</template>

<script>
import {number} from "vue-types";

export default {
  name: "LocalView",
  props: {
    width: number,
    height: number,
  }
}
</script>

<style scoped>

</style>
