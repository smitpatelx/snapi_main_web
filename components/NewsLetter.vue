<template>
    <div class="shadow-inner flex flex-wrap flex-row px-6 md:px-10 py-6 md:py-12 bg-gray-100">
      <div class="w-full md:w-1/2 justify-center md:justify-end text-center md:text-right flex flex-wrap flex-col items-center md:px-3">
        <p class="w-full text-2xl font-semibold text-primary-500">Subscribe to news letter</p>
        <p class="w-full text-lg text-gray-600">To get our latest updates</p>
      </div>
      <div class="w-full md:w-1/2 flex flex-wrap items-center justify-center md:justify-start pt-2 md:pt-0 md:px-3 relative">
        <form ref="newsletter" @submit.prevent="submit" class="w-auto flex flex-wrap items-stretch shadow-md rounded-lg">
          <input autocomplete="email" ref="email" @keyup.enter="submit" type="email" v-model.trim="$v.email.$model" placeholder="xyz@gmail.com" class="placeholder-gray-400 rounded-l-lg bg-white text-gray-600 focus:text-gray-500 focus:outline-none text-lg py-2 pl-3 md:pl-4">
          <button :disabled="$v.email.$error" @click="submit" class="rounded-r-lg focus:outline-none text-sm py-2 px-4 bg-white flex justify-center items-center focus:text-gray-500" :class="$v.email.$error && $v.email.$anyDirty ? 'text-red-500 cursor-not-allowed' : 'text-primary-500 cursor-pointer'">
            <svg class="inline-block fill-current h-4 w-4" :class="$v.email.$error && $v.email.$anyDirty ? 'skew-45' : 'skew-0'" viewBox="0 0 14 14"><path d="M14 8H8v6H6V8H0V6h6V0h2v6h6v2z"/></svg>
          </button>
        </form>
        <div class="leading-tight text-sm text-red-500 w-full absolute bottom-0" style="margin-bottom:-1.5rem;">
          <p v-if="!$v.email.required && $v.email.$anyDirty" class="relative w-full pl-1">Email Required</p>
          <p v-if="!$v.email.email && $v.email.$anyDirty" class="relative w-full pl-1">Invalid Email Address</p>
          <p v-if="!$v.email.minLength && $v.email.$anyDirty" class="relative w-full pl-1">Email Address Must Be Greater Than {{ $v.email.$params.minLength.min }}</p>
        </div>
      </div>
    </div>
</template>
<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
export default {
    data(){
        return{
            focused: false,
            email: "",
        }
    },
    validations: {
      email: {
        required,
        email,
        minLength: minLength(8),
      }
    },
    methods:{
      submit(){        
        if(!this.$v.$invalid){
          console.log("Submit");
          this.$v.$reset();
          this.email=null;
          this.$refs.email.focus();
        }
      }
    }
}
</script>