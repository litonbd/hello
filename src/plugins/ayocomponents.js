import TheHeader from "../components/TheHeader.vue"
import TheSidebar from "../components/TheSidebar.vue"
import TheCard from "../components/TheCard.vue"
import AyoPrism from "../components/AyoPrism.vue"

export default {
    install(app, options) {
        console.log(options);
        app.component("TheHeader", TheHeader)
        app.component("TheSidebar", TheSidebar)
        app.component("TheCard", TheCard)
        app.component("AyoPrism", AyoPrism)
    }
}