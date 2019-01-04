//引入框架
import  Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";//css 核心样式
import "bootstrap/dist/css/bootstrap-theme.css";//主题css
import "bootstrap";//bootstrap.js

//引入自定插件
import "./plugin/mobile.js";
import "./plugin/icon/iconfont.css";
import app from "./app.vue";
import router from "./router";

//Vue实例
new Vue({
    el:"#app",
    render:h=>h(app),
    router,
})