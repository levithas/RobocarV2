<template>
  <v-container>
    <div class="d-flex justify-space-around">
      <v-card>
        <v-card-title>Camera Feed</v-card-title>
        <v-sheet>
          <v-img src="@/assets/logo.png"/>
        </v-sheet>
      </v-card>
      <v-card>
        <v-card-title class="d-flex justify-space-around">Navigation</v-card-title>
        <v-container>
          <div class="d-flex justify-space-evenly">
              <v-btn>Center</v-btn>
            </div>
          <v-card color="secondary">
            <GlobalView
              width="700"
              height="700"
            />
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
import GlobalView from '@/components/GlobalView.vue'
import DataFeed from '@/components/DataFeed.vue'

export default defineComponent({
  name: 'Overview',
  components: {GlobalView, DataFeed}
})
</script>

<style scoped>

</style>
