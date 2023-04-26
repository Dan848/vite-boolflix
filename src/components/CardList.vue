<template>
    <div class="container wrapper-list px-5">
            <h2 class="mt-5 mb-3 text-center display-2">Film</h2>
        <div v-if="store.loading === false" class="row">
            <CardUnit
            v-for="movie in store.movies.items" :key="movie.id"
                :title="movie.title"
                :originalTitle="movie.original_title"
                :originalLanguage="movie.original_language"
                :vote="movie.vote_average"
                :id="movie.id"
                :coverEndUrl="movie.backdrop_path"
                :coverBaseUrl="store.baseImgUrl"
                :overview="movie.overview"
                @toChangeJumbotron="changeJumbotron(movie.backdrop_path)"
            />
        </div>
            <h2 class="mt-5 mb-3 text-center display-2">Serie Tv</h2>
        <div v-if="store.loading === false" class="row">
            <CardUnit
            v-for="tv in store.tv.items" :key="tv.id"
                :title="tv.name"
                :originalTitle="tv.original_name"
                :originalLanguage="tv.original_language"
                :vote="tv.vote_average"
                :id="tv.id"
                :coverEndUrl="tv.backdrop_path"
                :coverBaseUrl="store.baseImgUrl"
                :overview="tv.overview"
                @onChangeJumbotron="changeJumbotron(tv.backdrop_path)"
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
            changeJumbotron(newUrl) {
                store.jumbotronEndUrl = newUrl || store.jumbotronEndUrl;
                console.log(store.jumbotronEndUrl);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper-list {
        margin-top: 5rem;
        margin-bottom: 100px;
    }
</style>