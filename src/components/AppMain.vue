<script>
import axios from "axios";
import { store } from "../store";

export default {
  methods: {
    getProjects() {
      axios
        .get(store.baseUrl + store.apiParams.apiUrl.projects)
        .then((response) => {
          console.log(response.data.results);
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
      <h2>Progetti</h2>
      <ul>
        <li>elenco</li>
      </ul>
    </div>
  </main>
  <!-- /main -->
</template>

<style></style>
