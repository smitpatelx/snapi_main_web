<template>
  <div :class="currentRoute === 'index' ? 'bg-main-page' : ''">
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
import AOS from "aos";
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
    setTimeout(() => {
      AOS.init({
        disable: false
      });
    }, 300);
  },
  computed: {
    currentRoute(){
      return this.$route.name;
    }
  },
};
</script>
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
@media only screen and (max-width: 1280px) and (min-width: 1479px)  {
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
