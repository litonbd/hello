import { createApp } from "vue"
import App from "./App.vue"
import router from "./routes/index"
import AyoComponents from "./plugins/ayocomponents"

import "./assets/css/ayoflex.scss"
import "./assets/css/example.css"
const app = createApp(App)
app.use(AyoComponents)
app.use(router)

app.mount("#app")
