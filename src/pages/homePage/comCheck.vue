<template>
    <div>
        <div class="sign-in">
            <img src="../../assets/man.png" height="149" width="157"/>
            <div class="txt">
                <div>
                    你已经连续签到
                    <b class="day">0</b> 天
                </div>
                <div>签到可获得豆豆奖励！</div>
            </div>
            <router-link to="/sign" class="btn">
                <div>立即<br />签到</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comCheck"
    }
</script>

<style scoped lang="less">
    .sign-in {
        width: 9.38666667rem;
        height: 1.70666667rem;
        margin: 0.6rem auto 2.32rem;
        position: relative;
        border: 1px dashed #d3d3d3;
    }
    .sign-in img {
        position: absolute;
        bottom: 0;
        left: -0.13333333rem;
        width: 2.09333333rem;
    }
    .sign-in .txt {
        margin: 0.41333333rem 0 0 2.88rem;
        font-size: 0.34666667rem;
        color: #666;
        height: 0.93333333rem;
    }
    .sign-in .txt .day {
        color: #f5a624;
    }
    .sign-in .btn {
        width: 1.41333333rem;
        height: 1.41333333rem;
        background-color: #f5a624;
        border-radius: 50%;
        position: absolute;
        right: 0.44rem;
        top: 0.16rem;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22/75rem;
    }
</style>