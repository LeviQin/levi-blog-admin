import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";

const pinia = createPinia();
import * as Icons from "@element-plus/icons-vue";

const installIcon = (app) => {
    // 使用全部图标
    app.config.globalProperties.$icon = Icons
}
createApp(App).use(installIcon).use(ElementPlus).use(router).use(pinia).mount('#app');
