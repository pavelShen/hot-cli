<style lang="sass">

.link{
    display: inline-block;
    padding: 12px 16px;
    background-color: #eee;
}
.router-link-active{
    background-color: #ed675f;
    color: #fff;
}


</style>

<template>

<div class="wrapper">
    <div class="layout">
        <div class="l-row">
            <router-link to="/foo" class="link">Go to Foo</router-link>
            <router-link to="/bar" class="link">Go to Bar</router-link>
            <router-view></router-view>
        </div>
        <div class="l-row">
            <div class="m-block">
                u can click button above，and view the Page Source. <br>
                it is an isomorphic app.
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {
    mounted(){
        console.log('mounted');
    }
}

</script>
