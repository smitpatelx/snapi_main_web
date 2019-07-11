<template>
  <div class="flex flex-col flex-wrap p-0 lg:p-16 mt-0 lg:mt-4 w-full bg-swi">
    <div class="w-full text-center lg:text-center text-gray-500 flex flex-col py-4">
      <span
        class="self-center border rounded-full flex items-center cursor-pointer w-12 outline-none"
        :class="toogle ? 'bg-swi justify-end transition-1 border-primary' : 'bg-black justify-start transition-1 border-black'"
        @click="toogle = !toogle"
      >
        <span class="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
      </span>
      <p
        class="text-xl mt-2"
        :class="toogle ? 'text-white' : 'text-black'"
        v-html="toogle ? 'Light UI' : 'Dark UI'"
      ></p>
    </div>
    <div class="w-full px-2 lg:px-32">
      <slide-x-right-transition>
        <img
          v-if="toogle"
          class="shadow-xl rounded-lg"
          src="~/assets/images/uidesign/light.png"
          alt="light"
        />
        <img v-else class="shadow-xl rounded-lg" src="~/assets/images/uidesign/dark.png" alt="dark" />
      </slide-x-right-transition>
    </div>
    <div class="px-2 lg:px-4 xl:px-48">
      <div class="flex flex-col md:flex-row flex-wrap justify-between px-2">
        <div
          class="w-full md:1/2 lg:w-2/6 flex flex-row md:flex-col p-6 lg:p-10 rounded-lg my-2 lg:my-0"
          v-for="(feature, index) in features"
          :key="index"
        >
          <div class="flex item-start py-4 mr-8 lg:mr-0">
            <i :class="feature.icon+' fa-3x text-white'"></i>
          </div>
          <div class="text-left">
            <p class="text-base md:text-lg text-white pb-3 font-bold">{{feature.heading}}</p>
            <p class="text-sm md:text-base text-gray-200">{{feature.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SlideXRightTransition } from "vue2-transitions";
export default {
  components: {
    SlideXRightTransition
  },
  data() {
    return {
      toogle: true,
      features: [
        {
          icon: "fab fa-superpowers",
          heading: "Vue.js + Node = ❤",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quasi ullam in at laudantium? Exercitationem, quas maiores aspernatur necessitatibus officiis neque aliquam qui soluta recusandae, mollitia, minima voluptatem eveniet minus!"
        },
        {
          icon: "fas fa-code",
          heading: "Code Driven Configuration",
          description:
            "Configure your entire Snapi dashboard with simple Javascript code. None of your Snapi configuration is stored in the database. Painless to configure. Painless to deploy."
        },
        {
          icon: "fas fa-server",
          heading: "Keeps Your Application Pure",
          description:
            "It’s a breeze to add a Snapi administration panel to an existing Nodejs application without touching your models. After configuring a Nova resource for each model, you’re ready for lift off."
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.bg-swi {
  background: linear-gradient(118deg, #328bf2, #1644ad);
}

.bg-swi2 {
  background: linear-gradient(118deg, #328cf2c2, #1643adc2);
}

.outline-none:focus {
  outline: none;
}

.transition-1 {
  transition: all 0.7s;
}
</style>
