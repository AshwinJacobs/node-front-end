<template>
  <div
    class="container d-flex justify-content-center align-items-center"
    id="main"
  >
    <div class="w-100 row justify-content-center">
      <div
        id="loginzone"
        v-if="!currentUser"
        class="col-lg-6 col-md-12 col-sm-12"
      >
        <h1 class="pb-5">Sign-in To Your Account</h1>
        <div id="cardzone" class="card shadow text-white">
          <div class="card-title text-center border-bottom">
            <h2>Login</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="loginUser">
              <div class="mb-4 row">
                <div class="col-lg-6">
                  <label for="email" class="form-label">Email</label>
                  <input
                    @input="resetError"
                    type="text"
                    required
                    v-model="email"
                    class="form-control"
                    name="email"
                  />
                </div>
                <div class="col-lg-6">
                  <label for="password" class="form-label">Password</label>
                  <input
                    @input="resetError"
                    type="password"
                    required
                    v-model="userPassword"
                    class="form-control"
                    name="password"
                  />
                </div>
              </div>
              <div>
                <button type="submit" class="w-100 mx-auto btn btn-grad">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-else>
        <h1>Welcome Back, {{ currentUser }}</h1>
        <router-link to="/products">
          <button class="btn btn-grad">View our Products</button>
        </router-link>
      </div>
      <div v-if="clicked && !currentUser">
        <div v-if="!user && !loginError">

     
        </div>
        <div v-if="loginError">
          <p class="p-0 mx-0 mt-1 mb-4">{{ loginError }}</p>
          <router-link to="/register">
            <button class="btn btn-grad">Register a new Account?</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../components/Loader.vue";
export default {
  components: { Loader },
  data() {
    return {
      email: null,
      userPassword: null,
      clicked: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    currentUser() {
      return this.$store.state.currentUser;
    },
    loginError() {
      return this.$store.state.loginError;
    },
  },
  mounted() {
    this.clicked = false;
  },
  methods: {
    loginUser() {
      // e.preventDefault();
      this.clicked = true;

      this.$store.dispatch("loginUser", {
        email: this.email,
        userPassword: this.userPassword,
      });
    },
    resetError() {
      if (this.loginError) {
        this.clicked = false;
        this.$store.commit("setLoginError", null);
      }
    },
  },
};
</script>

<style scoped>
.btn-grad {
  background-image: linear-gradient(
    to right,
    #2779e5 0%,
    #b31212 52%,
    #0011ff 100%
  );
  margin: 10px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px rgb(40, 42, 43);
  border-radius: 10px;
  font-size: 12px;
}

.border-bottom {
  border-bottom: 2px solid red !important;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

#main {
}

#loginzone {
  padding: 20px 0;
}

#cardzone {
  padding: 50px 50px;
  border-radius: 10px;
  border: 1px solid rgb(14, 13, 13);
  color: white;
  background: transparent;
}
</style>
