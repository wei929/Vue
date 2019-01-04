<template>
    <div class="cart">
        <com-nav :type="'type1'" :title="'千潮惠'"></com-nav>
        <div>
            <div>您的购物车空空如也~</div>
            <button class="btn btn-warning btn-lg">快去抢购</button>
        </div>

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
        }
    }
</script>

<style scoped lang="less">
    .cart{
        height: 1000/75rem;
        width: 750/75rem;
        >div{
            text-align: center;
            font-size: 30/75rem;
            >div{
                padding: 400/75rem 0 20/75rem;
            }
            .btn{
               width: 180/75rem;
                height: 60/75rem;
                font-size: 25/75rem;
                background: #fff;
                color: #f5a624;
            }
        }

    }
</style>