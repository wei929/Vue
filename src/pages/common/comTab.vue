<template>
    <footer>
        <!--<router-link v-for=""></router-link>-->
        <router-link to="/home" :active-class="'active'">
            <div class="iconfont icon-shouye"></div>
            首页
        </router-link>
        <router-link to="/cart" :active-class="'active'">
            <div class="iconfont icon-gouwuche"></div>
            购物车
        </router-link>
        <router-link to="/my" :active-class="'active'">
            <div class="iconfont icon-wodejuhuasuan"></div>
            我的
        </router-link>
    </footer>
</template>

<script>
    // import routes from "../../router/routes.js";
    // console.log(routes);
    export default {
        name: "comTab"
    }
</script>

<style scoped lang="less">
    footer{
        position: fixed;
        left: 0;bottom: 0;right: 0;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 0 9px #fafafa;
        background: #fff;

        .iconfont{
        	font-size: 52/75rem;
        	font-weight: bold;
		}
        >a{
            width: 118/75rem;
            height: 118/75rem;
            text-align: center;
            text-decoration: none;
        	font-size: 20/75rem;
        	color: #888;
            /*移动端做法*/
            display: flex;
            flex-direction: column;
            justify-content: center;

            /*PC端做法 - 多行文本垂直居中 - IFC*/
            /*&:before{
                content: "";
                height: 100%;
                display: inline-block;
                vertical-align: middle;
            }
            >*{
                display: inline-block;
                vertical-align: middle;
            }*/

            &.active{
                color: #f5a624;
            }
        }

    }
</style>