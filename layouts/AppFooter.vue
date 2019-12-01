<template>
  <div>
    <footer class="font-sans bg-primary-500 text-white py-4 md:py-8 px-2 md:px-4">
      <div class="mx-auto container overflow-hidden flex flex-col md:flex-row content-center">
        <div
          class="w-full md:w-1/4 flex text-sm lg:text-base p-2 md:p-5 mt-2 md:mt-6 mr-4 md:mt-0 justify-center md:justify-end items-start"
        >
          <router-link tag="a" to="/">
            <img
              src="~/assets/images/logo/ico1-inv-anim.svg"
              class="w-12 md:w-16"
              style="min-width:30px;"
              alt="logo"
            />
          </router-link>
        </div>
        <div class="w-full md:w-3/4 flex text-sm lg:text-sm mt-6 md:mt-0 justify-center">
          <ul
            v-for="(page, index) in pages"
            :key="index"
            class="leading-none list-reset font-hairline w-full md:w-1/3 flex flex-wrap flex-col text-left px-2 md:px-6 content-center"
          >
            <p class="py-2 px-1 md:px-6 uppercase no-underline text-sm md:text-base font-bold tracking-wide text-white">{{page.label}}</p>
            <li v-for="(links, index2) in page.links" :key="index2" class="flex">
              <router-link
                tag="a"
                :to="links.link"
                v-if="links.router_link"
                class="text-gray-400 hover:text-white font-medium py-2 mt-1 px-1 md:px-6"
              >{{links.link_label}}</router-link>
              <a
                :href="links.link"
                v-else
                class="text-gray-400 hover:text-white font-medium py-2 mt-1 px-1 md:px-6"
              >{{links.link_label}}</a>
            </li>
          </ul>
          <div class="leading-none list-reset font-thin w-full md:w-1/3 flex flex-wrap flex-col justify-start px-1 md:px-6 content-center">
            <p class="py-2 px-1 md:px-6 uppercase no-underline text-sm md:text-base font-bold tracking-wide text-white text-center">Get Help</p>
            <div class="flex flex-wrap justify-start text-center content-between justify-between">
              <a
                v-for="(social, index) in socials"
                :key="index"
                class="flex items-center w-full md:w-auto justify-center m-2 md:m-3 no-underline text-white hover:text-gray-400"
                :href="social.href"
                :target="social.target_blank ? 'blank' : 'self'"
              >
                <i :class="social.icon"></i>
              </a>
            </div>
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
export default {
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
      ],
      socials: [
        {
          link_label: "Github",
          href: "https://github.com/smitpatelx",
          traget_blank: true,
          icon: "fab fa-github fa-2x"
        },
        {
          link_label: "Discord",
          href: "https://discord.gg/nFTec5q",
          traget_blank: true,
          icon: "fab fa-discord fa-2x"
        },
        {
          link_label: "Twitter",
          href: "https://twitter.com/netdevv1",
          traget_blank: true,
          icon: "fab fa-twitter fa-2x"
        },
        {
          link_label: "Instagram",
          href: "https://www.instagram.com/netdevv/",
          traget_blank: true,
          icon: "fab fa-instagram fa-2x"
        }
      ]
    };
  }
};
</script>

<style>
</style>
