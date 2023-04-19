:<template>
    <AppHeader />
    <main class="px-md-5 px-sm-4 px-0">
      <FilterSelect @onGetCards="getAllCards"/>
      <CardList />
    </main>
    
</template>

<script>
  import { store } from "./data/store.js";
  import axios from 'axios';
  import AppHeader from "./components/AppHeader.vue";
  import FilterSelect from "./components/FilterSelect.vue"
  import CardList from "./components/CardList.vue";
  export default {
    name: "App",
    components: {
      AppHeader,
      FilterSelect,
      CardList
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getCardsShowed() {
        let options = {};
        let params = {};
        //Populate the search object
        for (let key in store.search) {
          if (store.search[key] || key === "offset") {
            params[key] = store.search[key];
          }
        }

        if (Object.keys(params).length > 0) {
          options.params = params
        }

        //Cards Showed
        axios.get(store.apiCardsUrl, options).then((res) => {
          store.totalPages = res.data.meta.total_pages;
          store.cardFounded = res.data.meta.total_rows;
          store.allCardsShowed = res.data.data.map((card) => {
            return {
              ...card,
              archetype: card.archetype || "Undefined"
            }
          });
        })
      },

      getAllCards() {
        store.loading.true
        let info = {};

        if (store.search.archetype) {
          info = {
            params: {
              archetype: store.search.archetype
            }
          }
        }

        //Full Cards
        axios.get(store.apiCardsUrl, info).then((res) => {
          store.allCards = res.data.data
        })

        this.getCardsShowed();
        store.loading = false
      },


    },

    computed:{
    },

    mounted() {
      this.getAllCards()
    }  
  }
</script>

<style lang="scss" scoped>
</style>