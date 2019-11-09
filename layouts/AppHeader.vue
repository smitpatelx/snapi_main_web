<template>
  <div class="bg-svg">
    <!-- <CurrentOffer :notification="notify_msg"></CurrentOffer> -->
    <div class="home-header-wrap hidden lg:flex home-page-first-section"></div>
    <nav
      class="z-50 font-sans section bg-primary flex justify-between py-4 mb-0 lg:mb-4 mx-auto overflow-hidden lg:bg-transparent"
      id="main-nav"
    >
      <div
        class="container text-center px-10 xl:px-8 antialiased flex items-center justify-between mx-auto overflow-hidden"
      >
        <router-link tag="a" to="/" class="block text-center justify-between">
          <img src="~/assets/images/logo/snapi-dblue.png" class="h-10 hidden lg:flex" alt="logo" />
          <img src="~/assets/images/logo/snapi-white.png" class="h-10 flex lg:hidden" alt="logo" />
        </router-link>
        <ul class="text-sm lg:text-base text-white list-reset items-center md:flex hidden">
          <li>
            <NavBarMenu />
          </li>
          <li>
            <router-link
            tag="a"
            to="/docs"
            class="hover:text-gray-400 inline-block py-2 px-3 no-underline">
            Docs
            </router-link>
          </li>
          <li class="pr-2 justify-center content-center">
            <router-link
              tag="a"
              to="/pricing"
              class="hover:text-gray-400 inline-block py-2 px-3 no-underline"
            >Pricing</router-link>
          </li>
          <div v-if="!authenticated" class="flex">
            <li class="pl-2 border-l">
              <router-link
                tag="a"
                to="/login"
                class="hover:text-gray-400 inline-block py-2 px-3 no-underline"
              >Log In</router-link>
            </li>
            <li class="pl-2 mt-2">
              <router-link
                tag="a"
                to="/register"
                class="bg-transparent hover:bg-white text-white font-semibold hover:text-blue-600 py-2 px-3 border border-white hover:border-transparent rounded"
              >Register</router-link>
            </li>
          </div>
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
import NavBarMenu from "../components/NavBarMenu";
export default {
  components: {
    CurrentOffer,
    NavBarMenu
  },
  data() {
    return {
      notify_msg: {
        link: "/pricing",
        text: "Hire a developer for your project"
      },
      authenticated: false
    };
  }
};
</script>

<style lang="scss">
.ring {
  animation: ring1 4s 0.7s ease-in-out infinite;
  transform-origin: 50% 4px;

  @keyframes ring1 {
    0% {
      transform: rotate(0);
    }
    1% {
      transform: rotate(30deg);
    }
    3% {
      transform: rotate(-28deg);
    }
    5% {
      transform: rotate(34deg);
    }
    7% {
      transform: rotate(-32deg);
    }
    9% {
      transform: rotate(30deg);
    }
    11% {
      transform: rotate(-28deg);
    }
    13% {
      transform: rotate(26deg);
    }
    15% {
      transform: rotate(-24deg);
    }
    17% {
      transform: rotate(22deg);
    }
    19% {
      transform: rotate(-20deg);
    }
    21% {
      transform: rotate(18deg);
    }
    23% {
      transform: rotate(-16deg);
    }
    25% {
      transform: rotate(14deg);
    }
    27% {
      transform: rotate(-12deg);
    }
    29% {
      transform: rotate(10deg);
    }
    31% {
      transform: rotate(-8deg);
    }
    33% {
      transform: rotate(6deg);
    }
    35% {
      transform: rotate(-4deg);
    }
    37% {
      transform: rotate(2deg);
    }
    39% {
      transform: rotate(-1deg);
    }
    41% {
      transform: rotate(1deg);
    }

    43% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(0);
    }
  }
}
</style>
