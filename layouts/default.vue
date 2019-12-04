<template>
  <div :class="currentRoute === 'index' ? 'bg-main-page' : ''">
    <fade-transition :duration="600" tag="div" class="fixed w-full flex items-center justify-end">
      <notifications group="main"/>
    </fade-transition>
    <AppHeader></AppHeader>
    <fade-transition origin="center" mode="out-in" :duration="600">
      <nuxt />
    </fade-transition>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default {
  data() {
    return {};
  },
  components: {
    FadeTransition,
    AppHeader,
    AppFooter
  },
  mounted() {

  },
  computed: {
    currentRoute(){
      return this.$route.name;
    }
  },
};
</script>
<style lang="scss">
  .vue-notification {
    animation:slide-left 0.6s cubic-bezier(.25,.46,.45,.94) forwards;
    @apply text-primary-500 bg-white border-l-4 border-primary-300 border-solid text-base mt-10 p-3 shadow-lg;

    .notification-title {
        @apply text-gray-600;
    }
  
  
    &.warn {
        @apply text-yellow-500 border-yellow-500;
    }
  
    &.error {
        @apply text-red-500 border-red-500;
    }
  
    &.success {
        @apply text-green-500 border-green-500;
    }
  }

.slide-left{animation:slide-left .5s cubic-bezier(.25,.46,.45,.94) forwards}
@keyframes slide-left{0%{transform:translateX(0px)}100%{transform:translateX(-50px)}}
</style>
<style lang="scss" scoped>
.bg-main-page {
  background: transparent;
  overflow-x: hidden;
  width: 100%;
}

@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  .bg-main-page {
    background: transparent;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1479px)  {
  .bg-main-page {
    // background: transparent;
    background-size: 60% 730px;
    background: url("../assets/images/vectors/home-banner-blue-swirl.svg") no-repeat;
    background-position: 100.1% top;
    width: 100%;
    overflow-x: hidden;
  }
}

@media only screen and (min-width: 1480px) {
  .bg-main-page {
    background-size: 60% 730px;
    background: url("../assets/images/vectors/home-banner-blue-swirl.svg") no-repeat;
    background-position: 100.1% top;
    width: 100%;
    overflow-x: hidden;
  }
}
</style>
