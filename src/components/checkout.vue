<template>
  <main class="max-w-screen-xl py-20 text-gray-100 m-auto">
    <h1 class="text-xl">Checkout 💰</h1>
    <p class="font-thin">
      Complete the checkout by filling the form below, and then click on
      complete checkout.
    </p>

    <div class="grid grid-cols-2 gap-4 pt-20">
      <div>
        <h1 class="text-xl">Complete the form to checkout.</h1>
        <input
          v-model="formApp.name"
          type="text"
          class="bg-black w-80 p-2 border-2 mt-2 font-thin"
          placeholder="Name"
        />
        <p class="text-pink-700">
          {{ formApp.nameError }}
        </p>
        <input
          v-model="formApp.phone"
          type="number"
          class="bg-black w-80 p-2 border-2 mt-2 font-thin"
          placeholder="Phone"
        />
        {{ formApp.phoneError }}
        <button
          v-on:click="createAnOrder('success')"
          class="border-2 bg-white text-black text-sm p-2 font-extralight mt-5 w-80 text-center hover:bg-black hover:text-white cursor-pointer"
        >
          Complete {{ !isFormButtonValid ? "(disabled)" : "" }}
        </button>
      </div>
      <div class="border-2 p-2">
        <h1 class="text-lg font-thin">Summary</h1>
        <hr />
        <div
          v-for="subject in getCartProducts"
          v-bind:key="subject.title"
          class="flex justify-between font-thin"
        >
          <span>
            {{ subject.title }}
          </span>
          <span>
            {{ subject.inCart }} x {{ subject.price }} =
            {{ subject.inCart * subject.price }}
          </span>
        </div>
        <hr />
        <div class="flex justify-between">
          <span> Total </span>
          <span>
            {{ totalCartSum }}
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "checkout-app",
  props: [
    "form",
    // "createAnOrder",
    "getCartProducts",
    "isFormButtonValid",
    "totalCartSum",
    "setState",
  ],

  methods: {
    createAnOrder(e) {
      console.log({ e });
      this.$emit("navigate", e);
    },
  },
  created() {
    console.log({ props: this.form });
  },
  data() {
    return {
      formApp: this.form,
    };
  },
  watch: {
    form: {
      handler(newVal) {
        this.formApp = newVal;
      },
      deep: true,
    },
    formApp: {
      handler(newVal) {
        console.log({ newVal });
        this.$emit("setState", "form", newVal);
      },
      deep: true,
    },
  },
};
</script>
