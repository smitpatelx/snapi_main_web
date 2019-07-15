<template>
  <div @mouseenter="toogleBar" @mouseleave="closeBar">
    <a
      class="hover:text-gray-400 inline-block py-2 px-3 no-underline cursor-pointer"
      href="#"
      @focus="toogleBar"
      @click="toogleBar"
      @keydown.shift.tab="closeBar"
      @keydown.esc.exact="closeBar"
    >
      <span class="pl-2">Resources</span>
    </a>
    <slide-y-down-transition>
      <div
        class="menubar rounded shadow-lg bg-white text-gray-600 absolute mt-0 flex flex-wrap text-left"
        v-if="notify"
      >
        <ul class="w-1/2 p-8 text-lg">
          <li class="pb-3 flex flex-row">
            <i class="far fa-chart-bar fa-lg text-primary mt-3 w-8"></i>
            <router-link
              tag="a"
              to="docs/charts"
              class="text-gray-600 hover:text-primary font-semibold inline px-2"
            >
              Charts
              <span class="block font-normal text-sm">Simplify data with charts</span>
            </router-link>
          </li>
          <li class="pb-3 flex flex-row">
            <i class="fas fa-rocket fa-lg text-primary mt-3 w-8"></i>
            <router-link
              tag="a"
              to="docs/charts"
              class="text-gray-600 hover:text-primary font-semibold inline px-2"
            >
              Notifications
              <span class="block font-normal text-sm">Notify users in realtime</span>
            </router-link>
          </li>
          <li class="pb-3 flex flex-row">
            <i class="fas fa-sort-amount-down fa-lg text-primary mt-3 w-8"></i>
            <router-link
              tag="a"
              to="docs/charts"
              class="text-gray-600 hover:text-primary font-semibold inline px-2"
            >
              Data Filters
              <span class="block font-normal text-sm">Filter content with vue</span>
            </router-link>
          </li>
        </ul>
        <ul class="w-1/2 p-8 text-lg">
          <li class="pb-3 flex flex-row">
            <i class="fas fa-money-check-alt fa-lg text-primary mt-3 w-8"></i>
            <router-link
              tag="a"
              to="docs/charts"
              class="text-gray-600 hover:text-primary font-semibold inline px-2"
            >
              Stripe
              <span class="block font-normal text-sm">Manage your payments</span>
            </router-link>
          </li>
          <li class="pb-3 flex flex-row">
            <i class="far fa-file-code fa-lg text-primary mt-3 w-8"></i>
            <router-link
              tag="a"
              to="docs/charts"
              class="text-gray-600 hover:text-primary font-semibold inline px-2"
            >
              Tailwind Config
              <span class="block font-normal text-sm">Customize your UI</span>
            </router-link>
          </li>
          <li class="pb-3 flex flex-row">
            <i class="fas fa-fingerprint fa-lg text-primary mt-3 w-8"></i>
            <router-link
              tag="a"
              to="docs/charts"
              class="text-gray-600 hover:text-primary font-semibold inline px-2"
            >
              Auth API
              <span class="block font-normal text-sm">Secure apps with auth</span>
            </router-link>
          </li>
        </ul>
        <ul class="w-full border-t border-gray-400 p-8 bg-gray-200 rounded-b">
          <li class="pb-4">
            <i class="fab fa-dochub fa-lg text-primary"></i>
            <router-link
              tag="a"
              to="docs"
              class="text-gray-600 hover:text-primary font-semibold inline px-2"
            >
              Documentation
              <span
                class="ml-2 font-normal text-sm"
              >Start intergating products and tools</span>
            </router-link>
          </li>
          <li class="pb-4">
            <i class="fas fa-dice-d6 fa-lg text-primary"></i>
            <router-link
              tag="a"
              to="docs"
              class="text-gray-600 hover:text-primary font-semibold inline px-2"
            >
              API Reference
              <span class="ml-2 font-normal text-sm">Simplify your workflow</span>
            </router-link>
          </li>
          <li @keydown.tab.exact="notify = false">
            <i class="far fa-life-ring fa-lg text-primary"></i>
            <router-link
              tag="a"
              to="docs"
              class="text-gray-600 hover:text-primary font-semibold inline px-2"
            >
              Support
              <span class="ml-2 font-normal text-sm">Find faqs and support</span>
            </router-link>
          </li>
        </ul>
      </div>
    </slide-y-down-transition>
  </div>
</template>

<script>
import { SlideYDownTransition } from "vue2-transitions";
export default {
  components: {
    SlideYDownTransition
  },
  data() {
    return {
      notify: false
    };
  },
  methods: {
    toogleBar() {
      this.notify = !this.notify;
    },
    closeBar() {
      this.notify = false;
    }
  }
};
</script>

<style lang="scss">
.menubar {
  width: 35rem;
  margin-left: -10rem;
}
</style>
