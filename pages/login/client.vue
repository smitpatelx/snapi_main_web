<template>
  <div>
    <div class="flex flex-row flex-wrap text-center justify-center my-20 w-full">
      <div class="w-full sm:w-2/5 xl:w-1/4 p-2" id="zindex">
        <p
          class="text-lg text-gray-500 p-2 my-2 bg-gray-100 shadow-lg rounded-lg"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          Login with
          <span class="font-semibold text-gray-600">{{query.client}}</span>
        </p>
        <p
          class="text-lg text-gray-500 p-2 my-2 bg-gray-100 shadow-lg rounded-lg"
          data-aos="fade-down"
          data-aos-duration="900"
        >
          Requesting data to
          <span class="font-semibold text-gray-600">{{query.client}}</span>
        </p>
        <p
          class="text-lg text-gray-500 p-2 my-2 bg-gray-100 shadow-lg rounded-lg loading"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <i class="fas fa-circle"></i>
          <i class="fas fa-circle"></i>
          <i class="fas fa-circle"></i>
          <i class="fas fa-circle"></i>
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
      query: {}
    };
  },
  methods: {
    getData() {
      var query = this.$route.query;
      if (typeof query.code != "undefined") {
        this.query = query;
        axios
          .post(
            this.requesting_url,
            this.requesting_data,
            this.requesting_headers
          )
          .then(res => {
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.$router.push("/login");
      }
    }
  },
  computed: {
    requesting_url() {
      if (this.query.client == "google") {
        return "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/oauth2/v4/token";
      } else if (this.query.client == "github") {
        return "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token";
      }
    },
    requesting_data() {
      if (this.query.client == "google") {
        return {
          code: this.query.code,
          client_id:
            "1065467195903-c8413grg52bmbgufsknh4blv162kt8h6.apps.googleusercontent.com",
          client_secret: "jqKSNoDFfhyZNshJnmBN8V0D",
          redirect_uri: "http://localhost:8899/connect/google/callback",
          grant_type: "authorization_code"
        };
      } else if (this.query.client == "github") {
        return {
          client_id: "97460b9b301ac5668e7c",
          redirect_uri: "http://localhost:8899/connect/github/callback",
          client_secret: "ba0887304dd95d4d72a71045ddf77d6529f97b12",
          code: this.query.code,
          state: this.query.state
        };
      }
    },
    requesting_headers() {
      if (this.query.client == "google") {
        return {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        };
      } else if (this.query.client == "github") {
        return {
          headers: {
            Accept: "application/json"
          }
        };
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
