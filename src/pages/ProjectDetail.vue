<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "projects-detail",
  data() {
    return {
      project: [],
    };
  },
  methods: {
    getDetails() {
      axios
        .get(
          store.baseUrl +
            store.apiParams.apiUrl.projects +
            "/" +
            this.$route.params.slug
        )
        .then((response) => {
          this.project = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getDetails();
  },
};
</script>

<template>
  <!-- dettaglio -->
  <div class="container">
    <h2 class="my-5 text-center">Dettaglio Progetto</h2>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <p>Slug: {{ project.slug }}</p>
    <p>Stack: {{ project.stack }}</p>
    <p>Tipo: {{ project.type?.type_title }}</p>
    <div class="cont">
      <p>Tecnologie:</p>
      <ul v-for="technology in project.technologies">
        <li>{{ technology.title }}</li>
      </ul>
    </div>
    <router-link :to="{ name: 'projects' }" class="btn btn-primary"
      >Torna ai Progetti</router-link
    >
  </div>
  <!-- /dettaglio -->
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>
