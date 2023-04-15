<template>
  <v-container class="align-content-lg-center">
    <v-card>
      <v-card-title>Autopilot</v-card-title>
      <v-card-actions class="d-flex justify-space-around">
        <v-switch
          v-model="this.globalViewActive"
          :label="getCurrentView()"
          inset
        />
      </v-card-actions>
      <v-container class="d-flex justify-space-around">
        <v-row>
          <v-col>
            <GlobalView
              v-if="globalViewActive"
              width="700"
              height="700"
            />
            <LocalView
              v-else
              width="700"
              height="700"
            />
          </v-col>
          <v-col>
              <LocalControl
                v-if="!globalViewActive"
                height="700"
              />
              <GlobalControl
                v-else
                height="700"
              />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalView from '@/components/GlobalView.vue'
import LocalView from '@/components/LocalView.vue'
import GlobalControl from '@/components/GlobalControl.vue'
import LocalControl from '@/components/LocalControl.vue'

export default defineComponent({
  name: "Autopilot",
  components: {LocalView, GlobalView, LocalControl, GlobalControl},
  data: () => {
    return {
      globalViewActive: true,
    }
  },
  methods: {
    getCurrentView(): string {
      return this.globalViewActive ? "Global View" : "Local View"
    }
  }
})
</script>

<style scoped>

</style>
