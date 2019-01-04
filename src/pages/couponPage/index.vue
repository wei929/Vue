<template>
    <div>
        <com-nav :type="'type1'" :title="'领优惠券'"></com-nav>
        <div class="content">
            <div class="tab-list">
                <div v-for="v,i in ['欧莱雅','威娜','施华蔻','美奇丝','卡诗','沙宣']" :class="{active:index==i}" @click="index=i">
                    {{v}}
                </div>
            </div>
            <div class="content-list tab-content">
                <div class="tab-pane" v-for="items,i in goodsList" :class="{active:index==i}">
                    <t-free v-for="v in items" :d="v" :type="i"></t-free>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import comNav from "../common/comNav.vue";
    import tFree from"./tFree.vue";
    export default {
        components:{
            comNav,
            tFree
        },
        data:function () {
            return {
                txt:null,
                isShow:true,
                index:0,
                data:[]
            }
        },
        computed:{
            goodsList:function () {
                var data = [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                ];
                this.data.forEach((v)=>{
                    var d = ['欧莱雅优惠券','威娜优惠券','施华蔻优惠券','美奇丝优惠券','卡诗优惠券','沙宣优惠券'];
                    for (var n=0;n<6;n++) {
                        if(d[n]==v.name){
                            data[n].push(v);
                        };
                    }

                })
                return data;
            }
        },
        created:function(){
            var data = require("../../api/commodity.json");

            data.brand.forEach((arr)=>{
                arr.coupon.forEach((item)=>{
                    this.data.push(item);
                })
            })
        }
    }
</script>

<style scoped lang="less">
    .tab-list{
        display: flex;
        justify-content: space-around;
        color: #666;
        font-size:26/75rem;
        margin: 0 auto 25/75rem;
        height: 108/75rem;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
        box-shadow: 0 0 0.10666667rem #fbfbfb;

        >div.active{
            color: #f5a624;
        }
    }
</style>