<template>
  <v-main class="bg-grey-lighten-3">
    <v-window v-bind:model-value="currentTab">
      <v-window-item value="tabOverview">
        <Overview/>
      </v-window-item>
      <v-window-item value="tabCamera">
        <Camera/>
      </v-window-item>
      <v-window-item value="tabAutopilot">
        <Autopilot/>
      </v-window-item>
      <v-window-item value="tabManualControl">
        <ManualControl/>
      </v-window-item>
      <v-window-item value="tabSensorGraphs">
        <SensorGraphs/>
      </v-window-item>
      <v-window-item value="tabSettings">
        <Settings/>
      </v-window-item>
    </v-window>
  </v-main>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Overview from '@/components/Tabs/Overview.vue'
import Camera from '@/components/Tabs/Camera.vue'
import Autopilot from '@/components/Tabs/Autopilot.vue'
import ManualControl from '@/components/Tabs/ManualControl.vue'
import SensorGraphs from '@/components/Tabs/SensorGraphs.vue'
import Settings from '@/components/Tabs/Settings.vue'

export default defineComponent( {
  name: "TabWindow",
  components: {Overview, Camera, Autopilot, ManualControl, SensorGraphs, Settings},
  props: {
    currentTab : String,
  }
})
</script>

<style scoped>

</style>
