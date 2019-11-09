<template>
  <div>
    <div class="flex flex-row flex-wrap text-center justify-center my-20 w-full">
      <div class="w-full sm:w-2/5 xl:w-1/4 p-2" id="zindex">
        <p
          class="text-lg text-gray-500 p-2 my-2 bg-gray-100 shadow-lg rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          Login with :
          <span class="font-semibold text-gray-600">{{query.client}}</span>
        </p>
        <p
          class="text-lg text-gray-500 p-2 my-2 bg-gray-100 shadow-lg rounded-lg"
          data-aos="fade-down"
          data-aos-duration="900"
        >
          Request Status
          <i class="fas fa-circle text-green-600" v-if="request_status"></i>
          <i class="fas fa-circle text-red-600" v-else></i>
          <!-- <span class="font-semibold text-gray-600">{{query.token_type}}</span> -->
        </p>
        <p
          class="text-lg text-gray-500 p-2 my-2 bg-gray-100 shadow-lg rounded-lg loading"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <i class="fas fa-circle fa-sm"></i>
          <i class="fas fa-circle fa-sm"></i>
          <i class="fas fa-circle fa-sm"></i>
          <i class="fas fa-circle fa-sm"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      query: {
        access_token:''
      }
    };
  },
  methods: {
    getData() {
      var query = this.$route.query;
      if (typeof query.client != "undefined") {
        this.query = query;
        // console.log(query);
      } else {
        this.$router.push("/login");
      }
    }
  },
  computed: {
    request_status() {
      if (this.query.access_token.length > 10) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss">
body {
  background: #2366ce;
}

#zindex > p {
  z-index: 200;
}

.loading {
  position: relative;
  i {
    animation: scale-up-center 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) infinite
      alternate both;
  }

  i:nth-child(1) {
    animation-delay: 0s;
  }

  i:nth-child(2) {
    animation-delay: 0.2s;
  }

  i:nth-child(3) {
    animation-delay: 0.4s;
  }

  i:nth-child(4) {
    animation-delay: 0.6s;
  }

  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
}
@media (min-width: 1024px) {
  body {
    background: transparent;
  }
}

@media (min-width: 1480px) {
  body {
    background-size: 60% 730px;
    background: url("../../assets/images/vectors/home-banner-blue-swirl.svg")
      no-repeat;
    background-position: 100.1% top;
    width: 100%;
    overflow-x: hidden;
  }
}
</style>
