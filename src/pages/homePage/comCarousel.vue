<template>
    <div class="carousel slide" id="carousel" data-ride="carousel" v-once>
        <div class="carousel-inner">
            <div class="item" :class="{active:i==0}" v-for="v,i in imgs">
                <div class="img-wrap">
                    <img :src="v" alt="">
                </div>
            </div>
        </div>

        <ol class="carousel-indicators">
            <li data-target="#carousel" :class="{active:i==0}" v-for="v,i in imgs" :data-slide-to="i"></li>
        </ol>
        <a class="left carousel-control" href="#carousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        </a>
        <a class="right carousel-control" href="#carousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </a>
    </div>
</template>

<script>
    export default {
        data:function () {
          return {
              imgs:[require('../../assets/banner1.png'),
                  require('../../assets/banner4.jpg'),
                 /* require('../../assets/banner3.jpg'),
                  require('../../assets/banner4.jpg')*/]
          }
        },
        mounted:function(){
            $("#carousel").carousel({
                interval:2000
            });
        }
    }
</script>

<style scoped lang="less">
    .img-wrap{
        height: 290/75rem;
        position: relative;
        >img{
            position: absolute;
            top:0;
            left:0;
            bottom:0;
            right:0;
            margin:auto;
        }
    }

</style>