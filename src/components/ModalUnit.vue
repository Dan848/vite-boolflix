<template>
    <div @click="$emit('toCloseModal')" class="modal-overlay-background">
        <div @click.stop class="modal-box">
            <div class="cover mb-4">
                <!-- IMAGE -->
                <img v-if="modalCoverEndUrl" class="img-fluid" :src="store.jumbotronBaseUrl + modalCoverEndUrl" :alt="modalOriginalTitle">
                <!-- IMAGE NULL -->
                <img v-else class="img-fluid" src="/img/img_not_found.jpg" alt="Img not found - Not my prob">
                <!-- CROSS CLOSE -->
                <div @click="$emit('toCloseModal')" class="close-modal">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div class="px-5 py-3">
                <h2 class="mb-2">{{ modalTitle }}</h2>
                <div class="small"> Titolo Originale </div>
                <div class="mb-4">{{ modalOriginalTitle }}</div>
                <div class="overview">
                    {{ modalOverview }}
                </div>
            </div>
        </div>
    </div>
  </template>

<script>
    import { store } from "../data/store"
    export default {
        name: "ModalUnit",
        props: {
            modalTitle: String,
            modalOriginalTitle: String,
            modalOriginalLanguage: String,
            modalVote: Number,
            modalId: Number,
            modalCoverEndUrl: String,
            modalCoverBaseUrl: String,
            modalOverview: String,
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>
    .modal-overlay-background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #000000da;
        z-index: 900;
        

        .modal-box {
        background-color: #181818;
        width: 100%;
        z-index: 950;
        overflow-y: auto;
            .cover {
                width: 100%;
                position: relative;
                img {
                    width: 100%;
                }
                .close-modal{
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    top: 10px;
                    right: 10px;
                    background-color: #181818;
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    font-size: 1rem;
                }
            };
        }

    }

    @media only screen and (min-width: 500px) {
        .modal-box {
            width: 80%!important;
            .close-modal{
            width: 45px!important;
            height: 45px!important;
            font-size: 2rem!important;
            }
        }
    }

</style>