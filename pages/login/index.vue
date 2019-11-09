<template>
  <div class="login_form">
    <form class="flex flex-wrap flex-row justify-center py-10 px-4 md:px-2" method="post" @submit.prevent>
      <div
        class="flex flex-col flex-wrap bg-white w-full sm:w-2/5 lg:w-1/4 text-center bg-white my-4 shadow-xl rounded-lg"
      >
        <div class="p-3">
          <div class="flex flex-wrap justify-center py-3">
            <a
              class="focus:outline-none focus:shadow-outline bg-gray-500 hover:bg-gray-600 text-white py-2 px-12 rounded-lg"
              href="/auth/google"
            >
              <i class="fab fa-google fa-lg"></i>
            </a>

            <a
              class="focus:outline-none focus:shadow-outline bg-gray-500 hover:bg-gray-600 text-white py-2 px-12 ml-3 rounded-lg"
              href="/auth/github"
            >
              <i class="fab fa-github fa-lg"></i>
            </a>
          </div>
        </div>
        <div class="px-3 pt-10 pb-4">
          <input
            type="email"
            v-model.trim="login"
            ref="login"
            placeholder="Email"
            class="focus:outline-none focus:shadow-outline py-2 px-4 my-1 w-full rounded-lg shadow-xl-e"
            autocomplete="current-email"
            autofocus
          />
          <div class="flex flex-row flex-wrap my-1 shadow-lg rounded-lg w-full">
            <input
              :type="password_show ? 'text' : 'password'"
              v-model.trim="password"
              ref="password"
              placeholder="**********"
              class="focus:outline-none focus:shadow-outline py-2 px-4 w-5/6 rounded-l-lg"
              autocomplete="current-password"
            />
            <button
              class="focus:outline-none focus:shadow-outline bg-gray-600 hover:bg-gray-500 py-2 px-3 transition-1 w-1/6 rounded-r-lg text-white"
              @click="password_show = !password_show"
            >
              <i :class="password_show ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>
          <div class="w-full flex flex-wrap flex-row py-3 justify-center py-2">
            <button
              class="focus:outline-none focus:shadow-outline bg-primary-400 hover:bg-primary-200 rounded-lg text-white py-2 px-6 transition-1 shadow-md font-semibold"
              @click="login_form"
            >Login</button>
            <button
              class="focus:outline-none focus:shadow-outline bg-gray-600 hover:bg-gray-500 rounded-lg text-white py-2 px-6 ml-3 transition-1 shadow-md font-semibold"
              @click="reset_form"
            >Reset</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
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
    },
    google_auth() {
      // window.location.href = '/connect/google';
      var href = "/connect/google";
      window.location.href = href;
      // return !window.open(href, "Google", "width=500,height=700");
    },
    github_auth() {
      var href = "/connect/github";
      window.location.href = href;
      // return !window.open(href, "Github", "width=500,height=700");
    }
  },
  created() {}
};
</script>

<style lang="scss">
.login_form {
  background: #2366ce;
}

@media (min-width: 1024px) {
  body {
    background: transparent;
  }
  .login_form {
    background: transparent;
  }
}
@media (min-width: 1480px) {
  body {
    background-size: 60% 730px;
    background: url("../../assets/images/vectors/home-banner-blue-swirl.svg")
      no-repeat;
    background-position: 100.1% top;
    width: 100%;
    overflow-x: hidden;
  }
}
</style>
