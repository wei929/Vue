<template>
    <div class="sign">
        <ul>
            <li v-for="v in tHead">{{v}}</li>
            <li v-for="v in tBody" :class="{'sign-in':v.isSign,'current':v.isCurrent}">{{v.d}}</li>
            <button class="btn btn-warning btn-lg">今日已签到</button>
        </ul>
        <div class="rule">
            <h3>签到规则</h3>
            <ol>
                <li>每次签到获得1积分奖励</li>
                <li>连续签到3天第3天可得到5积分的奖励；</li>
                <li>连续签到10天第10天可获得10点积分奖励</li>
            </ol>
            <h3>其他说明</h3>
            <p>如果有一天间断未签到，重新开始计算连续签到时间； <br>连续签到次数越多，优惠也就越多哦，达到十天之后重新计算。</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "comSign",
        data:function () {
            return {
                tHead:["周日","周一","周二","周三","周四","周五","周六"],
                getData:["2018-2-9","2018-10-8","2018-10-11","2018-10-12","2018-10-13"],
            }
        },
        created:function(){
            //vue框架使用vue-resource获取数据，相当于jq里，ajax功能的分割
            $.ajax({
                methods:"GET",
                url:"https://fjlyl.xyz/api/",
                dataType:"jsonp",
                success:(d) => {
                    console.log(d);
                    this.test = d.data;
                    //this.getData = ??;
                }
            })
        },
        computed:{
            tBody:function () {
                var res = [];
                //获取上个月
                var a = (function () {
                    var _d = new Date();
                    _d.setDate(1);//设置当月的第一天
                    //获取得到什么值  0 1 2 3 4 5 6
                    //想要什么值     1 0 -1 -2 -3 -4 -5
                    return 1-_d.getDay();
                })();
                //获取下个月
                var b = (function () {
                    var _d = new Date();
                    _d.setMonth(_d.getMonth()+1);
                    _d.setDate(0);//设置当月的最后一天
                    return 6-_d.getDay()+_d.getDate();
                })();

                //获取日历
                for (let i = a; i <= b; i++) {
                    (function (i) {
                        var _d = new Date();
                        _d.setDate(i);
                        res.push({
                            week:_d.getDay(),
                            d:_d.getDate(),
                            mon:_d.getMonth(),
                            year:_d.getFullYear(),
                            date:_d,
                            isSign:false,
                            isCurrent:false
                        });
                    })(i);
                }
                console.log(res);


                var searchFn = (v,callback) => {
                    var _d = new Date(v);

                    var item = res.find(function ($d) {
                        return $d.year == _d.getFullYear()&&$d.mon == _d.getMonth()&&$d.d == _d.getDate();
                    })
                    //console.log(item);

                    item&&callback&&callback(item);
                }
                //设置签到日期
                this.getData.forEach(function (v) {
                    searchFn(v,function (item) {
                        item.isSign = true;
                    });
                })

                //设置当前日期
                searchFn(new Date(),function (item) {
                    item.isCurrent = true;
                });

                return res;
            }
        }
    }
</script>

<style scoped lang="less">
    .sign{
        font-size: 22/75rem;
        >ul{
            display: flex;
            flex-wrap: wrap;
            padding: 0;
            width:7*96/75rem ;
            margin: 12/75rem auto;
            list-style: none;

            >li{
                width: 80/75rem;
                height: 80/75rem;
                line-height: 80/75rem;
                margin: 7/75rem;
                text-align: center;
                border-radius: 50%;
                &.sign-in{
                    background-color: #f5a624;
                }

                &.current{
                    border-radius: 50%;
                    border: 2/75rem solid #f5a624;
                }
            }
            >.btn{
                width: 258/75rem;
                height: 81/75rem;
                margin: 25/75rem auto;
                font-size: 26/75rem;
            }
        }
        .rule{
            background: #f1f1f1;
            padding: 46/75rem;

            line-height: 2.34;
            h3{
                font-weight: bold;
                font-size: 28/75rem;
            }
            >ol{
                padding: 0 20/75rem;

            }
        }
    }
</style>