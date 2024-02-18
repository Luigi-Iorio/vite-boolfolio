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
  <div class="container d-flex flex-column justify-content-center mb-5 mx-auto">
    <div class="details mb-5 text-center text-md-start">
      <h2>{{ project.title }}</h2>
      <h5>{{ project.type?.type_title }}</h5>
    </div>
    <div class="row">
      <div class="col-10 mx-auto col-md-3">
        <h6>Tecnologie</h6>
        <ul v-for="technology in project.technologies" class="px-0">
          <li>{{ technology.title }}</li>
        </ul>
        <h6>Slug</h6>
        <p>{{ project.slug }}</p>
      </div>
      <div class="col-10 mx-auto col-md-9">
        <h6>Descrizione</h6>
        <p>{{ project.description }}</p>
        <router-link :to="{ name: 'projects' }" class="btn px-4"
          >Torna ai Progetti</router-link
        >
      </div>
    </div>
  </div>
  <!-- /dettaglio -->
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  max-width: 992px;

  h5,
  h6 {
    color: #00f8b7;
    font-weight: bold;
  }

  .btn {
    background-color: #00f8b7;
    color: #00382e;
    font-weight: bold;
  }
}
</style>
