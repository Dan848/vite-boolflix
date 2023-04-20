<template>
    <div class="container">
        <div class="row">
            <div class="col" v-for="movie in store.allMovies" :key="movie.id">
                <img :src="store.baseImgUrl + movie.backdrop_path" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from "../data/store";

    export default {
        name: "CardList",
        data() {
            return {
            store
            }
        },
    }
</script>

<style lang="scss" scoped>
    img{
        max-width: 300px;
    }
</style>