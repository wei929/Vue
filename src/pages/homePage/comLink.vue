<template>
    <ul>
        <router-link v-for="v,i in datas" :to="v.to" :key="i">
            <b :style="{'background-position-x':-60*i+'px'}"></b>
            <span>{{v.title}}</span>
        </router-link>
    </ul>
</template>

<script>
    export default {
        data:function () {
            return {
                datas:[{
                    title:"领优惠券",
                    to:'/coupon'
                },{
                    title:"积分商城",
                    to:'/mall'
                },{
                    title:"联系我们",
                    to:'/about'
                },{
                    title:"商品分类",
                    to:'/type'
                }]
            }
        }
    }
</script>

<style scoped lang="less">
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style: none;
        >a{
            width: 2.5rem;
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
                margin: 0 auto;
                background: transparent url("../../assets/icon.png") 0 0 no-repeat;
                font-size: 10rem;
            }
        }
    }
</style>