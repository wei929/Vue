<template>
    <div>

            <div class="content">
                <div class="logo">
                    <img src="../../assets/logo.png"/>
                </div>
                <div class="p">千潮惠在线销售专业美发品牌包括欧莱雅、威娜、施华蔻、卡诗、美奇丝、资生堂、TIGI、歌薇、妍多娜、欧芭、菲灵、艾索、卡碧丝、韩国高丽等十数个国内外一线品牌，产品超过2000多个品种，保证正货！千潮惠供应价格平均低于市场价20%，为美发店的低成本高品质运作提供强有力的支持。</div>
                <div class="footer">
                    <div class="qr-code">
                        <img src="../../assets/qrcode-baidu.png" alt="二维码图片"/>
                    </div>
                    <div class="txt">扫描二维码联系客服</div>
                    <div class="btn">
                        <a href="tel:123456789">拨打客服热线</a>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
    export default {
        name: "comAbout"
    }
</script>

<style scoped lang="less">
    .header .statusBar {
        background-color: #f5a624;
        color: #fff;
    }
    .content {
        border-top: 0.02666667rem solid #f1f1f1;
        background-color: #fff;
        font-size: .34rem;
    }
    .content div {
        margin: 0 auto;
    }
    .content .logo {
        width: 9.38666667rem;
        height: 2.92rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content .p {
        width: 8.78666667rem;
        color: #666;
        line-height: 0.6rem;
        text-align: justify;

    }
    .content .footer {
        padding: 2.34666667rem 0 1.22666667rem;
        text-align: center;
        color: #666;
    }

    #wrap > .content .footer .qr-code img {
        width: 3.54666667rem;
    }
   .content .footer .txt {
        margin: 0.34666667rem auto 0.82666667rem;
    }
   .content .footer .btn a {
        background-color: #f5a624;
        line-height: 1.18666667rem;
        border-radius: 0.09333333rem;
        display: inline-block;
        width: 3.74666667rem;
        height: 1.18666667rem;
        color: #fff;
       font-size: .34rem;
    }

</style>