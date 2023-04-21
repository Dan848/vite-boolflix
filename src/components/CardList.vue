<template>
    <div class="container">
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
                @onChangeJumbotron="changeJumbotron(movie.backdrop_path)"
            />
        </div>
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

</style>