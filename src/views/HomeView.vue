<template>
  <div id="main">
<section class="showcase">
    <div class="video-container">
      <video
        src="https://traversymedia.com/downloads/video.mov"
        autoplay
        muted
        loop
      ></video>
    </div>
    <div class="content">
      <h1>Shoot For The Stars</h1>
      <h3>THE PRODUCT STORE</h3>
      <!-- <a href="./index.html" class="btn">TABLES</a> -->
      <router-link class="link-btn" to="/login">
        <a href="./login_form.html" class="btn">LOGIN</a></router-link
      >
    </div>
    </section></div>

  
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
/* LANDING PAGE */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap");

html {
  overflow-x: hidden;
}

:root {
  --primary-color: #3a4052;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

h1 {
  font-weight: 300;
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 15px;
}
.showcase {
  height: 97vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 0 20px;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--primary-color);
}
.video-container video {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}
.video-container:after {
  content: "";
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
}

.content {
  z-index: 2;
}

.btn {
  display: inline-block;
  padding: 10px 30px;
  background: var(--primary-color);
  color: #fff;
  border-radius: 5px;
  border: solid #fff 1px;
  margin-top: 25px;
  opacity: 3.7;
}

.btn:hover {
  transform: scale(0.98);
}
</style>
