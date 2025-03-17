import { createSSRApp } from "vue";
import App from "./App.vue";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 引入pinia
import { createPinia } from 'pinia'
export function createApp() {
	const pinia = createPinia()
	pinia.use(piniaPluginPersistedstate)
	const app = createSSRApp(App);
	app.use(pinia)
	return {
		app,
		pinia
	};
}
