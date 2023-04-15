<template>
  <v-container>
    <v-card>
      <v-card-title>Controls</v-card-title>
      <v-card-text>
        <v-card max-width="300" style="padding:20px;background-color: #AAAAAA;">
          <v-row>
          <v-col></v-col>
          <v-col>
            <v-btn
              icon="mdi-vuetify"
              @mousedown="buttonDown('ArrowUp')"
              @mouseup="buttonUp('ArrowUp')"
              style="rotate: 180deg;"
              :color="getButtonColor('ArrowUp')"
            />
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              icon="mdi-vuetify"
              @mousedown="buttonDown('ArrowLeft')"
              @mouseup="buttonUp('ArrowLeft')"
              style="rotate: 90deg;"
              :color="getButtonColor('ArrowLeft')"
            />
          </v-col>
          <v-col>
            <v-btn
              icon="mdi-vuetify"
              @mousedown="buttonDown('ArrowDown')"
              @mouseup="buttonUp('ArrowDown')"
              style="rotate: 0deg;"
              :color="getButtonColor('ArrowDown')"
            />
          </v-col>
          <v-col>
            <v-btn
              icon="mdi-vuetify"
              @mousedown="buttonDown('ArrowRight')"
              @mouseup="buttonUp('ArrowRight')"
              style="rotate: 270deg;"
              :color="getButtonColor('ArrowRight')"
            />
          </v-col>
        </v-row>
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from "@/plugins/store";

interface ButtonAction {
  name: string,
  actionDown: Function,
  actionUp: Function,
  isPressed: boolean
}

export default defineComponent({
  name: "ManualControl",
  data: () => {
    return {
      buttons: [
        {name: "ArrowUp", actionDown: () => {}, actionUp: () => {}, isPressed: false},
        {name: "ArrowDown", actionDown: () => {}, actionUp: () => {}, isPressed: false},
        {name: "ArrowLeft", actionDown: () => {}, actionUp: () => {}, isPressed: false},
        {name: "ArrowRight", actionDown: () => {}, actionUp: () => {}, isPressed: false},
      ] as ButtonAction[]
    }
  },
  mounted() {
    document.addEventListener('keydown', this.onKeyDown)
    document.addEventListener('keyup', this.onKeyUp)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);
  },
  methods: {
    onKeyDown(event: KeyboardEvent) {
      if (store.state.configuration.hotkeysActive) {
        for(const b of this.buttons) {
          if(b.name === event.key) {
            this.buttonDown(b.name)
          }
        }
      }
    },
    onKeyUp(event: KeyboardEvent) {
      if (store.state.configuration.hotkeysActive) {
        for(const b of this.buttons) {
          if(b.name === event.key) {
            this.buttonUp(b.name)
          }
        }
      }
    },
    getButtonColor(name: string) : string {
      const button = this.buttons.find(b => b.name === name)
      if(button) {
        if(button.isPressed)
        {
          return "#AAFF00"
        }
        else
        {
          return "#DDDDDD"
        }
      }
      return "#FF0000"
    },
    buttonDown(name: string) {
      const button = this.buttons.find(b => b.name === name)
      if(button) {
        button.actionDown()
        button.isPressed = true
      }
    },
    buttonUp(name: string) {
      const button = this.buttons.find(b => b.name === name)
      if(button) {
        button.actionUp()
        button.isPressed = false
      }
    }
  },
})
</script>

<style scoped>

</style>
