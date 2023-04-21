<template>
    <div class="container">
        <div v-if="store.loading === false" class="row">
            <CardUnit
            v-for="movie in store.allMovies" :key="movie.id"
                :title="movie.title"
                :originalTitle="movie.original_title"
                :originalLanguage="movie.original_language"
                :vote="movie.vote_average"
                :id="movie.id"
                :coverEndUrl="movie.backdrop_path"
                :coverBaseUrl="store.baseImgUrl"
            />
        </div>
    </div>        
</template>

<script>
    import { store } from "../data/store";
    import CardUnit from "./CardUnit.vue";
    export default {
        name: "CardList",
        components:{
            CardUnit
        },
        data() {
            return {
            store
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

</style>