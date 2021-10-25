import { createApp } from 'vue'
import App from './App'
import router from './routes/index'
import store from './store/index'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#root')
