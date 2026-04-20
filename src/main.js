import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router.js'

import './styles/tokens/colors.css'
import './styles/tokens/fonts.css'
import './styles/tokens/breakpoints.css'
import './styles/global.css'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.mount('#app')
