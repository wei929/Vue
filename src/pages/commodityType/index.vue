<template>
    <div>
        <com-nav :type="'type1'" :title="'商品分类'"></com-nav>
        <div>商品分类</div>
    </div>
</template>

<script>
    import comNav from "../common/comNav.vue";
    export default {
        components:{
            comNav,
        }
    }
</script>

<style scoped lang="less">

</style>