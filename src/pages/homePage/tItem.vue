<template>
    <div class="t-item" :class="'type'+type">
        <div class="img">
            <img :src="d.images[0]">
        </div>
        <div class="txt">
            <h2 class="title">{{d.name}}</h2>
            <div class="price">¥{{d.price}}</div>
            <div class="time" v-show="!(type==2)">
                抢购时间:{{d.promotion.startTime.split(' ')[1]}}-{{d.promotion.endTime.split(' ')[1]}}
            </div>
            <div class="number">
                <div class="pro">已售：{{per}}</div>
                <div class="progress">
                    <div class="progress-bar progress-bar-danger" :style="{width: per}"></div>
                </div>
            </div>
            <button class="btn">{{["立即预约","立即抢购","已结束"][type]}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tItem",
        data:function () {
            return{

            }
        },
        props:['d','type'],
        computed:{
            per:function () {
                var n = (this.d.stock / this.d.total * 100).toFixed(2);
                return n+"%";
            }
        }
    }
</script>

<style scoped lang="less">
    .t-item{
        width: 663/75rem;
        border: 2px solid #fff;
        margin: 0 auto 35/75rem;
        padding: 23/75rem;
        box-shadow: 0 0 13px lightgrey;
        display: flex;
        overflow: hidden;
        .img {
            width: 250/75rem;
            height: 250/75rem;
            border-radius: 0.04rem;
        }
        >.txt {
            font-size: 0.32rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 0.42666667rem;
            width: 5.33333333rem;
            .title{
                font-weight: normal;
                font-size: 0.4rem;
                margin: 0;
            }
            .price {
                font-size: 0.4rem;
                color: #e4393c;
            }
            .time{
                color: #999;
            }
            .number{
                color: #999;
            }
            .pro,.progress-bar{
                margin-right: 15px;
                display: inline-block;
                float: left;

            }
            .progress{
                display: inline-block;
                width: 1.65333333rem;
                height: 0.16rem;
                background-color: #ededed;
                border-radius: 0.08rem;
                overflow: hidden;
                margin: 0;
            }
            .progress-bar{
                height: inherit;
                background-color: #f46467;
            }
            .btn {
                width: 165/75rem;
                height: 52/75rem;
                color: #fff;
                border-radius: 0.04rem;
                font-size: 24/75rem;
            }
        }

    }
    .type0,.type1{
        .btn{
            background: #f5a624;
        }
    }


</style>