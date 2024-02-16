<script>
export default {};
</script>

<template>
  <!-- header -->
  <header class="bg-dark text-light">
    <div
      class="container d-flex align-items-center justify-content-between p-3"
    >
      <!-- titolo -->
      <h1>Portfolio</h1>
      <!-- /titolo -->

      <!-- link -->
      <ul class="d-flex align-items-center gap-5 list-unstyled mb-0">
        <li>
          <router-link :to="{ name: 'home' }" class="nav-link"
            >Home</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'projects' }" class="nav-link"
            >Progetti</router-link
          >
        </li>
      </ul>
      <!-- /link -->
    </div>
  </header>
  <!-- /header -->
</template>

<style></style>
