<template>
  <HeaderNav @onGetMovies="getMovieList" :isScrolled="scrolled"/>
  <main>
    <CardList />
  </main>

</template>

<script>
  import { store } from "./data/store.js";
  import axios from 'axios';
  import HeaderNav from './components/HeaderNav.vue';
  import CardList from "./components/CardList.vue";
  import { createApp } from "vue";

  export default {
    name: "App.vue",
    components: {
    HeaderNav,
    CardList
    },
    data() {
      return {
        store,
        scrolled: false
      }
    },

    mounted() {
      this.getMovieList();
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },

    methods: {
      handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const isScrolled = scrollTop > 0
        this.scrolled = isScrolled
      },

      getMovieList() {
        store.loading = true;
        let url = store.baseSearchUrl + store.endpointSearchUrl.movies;
        let options = {};
        let params = {};
        //Populate the search object
        for (let key in store.search) {
          if (store.search[key]) {
            params[key] = store.search[key];
          }
        }

        if (Object.keys(params).length > 0) {
          options.params = params
        }

        //Movie Showed
        axios.get(url, options).then((res) => {
          store.allMovies = res.data.results.map((item) => {
            if (item.original_language === "en") {
              return {
                ...item,
                original_language: "gb"
              };
            } else if (item.original_language === "ja") {
              return {
                ...item,
                original_language: "jp"
              };
            } else if (item.original_language === "cs") {
              return {
                ...item,
                original_language: "cz"
              };
            } else if (item.original_language === "zh") {
              return {
                ...item,
                original_language: "cn"
              };
            } else {
              return item;
            }
          });
          console.log(store.allMovies)
        })
        store.loading = false;
      }
    }
  }
</script>

<style lang="scss" scoped>

  main {
    margin-top: 5rem;
  }

</style>