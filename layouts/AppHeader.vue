<template>
  <div>
    <CurrentOffer v-if="currentRoute === 'index'" :notification="notify_msg"></CurrentOffer>
    <div class="home-header-wrap" :class="currentRoute === 'index' ? 'home-page-first-section hidden md:flex' : 'hidden'"></div>
    <nav
      class="z-50 font-sans section bg-primary-500 flex flex-wrap justify-center py-4 mb-0 overflow-hidden"
      :class="currentRoute === 'index' ? 'lg:bg-transparent lg:mb-4' : ''"
      id="main-nav"
    >
      <div
        class="w-full container text-center px-10 xl:px-8 antialiased flex items-center justify-between overflow-hidden"
      >
        <router-link tag="a" to="/" class="block text-center justify-between">
          <img src="~/assets/images/logo/snapi-dblue.png" :class="currentRoute === 'index' ? 'hidden lg:flex' : 'hidden'" class="select-none h-10" alt="logo" />
          <img src="~/assets/images/logo/snapi-white.png" :class="currentRoute === 'index' ? 'flex lg:hidden' : 'flex'" class="select-none h-10 " alt="logo" />
        </router-link>
        <ul class="text-sm lg:text-base text-white list-reset items-center md:flex hidden">
          <li>
            <NavBarMenu />
          </li>
          <li>
            <router-link
            tag="a"
            to="/docs"
            class="select-none hover:text-gray-400 inline-block py-2 px-3 no-underline">
            Docs
            </router-link>
          </li>
          <li class="pr-2 justify-center content-center">
            <router-link
              tag="a"
              to="/pricing"
              class="select-none hover:text-gray-400 inline-block py-2 px-3 no-underline"
            >Pricing</router-link>
          </li>
          <div v-if="!authenticated" class="flex">
            <li class="pl-2 border-l">
              <router-link
                tag="a"
                to="/login"
                class="select-none hover:text-gray-400 inline-block py-2 px-3 no-underline"
              >Log In</router-link>
            </li>
            <li class="pl-2 mt-2">
              <router-link
                tag="a"
                to="/register"
                class="select-none bg-transparent hover:bg-white text-white font-semibold hover:text-primary-500 py-2 px-3 border border-white hover:border-transparent rounded"
              >Register</router-link>
            </li>
          </div>
        </ul>
        <ul class="text-sm text-gray-dark list-reset items-center md:hidden flex">
          <button class="select-none focus:outline-none bg-transparent text-white font-semibold p-2" @click="smMenu = !smMenu">
            <zoom-center-transition group>
              <i :key="0" v-if="!smMenu" class="fas fa-bars text-white fa-lg"></i>
              <i :key="1" v-else class="fas fa-times text-white fa-lg"></i>
            </zoom-center-transition>
          </button>
        </ul>
      </div>

      <slide-y-down-transition tag="div" class="w-full py-3 px-4 flex md:hidden justify-center">
        <div v-if="smMenu" @blur="smMenu = false" class="absolute w-full flex flex-wrap bg-white justify-center pb-4 px-5 h-screen">
          <div class="h-10 w-full flex flex-wrap justify-between items-center">
            <img src="~/assets/images/logo/snapi-dblue.png" class="select-none h-10" alt="logo" />
            <button class="focus:outline-none bg-transparent text-primary font-semibold p-2" @click="smMenu = !smMenu">
              <zoom-center-transition group>
                <i :key="0" v-if="!smMenu" class="fas fa-bars text-primary fa-lg"></i>
                <i :key="1" v-else class="fas fa-times text-primary fa-lg"></i>
              </zoom-center-transition>
            </button>
          </div>
          <div class="w-full flex flex-wrap justify-center">
            <div class="h-10 pb-3 flex flex-wrap items-center w-1/2">
              <i class="far fa-chart-bar fa-lg text-primary mt-1 w-8"></i>
              <router-link
                tag="a"
                to="docs/charts"
                class="text-xl text-gray-600 hover:text-primary font-semibold inline px-2"
              >
                Charts
              </router-link>
            </div>
            <div class="h-10 pb-3 flex flex-wrap items-center w-1/2">
              <i class="fas fa-rocket fa-lg text-primary mt-1 w-8"></i>
              <router-link
                tag="a"
                to="docs/notifications"
                class="text-xl text-gray-600 hover:text-primary font-semibold inline px-2"
              >
                Notifications
              </router-link>
            </div>
            <div class="h-10 pb-3 flex flex-wrap items-center w-1/2">
              <i class="fas fa-sort-amount-down fa-lg text-primary mt-1 w-8"></i>
              <router-link
                tag="a"
                to="docs/data-filters"
                class="text-xl text-gray-600 hover:text-primary font-semibold inline px-2"
              >
                Data Filters
              </router-link>
            </div>
            <div class="h-10 pb-3 flex flex-wrap items-center w-1/2">
              <i class="fas fa-fingerprint fa-lg text-primary mt-1 w-8"></i>
              <router-link
                tag="a"
                to="docs/charts"
                class="text-xl text-gray-600 hover:text-primary font-semibold inline px-2"
              >
                Auth API
              </router-link>
            </div>
          </div>
        </div>
      </slide-y-down-transition>
    </nav>
  </div>
</template>

<script>
import CurrentOffer from "../components/CurrentOffer";
import NavBarMenu from "../components/NavBarMenu";
import { ZoomCenterTransition, SlideYDownTransition } from "vue2-transitions";
export default {
  components: {
    CurrentOffer,
    NavBarMenu,
    ZoomCenterTransition,
    SlideYDownTransition
  },
  data() {
    return {
      notify_msg: {
        link: "/pricing",
        text: "Hire a developer for your project",
        icon: false
      },
      authenticated: false,
      smMenu : false
    };
  },
  computed: {
    currentRoute(){
      return this.$route.name;
    }
  },
  watch:{
    // currentRoute: (val)=>{
    //   console.log(val === "index");
    // }
  }
};
</script>

<style lang="scss" scoped>

.home-page-first-section {
  background: transparent;
  border-radius: 0%;
  content: '';
  position: absolute;
  top: -250px;
  left: 48%;
  width: 930px;
  height: 870px;
  z-index: -1;
  margin-bottom: -30px;
  padding-bottom: 0;
  overflow-x: hidden;

  &:after {
    top: -300px !important;
  }
}


@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  .home-page-first-section {
    background: linear-gradient(118deg, #328bf2, #1644ad);
    border-radius: 54% 46% 64% 36%/64% 42% 58% 36%;
  }
}

@media only screen and (min-width: 1280px) and (max-width: 1479px)  {
  .home-page-first-section {
    background: transparent !important;
    border-radius: 0%;
  }
}

@media only screen and (min-width: 1480px) {
  .home-page-first-section {
    background: transparent !important;
    border-radius: 0%;
  }
}
</style>
