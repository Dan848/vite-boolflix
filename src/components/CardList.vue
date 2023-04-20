<template>
    <div class="container">
        <div class="row">
            <div class="col d-flex justify-content-center" v-for="movie in store.allMovies" :key="movie.id">
                <div class="position-relative">
                    <img v-if="movie.backdrop_path" :src="store.baseImgUrl + movie.backdrop_path" alt="">
                    <img v-else src="/img/img_not_found.jpg" alt="">
                    <div class="info-box d-flex justify-content-between p-2">
                        <div class="h-100 d-flex flex-column justify-content-between">
                            <div>{{ movie.title }}</div>
                            <div class="small">Titolo Originale
                                <div>{{ movie.original_title }}</div>
                            </div>
                            
                        </div>
                        <div class="h-100 d-flex flex-column justify-content-center"> 
                            <div>{{ movie.vote_average }}</div>
                            <div>{{ movie.original_language }}</div>
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
            store
            }
        },
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
        }
    }

</style>