<template>
  <HeaderNav @onGetSearch="getAllList" :isScrolled="scrolled"/>
  <main>
    <JumbotronUnit />
    <CardList />
  </main>
</template>

<script>
  import { store } from "./data/store.js";
  import axios from 'axios';
  import HeaderNav from './components/HeaderNav.vue';
  import JumbotronUnit from "./components/JumbotronUnit.vue";
  import CardList from "./components/CardList.vue";
  import ModalUnit from "./components/ModalUnit.vue";
  import { createApp } from "vue";

  export default {
    name: "App.vue",
    components: {
    HeaderNav,
    JumbotronUnit,
    CardList,
    ModalUnit
    },

    data() {
      return {
        store,
        scrolled: false
      }
    },
    mounted() {
      this.getAllList();
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

      getEndpointList(endp) {
        store.loading = true;
        let url = store.baseSearchUrl + store[endp].endpoint
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
          store[endp].items = res.data.results.map((item) => {
            const langMap = {en: 'gb', ja: 'jp', cs: 'cz', zh: 'cn'};
            return {
              ...item, original_language: langMap[item.original_language] || item.original_language
            };
          });
          console.log(store[endp].items);
        })
          .finally(() => {
          store.loading = false;
          });
      },
      getAllList(){
        this.getEndpointList("movies");
        this.getEndpointList("tv");
      },
    }
  }  
</script>

<style lang="scss" scoped>

</style>