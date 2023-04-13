<template>
  <v-progress-linear
    class="v-progress-linear_bar"
    color="blue-lighten-3"
    :model-value="(pollingRate-timeLeft)/pollingRate * 100"
    height="20"
    :indeterminate="loading"
  />
  <v-list
    style="width: 260px"
  >
    <v-divider thickness="5"></v-divider>
    <v-list-item
      class="dataFeed"
      v-for="item in items"
      :subtitle="item.name"
    >
      {{ item.value }}
      <v-divider thickness="3"></v-divider>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {DataItem} from "@/services/Workers/APIDataFeed";
import {dataFeed} from "@/plugins/services"
import store from "@/plugins/store"

export default defineComponent({
  name: "DataFeed",
  components: {},

  data: () => ({
    loading: true,
    items: [] as DataItem[],
    isPolling: false,
    pollTimer: null as any,
    pollTimerRate: 50,
    pollingRate: 1000,
    timeLeft: 0
  }),

  async mounted() {
    this.pollingRate = store.getters["configuration/RefreshRate"]
    this.pollTimer = setInterval(this.fetchTimer, this.pollTimerRate)
  },

  methods: {
    async fetchTimer() {
      if (this.isPolling) {
        return
      }

      this.isPolling = true
      if (this.timeLeft <= 0) {
        await this.fetchData()
        this.timeLeft = this.pollingRate + this.pollTimerRate
      } else {
        this.timeLeft -= this.pollTimerRate
      }
      this.isPolling = false;
    },

    async fetchData() {
      this.loading = true
      this.items = await dataFeed.GetData()
      this.loading = false

      if (this.pollingRate != store.getters["configuration/RefreshRate"]) {
        this.pollingRate = store.getters["configuration/RefreshRate"]
      }
    }
  }
})
</script>

<style scoped>
.dataFeed {
  font-size: 1.5rem !important;
}

.v-progress-linear_bar {
  transition: none;
}

</style>
