import { createRouter, createWebHistory } from "vue-router"

const Home = () => import("../pages/Home.vue")
const Layout = () => import("../pages/Layout.vue")
const Margin = () => import("../pages/Margin.vue")
const Padding = () => import("../pages/Padding.vue")
const Alignment = () => import("../pages/Alignment.vue")
const Flexbox = () => import("../pages/Flexbox.vue")
const Color = () => import("../pages/Color.vue")

const routes = [
  { path: "/layout", component: Layout },
  { path: "/margin", component: Margin },
  { path: "/padding", component: Padding },
  { path: "/alignment", component: Alignment },
  { path: "/flexbox", component: Flexbox },
  { path: "/color", component: Color },
  { path: "/", component: Home },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
