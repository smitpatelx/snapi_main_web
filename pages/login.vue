<template>
  <div>
    <form
      class="flex flex-wrap flex-row justify-center my-10"
      method="post"
      @submit.prevent="login_form"
    >
      <div
        class="flex flex-col flex-wrap w-full sm:w-2/5 xl:w-1/4 text-center bg-white p-3 my-4 shadow-xl rounded-lg"
      >
        <p class="text-gray-500 font-semibold capitalize py-1">Login with social-media</p>
        <div class="flex flex-wrap flex-row py-3">
          <button
            class="w-1/2 bg-primary text-white py-2 hover:bg-red-600 transition-1 border-2 border-solid border-white"
          >
            <i class="fab fa-google fa-lg"></i>
          </button>

          <button
            class="w-1/2 bg-primary text-white py-2 hover:bg-black transition-1 border-2 border-solid border-white"
          >
            <i class="fab fa-github fa-lg"></i>
          </button>
        </div>
        <p class="text-gray-500 font-semibold capitalize py-1">Login</p>
        <input
          type="text"
          v-model.trim="login"
          ref="login"
          placeholder="Email"
          class="p-2 my-1 border-2 border-solid border-primary w-full"
          autocomplete="current-email"
        />
        <div class="flex flex-row flex-wrap my-1 border-2 border-solid border-primary w-full">
          <input
            :type="password_show ? 'text' : 'password'"
            v-model.trim="password"
            ref="password"
            placeholder="**********"
            class="p-2 w-5/6"
            autocomplete="current-password"
          />
          <button
            class="bg-gray-300 hover:bg-gray-400 py-2 px-3 transition-1 w-1/6"
            @click="password_show = !password_show"
          >
            <i :class="password_show ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
          </button>
        </div>
        <button
          class="w-full bg-primary hover:bg-blue-700 text-white py-2 mt-2 transition-1 border-2 border-solid border-white"
          @click="login_form"
        >Login</button>
        <button
          class="w-full bg-primary hover:bg-blue-700 text-white py-2 mt-2 transition-1 border-2 border-solid border-white"
          @click="reset_form"
        >Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password_show: false,
      login: "",
      password: ""
    };
  },
  methods: {
    login_form() {
      console.log(this.login + this.password);
    },
    reset_form() {
      this.login = null;
      this.password = null;
      this.$refs.login.focus();
    }
  }
};
</script>

<style lang="scss">
body {
  background: #2366ce;
}

@media (min-width: 1024px) {
  body {
    background: transparent;
  }
}
@media (min-width: 1480px) {
  body {
    background-size: 60% 730px;
    background: url("../assets/images/vectors/home-banner-blue-swirl.svg")
      no-repeat;
    background-position: 100.1% top;
    width: 100%;
    overflow-x: hidden;
  }
}
</style>