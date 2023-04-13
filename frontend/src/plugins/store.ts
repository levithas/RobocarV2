import Vuex, { Payload, Store} from 'vuex'
import VuexPersistence from "vuex-persist";
import configurations, {Configurations} from "@/modules/configurations";

export interface State {
  configuration: Configurations
}

const vuexLocal = new VuexPersistence<State>({
  storage: window.localStorage,
  reducer: (state) => ({ configuration: state.configuration }),
  filter: (mutation) => mutation.type == 'addConfItem'
})

const store = new Vuex.Store<State>({
  modules: {
    configuration: configurations
  },
  plugins: [vuexLocal.plugin]
})

export default store
