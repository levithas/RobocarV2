<template>
  <v-container>
    <div class="d-flex justify-space-around">
      <v-card>
        <v-card-title>Camera Feed</v-card-title>
        <v-sheet>
          <Camera
            width="320"
            height="240"
          />
        </v-sheet>
      </v-card>
      <v-card>
        <v-card-title class="d-flex justify-space-around">Navigation</v-card-title>
        <v-container>
          <div class="d-flex justify-space-evenly">
              <v-btn>Center</v-btn>
            </div>
          <v-card color="secondary">
            <MapView/>
          </v-card>
        </v-container>
      </v-card>
      <v-card>
        <v-card-title>Data Feed</v-card-title>
        <DataFeed/>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import {defineComponent} from 'vue'
import MapView from '@/components/MapView.vue'
import DataFeed from '@/components/DataFeed.vue'
import Camera from '@/components/Sensors/Camera.vue'

export default defineComponent({
  name: 'Overview',
  components: {MapView, DataFeed, Camera}
})
</script>

<style scoped>

</style>
