<template>
    <header :class="{'make-absolute' : true, 'make-fixed' : isScrolled}">
        <div class="container">
            <div class="row justify-content-between align-items-center py-3">
                <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-start  align-items-center mb-3 mb-sm-0">
                    <h1 class="m-0">Netflix</h1>
                    <ul class="list-unstyled d-flex gap-3 align-items-center just ms-4 my-0">
                        <li>
                            Home
                        </li>
                        <li>
                            Serie Tv
                        </li>
                        <li>
                            Film
                        </li>
                        <li>
                            Lingua
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
                    <input type="text" name="searchBar" id="searchBar">
                    <button>Search</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderNav",
        props: {
            isScrolled: Boolean
        }
        
    }
</script>

<style lang="scss" scoped>
    
    .make-absolute {
        top: 0px;
        left: 0px;
        right: 0px;
        position: absolute;
        background: transparent;
    }

    .make-fixed {
        position: fixed !important;
        width: 100%;
        background: rgb(20, 20, 20) !important;
    }

    h1 {
        color: red;
    }
    ul {
        li:hover{
            cursor: pointer;
            opacity: (0.7);
        }
    }
</style>