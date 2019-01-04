<template>
    <div class="wrap">
        <header>
            <com-nav :title="'千潮惠'"></com-nav>
            <com-carousel></com-carousel>
            <com-link></com-link>
        </header>
        <div class="gap"></div>

        <com-search></com-search>
        <com-check></com-check>
        <com-tab></com-tab>
    </div>
</template>

<script>
    import comNav from "../common/comNav.vue";
    import comTab from "../common/comTab.vue";
    import comCarousel from "./comCarousel.vue";
    import comLink from "./comLink.vue";
    import comSearch from "./comSearch.vue";
    import comCheck from "./comCheck.vue";

    export default {
        name: "index",
        components:{
            comNav,
            comTab,
            comCarousel,
            comLink,
            comSearch,
            comCheck
        },
    }
</script>

<style scoped lang="less">
    .wrap{
        .gap{
            height: 29/75rem;
            background: #f1f1f1 linear-gradient(#ececec 0%,#f1f1f1 40%,#f1f1f1 40%,#ececec 100%) 0 0 no-repeat;
        }
    }
</style>