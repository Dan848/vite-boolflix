<template>
    <div class="w100">
    <img class="img-fluid" :src="store.jumbotronBaseUrl + store.jumbotronEndUrl" alt="">
    </div>
</template>

<script>
    import { store } from "../data/store";
    export default {
        name: "JumbotronUnit",
        data() {
            return {
            store
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>