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
        .get(store.baseUrl + store.apiParams.apiUrl.projects)
        .then((response) => {
          this.projects = response.data.results.data;
          this.prevPageUrl = response.data.results.prev_page_url;
          this.nextPageUrl = response.data.results.next_page_url;
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.prevPageUrl);
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <div class="container p-3">
    <!-- titolo -->
    <h2 class="my-5 text-center">Progetti</h2>
    <!-- /titolo -->
    <!-- lista card -->
    <ul class="d-flex flex-column gap-5 p-0">
      <li
        v-for="project in projects"
        class="list-unstyled col-12 col-md-6 mx-auto"
      >
        <MainCard :project="project" />
      </li>
    </ul>
    <!-- /lista card -->
    <!-- navigazione pagine -->
    <div
      class="navigation d-flex justify-content-between gap-3 col-12 col-md-6 mx-auto my-5"
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

<style></style>
