<template>
  <div class="w-full hidden md:flex flex-wrap justify-left py-2 px-4 bg-transparent bottom-0 fixed z-10">
      <router-link
        tag="a"
        :to="notification.link"
        @mouseenter.native="open"
        @mouseleave.native="exit"
        class="cursor-pointer w-auto p-2 text-white leading-none rounded-full flex flex-wrap justify-center items-center bg-primary-500 border-2 border-solid border-white"
      >
        <span class="rounded-full uppercase px-2 py-1 text-xs font-bold bg-primary-300" :class="is_open ? 'mr-3' : 'mr-0'">New 🎉</span>
        <slide-x-left-transition :duration="{enter: 500, leave: 0}">
          <span class="font-semibold mt--1 mr-2 text-center w-auto" v-if="is_open">{{ notification.text }}</span>
        </slide-x-left-transition>
        <slide-x-left-transition :duration="{enter: 500, leave: 0}">
          <i v-if="is_open" :class="notification.icon ? 'fas fa-chevron-right' : 'hidden'"></i>
        </slide-x-left-transition>
      </router-link>
  </div>
</template>

<script>
import { SlideXLeftTransition } from 'vue2-transitions';

export default {
  components: {
    SlideXLeftTransition
  },
  data(){
    return{
      is_open: false
    }
  },
  props: {
    notification: {
      type: Object,
      default: null,
      required: true
    }
  },
  methods: {
    exit(){
      if (this.is_open){
        this.is_open = false;
      }
    },
    open(){
      if (!this.is_open){
        this.is_open = true;
      }
    }
  },
};
</script>

<style lang="scss">
  .mt--1{
    margin-top: -2px;
  }
</style>
