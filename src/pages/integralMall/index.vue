<template>
    <div>
        <com-nav :title="'积分商城'"></com-nav>
        <com-carousel></com-carousel>

        <div class="content">
            <div class="tab-list">
                <div v-for="v,i in ['美发工具类','形象品类','书籍培训类','数码产品类']" :class="{active:index==i}" @click="index=i">
                    {{v}}
                </div>
            </div>
            <div class="content-list tab-content">
                <div class="tab-pane" v-for="items,i in goodsList" :class="{active:index==i}">
                    <t-tab v-for="v in items" :d="v" :type="i"></t-tab>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import comNav from "../common/comNav.vue";
    import comCarousel from "../homePage/comCarousel.vue";
    import tTab from"./tTab.vue";

    export default {
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
                ];
                this.data.forEach((v)=>{
                    var d = ["美发工具类",'形象品类','书籍培训类','数码产品类'];
                    for (var n=0;n<data.length;n++) {
                        for (var m=0;m<data.length;m++) {
                            if(d[n]==v.type[m]){
                                data[n].push(v);
                            };
                        }

                    }

                })
                return data;
            }
        },
        created:function(){
            var data = require("../../api/commodity.json");

            data.brand.forEach((arr)=>{
                arr.commodity.forEach((item)=>{
                    this.data.push(item);
                })
            })
        },
        components:{
            comNav,
            comCarousel,
            tTab
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