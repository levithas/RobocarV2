export interface Configurations {
  refreshRate: number,
  hotkeysActive: boolean,
  backendURL: string,
}

// @ts-ignore
export default {
  namespaced: true,
  state: () => ({
    refreshRate: 1000 as number,
    hotkeysActive: true as boolean,
    backendURL: 'http://localhost:8000' as string,
  }) as Configurations,
  getters: {
    RefreshRate: function(state : Configurations) : number {
      if(localStorage.refreshRate)
      {
        state.refreshRate = Number(localStorage.refreshRate)
      }
      else {
        localStorage.setItem("refreshRate", state.refreshRate.toString())
      }
      return state.refreshRate
    },
    HotkeysActive: function(state : Configurations) : boolean {
      if(localStorage.hotkeysActive){
        state.hotkeysActive = Boolean(localStorage.hotkeysActive)
      }
      else {
        localStorage.setItem("hotkeysActive", state.hotkeysActive.toString())
      }
      return state.hotkeysActive
    },
    BackendURL: function(state : Configurations) : string {
      if(localStorage.backendURL){
        state.backendURL = localStorage.backendURL
      }
      else {
        localStorage.setItem("backendURL", state.backendURL)
      }
      return state.backendURL
    }
  },
  mutations: {
    RefreshRate(state: Configurations, newRefreshRate: number) {
      state.refreshRate = newRefreshRate
      localStorage.setItem("refreshRate", newRefreshRate.toString())
    },
    HotkeysActive(state: Configurations, newHotKeysActive: boolean) {
      state.hotkeysActive = newHotKeysActive
      localStorage.setItem("hotkeysActive", newHotKeysActive.toString())
    },
    BackendURL(state: Configurations, url: string) {
      state.backendURL = url
      localStorage.setItem("backendURL", url)
    }
  },
  actions: {

  }
}
