<template>
    <div>
        <com-nav :type="'type1'" :title="'联系我们'"></com-nav>
        <com-about></com-about>
    </div>
</template>

<script>
    import comNav from "../common/comNav.vue";
    import ComAbout from "./comAbout.vue";
    export default {
        components:{
            ComAbout,
            comNav,
        }
    }
</script>

<style scoped>

</style>