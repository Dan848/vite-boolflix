<template>
    <div class="container">
        <div v-if="!store.loading" class="row">
            <div class="col d-flex justify-content-center" v-for="movie in store.allMovies" :key="movie.id">
                <div class="position-relative">
                    <!-- IMAGE -->
                    <img v-if="movie.backdrop_path" :src="store.baseImgUrl + movie.backdrop_path" alt="">
                    <!-- IMAGE NULL -->
                    <img v-else src="/img/img_not_found.jpg" alt="">
                    <!-- INFO BOX -->
                    <div class="info-box d-flex justify-content-between p-2">
                        <!-- TITLE -->
                        <div class="h-100 d-flex flex-column justify-content-between">
                            <div>{{ movie.title }}</div>
                            <div class="small">Titolo Originale
                                <div>{{ movie.original_title }}</div>
                            </div>
                        </div>
                        <!-- RATING & FLAG -->
                        <div class="h-100 d-flex flex-column justify-content-center align-items-end"> 
                            <div class="mb-1 text-nowrap rating-box" :style="{backgroundImage: calcRating(movie.vote_average)}">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div :class="'mt-1 fs-5 position-relative fi fi-' + movie.original_language">
                                <img class="unknown-flag" src="/img/pride_flag.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
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
            store,
            starVote: 0
            }
        },
        computed: {

        },
        methods: {
            calcRating(vote) {
                const yellowPercent = vote * 10;
                const whitePercent = 100 - (vote * 10);
                if (vote){
                return `linear-gradient(to right, yellow ${yellowPercent}%, red ${whitePercent}% 100%)`;
                }
                else {
                    return `linear-gradient(to right, red ${yellowPercent}%, red ${whitePercent}% 100%)`;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{
        transition: transform 0.5s ease-in-out;
        &:hover{
            transform: scale(1.5);
            z-index: 666;
            .info-box{
            opacity: 1;
            }
        }
        img{
            max-width: 300px;
        } 
        .info-box{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 50%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 555;
            font-size: 0.7rem;
            opacity: 0;
            transition: opacity 0.8s ease-in-out;
            .rating-box{
                position: relative;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                color: transparent;
            }
            .unknown-flag{
                position: absolute;
                top: 0;
                right: 0;
                width: 26px;
                height: 20px;
                z-index: -1;
            }
        }
    }

</style>