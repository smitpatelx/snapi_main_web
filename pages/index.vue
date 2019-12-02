<template>
  <div>
    <div class="flex flex-col lg:flex-row w-full h-full lg:h-full bg-transparent">
      <section
        class="font-sans w-full lg:w-1/2 bg-cover bg-primary-500 lg:bg-transparent text-center lg:text-left flex flex-col items-center lg:items-left justify-start"
      >
        <div class="w-full h-64 mt-6 lg:hidden">
          <img
            src="~/assets/images/vectors/ill-2.svg"
            alt="server-iso"
            class="w-full"
            style="min-width:100px;height:100%;"
          />
        </div>
        <div class="items-left justify-center mb-8 block pt-2 lg:pt-20 pl-0 lg:pl-0">
          <p class="text-2xl lg:text-4xl text-white lg:text-black">Administration Panel</p>
          <p class="text-2xl lg:text-4xl font-semibold text-white lg:text-gray-600">for Nodejs</p>
          <p class="text-white lg:text-gray-600 mt-4 font-normal text-lg lg:text-lg">
            <br />Featuring secure and scalable API.
            <br />With great UI and Documentation
            <br />to make you most productive developer.
            <br />Made with
            <span
              class="rounded bg-white lg:bg-orange-600 text-primary-600 lg:text-white px-2 py-1 text-xs font-bold"
            >Passport</span>
            <span
              class="rounded bg-white lg:bg-red-600 text-primary-600 lg:text-white px-2 py-1 text-xs font-bold"
            >GraphQL</span>
            <span
              class="rounded bg-white lg:bg-green-500 text-primary-600 lg:text-white px-2 py-1 text-xs font-bold"
            >Vue-Js</span>
            and
            <span
              class="rounded bg-white lg:bg-teal-400 text-primary-600 lg:text-white px-2 py-1 text-xs font-bold"
            >Tailwind</span>
            <br />by
            <strong>NETDEVV</strong>
          </p>
          <div class="py-12 mt-0 lg:mt-12">
            <router-link
              tag="a"
              to="register"
              class="inline-block lg:inline-block lg:px-5 lg:py-2 py-2 px-3 mb-4 lg:mb-0 mr-3 lg:mr-4 font-bold text-sm lg:text-base border border-solid border-white lg:border-primary-700 rounded-sm lg:bg-primary-500 lg:hover:bg-primary-400 lg:text-white lg:hover:text-white hover:bg-gray-100 bg-white hover:text-primary-400 text-primary-500"
            >Register Now</router-link>
            <router-link
              tag="a"
              to="docs"
              class="inline-block lg:inline-block lg:px-5 lg:py-2 py-2 px-3 mb-4 lg:mb-0 mr-3 lg:mr-4 font-bold text-sm lg:text-base border border-solid border-white lg:border-primary-500 hover:border-white lg:hover:border-primary-300 rounded-sm lg:text-primary-500 lg:hover:text-primary-300 text-white hover:text-gray-200"
            >Read Documentation</router-link>
          </div>
        </div>
      </section>
      <section
        class="font-sans w-full lg:w-1/2 bg-cover flex-col items-left justify-start hidden lg:flex flex-col bg-transparent"
      >
        <div class="pt-20 pl-20 lg:pl-4 xl:pl-32 w-full h-64">
          <img src="~/assets/images/vectors/ill-2.svg" alt="server-iso" style="min-width:30px;" />
        </div>
      </section>
    </div>
    <section class="font-sans flex flex-col w-full text-center items-center justify-center mt-6">
      <a v-scroll-to="'#why_snapi'" class="bg-transparent cursor-pointer">
        <img src="~/assets/images/logo/arrow_down.svg" alt="🔰" class="anim-down" />
      </a>
    </section>

    <section class="font-sans container m-auto flex flex-col text-center px-6 py-6">
      <div class="text-xl lg:text-3xl mt-6 px-0 flex flex-col">
        <p class="text-lg lg:text-2xl text-gray-600">Future of Admin-Panel</p>
        <p class="text-primary-500">
          Scalable Node Application Programming Interface
        </p>
      </div>
      <div class="text-lg lg:text-2xl py-4 my-2 flex flex-col lg:flex-row justify-center">
        <div class="p-2 subpixel-antialiased mx-5 my-2 lg:my-0 home-types-cards" >
          <p class="text-gray-800">Semiannual</p>
          <p class="text-sm text-gray-600">Updates</p>
        </div>
        <div class="p-2 subpixel-antialiased mx-5 my-2 lg:my-0 home-types-cards" >
          <p class="text-gray-800">4.9 k</p>
          <p class="text-sm text-gray-600">Downloads</p>
        </div>
        <div class="p-2 subpixel-antialiased mx-5 my-2 lg:my-0 home-types-cards" >
          <p class="text-gray-800">Life-time</p>
          <p class="text-sm text-gray-600">Support</p>
        </div>
      </div>
    </section>
    <DarkNightUi></DarkNightUi>
    <!-- Start Features -->
    <div class="flex flex-col flex-wrap p-6 lg:pt-4 lg:px-16 text-center bg-ui" id="why_snapi">
      <p class="text-gray-600 text-xl md:text-4xl mt-10">
        Why
        <span class="text-primary font-bold">SNAPI</span>?
      </p>
      <div
        class="flex flex-wrap flex-col md:flex-row justify-center text-center w-full mt-10 px-4 lg:px-30 xl:px-30"
      >
        <div
          class="w-full md:w-1/2 xl:w-1/3 flex flex-row px-1 lg:px-6 py-4 lg:py-8"
          v-for="(feature, index) in features"
          :key="index"
        >
          <div class="flex item-start py-2 pr-8">
            <i :class="feature.icon+' fa-3x text-blue-600'"></i>
          </div>
          <div class="text-left">
            <p class="text-sm md:text-sm text-gray-800 pb-3 font-bold">
              {{feature.heading}}
              <span
                v-if="feature.new"
                class="rounded-full uppercase px-2 py-1 text-xs font-bold mr-3 bg-primary-500 text-white"
              >New</span>
            </p>
            <p
              class="text-sm md:text-sm text-gray-600 antialiased"
              style="line-height: 1.7;"
            >{{feature.description}}</p>
          </div>
        </div>
      </div>
      <!-- End Features -->
      <div class="py-6 my-6">
        <router-link
          tag="a"
          to="docs"
          class="inline-block links lg:pt-2 pt-2 px-1 mb-4 lg:mb-0 mr-3 lg:mr-4 font-semibold text-lg lg:text-lg text-primary-500 hover:text-primary-500"
        >Read Docs for more</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import DarkNightUi from "../components/DarkNightUi";

export default {
  components: {
    DarkNightUi,
  },
  data() {
    return {
      features: [
        {
          icon: "fas fa-search",
          heading: "Advance queries",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        },
        {
          icon: "fab fa-think-peaks",
          heading: "Actions",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        },
        {
          icon: "fas fa-filter",
          heading: "Advance filters",
          new: true,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        },
        {
          icon: "fas fa-bars",
          heading: "CRUD views",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        },
        {
          icon: "far fa-folder",
          heading: "SNAPI media",
          new: true,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        },
        {
          icon: "fas fa-fingerprint",
          heading: "JWT auth & providers",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        },
        {
          icon: "far fa-bell",
          heading: "Live Notifications",
          new: true,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        },
        {
          icon: "fas fa-sliders-h",
          heading: "Auto API resources",
          new: true,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        },
        {
          icon: "fab fa-wpforms",
          heading: "Custom Fields",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        },
        {
          icon: "fab fa-searchengin",
          heading: "SEO Implementation",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        },
        {
          icon: "fas fa-lock",
          heading: "CORS Implementation",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        },
        {
          icon: "far fa-edit",
          heading: "Editor Panel",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

.anim-down {
  height: 2rem;
  animation: bounce-anim 2s 0s infinite alternate;

  @keyframes bounce-anim {
    0% {
      transform: translateY(0px);
    }

    25% {
      transform: translateY(20px);
    }

    50% {
      transform: translateY(-8px);
    }

    75% {
      transform: translateY(8px);
    }

    100% {
      transform: translateY(-20px);
    }
  }
}

.home-types-cards {
  min-width: 100px;
  border-radius: 0.5 rem;
  border: 2px solid transparent;
  border-image: url(~assets/images/vectors/dash-border-primary.svg) 2 round;

  &:after,
  &:before {
    border: 1px solid #2161c4;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  .home-types-cards {
    min-width: 150px;
  }
}

</style>
