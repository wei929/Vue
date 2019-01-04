<template>
    <div>
        <div class="search">
            <input type="text" v-model="txt" @focus="isShow=false" @blur="isShow=!txt">
            <div class="txt" v-show="isShow">
                <span class="glyphicon glyphicon-search"></span>
                搜索商品
            </div>
        </div>

        <div class="content">
            <div class="tab-list">
                <div v-for="v,i in ['待进行','进行中','已结束']" :class="{active:index==i}" @click="index=i">
                    {{v}}
                    <b></b>
                </div>
            </div>
            <div class="content-list tab-content">
                <div class="tab-pane" v-for="items,i in goodsList" :class="{active:index==i}">
                    <t-item v-for="v in items" :d="v" :type="i"></t-item>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import tItem from "./tItem.vue";
    export default {
        name:"comSearch",
        data:function () {
            return {
                txt:null,
                isShow:true,
                index:0,
                test:null,
                data:[]
            }
        },
        computed:{
            goodsList:function () {
                var data = [
                    [],
                    [],
                    [],
                ];
                this.data.forEach((v)=>{
                    var $d = new Date();
                    var start = new Date(v.promotion.startTime);
                    var end = new Date(v.promotion.endTime);
                    if($d<start){
                        console.log($d<start);//待进行
                        data[0].push(v);
                    }
                    if(start<$d&&$d<end){
                        console.log(start<$d&&$d<end);//进行中
                        data[1].push(v);
                    }
                    if($d>end){
                        console.log($d>end);//已结束
                        data[2].push(v);
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
            tItem,
        }
    }
</script>


<style scoped lang="less">
    .search{
        width:623/75rem;
        height: 77/75rem;
        margin: 38/75rem auto;
        background-color: #f5a624;
        border-radius: 77/2/75rem;
        .txt,input{
            width: 100%;
            height:100%;
            display: block;
            position: relative;
            line-height: 77/75rem;
            color: #fff;
            font-size:26/75rem;
            text-align: center;
        }
        .txt{
            top:-100%;
        }
        input{
            background-color: transparent;
            border:none;
            outline: none;
            z-index: 1;
        }
    }
    .tab-list{
        display: flex;
        justify-content: space-around;
        color: #666;
        font-size:26/75rem;
        margin: 50/75rem auto 37/75rem;

        >div.active{
            color: #f5a624;
            b{
                display: block;
                width: 44/75rem;
                height:6/75rem;
                border-radius: 3/75rem;
                background-color: #f5a624;
                margin: 16/75rem auto 0;
            }
        }
    }

</style>