<script>
import axios from "axios";
import { store } from "../store";
import MainCard from "../components/MainCard.vue";

export default {
  name: "MainProjects",
  components: {
    MainCard,
  },
  data() {
    return {
      projects: [],
      prevPageUrl: "",
      nextPageUrl: "",
      errorMessage: null,
      store,
    };
  },
  methods: {
    pageNavigation(apiUrl) {
      axios
        .get(apiUrl)
        .then((response) => {
          this.projects = response.data.results.data;
          this.prevPageUrl = response.data.results.prev_page_url;
          this.nextPageUrl = response.data.results.next_page_url;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProjects() {
      axios
        .get(store.url.baseUrl + store.url.apiUrl.projects, {
          params: { key: store.apiParams.key.searchWord },
        })
        .then((response) => {
          this.projects = response.data.results.data;
          this.prevPageUrl = response.data.results.prev_page_url;
          this.nextPageUrl = response.data.results.next_page_url;
        })
        .catch((error) => {
          this.errorMessage = error.response.data.message;
        });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <div class="container p-3 mt-5">
    <!-- ricerca -->
    <div class="ricerca col-6 mx-auto mb-5">
      <div class="row">
        <div class="form-floating col-12 col-lg-10">
          <input
            type="text"
            class="form-control"
            id="search"
            placeholder="cerca"
            v-model="store.apiParams.key.searchWord"
          />
          <label for="search" class="mx-4 px-0">Cerca un Progetto</label>
        </div>
        <button
          class="btn btn-search col-4 mx-auto col-lg-2"
          @click.prevent="getProjects"
        >
          Cerca
        </button>
      </div>
      <!-- messaggio d'errore -->
      <div class="alert alert-danger mt-2" role="alert" v-if="errorMessage">
        {{ errorMessage }}
      </div>
      <!-- messaggio d'errore -->
    </div>
    <!-- ricerca -->
    <!-- lista card -->
    <ul class="d-flex flex-column gap-5 p-0">
      <li
        v-for="project in projects"
        class="list-unstyled col-10 col-md-6 mx-auto"
      >
        <MainCard :project="project" />
      </li>
    </ul>
    <!-- /lista card -->
    <!-- navigazione pagine -->
    <div
      class="navigation d-flex flex-column flex-md-row justify-content-between gap-3 col-12 col-md-6 mx-auto my-5"
    >
      <button
        class="btn btn-danger"
        @click="pageNavigation(this.prevPageUrl)"
        :disabled="prevPageUrl ? null : 'disabled'"
      >
        Pag. Precedente
      </button>
      <button
        class="btn btn-primary"
        @click="pageNavigation(this.nextPageUrl)"
        :disabled="nextPageUrl ? null : 'disabled'"
      >
        Pag. Successiva
      </button>
    </div>
    <!-- /navigazione pagine -->
  </div>
</template>

<style lang="scss" scoped>
.container {
  input,
  label {
    color: #494949;
  }

  .btn-search {
    background-color: #00f8b7;
    color: #494949;
    font-weight: bold;
  }
}
</style>
