<template>
  <div v-if="small" class="smallLoader "></div>
  <div v-else class="loader "></div>
</template>

<script>
export default {
  props: ["small"],
};
</script>

<style scoped>
.loader {
  border: 16px solid rgb(0, 0, 0);
  border-top: 5px solid rgb(255, 255, 255);
  border-bottom: 5px solid rgb(0, 0, 0);
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: rotate 2s linear infinite;
}

.smallLoader {
  border: 5px solid rgb(0, 0, 0);
  border-top: 5px solid rgb(255, 255, 255);
  border-bottom: 5px solid rgb(0, 0, 0);
  border-radius: 50%;
  height: 40px;
  width: 40px;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
