<style lang="sass">



</style>

<template>

<div class="col-12">
    <div class="m-block">

        <template v-if="page">
            <p>
                this a p in a template tag
            </p>
        </template>

        <h3>Page Bar</h3>
        <p>
            {{ message }}
        </p>
    </div>
</div>

</template>

<script>


export default {
    data(){
        return {
            message: 'this is child page, bar',
            page: true
        }
    },
    mounted(){
    }
}


</script>
