<template>
  <div>
    <!-- Start News Letter -->
    <news-letter></news-letter>
    <!-- Start Footer -->
    <footer class="font-sans bg-primary-500 text-white py-4 md:py-8 px-2 md:px-4">
      <div class="mx-auto container overflow-hidden flex flex-col md:flex-row content-center">
        <div
          class="w-full md:w-1/4 flex flex-wrap text-sm lg:text-base p-2 md:pl-5 mt-2 md:mt-0 justify-center md:justify-start items-start text-left"
        >
          <router-link tag="a" to="/">
            <img
              src="~/assets/images/logo/snapi-white.svg"
              class="h-10 md:h-14"
              style="min-width:30px;"
              alt="logo"
            />
          </router-link>
          <p class="text-base font-light text-white mt-4">
            Snapi was created by Netdevv Team. Initial version of snapi was used internally. As we advanced our development, we were able to make this project public.
          </p>
          <p class="text-lg font-semibold text-white mt-2">
            Join us on this amazing journey.
          </p>
        </div>
        <div class="w-full md:w-3/4 flex flex-wrap text-sm lg:text-sm mt-6 md:mt-0 justify-center">
          <ul
            v-for="(page, index) in pages"
            :key="index"
            class="leading-none list-reset font-hairline w-1/2 md:w-1/3 flex flex-wrap flex-col text-left pl-2 md:pl-6 content-start md:content-center"
          >
            <p class="py-2 px-1 lg:px-6 uppercase no-underline text-sm md:text-base font-bold tracking-wide text-white">{{page.label}}</p>
            <li v-for="(links, index2) in page.links" :key="index2" class="flex">
              <router-link
                tag="a"
                :to="links.link"
                v-if="links.router_link"
                class="text-gray-400 hover:text-white font-medium py-2 mt-1 px-1 lg:px-6"
              >{{links.link_label}}</router-link>
              <a
                :href="links.link"
                v-else
                class="text-gray-400 hover:text-white font-medium py-2 mt-1 px-1 lg:px-6"
              >{{links.link_label}}</a>
            </li>
          </ul>
          <div class="leading-none list-reset font-thin w-full md:w-1/3 hidden md:flex flex-wrap flex-col justify-start pl-2 md:pl-6 content-center">
            <p class="py-2 px-1 lg:px-6 uppercase no-underline text-sm md:text-base font-bold tracking-wide text-white">Contact Us</p>
            <a class="text-gray-400 hover:text-white font-medium py-2 mt-1 px-1 lg:px-6 items-center flex flex-wrap" href="mailto:support@netdevv.com">
              support@netdevv.com
            </a>
            <a class="text-gray-400 hover:text-white font-medium py-2 mt-1 px-1 lg:px-6 items-center flex flex-wrap" href="https://g.page/netdevv?share" target="_blank">
              <svg class="inline-block w-4 h-4 fill-current mr-1" viewBox="0 0 20 20"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></svg>
              GTA, Canada
            </a>
          </div>
        </div>
      </div>
      <div class="flex text-lg pt-4 mt-4 mb-6 justify-center">
        <a
          href="https://netdevv.com"
          target="_blank"
          class="text-white hover:text-gray-300 underline cursor-pointer">
          ©2019 Netdevv Co.
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import NewsLetter from "../components/NewsLetter";

export default {
  components: {
    NewsLetter
  },
  data() {
    return {
      pages: [
        {
          label: "Navigation",
          links: [
            {
              link_label: "Documentation",
              link: "/docs",
              router_link: false
            },
            {
              link_label: "Pricing",
              link: "/pricing",
              router_link: true
            },
            {
              link_label: "FAQs",
              link: "/faqs",
              router_link: true
            },
            {
              link_label: "Login",
              link: "/login",
              router_link: true
            },
            {
              link_label: "Register",
              link: "/register",
              router_link: true
            }
          ]
        },
        {
          label: "Information",
          links: [
            {
              link_label: "Terms of service",
              link: "/terms",
              router_link: true
            },
            {
              link_label: "Privacy Policy",
              link: "/policy",
              router_link: true
            },
            {
              link_label: "Cookie Policy",
              link: "/cpolicy",
              router_link: true
            },
            {
              link_label: "Licence",
              link: "/licence",
              router_link: true
            },
            {
              link_label: "Contact",
              link: "/contact",
              router_link: true
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>
