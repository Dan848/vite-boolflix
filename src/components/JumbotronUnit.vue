<template>
    <div class="w-100">
    <img class="w-100" :src="store.jumbotronBaseUrl + store.jumbotronEndUrl" alt="">
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