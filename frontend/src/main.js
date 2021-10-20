import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
const app = createApp(App)
configKitInit(import.meta.env)

// plugins组件
import {pluginAnt} from "webkit1412/lib/plugin/ant";
pluginAnt(app)
import kitErrChannel from 'webkit1412/lib/components/kit-err-channel.vue'
app.component(ComponentName.ErrChannel, kitErrChannel)

// router
import {useRouter} from "webkit1412/lib/router";
import {routes} from "./router";
import {routeBaseAfter, routeBaseBefore} from "webkit1412/lib/router/intercepter";
import {ComponentName} from "webkit1412/lib/components";
import {configKitInit} from "webkit1412/lib/store/configkit";
const router = useRouter(app, routes)
router.beforeEach((to,from,next)=>{
  routeBaseBefore(to,from,next)
})
router.afterEach((to)=>{
  routeBaseAfter(to)
})

app.config.productionTip = false;
app.mount('#app')
