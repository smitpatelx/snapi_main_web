<template>
  <div>
    <div class="text-center py-4 lg:px-4 bg-blue-1" id="latest_update_container">
      <router-link
        tag="a"
        :to="notification.link"
        class="p-2 items-center text-white leading-none lg:rounded-full flex lg:inline-flex bg-blue-2"
        role="alert"
      >
        <span class="flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3 bg-blue-500">New</span>
        <span class="font-semibold mr-2 text-left flex-auto">{{ notification.text }}</span>
        <i :class="notification.icon ? notification.icon : 'fas fa-chevron-right'"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      default: null,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.bg-blue-1 {
  background: #184797;
}

.bg-blue-2 {
  background: #1f5cc4;
}
</style>
