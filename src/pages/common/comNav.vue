<template>
    <header :class="type">
        <div class="iconfont icon-xiangzuojiantou" @click="$router.back()"></div>
        <div class="logo">{{title}}</div>
        <div class="iconfont icon-more"></div>
    </header>
</template>

<script>
    export default {
        name: "comNav",
        props:["type","title"],
        methods:{
            back:function () {
                this.$router.back();
            }
        }
    }
</script>

<style scoped lang="less">
    header{
        display: flex;
        justify-content: space-between;
        line-height: 88/75rem;
        .iconfont{
            height: 88/75rem;
            width: 88/75rem;
            text-align: center;
            font-size: 30/75rem;
            font-weight: bold;
        }
        .logo{
            font-size: 34/75rem;
        }
    }
    header.type1{
        background-color: #f5a624;
        color: #fff;
    }
</style>