<template>
    <div>
        <com-nav :type="'type1'" :title="'我的订单'"></com-nav>
        <div class="user-bg">
            <div class="user">
                <div><img src="../../assets/user.jpg" height="153" width="153"/></div>
                <div>张小薇</div>
                <p>v3</p>
            </div>
            <div class="ds"><button class="btn btn-lg">每日签到</button></div>
        </div>

        <ul>
            <router-link v-for="v,i in datas" :to="v.to" :key="i">
                <b :style="{'background-position-x':-60*i+'px'}"></b>
                <span>{{v.title}}</span>
            </router-link>
        </ul>
        <com-tab></com-tab>
    </div>
</template>

<script>
    import comNav from "../common/comNav.vue";
    import comTab from "../common/comTab.vue";

    export default {
        name: "index",
        components:{
            comNav,
            comTab
        },
        data:function () {
            return {
                datas:[{
                    title:"全部订单",
                    to:'/home'
                },{
                    title:"待付款",
                    to:'/home'
                },{
                    title:"待收货",
                    to:'/home'
                }]
            }
        }
    }

</script>

<style scoped lang="less">
    .user-bg{
        height: 210/75rem;
        width: 750/75rem;
        background: #f5a624;
        padding: 0 23/75rem;
        >.user{
            width: 350/75rem;
            height: 164/75rem;
            line-height: 164/75rem;
            font-size: 30/75rem;
            float: left;
            >div{
                float: left;
                margin-right: 22/75rem;
                color: #fff;
            }
        }
        .ds{
            float: right;
            height: 164/75rem;
            line-height: 164/75rem;
        }
        button{
            background: #fff;
            color: #f5a624;
            font-size: 23/75rem;
        }
    }
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style: none;
        >a{
            width: 3.3rem;
            height: 190/75rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            text-align: center;
            text-decoration: none;
            color: #666;
            font-size:24/75rem;
            b{
                display: block;
                width: 60/75rem;
                height: 60/75rem;
                margin: 10/75rem auto;
                background: transparent url("../../assets/icon.png") 0 0 no-repeat;
                font-size: 10rem;
            }
        }
    }
</style>