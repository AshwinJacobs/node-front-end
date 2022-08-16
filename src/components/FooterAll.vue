<template>
  <div class="wave">
    <v-footer class="wave">
      <p>
        <span> </span>
      </p>
      <span class="right">
        <p>Western Cape<span> South Africa</span></p>
        <p class="contact"></p>
      </span>
      <p class="copy">Copyright</p>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
html,
body {
  overflow-x: hidden;
}
.contact {
  text-align: center;
}

.wave {
  background-color: black;
  color: white;
  height: 7vh;
  text-align: center;
  font-size: 12px;
}

.right {
  text-align: center;
}
.copy {
  text-align: center;
}
p {
  margin-top: 0;
  margin-bottom: 7px;
}
</style>
