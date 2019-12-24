<template>
  <div class="bg-primary-500">
    <form class="flex flex-wrap flex-row justify-center py-10 px-4 md:px-2" method="post" @submit.prevent>
      <div
        class="border-2 border-solid border-gray-500 flex flex-col flex-wrap bg-white w-full md:w-1/2 lg:w-1/3 text-center bg-white my-4 shadow-xl rounded-lg"
      >
        <div class="p-3">
          <div class="flex flex-wrap justify-center py-3">
            <div class="w-full flex flex-wrap justify-center">
              <img src="~/assets/images/logo/snapi-dblue.png" class="select-none h-10 w-auto flex" alt="logo" />
            </div>
            <a
              class="shadow-md flex flex-wrap justify-between items-center w-auto focus:outline-none focus:shadow-outline bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-3 rounded mx-2 mt-3"
              href="/auth/google"
            >
              <i class="fab fa-google fa-lg mr-2"></i>
              <span>SignUp with Google</span>
            </a>

            <a
              class="shadow-md flex flex-wrap justify-between items-center w-auto focus:outline-none focus:shadow-outline bg-black hover:bg-gray-800 text-white py-2 px-3 rounded mx-2 mt-3"
              href="/auth/github"
            >
              <i class="fab fa-github fa-lg mr-2"></i>
              <span>SignUp with Github</span>
            </a>
          </div>
        </div>
        <div class="px-3 pt-0 pb-4 flex flex-wrap">
          <p class="w-full text-center text-primary-400 font-semibold text-xl">Register</p>
          <div class="w-1/2 flex flex-wrap p-2">
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
          <div class="w-1/2 flex flex-wrap p-2">
            <p class="w-full text-gray-600 text-base mt-1 text-left font-semibold">Confirm Email</p>
            <input
              type="email"
              v-model.trim="$v.confirm_email.$model"
              ref="confirm_email"
              placeholder="xyz@gmail.com"
              class="border border-solid focus:outline-none focus:shadow-outline py-2 px-4 my-2 w-full rounded-lg shadow-xl-e"
              :class="$v.confirm_email.$error && $v.confirm_email.$anyDirty ? 'border-red-500': 'border-gray-500'"
              autocomplete="current-email"
            />
          </div>
          <div class="w-1/2 flex flex-wrap p-2">
            <p class="w-full text-gray-600 text-base mt-1 text-left font-semibold">Password</p>
            <input
              type="password"
              v-model.trim="$v.password.$model"
              ref="password"
              placeholder="************"
              class="border border-solid focus:outline-none focus:shadow-outline py-2 px-4 my-2 w-full rounded-lg shadow-xl-e"
              :class="$v.password.$error && $v.password.$anyDirty ? 'border-red-500': 'border-gray-500'"
              autocomplete="current-password"
            />
          </div>
          <div class="w-1/2 flex flex-wrap p-2">
            <p class="w-full text-gray-600 text-base mt-1 text-left font-semibold">Confirm Password</p>
            <input
              type="password"
              v-model.trim="$v.confirm_password.$model"
              ref="confirm_password"
              placeholder="************"
              class="border border-solid focus:outline-none focus:shadow-outline py-2 px-4 my-2 w-full rounded-lg shadow-xl-e"
              :class="$v.confirm_password.$error && $v.confirm_password.$anyDirty ? 'border-red-500': 'border-gray-500'"
              autocomplete="current-password"
            />
          </div>
          <div class="w-1/2 flex flex-wrap p-2">
            <p class="w-full text-gray-600 text-base mt-1 text-left font-semibold">First Name</p>
            <input
              type="text"
              v-model.trim="$v.first_name.$model"
              ref="first_name"
              placeholder="John"
              class="border border-solid focus:outline-none focus:shadow-outline py-2 px-4 my-2 w-full rounded-lg shadow-xl-e"
              :class="$v.first_name.$error && $v.first_name.$anyDirty ? 'border-red-500': 'border-gray-500'"
              autocomplete="first-name"
            />
          </div>
          <div class="w-1/2 flex flex-wrap p-2">
            <p class="w-full text-gray-600 text-base mt-1 text-left font-semibold">Last Name</p>
            <input
              type="text"
              v-model.trim="$v.last_name.$model"
              ref="last_name"
              placeholder="Lexa"
              class="border border-solid focus:outline-none focus:shadow-outline py-2 px-4 my-2 w-full rounded-lg shadow-xl-e"
              :class="$v.last_name.$error && $v.last_name.$anyDirty ? 'border-red-500': 'border-gray-500'"
              autocomplete="last-name"
            />
          </div>

          <div class="w-full flex flex-wrap flex-row justify-center py-4">
            <button
              class="focus:outline-none focus:shadow-outline bg-primary-400 hover:bg-primary-300 rounded text-white py-2 px-6 shadow-md font-normal"
              @click="register"
            >Register</button>
            <button
              type="reset"
              class="focus:outline-none focus:shadow-outline bg-gray-600 hover:bg-gray-500 rounded text-white py-2 px-6 ml-3 shadow-md font-normal"
              @click="$v.$reset(); $refs.email.focus()"
            >Reset</button>
          </div>

          <div class="w-full flex flex-wrap justify-center">
            <router-link tag="a" to="/login" class="text-gray-600 font-semibold text-sm underline">Already Registered?</router-link>
          </div>

        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, maxLength, sameAs, alpha, helpers } from 'vuelidate/lib/validators';
const password_regex = helpers.regex('password_regex', /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#\$!%\*?\&])[A-Za-z\d@#\$!%\*?\&]{8,30}$/);

export default {
  data() {
    return {
      password_show: false,
      email: "",
      confirm_email: "",
      password: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
    };
  },
  validations: {
      email: {
        required,
        email,
        minLength: minLength(8),
        maxLength: maxLength(70)
      },
      confirm_email: {
        required,
        email,
        minLength: minLength(8),
        maxLength: maxLength(70),
        sameAs: sameAs('email'),
      },
      password:{
        required,
        minLength: minLength(8),
        maxLength: maxLength(30),
        password_regex
      },
      confirm_password:{
        required,
        sameAs: sameAs('password'),
      },
      first_name:{
        required,
        minLength: minLength(2),
        maxLength: maxLength(30),
        alpha
      },
      last_name:{
        required,
        minLength: minLength(2),
        maxLength: maxLength(30),
        alpha
      },
    },
  methods: {
    register() {
      if(!this.$v.$invalid){
        this.$axios.$post('/auth/register',{
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
    },
  },
  created() {}
};
</script>