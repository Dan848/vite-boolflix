import { reactive } from "vue";

export const store = reactive({
    baseSearchUrl: "https://api.themoviedb.org/3/search/",
    baseImgUrl: "https://image.tmdb.org/t/p/w500",
    jumbotronEndUrl: "/zZiflZpuaZerugtfdyXcg6dcylD.jpg",
    jumbotronBaseUrl: "https://image.tmdb.org/t/p/original",
    search: {
        api_key: "7948531c07887b40a0cbd32cc3e7ea77",
        query: "Star Wars"
    },
    loading: false,
    movies: {
        items: [],
        endpoint: "movie" 
    },
    tv: {
        items: [],
        endpoint: "tv" 
    }
})