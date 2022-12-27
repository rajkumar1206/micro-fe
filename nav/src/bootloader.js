// import { createApp } from "vue";

// import "./index.css";

// import App from "./App.vue";

// createApp(App).mount("#app");

import { createApp } from 'vue'
import App from './App'

const mount = (el) => {
    const app = createApp(App)
    app.mount(el)
}

// const devRoot = document.querySelector('#app-vue')
// if (devRoot) {
//     mount(devRoot)
// }

export { mount }
