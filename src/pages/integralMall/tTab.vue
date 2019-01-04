<template>
    <div class="t-Tab" :class="'type'+type">
        <div class="img-wrap"><img :src="d.images[0]"></div>
        <div class="txt">
            <h2 class="name">{{d.name}}</h2>
            <h2 class="value">{{d.mallValue}}积分</h2>
            <div class="comments">{{d.comments.length}}条评论</div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "tTab",
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
    .t-Tab{
        width: 704/75rem;
        height: 208/75rem;
        border-bottom: 1px solid #d1d1d1;
        display: flex;
        justify-content: flex-start;
        margin: 0 auto;
        font-size: 0.32rem;
        padding: 22/75rem 0;
        .img-wrap {
            margin-left: 0.14666667rem;
            width: 2.06666667rem;
            height: 2.08rem;
            line-height: 2.08rem;
            border-radius: 0.04rem;
            text-align: center;
            >img{
                width: 156/75rem;
                height: 156/75rem
            }
        }
        .txt {
            margin-left: 40/75rem;
            width: 5.97333333rem;
            height: 2.08rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .txt .name {
            color: #333;
            margin: 0;
        }
       .txt .value {
            font-size: 0.4rem;
            color: #e4393c;
        }
        .txt .comments {
            font-size: 0.32rem;
            color: #999;
        }
    }


</style>