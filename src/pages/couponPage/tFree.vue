<template>
    <div>
        <div class="txt">
            <div class="name">{{d.name}}</div>
            <div class="value">¥{{d.value}}</div>
            <div class="requirement">满{{d.requirement}}可用</div>
            <div class="time">
                使用有效期:{{d.startDate}}-{{d.endDate}}
            </div>
            <div class="get">立即领取</div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "tFree",
        data:function () {
            return{

            }
        },
        props:['d','type'],
        computed:{

        }
    }
</script>

<style scoped lang="less">
    .txt {
        width: 704/75rem;
        height: 208/75rem;
        /*border-left: 20px dotted #fff;*/
        justify-content: flex-start;
        margin: 0 auto 35/75rem ;
        font-size: 0.32rem;
        padding: 30/75rem 40/75rem;
        background: #d49c53;
        color: #fff;
    }
    .get{
        float: right;
    }
</style>