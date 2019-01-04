import homePage from "../pages/homePage/index.vue";
import myPage from "../pages/myPage/index.vue";
import shoppingCart from "../pages/shoppingCart/index.vue";

import signPage from "../pages/signPage/index.vue";

import aboutUs from "../pages/aboutUs/index.vue";
import commodityType from "../pages/commodityType/index.vue";
import couponPage from "../pages/couponPage/index.vue";
import integralMall from "../pages/integralMall/index.vue";

export default [{
    path:"/home",
    component:homePage
},{
    path:"/my",
    component:myPage
},{
    path:"/cart",
    component:shoppingCart
},{
    path:"/about",
    component:aboutUs
},{
    path:"/type",
    component:commodityType
},{
    path:"/coupon",
    component:couponPage
},{
    path:"/mall",
    component:integralMall
},{
    path:"/sign",
    component:signPage
},{
    path:"*",
    redirect:"/home"
}]