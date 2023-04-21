<template>
    <div class="col-12 col-md-6  d-flex justify-content-center">
        <div @click="$emit('onChangeJumbotron', coverEndUrl)" class="position-relative card-box" :id="id">
            <!-- IMAGE -->
            <img v-if="coverEndUrl" class="cover" :src="coverBaseUrl + coverEndUrl" :alt="originalTitle">
            <!-- IMAGE NULL -->
            <img v-else class="cover" src="/img/img_not_found.jpg" alt="Img not found - Not my prob">
            <!-- INFO BOX -->
            <div class="info-box d-flex justify-content-between p-2">
                <!-- TITLE -->
                <div class="h-100 d-flex flex-column justify-content-between">
                    <div>{{ title }}</div>
                    <div class="small">Titolo Originale
                        <div>{{ originalTitle }}</div>
                    </div>
                </div>
                <!-- RATING & FLAG -->
                <div class="h-100 d-flex flex-column justify-content-center align-items-end"> 
                    <div class="mb-1 text-nowrap rating-box" :style="{backgroundImage: calcRating(vote)}">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="fs-5 position-relative">
                        <span :class="'fi fi-' + originalLanguage"></span>
                        <img class="unknown-flag" src="/img/pride_flag.png" alt="Unknown Flag">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "CardUnit",
        props: {
            title: String,
            originalTitle: String,
            originalLanguage: String,
            vote: Number,
            id: Number,
            coverEndUrl: String,
            coverBaseUrl: String
        },
        data() {
            return {
            }
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
    .col-12{
        .card-box{
            transition: transform 0.5s ease-in-out;
            &:hover{
                transform: scale(1.5);
                z-index: 666;
                cursor: pointer;
                .info-box{
                opacity: 1;
                }
            }
        }
        .cover{
            width: 210px;
        } 
        .info-box{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
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
            span {
                position: absolute;
                top: 0;
                right: 0;
                z-index: 555;
            }
            .unknown-flag{
                position: absolute;
                top: 1px;
                right: 1px;
                width: 24px;
                height: 18px;
                z-index: -1;
            }
        }
    }
    @media only screen and (min-width: 500px) {
        .cover {
            width: 300px!important;
        }
        .info-box{
            height: 60%!important;
        }
    }
</style>