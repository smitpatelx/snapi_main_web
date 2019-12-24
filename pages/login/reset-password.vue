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
          </div>
        </div>
        <div class="px-3 pt-0 pb-4 flex flex-wrap">
          <p class="w-full text-center text-primary-400 font-semibold text-xl">Password Reset</p>
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

          <div class="w-full flex flex-wrap flex-row justify-center py-4">
            <button
              class="focus:outline-none focus:shadow-outline bg-primary-400 hover:bg-primary-300 rounded text-white py-2 px-6 shadow-md font-normal"
              @click="login_form"
            >Get Email</button>
            <button
                type="reset"
                class="focus:outline-none focus:shadow-outline bg-gray-600 hover:bg-gray-500 rounded text-white py-2 px-6 ml-3 shadow-md font-normal"
                @click="$v.$reset(); $refs.email.focus()"
            >Reset</button>
          </div>

        <div class="w-full flex flex-wrap justify-center">
            <router-link tag="a" to="/login" class="text-gray-600 font-semibold text-sm underline">Return to login</router-link>
        </div>

        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      password_show: false,
      email: "",
    };
  },
  validations: {
      email: {
        required,
        email,
        minLength: minLength(8),
      },
    },
  methods: {
    login_form() {
      if(!this.$v.$invalid){
        axios.post('/auth/reset-password',{
          email: this.email,
        });
      } else {
        this.$v.$reset();
        this.$notify({
          group: 'main',
          title: 'Error',
          text: "Please recheck your email",
          type: 'error',
          'animation-name':'slide-left'
        });
      }
    },
  },
  created() {}
};
</script>