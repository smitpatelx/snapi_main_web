<template>
  <div class="bg-primary-500">
    <form class="flex flex-wrap flex-row justify-center py-10 px-4 md:px-2" method="post" @submit.prevent>
      <div
        class="border-2 border-solid border-gray-500 flex flex-col flex-wrap bg-white w-full sm:w-2/5 lg:w-1/4 text-center bg-white my-4 shadow-xl rounded-lg"
      >
        <div class="p-3">
          <div class="flex flex-wrap justify-center py-3">
            <div class="w-full flex flex-wrap justify-center">
              <img src="~/assets/images/logo/snapi-dblue.png" class="select-none h-10 w-auto flex" alt="logo" />
            </div>
            <a
              class="shadow-md flex flex-wrap justify-between items-center w-auto focus:outline-none focus:shadow-outline bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-3 rounded mx-2 mt-3"
              href="http://127.0.0.1:8890/auth/google"
            >
              <i class="fab fa-google fa-lg mr-2"></i>
              <span>SignIn with Google</span>
            </a>

            <a
              class="shadow-md flex flex-wrap justify-between items-center w-auto focus:outline-none focus:shadow-outline bg-black hover:bg-gray-800 text-white py-2 px-3 rounded mx-2 mt-3"
              href="http://127.0.0.1:8890/auth/github"
            >
              <i class="fab fa-github fa-lg mr-2"></i>
              <span>SignIn with Github</span>
            </a>
          </div>
        </div>
        <div class="px-3 pt-0 pb-4 flex flex-wrap">
          <p class="w-full text-center text-primary-400 font-semibold text-xl">LogIn</p>
          <p class="w-full text-center text-gray-500 font-normal text-sm mb-3">Email And Password Required</p>
          <div class="w-full flex flex-wrap p-2">
            <p class="w-full text-gray-600 text-base mt-1 text-left font-semibold">Email</p>
            <input
              type="email"
              v-model.trim="$v.email.$model"
              ref="email"
              placeholder="xyz@gmail.com"
              class="border border-solid focus:outline-none focus:shadow-outline py-2 px-4 my-2 w-full rounded-lg shadow-xl-e"
              :class="$v.email.$error && $v.email.$anyDirty ? 'border-red-500': 'border-gray-500'"
              autocomplete="current-email"
              autofocus
            />
          </div>
          <div class="w-full flex flex-wrap p-2">
            <p class="w-full text-gray-600 text-base mt-1 text-left font-semibold">Password</p>
            <div class="flex flex-row flex-wrap my-1 shadow-lg rounded-lg w-full">
              <input
                :type="password_show ? 'text' : 'password'"
                v-model.trim="$v.password.$model"
                ref="password"
                placeholder="**********"
                class="border border-solid focus:outline-none focus:shadow-outline py-2 px-4 w-5/6 rounded-l-lg"
                :class="$v.password.$error && $v.password.$anyDirty ? 'border-red-500': 'border-gray-500'"
                autocomplete="current-password"
              />
              <button
                class="border border-solid border-gray-500 focus:outline-none focus:shadow-outline bg-gray-600 hover:bg-gray-500 py-2 px-3 transition-1 w-1/6 rounded-r-lg text-white"
                @click="password_show = !password_show"
              >
                <i :class="password_show ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </button>
            </div>
          </div>

          <div class="w-full flex flex-wrap flex-row justify-center py-4">
            <button
              class="focus:outline-none focus:shadow-outline bg-primary-400 hover:bg-primary-300 rounded text-white py-2 px-6 shadow-md font-normal"
              @click="login_form"
            >Login</button>
            <router-link
              tag="a" to="/register"
              class="focus:outline-none focus:shadow-outline bg-gray-600 hover:bg-gray-500 rounded text-white py-2 px-6 ml-3 shadow-md font-normal"
            >New To Snapi?</router-link>
          </div>

          <div class="w-full flex flex-wrap justify-center">
            <router-link tag="a" to="/login/reset-password" class="text-gray-600 font-semibold text-sm underline">Forgot Password?</router-link>
          </div>

        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = 'http://127.0.0.1:8890/';
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      password_show: false,
      email: "",
      password: ""
    };
  },
  validations: {
      email: {
        required,
        email,
        minLength: minLength(8),
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(25),
      }
    },
  methods: {
    login_form() {
      if(!this.$v.$invalid){
        axios.post('/login',{
          email: this.email,
          password: this.password
        });
      } else {
        this.$notify({
          group: 'main',
          title: 'Error',
          text: "Please check your inputs",
          type: 'error',
          'animation-name':'slide-left'
        });
      }
    }
  },
  created() {}
};
</script>