<script>
export default {};
</script>

<template>
  <!-- footer -->
  <footer>
    <div
      class="container d-flex flex-column justify-content-center p-5 text-center"
    >
      <!-- lista icone -->
      <ul class="d-flex justify-content-center gap-5 mb-4 px-0">
        <li class="rounded-5 fs-1 fs-md-2">
          <a href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
        </li>
        <li class="rounded-5 fs-1 fs-md-2">
          <a href="#"><font-awesome-icon :icon="['fab', 'github']" /></a>
        </li>
        <li>
          <a href="#" class="rounded-5 fs-1 fs-md-2"
            ><font-awesome-icon :icon="['fas', 'envelope']"
          /></a>
        </li>
      </ul>
      <!-- /lista icone -->
      <!-- copyright -->
      <h6 class="text-center mb-0">
        Copyright<sup>©</sup> 2024 - Luigi Iorio. All rights reserved.
      </h6>
    </div>
    <!-- copyright -->
  </footer>
  <!-- /footer -->
</template>

<style lang="scss" scoped>
footer {
  height: 200px;
  background-color: #3f3f3f;

  .container {
    height: 100%;

    ul {
      li {
        a {
          display: block;
          width: 100%;

          &:hover {
            color: #00f8b7;
          }
        }
      }
    }
  }
}
</style>
