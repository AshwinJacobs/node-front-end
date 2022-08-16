<template>
  <div id="main" class="overlay">
    <H1>ABOUT US</H1>
    <div
      id="aboutBackground"
      class="shadow shadow-lg row row-cols-2 row-cols-xs-2 row-cols-sm-2 row-cols-lg-2"
    >
      <div class="col-12 col-md-6 col-lg-6 col-xm-12 col-sm-6 p-0">
        <div class="text-center">
          <div class="img-hover-zoom img-hover-zoom--colorize">
            <img
              class="shadow img-fluid"
              src="https://i.postimg.cc/Kv6HYxDF/Ashwin-2.jpg"
              alt="Another Image zoom-on-hover effect"
            />
          </div>
        </div>

        <div class="card-body">
          <div class="clearfix mb-3"></div>

          <div class="my-2 text-white text-center">
            <h1>Ashwin Dean Jacobs</h1>
          </div>
          <div class="mb-3">
            <h5 class="text-uppercase text-center role">FullStack Developer</h5>
          </div>
          <div class="box">
            <div>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <i class="fab fa-github text-white"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-linkedin-in text-white"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-6 col-xm-12 col-sm-6">
        <div class="">
          <div class="text-center">
            <div class="img-hover-zoom img-hover-zoom--colorize">
              <img
                class="shadow img-fluid"
                src="https://i.postimg.cc/N01bFXfk/Chanique-3.jpg"
                alt="Another Image zoom-on-hover effect"
              />
            </div>
          </div>

          <div class="card-body">
            <div class="clearfix mb-3"></div>

            <div class="my-2 text-white text-center">
              <h1>Chanique Chelsea Mansooor</h1>
            </div>
            <div class="mb-3">
              <h5 class="text-uppercase text-center role">
                FullStack Developer
              </h5>
            </div>
            <div class="box">
              <div>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="https://github.com/chocomelo24" target="blank"
                      ><i class="fab fa-github text-white"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/chanique-mansoor-235a83237/"
                      target="blank"
                      ><i class="fab fa-linkedin-in text-white"> </i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="margi">
      <div class="marge">
        <div class="container">
          <div class="row">
            <div class="col-md-12 shadow shadow-lg p-5">
              <h2>SHOOT FOR THE STARS</h2>
              <p class="para">
                Working Together, tiny stars light the universe, That's the
                power of Teamwork.
              </p>
              The telescope has changed the world greatly by being able to make
              distant objects appear closer and more distinct. It helped
              scientists to discover things that could not be seen by the naked
              eye. And that's the experience we want to give our customers here
              at Shooting For the Stars.
              <h6>
                { "Shoot for the stars but if you happen to miss shoot for the
                moon instead" -Neil Armstrong }
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.para {
  font-size: 25px;
}

.list-inline-item:not(:last-child) {
  margin-right: 1rem;
}

#aboutBackground {
  border: 1px solid rgb(248, 246, 246);
  border-radius: 10px;
}

.shadow {
  border: 1px solid rgb(0, 0, 0);
  border-radius: 10px;
  margin-bottom: 10px;
}

#main {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  color: white;
  overflow-x: hidden;
  padding-top: 100px;
}

.marg {
  margin-bottom: 10rem;
}
.marge {
  margin-bottom: 12rem;
}

.text-aqua {
  color: aqua;
}
.h1,
h1 {
  font-size: 1.5rem;
}
.container-fluid {
  max-width: 1400px;
}
.card {
  background: transparent;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  border: 1;
  border-radius: 1rem;
}
.img-hover-zoom--colorize img {
  border-radius: 10px;
  width: 150px;
  height: auto;
  margin-top: 20px;
  padding: 1px;
  transition: all 0.5s;
  filter: grayscale(100%);
}
.img-hover-zoom--colorize img:hover {
  filter: grayscale(0);
  transform: scale(1.05);
}
.card h5 {
  overflow: hidden;
  height: 80px;
  font-weight: 300;
  font-size: 1rem;
}
.card h5 a {
  color: black;
  text-decoration: none;
}
.role {
  color: red;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fab {
  font-size: 1.5rem;
  color: black;
  transition: transform 0.5s linear;
}
.fab:hover {
  color: black;
  transform: scale(1.3);
}
.card h2 {
  font-size: 1rem;
}
/* MEDIA */
@media only screen and (min-width: 1200px) {
  .img-hover-zoom--colorize img {
    width: 200px;
  }
}
@media only screen and (min-width: 1200px) {
  .h1,
  h1 {
    font-size: 2rem;
  }
}
/* for headers */
section {
  padding: 60px 0;
  min-height: 100vh;
}
a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bg-gray {
  background-color: #f9f9f9;
}
.site-heading h2 {
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.site-heading h2 span {
  color: #a00000;
}
.site-heading h4 {
  display: inline-block;
  padding-bottom: 20px;
  position: relative;
  text-transform: capitalize;
  z-index: 1;
}
.site-heading h4::before {
  background: #a00000 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  margin-left: -25px;
  position: absolute;
  width: 50px;
}
</style>
