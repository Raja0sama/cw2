<template>
  <div>
    <header class="bg-gray-900 h-24 flex items-center text-2xl">
      <div
        class="w-screen max-w-screen-xl m-auto text-white flex justify-between"
      >
        <span> MDX Course Work </span>
        <button
          v-on:click="navigate"
          class="border-2 text-sm p-2 font-extralight hover:bg-black cursor-pointer"
        >
          View {{ pageInverse }} {{ cartItemCount }}
          {{ cartItemCount == 0 ? "(disabled)" : "" }}
        </button>
      </div>
    </header>
    <section v-if="currentPage === 'home'">
      <Lessons
        v-bind:items-in-cart="itemsInCart"
        v-bind:is-enabled="isEnabled"
        v-on:add-to-cart="addToCart"
        v-on:set-state="setState"
        :subjects="subjects"
        v-bind:sort-by-place-holder="sortByPlaceHolder"
        v-bind:order-by-placeholder="orderByPlaceholder"
      />
    </section>
    <section v-if="currentPage === 'cart'">
      <cart
        v-bind:items-in-cart="itemsInCart"
        v-bind:get-cart-products="getCartProducts()"
        v-bind:is-enabled="isEnabled"
        v-on:add-to-cart="addToCart"
        v-on:remove-from-cart="removeFromCart"
        v-bind:cart-item-count="cartItemCount"
        v-bind:navigate="navigate"
      />
    </section>
    <section v-if="currentPage === 'checkout'">
      <Checkout
        v-bind:form="form"
        v-on:set-state="setState"
        v-on:navigate="navigate"
        :create-an-order="createAnOrder"
        v-on:create-an-order="createAnOrder"
        v-bind:get-cart-products="getCartProducts()"
        :is-form-button-valid="isFormButtonValid"
        :total-cart-sum="totalCartSum"
      />
    </section>
    <section v-if="currentPage === 'success'">
      <main class="max-w-screen-xl py-20 text-gray-100 m-auto">
        <h1 class="text-xl">Success 🎉</h1>
        <p class="font-thin">
          Your order has been made successfully, Thank you for time.
        </p>

        <button
          v-on:click="navigate('home')"
          class="border-2 bg-white text-black text-sm p-2 font-extralight mt-5 w-80 text-center hover:bg-black hover:text-white cursor-pointer"
        >
          Go Back to Home
        </button>
      </main>
    </section>

    <div class="text-white text-center w-screen py-20 font-thin">
      Developed By
      <a class="underline" href="https://rajaosama.me">Raja Osama</a>
    </div>
  </div>
</template>

<script>
import Checkout from "./components/checkout.vue";
import Lessons from "./components/lesson.vue";
import Cart from "./components/cart.vue";

export default {
  name: "App",
  components: {
    Lessons,
    Checkout,
    cart: Cart,
  },
  data: () => ({
    form: {
      name: "",
      nameError: "",
      phone: "",
      phoneError: "",
    },
    cartItems: [],
    orderBy: "",
    sortBy: "",

    search: "",
    currentPage: "home",
    sortByPlaceHolder: ["location", "price", "spaces", "rating", "title"],
    orderByPlaceholder: ["ascending", "descending"],
    subjects: [],
    originalData: [],
  }),
  created: function () {
    fetch(
      "https://express-vue-app-raja.herokuapp.com/collection/webstore"
    ).then((response) => {
      response.json().then((json) => {
        console.log({ json });
        const d = json.map((e) => ({ ...e, id: e._id }));
        this.originalData = d;
        this.subjects = d;
      });
    });
  },
  methods: {
    setState(key, value) {
      console.log({ key, value });
      this[key] = value;
    },
    // Create Order and Navigate to Success Page Page
    createAnOrder(pageToNavigate) {
      const a = this.cartItems.reduce((acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        return acc;
      }, {});
      const order = {
        name: this.form.name,
        phone: this.form.phone,
        lessons: Object.entries(a).map(([k, v]) => ({
          lessonId: k,
          spaces: v,
        })),
      };
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      fetch("https://express-vue-app-raja.herokuapp.com/collection/order", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          ...order,
        }),
      })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      Object.entries(a).forEach(([k, v]) => {
        const { spaces } = this.subjects.find((e) => e._id === k);
        console.log({ spaces });
        fetch(
          `https://express-vue-app-raja.herokuapp.com/collection/webstore/${k}`,
          {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify({
              spaces: spaces - v,
            }),
          }
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      });
      this.navigate(pageToNavigate);
    },
    // Page Navigation Function
    navigate(id) {
      if (id && typeof id === "string") return (this.currentPage = id);

      const page = this.currentPage === "home" ? "cart" : "home";
      this.currentPage = page;
    },
    // Remove From Cart
    removeFromCart(id) {
      console.log({ id });
      const arr = this.cartItems;
      var index = arr.findIndex((e) => e === id);
      if (index > -1) {
        arr.splice(index, 1);
      }
      this.cartItems = arr;
    },

    getCartProducts() {
      const sub = this.subjects;
      const products = this.cartItems.reduce((acc, curr) => {
        if (acc[`id-${curr}`]) {
          acc[`id-${curr}`] = {
            ...acc[`id-${curr}`],
            inCart: acc[`id-${curr}`].inCart + 1,
          };
          return acc;
        }
        const find = sub.find((e) => e.id == curr);
        acc[`id-${curr}`] = {
          ...find,
          inCart: 1,
        };
        return acc;
      }, {});
      return Object.values(products);
    },
    addToCart(e) {
      const cart = this.cartItems;
      cart.push(e);
    },
    itemsInCart(id) {
      return this?.cartItems.filter((e) => e === id).length;
    },
    isEnabled(id) {
      const subject = this.subjects.find((e) => e.id === id);
      const getItemsInCart = this.itemsInCart(subject.id);
      console.log(subject.spaces > getItemsInCart);
      return subject.spaces > getItemsInCart;
    },
  },
  watch: {
    search(val) {
      // if (val === "") return (this.subjects = app.originalData);
      fetch(
        `https://express-vue-app-raja.herokuapp.com/collection/webstore?search=title:${val}`
      ).then(function (response) {
        response.json().then(function (json) {
          this.subjects = json.map((e) => ({ ...e, id: e._id }));
        });
      });

      // this.subjects = this.subjects.filter((e) =>
      //   e.title.toLowerCase().includes(val.toLowerCase())
      // );
    },
    orderBy(val) {
      const { subjects, sortBy } = this;
      const n = val === "ascending" ? -1 : 1;
      const p = val === "ascending" ? 1 : -1;
      const sub = subjects.sort(function (a, b) {
        if (a[sortBy] < b[sortBy]) {
          return n;
        }
        if (a[sortBy] > b[sortBy]) {
          return p;
        }
        return 0;
      });
      console.log({ subjects });

      this.subjects = sub;
    },
    isFormButtonValid() {
      // validate phone
      if (!this.form.name || !this.form.phone) {
        return false;
      }
      const reg = new RegExp("^[0-9]*$", "g");
      const reg1 = new RegExp("^[a-zA-Z_ ]*$", "g");
      const a = this.form.phone.match(reg);
      const b = this.form.name.match(reg1);
      if (!a || !b) {
        !b && (this.form.nameError = "Kindly make sure to only input string");
        !a && (this.form.phoneError = "Kindly make sure to only input Number");
        return false;
      }
      this.form.nameError = "";
      this.form.phoneError = "";

      return true;
    },
    sortBy(sortBy) {
      const { subjects, orderBy } = this;
      const n = orderBy === "ascending" ? -1 : 1;
      const p = orderBy === "ascending" ? 1 : -1;
      const sub = subjects.sort(function (a, b) {
        if (a[sortBy] < b[sortBy]) {
          return n;
        }
        if (a[sortBy] > b[sortBy]) {
          return p;
        }
        return 0;
      });
      console.log({ subjects });

      this.subjects = sub;
    },
  },
  computed: {
    pageInverse() {
      const page = this.currentPage === "home" ? "cart" : "home";
      return page;
    },
    totalCartSum() {
      return this.getCartProducts().reduce((acc, curr) => {
        acc += curr.price * curr.inCart;
        return acc;
      }, 0);
    },
    cartItemCount() {
      return this.cartItems.length;
    },
    isCartEnabled() {
      return this.cartItemCount.length > 0;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
