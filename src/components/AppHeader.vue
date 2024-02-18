<script>
export default {};
</script>

<template>
  <!-- header -->
  <header>
    <nav class="container">
      <!-- link -->
      <ul
        class="col-12 col-md-5 mx-auto py-2 d-flex align-items-center justify-content-center gap-4 list-unstyled mb-0"
      >
        <li class="fs-6 fs-md-4">
          <router-link
            :to="{ name: 'home' }"
            class="nav-link py-1 px-2 py-md-3 px-md-5 rounded-5"
            >Home</router-link
          >
        </li>
        <li class="fs-6 fs-md-4">
          <router-link
            :to="{ name: 'projects' }"
            class="nav-link py-1 px-2 py-md-3 px-md-5 rounded-5"
            >Progetti</router-link
          >
        </li>
      </ul>
      <!-- /link -->
    </nav>
  </header>
  <!-- /header -->
</template>

<style lang="scss" scoped>
header {
  height: 90px;
  nav {
    height: 100%;
    ul {
      height: 100%;

      li {
        font-weight: bold;

        a {
          display: block;
          width: 100%;
          background-color: #3f3f3f;

          &:hover {
            background-color: #00f8b7;
            color: #3f3f3f;
          }
        }
      }
    }
  }
}
</style>
