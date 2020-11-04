import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'vant'
import 'lib-flexible/flexible'
import 'vant/lib/index.css'
import './index.css'

const app = createApp(App)
app.use(Button)

app.mount('#app')
