<template>
  <v-app-bar
    class="px-1"
    flat
    density="compact"
  >
    <v-spacer></v-spacer>
    <v-tabs
      v-model="this.currentTab"
      centered
      color="grey-darken-2"
      @update:modelValue="$emit('UpdateTab', $event)"
    >
      <v-tab
        v-for="btn in this.btns"
        :value="btn.tab"
      >
        {{ this.getButtonText(btn) }}
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import store from "@/plugins/store"

interface ButtonLayout {
  text: string,
  tab: string,
  shortkey: string
}

export default defineComponent({
  name: "NavBar",
  data: () => {
    return {
      currentTab: '',
      btns: [
        {
          text: 'Overview',
          tab: 'tabOverview',
          shortkey: '1',
        },
        {
          text: 'Camera',
          tab: 'tabCamera',
          shortkey: '2',
        },
        {
          text: 'Autopilot',
          tab: 'tabAutopilot',
          shortkey: '3',
        },
        {
          text: 'Manual Control',
          tab: 'tabManualControl',
          shortkey: '4',
        },
        {
          text: 'Sensor Graphs',
          tab: 'tabSensorGraphs',
          shortkey: '5',
        },
        {
          text: 'Settings',
          tab: 'tabSettings',
          shortkey: '6',
        },
      ] as ButtonLayout[]
    }
  },
  mounted() {
    document.addEventListener('keydown', this.onKeyDown)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeyDown);
  },
  methods: {
    onKeyDown(event: KeyboardEvent) {
      if (store.state.configuration.hotkeysActive) {
        for (const b of this.btns) {
          if (event.key === b.shortkey) {
            this.currentTab = b.tab
            this.$emit('UpdateTab', b.tab)
            break
          }
        }
      }
    },
    getButtonText(btn : ButtonLayout) : string {
      if (store.state.configuration.hotkeysActive) {
        return btn.text + " (" + btn.shortkey + ")"
      }
      else {
        return btn.text
      }
    }
  },
  emits: ['UpdateTab']
});
</script>

<style scoped>

</style>
