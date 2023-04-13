<template>
  <div class="d-flex justify-space-between align-baseline">
    <v-container>
      <v-card width="500px">
        <v-card-title>Local Configuration</v-card-title>
        <v-container>
          <v-form v-model="valid">
            <v-text-field
              v-for="item in configurations"
              v-model="item.value"
              :label="item.name"
              :rules="item.rules"
              @update:focused="updateHotkeysActive(!$event)"
              @update:modelValue="valueHasChanged"
            />
          </v-form>
          <div class="d-flex justify-space-between">
            <v-btn
              :disabled="(!valid || !changed)"
              @click="saveData"
              color="primary"
            >
              Save
            </v-btn>
            <v-btn
              @click="loadData"
              color="secondary"
            >
              Reset
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import store from '@/plugins/store'

import {rules} from "@/utils/rules";

interface ConfigSetting {
  key: string,
  name: string,
  value: string,
  rules: Function[]
}

export default defineComponent({
  name: 'Settings',
  components: {},
  data() {
    return {
      valid: false,
      changed: false,
      search: '',
      configurations: [
        {
          key: "configuration/RefreshRate",
          name: "Refresh Rate",
          value: 0,
          rules: [
            rules.mustBeNumber,
            rules.biggerThan1000
          ]
        },
        {
          key: "configuration/BackendURL",
          name: "Backend URL",
          value: '',
          rules: [
          ]
        },
      ] as ConfigSetting[],
    }
  },

  mounted() {
    this.loadData()
  },

  methods: {
    updateHotkeysActive(state : boolean) {
      store.commit("configuration/HotkeysActive", state)
    },
    valueHasChanged() {
      this.changed = false
      for (const conf of this.configurations) {
        if (conf.value != store.getters[conf.key]) {
          this.changed = true
          break
        }
      }
    },
    loadData() {
      for (const conf of this.configurations) {
        conf.value = store.getters[conf.key];
      }
      this.valueHasChanged()
    },
    saveData() {
      for (const conf of this.configurations) {
        store.commit(conf.key, conf.value)
      }
      this.valueHasChanged()
    }
  }
})
</script>

<style scoped>

.settingsName {
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.5rem !important;
}

</style>
