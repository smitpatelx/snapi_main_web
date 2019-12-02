<template>
    <div>
      <div class="bg-dot-glass shadow-inner flex flex-wrap flex-row px-6 md:px-2 lg:px-10 py-6 md:py-12">
        <div class="w-full md:w-1/4 lg:w-1/3 justify-center text-center lg:text-right flex flex-wrap flex-col items-center lg:px-3">
          <p class="w-full text-lg lg:text-3xl font-semibold text-primary-500">Subscribe to news letter</p>
          <p class="w-full text-base lg:text-lg text-gray-600">To get our latest updates</p>
        </div>
        <div class="w-full my-4 md:m-0 md:w-2/4 lg:w-1/3 flex flex-wrap items-center justify-center pt-2 md:pt-0 lg:px-3 relative">
          <form ref="newsletter" @submit.prevent="submit" class="nl-border w-auto flex flex-wrap items-stretch rounded-lg">
            <input autocomplete="email" ref="email" @keyup.enter="submit" type="email" v-model.trim="$v.email.$model" placeholder="xyz@gmail.com" class="inline-block placeholder-gray-400 rounded-l-lg bg-white text-gray-600 focus:text-gray-500 focus:outline-none text-lg py-2 pl-3 md:pl-4">
            <button :disabled="$v.email.$error" @click="submit" class="inline-block rounded-r-lg focus:outline-none text-sm py-2 px-4 bg-white flex justify-center items-center focus:text-gray-500" :class="$v.email.$error && $v.email.$anyDirty ? 'text-red-500 cursor-not-allowed' : 'text-primary-500 cursor-pointer'">
              <svg class="inline-block fill-current h-4 w-4" :class="$v.email.$error && $v.email.$anyDirty ? 'skew-45' : 'skew-0'" viewBox="0 0 14 14"><path d="M14 8H8v6H6V8H0V6h6V0h2v6h6v2z"/></svg>
            </button>
          </form>
          <div v-if="$v.$error" class="leading-tight text-sm text-red-500 w-full justify-center text-center py-3" >
            <p v-if="!$v.email.required && $v.email.$anyDirty" class="relative pl-1">Email Required</p>
            <p v-if="!$v.email.email && $v.email.$anyDirty" class="relative pl-1">Invalid Email Address</p>
            <p v-if="!$v.email.minLength && $v.email.$anyDirty" class="relative pl-1">Email Address Must Be Greater Than {{ $v.email.$params.minLength.min }}</p>
          </div>
        </div>
        <div class="w-full md:w-1/4 lg:w-1/3 flex flex-wrap items-center justify-center pt-2 md:pt-0 lg:px-3 relative">
          <p class="w-full text-center text-base lg:text-lg text-gray-600">Follow Us</p>
          <a
            v-for="(social, index) in socials"
            :key="index"
            class="flex items-center w-auto justify-center m-2 md:m-3 no-underline text-primary-500 hover:text-primary-300"
            :href="social.href"
            :target="social.target_blank ? 'blank' : 'self'"
          >
            <i :class="social.icon"></i>
          </a>
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
            socials: [
              {
                link_label: "Github",
                href: "https://github.com/smitpatelx",
                traget_blank: true,
                icon: "fab fa-github fa-2x"
              },
              {
                link_label: "Discord",
                href: "https://discord.gg/nFTec5q",
                traget_blank: true,
                icon: "fab fa-discord fa-2x"
              },
              {
                link_label: "Twitter",
                href: "https://twitter.com/netdevv1",
                traget_blank: true,
                icon: "fab fa-twitter fa-2x"
              },
              {
                link_label: "Instagram",
                href: "https://www.instagram.com/netdevv/",
                traget_blank: true,
                icon: "fab fa-instagram fa-2x"
              }
            ]
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
        } else {
          this.$v.$reset();
        }
      }
    }
}
</script>
<style lang="scss" scoped>
  .bg-dot-glass{
    background-image: url('~static/vecotrs/dot-glass-min.png');
    background-repeat: no-repeat;
    background-position: left center;
    background-attachment: scroll;
  }
  .nl-border {
    min-width: 100px;
    border: 2px solid transparent;
    border-image: url('~assets/images/vectors/dash-border-primary.svg') 2 round;
  }
</style>