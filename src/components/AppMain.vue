<script>
import axios from "axios";
import { store } from "../store";

export default {
  methods: {
    getProjects() {
      axios
        .get(store.baseUrl, { params: { api_url: store.apiParams.apiUrl } })
        .then((response) => {
          console.log(response.data.data);
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
