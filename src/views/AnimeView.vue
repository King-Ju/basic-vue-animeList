<template>
  <div>
    <h2>Anime List</h2>

    <b-col class="d-flex justify-content-center">
      <b-row>
        <div class="d-flex flex-row" style="margin-top: 20px; padding: 10px">
          <b-form-input
            v-model="name"
            class="mx-2"
            @keydown.enter="searchAnime()"
          >
          </b-form-input>
          <b-button variant="success" @click="searchAnime()">Search</b-button>
        </div></b-row
      >
    </b-col>
    <b-row v-if="animeList.length !== 0"
      ><b-col v-for="anime in animeList" :key="anime.mal_id"
        ><ItemCard
          :title="anime.title"
          :description="anime.synopsis"
          :image_url="anime.images.jpg.image_url"
          :url="anime.url"
        />
      </b-col>
    </b-row>
    <div v-else class="mt-4">Empty Data</div>
  </div>
</template>

<script>
import ItemCard from "../components/itemCard.vue";
export default {
  data() {
    return {
      name: "",
    };
  },
  components: {
    ItemCard,
  },
  computed: {
    animeList() {
      return this.$store.getters.getAnimeList;
    },
  },
  methods: {
    searchAnime() {
      this.$store.dispatch("fetchAnimeList", this.name);
    },
  },
};
</script>

<style lang="scss" scoped></style>
