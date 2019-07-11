<template>
  <div class="bg-svg">
    <CurrentOffer :notification="notify_msg"></CurrentOffer>
    <div class="home-header-wrap hidden lg:flex home-page-first-section"></div>
    <nav
      class="z-50 font-sans section bg-primary flex justify-between py-4 mb-0 lg:mb-4 mx-auto overflow-hidden lg:bg-transparent"
      id="main-nav"
    >
      <div
        class="container text-center px-10 xl:px-0 antialiased flex items-center justify-between mx-auto overflow-hidden"
      >
        <a href="/" class="block text-center justify-between">
          <img src="~/assets/images/logo/snapi-dblue.png" class="h-10 hidden lg:flex" alt="logo" />
          <img src="~/assets/images/logo/snapi-white.png" class="h-10 flex lg:hidden" alt="logo" />
        </a>
        <ul class="text-sm lg:text-base text-white list-reset items-center md:flex hidden">
          <li>
            <a href="/docs" class="hover:text-gray-400 inline-block py-2 px-3 no-underline">Docs</a>
          </li>
          <li>
            <router-link
              tag="a"
              to="/pricing"
              class="hover:text-gray-400 inline-block py-2 px-3 no-underline"
            >Pricing</router-link>
          </li>
          <li class="pr-2">
            <router-link
              tag="a"
              to="/faq"
              class="hover:text-gray-400 inline-block py-2 px-3 no-underline"
            >FAQs</router-link>
          </li>
          <li class="pl-2 border-l">
            <router-link
              tag="a"
              to="/login"
              class="hover:text-gray-400 inline-block py-2 px-3 no-underline"
            >Log In</router-link>
          </li>
          <li class="pl-2">
            <router-link
              tag="a"
              to="/register"
              class="bg-transparent hover:bg-white text-white font-semibold hover:text-blue-600 py-2 px-3 border border-white hover:border-transparent rounded"
            >Register</router-link>
          </li>
        </ul>
        <ul class="text-sm text-gray-dark list-reset items-center md:hidden flex">
          <button class="bg-transparent text-white font-semibold py-2">
            <i class="fas fa-bars text-white fa-lg"></i>
          </button>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import CurrentOffer from "../components/CurrentOffer";
export default {
  components: {
    CurrentOffer
  },
  data() {
    return {
      notify_msg: {
        link: "/pricing",
        text: "Hire a developer for your project"
      }
    };
  }
};
</script>

<style lang="scss">
</style>
