import { createStore } from "vuex";
import { toRaw } from "vue";

export default createStore({
  state: {
    token: null,
    products: null,
    singleProduct: null,
    currentUser: null,
    allUsers: null,
    loginError: null,
    registerComplete: null,
    registerError: null,
    user: null,
    cart: null,
    cartTotal: null,
  },
  getters: {},
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setSingleProduct(state, singleProduct) {
      state.singleProduct = singleProduct;
    },
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setCurrentUser(state, info) {
      state.currentUser = info;
    },
    setLoginError(state, error) {
      state.loginError = error;
    },
    setRegisterError(state, error) {
      state.registerError = error;
    },
    setRegisterComplete(state) {
      state.registerComplete = "Successfully Registered";
    },
    setAllUsers(state, users) {
      state.allUsers = users;
    },
    clearSingleProduct(state) {
      state.singleProduct = null;
    },
    setCart(state, cart) {
      state.cart = cart;
    },
    setCartTotal(state, total) {
      state.cartTotal = total;
    },
  },
  actions: {
    logout: async (context) => {
      context.commit("setusers", null);
      window.location = "/login";
    },
    login: async (context, data) => {
      const { email, password } = data;
      const response = await fetch(
        `https://c420a-node.herokuapp.com/users?email=${email}&password=${password}`
      );
      const usersData = await response.json();
      context.commit("setusers", usersData[0]);
      router.push("/products");
    },
    register: async (context, data) => {
      const { FullName, email, password } = data;
      fetch("https://c420a-node.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          FullName: FullName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then((json) => context.commit("setusers", json));
  },
    loginUser(context, payload) {
      console.log(payload);
      fetch("https://c420a-node.herokuapp.com/users/login", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          email: payload.email,
          password: payload.userPassword,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.commit("setToken", data);
        });
      // context.dispatch("getUserInfo");
    },
  },
  getUser(context) {
    fetch("https://c420a-node.herokuapp.com/verify", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": context.state.user,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        context.commit("setCurrentUser", data.token.user);
        context.dispatch("getCart");
      });
  },
  updateUser(context, payload) {
    fetch("https://c420a-node.herokuapp.com/users" + payload.id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  },
  getAllUsers(context) {
    fetch("https://c420a-node.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => context.commit("setAllUsers", data.results));
  },
  async editProduct(context, payload) {
    fetch("https://c420a-node.herokuapp.com/products" + payload.id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => context.dispatch("getProducts"));
  },
  async deleteProduct(context, payload) {
    fetch("https://c420a-node.herokuapp.com/products" + payload, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => context.dispatch("getProducts"));
  },
  async addProduct(context, payload) {
    fetch("https://c420a-node.herokuapp.com/products", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => context.dispatch("getProducts"));
  },
  AddProductToCart(context, payload) {
    fetch("https://c420a-node.herokuapp.com/verify", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": context.state.user,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        fetch(
          "https://c420a-node.herokuapp.com/users" +
            data.token.user.id +
            "/cart",
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => context.dispatch("getCart"))
      );
  },
  getCart(context) {
    fetch(
      "https://c420a-node.herokuapp.com/users" +
        context.state.currentUser.id +
        "/cart"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cart) {
          context.commit("setCart", data.cart);
        } else {
          context.commit("setCart", []);
        }
        context.dispatch("getCartTotal");
      });
  },
  removeFromCart(context, payload) {
    fetch(
      "https://c420a-node.herokuapp.com/users" +
        context.state.currentUser.id +
        "/cart/" +
        payload,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((res) => res.json())
      .then(() => context.dispatch("getCart"));
  },
  getCartTotal(context) {
    let cart = toRaw(context.state.cart);
    if (typeof cart != "object") return;
    let total = 0;
    cart.forEach((e) => {
      total += e.price;
    });
    context.commit("setCartTotal", total);
  },
  clearSingleProduct(context) {
    context.commit("clearSingleProduct");
  },
});
