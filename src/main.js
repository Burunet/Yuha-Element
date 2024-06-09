import './assets/main.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import App from './App.vue'
import router from './router'
import '@/permission.js'

if (process.env.NODE_ENV === 'development') {
    import('./mock')
}

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(createPinia())
app.use(router)

app.mount('#app')
