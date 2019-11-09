<template>
  <div>
    <footer class="font-sans bg-primary text-white py-4 md:py-8 px-2 md:px-4">
      <div class="mx-auto container overflow-hidden flex flex-col md:flex-row content-center">
        <div
          class="w-full md:w-1/4 flex text-sm lg:text-base p-2 md:p-5 mt-2 md:mt-6 mr-4 md:mt-0 justify-center md:justify-end items-start"
        >
          <a href="/" class="block text-center">
            <img
              src="~/assets/images/logo/ico1-inv-anim.svg"
              class="w-12 md:w-16"
              style="min-width:30px;"
              alt="logo"
            />
          </a>
        </div>
        <div class="w-full md:w-3/4 flex text-sm lg:text-sm mt-6 md:mt-0 justify-center">
          <ul
            v-for="(page, index) in pages"
            :key="index"
            class="list-reset font-thin w-full md:w-1/3 flex flex-wrap flex-col text-left px-2 md:px-6 content-center"
          >
            <p
              class="inline-block py-2 px-1 md:px-6 uppercase no-underline font-medium tracking-wide"
            >{{page.label}}</p>
            <li v-for="(links, index2) in page.links" :key="index2">
              <router-link
                tag="a"
                :to="links.link"
                v-if="links.router_link"
                class="text-gray-100 hover:text-gray-500 inline-block py-2 px-1 md:px-6 no-underline"
              >{{links.link_label}}</router-link>
              <a
                :href="links.link"
                v-else
                class="text-gray-100 hover:text-gray-500 inline-block py-2 px-1 md:px-6 no-underline"
              >{{links.link_label}}</a>
            </li>
          </ul>
          <div class="w-full md:w-1/3 flex flex-wrap flex-col justify-start px-1 md:px-6 content-center">
            <div
              class="inline-block pt-2 pb-3 px-1 md:px-6 mx-auto uppercase font-medium tracking-wide"
            >Get Help</div>
            <div class="flex justify-start text-center content-between justify-between">
              <a
                v-for="(social, index) in socials"
                :key="index"
                class="block flex items-center mx-3 no-underline text-white hover:text-gray-400"
                :href="social.href"
                :target="social.target_blank ? 'blank' : 'self'"
              >
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-lg pt-4 mt-4 text-center">
        <a href="https://netdevv.com" class="hover:text-gray-300">©2019 Netdevv Co.</a>
        <!-- <br />
        <router-link
          tag="a"
          to="/terms"
          class="text-gray-300 hover:text-blue-200 no-underline hover:underline"
        >Terms of service</router-link> -->
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
        }
      ]
    };
  }
};
</script>

<style>
</style>
