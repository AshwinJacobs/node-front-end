<template>
    <div class="col-md-3">
    <router-link class="router-text" :to="{ name: 'oneCard', params: { id: product.id } }">
      <div class="card m-3" style="width: 18rem">
        <img v-bind:src="product.Image" class="img-fluid" />
        <div class="card-body">
          <p class="card-text-product">{{ product.name}}</p>
          <p class="card-text-product">{{ product.Date }}</p>
          <p class="card-text-product">{{ product.Type }}</p>
          <p class="card-text-product">{{ product.Description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
    export default {
        props: ["product"],
    };
    
</script>
<style>
.img-fluid {
  width: 18rem;
  height: 15rem;
  border-radius: 5px;
  transition: 0.2 linear;
}
.img-fluid:hover {
  transform: scale(1.1);
}
.router-text{
  text-decoration: none;
  color: black;
}
</style>