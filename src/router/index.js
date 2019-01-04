import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";

//拦截路由
Vue.use(VueRouter);

//路由模块
export default new VueRouter({
    routes,
})