<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 700px; width: 700px"
  >
    <ol-view ref="view"
             :center="center"
             :rotation="rotation"
             :zoom="zoom"
             :projection="projection"
             />
    <ol-tile-layer>
      <ol-source-osm/>
    </ol-tile-layer>
  </ol-map>
</template>

<script>
import { defineComponent, ref } from 'vue'
import OpenLayersMap from "vue3-openlayers";

export default defineComponent({
  name: "MapView",
  components: {OpenLayersMap},
  props: {},
  setup() {
    const center = ref([40, 40])
    const projection = ref('EPSG:4326')
    const zoom = ref(8)
    const rotation = ref(0)
    return {
      center,
      projection,
      zoom,
      rotation
    }
  }
})
</script>

<style scoped>

</style>
