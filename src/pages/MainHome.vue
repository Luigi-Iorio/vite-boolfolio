<script>
export default {
  name: "MainHome",
};
</script>

<template>
  <!-- home -->
  <div
    class="container d-flex flex-column justify-content-center gap-4 text-center px-0"
  >
    <h2 class="text-center">Ciao, sono Luigi.</h2>
    <div
      class="position d-flex align-items-center justify-content-center gap-2"
    >
      <font-awesome-icon :icon="['fas', 'location-dot']" />
      <a href="#">Reggio Emilia, IT</a>
    </div>
    <p class="col-8 mx-auto mb-0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quas
      beatae ipsa quisquam aspernatur earum itaque optio dignissimos a inventore
      architecto eum veritatis accusantium quia ratione consequatur fugiat
      officiis est?
    </p>
  </div>
  <!-- /home -->
</template>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 290px);

  h2 {
    font-size: 36px;
  }
}
</style>
