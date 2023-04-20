import { reactive } from "vue";

export const store = reactive({
    baseSearchUrl: "https://api.themoviedb.org/3/search/",
    baseImgUrl: "https://image.tmdb.org/t/p/w",
    endpointSearchUrl: {
        movies: "movie?",
        tv: "tv?"
    },
    search: {
        api_key: "7948531c07887b40a0cbd32cc3e7ea77",
        query: "a"
    },
    loading: false,
    allMovies: []
})