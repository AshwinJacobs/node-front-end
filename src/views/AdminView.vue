<template>
  <div id="main" class="admin">
    <div
      class="container d-flex justify-content-center align-items-center gap-5 vh-100"
    >
      <router-link to="/admin/users"
        ><button class="btn btn-dark">View Users</button></router-link
      >
      <router-link to="/admin/products"
        ><button class="btn btn-dark">View Products</button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
