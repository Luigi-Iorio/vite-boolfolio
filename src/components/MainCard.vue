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
  <div class="card p-3">
    <!-- img -->
    <img
      v-if="project.img_project"
      :src="imgUrl + project.img_project"
      class="card-img-top"
      :alt="project.title"
    />
    <!-- /img -->
    <!-- card-body -->
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        {{ project.description }}
      </p>
      <a href="#" class="btn btn-primary">Button</a>
    </div>
    <!-- /card-body -->
  </div>
  <!-- /card -->
</template>
<style></style>
