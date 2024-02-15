<script>
import MainCard from "./MainCard.vue";
import axios from "axios";
import { store } from "../store";

export default {
  components: {
    MainCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getProjects() {
      axios
        .get(store.baseUrl + store.apiParams.apiUrl.projects)
        .then((response) => {
          this.projects = response.data.results.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <!-- main -->
  <main>
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
    </div>
  </main>
  <!-- /main -->
</template>

<style></style>
