import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './components/router/router'

const app = createApp(App)
app.use(router)
app.mount('#app')

AOS.init({
  duration: 1000,
  once: true,
})
