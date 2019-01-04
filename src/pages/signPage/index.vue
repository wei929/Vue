<template>
    <div>
        <com-nav :type="'type1'" :title="'签到'"></com-nav>
        <com-sign></com-sign>
    </div>
</template>

<script>
    import comNav from "../common/comNav.vue";
    import comSign from "./comSign.vue";

    export default {
        name: "index",
        components:{
            comNav,
            comSign
        }
    }
</script>

<style scoped lang="less">

</style>