<template>
  <Camera
    width="640"
    height="480"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Camera from "@/components/Sensors/Camera.vue"
export default defineComponent({
  name: "CameraControl",
  components: {Camera}
})
</script>

<style scoped>

</style>
