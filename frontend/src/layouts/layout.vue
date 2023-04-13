<template>
  <NavBar
    v-model="currentTab"
    @UpdateTab="updateTab"
  />
  <TabWindow :current-tab="currentTab"/>
  <Footer/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import NavBar from "@/layouts/NavBar.vue"
import TabWindow from "@/layouts/TabWindow.vue";
import Footer from "@/layouts/Footer.vue";

export default defineComponent({
  name: "layout",
  components: {Footer, TabWindow, NavBar},
  data() {
    return {
      currentTab: ''
    }
  },
  methods: {
    updateTab(tab: string) {
      this.currentTab = tab
    }
  }
})
</script>

<style scoped>

</style>
