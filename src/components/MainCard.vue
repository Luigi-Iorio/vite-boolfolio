<script>
export default {
  props: ["project"],
  data() {
    return {
      imgUrl: "http://127.0.0.1:8000/storage/",
    };
  },
};
</script>
<template>
  <!-- card -->
  <div class="card-proj p-3 px-sm-5 py-sm-4 rounded-4 row">
    <!-- img -->
    <div class="img col-12 col-lg-5 order-lg-2 mb-4">
      <img
        v-if="project.img_project"
        :src="imgUrl + project.img_project"
        :alt="project.title"
      />
    </div>
    <!-- /img -->
    <!-- card-body -->
    <div class="card-body col-12 col-lg-7">
      <h3 class="card-title mb-3">{{ project.title }}</h3>
      <div class="text mb-3">
        <p class="card-text">Ambiente di sviluppo - {{ project.stack }}</p>
        <p class="card-text">
          {{ project.description }}
        </p>
      </div>
      <router-link
        :to="{ name: 'projects-detail', params: { slug: project.slug } }"
        class="btn px-4"
        >Maggiorni Informazioni</router-link
      >
    </div>
    <!-- /card-body -->
  </div>
  <!-- /card -->
</template>
<style lang="scss" scoped>
.card-proj {
  background-color: #3f3f3f;

  .btn {
    background-color: #494949;
    color: #00f8b7;
    font-weight: bold;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>
