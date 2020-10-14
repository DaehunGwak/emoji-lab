import Vue from "vue"
import VueRouter from "vue-router"
import RotationEmoji from "@/components/RotationEmoji"
import RollingEmoji from "@/components/RollingEmoji"

Vue.use(VueRouter)

const publicPath = process.env.BASE_URL  // from vue.config.js => publicPath

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: `${publicPath}emoji`, component: RotationEmoji },
    { path: `${publicPath}rolling`, component: RollingEmoji },
  ]
})

export default router
