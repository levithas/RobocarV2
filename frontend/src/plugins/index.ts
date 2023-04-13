/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import Vuex from 'vuex'

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  // @ts-ignore
  app.use(Vuex)
  app.use(vuetify)
  app.use(OpenLayersMap)
}
