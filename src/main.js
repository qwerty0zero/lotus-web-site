import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import components from '@/components/UI'

const app = createApp(App)

components.forEach(element => {
    app.component(element.name, element)
});


app
.use(router)
.mount('#app')
