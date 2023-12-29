<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>

<template>
  <nav
    class="md:left-0 text-blueGray-600 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer md:hidden px-3 py-1 text-xl leading-none rounded border border-solid border-transparent"
        type="button"
        v-on:click="
          toggleCollapseShow('bg-gray-900 text-gray-200 m-2 py-3 px-6', false)
        "
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <router-link
        class="md:block hidden text-left md:pb-2 mb-4 mr-0 lg:inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
        :to="`/dashboard/${roles}`"
      >
        <img
          :src="require('~/assets/img/new-logo.png')"
          style="max-width: 200px"
        />
      </router-link>

      <!-- User -->
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <notification-dropdown />
        </li>
        <li class="inline-block relative">
          <user-dropdown />
        </li>
      </ul>
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-screen items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12 lg:block hidden">
              <router-link
                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                :to="`/dashboard/${roles}`"
              >
                <img
                  :src="require('~/assets/img/new-logo.png')"
                  style="max-width: 150px"
                />
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-gray-200 opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden', true)"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="border-0 px-3 py-2 h-12 border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            />
          </div>
        </form>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />

        <div v-for="menu in menus" :key="menu.id">
          <!-- Heading -->
          <h6
            class="md:min-w-full text-blueGray-600 text-sm uppercase font-bold block pt-1 pb-4 no-underline"
          >
            {{ menu.menu }}
          </h6>
          <!-- Navigation -->

          <ul class="md:flex-col md:min-w-full flex flex-col list-none">
            <li
              v-for="sub in menu.sub_menus"
              :key="sub.id"
              class="items-center"
            >
              <div v-if="$_.isArray(menu?.sub_menus)">
                <a
                  v-if="$_.size(menu?.sub_menus) > 0"
                  disabled
                  class="text-sm text-black uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-emerald-600 hover:text-blueGray-600'
                      : 'text-blueGray-600 hover:text-blueGray-500',
                  ]"
                >
                  <i :class="`fa-solid fa-${sub.icon} mr-2 text-sm`"></i>
                  {{ sub.menu }}
                </a>

                <router-link
                  v-else
                  :to="`/dashboard/${sub.link}`"
                  v-slot="{ href, navigate, isActive }"
                >
                  <a
                    disabled
                    :href="href"
                    @click="navigate"
                    class="text-xs uppercase py-3 font-bold block"
                    :class="[
                      isActive
                        ? 'text-emerald-600 hover:text-blueGray-600'
                        : 'text-blueGray-600 hover:text-blueGray-500',
                    ]"
                  >
                    <i :class="`fa-solid fa-${sub.icon} mr-2 text-sm`"></i>
                    {{ sub.menu }}
                  </a>
                </router-link>

                <div v-if="sub.child_sub_menus">
                  <ul
                    class="md:flex-col md:min-w-full flex flex-col list-none px-8"
                  >
                    <li
                      v-for="child in sub.child_sub_menus"
                      :key="child.id"
                      class="items-center text-[10px]"
                    >
                      <router-link
                        :to="`/dashboard/${child.link}`"
                        v-slot="{ href, navigate, isActive }"
                      >
                        <a
                          :href="href"
                          @click="navigate"
                          class="uppercase py-3 font-bold block"
                          :class="[
                            isActive
                              ? 'text-emerald-600 hover:text-blueGray-600'
                              : 'text-blueGray-600 hover:text-blueGray-500',
                          ]"
                        >
                          {{ child.menu }}
                        </a>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>

              <div v-else>
                <a
                  disabled
                  class="text-sm text-black uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-emerald-600 hover:text-blueGray-600'
                      : 'text-blueGray-600 hover:text-blueGray-500',
                  ]"
                >
                  <i :class="`fa-solid fa-${sub.icon} mr-2 text-sm`"></i>
                  {{ sub.menu }}
                </a>
              </div>
            </li>
          </ul>
          <!-- Divider -->
          <hr class="my-4 md:min-w-full" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
  data() {
    return {
      collapseShow: "hidden",
      userData: [],
      notifType: "",
      loadingData: null,
      loadingMenu: null,
      api_url: process.env.NUXT_ENV_API_URL,
      image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      roles: "",
      name: "",
      path: this.$route.path,
      image_url: process.env.NUXT_ENV_ASSET_PUBLIC_URL,
      photo: "",
      messageNotif: "",
      menuSubMenuNotifs: [],
    };
  },

  components: {
    NotificationDropdown,
    UserDropdown,
  },

  beforeMount() {
    this.authTokenStorage();
  },

  created() {
    this.getMenuFromStorage();
  },

  mounted() {
    this.checkIsLogin();
  },

  methods: {
    getMenuFromStorage() {
      this.$store.dispatch("menu/storeGetUserMenu", "menus");
    },

    toggleCollapseShow: function (classes, binding) {
      console.log(binding);
      this.collapseShow = classes;
      !binding
        ? document.querySelector(".countdown-login").classList.add("hidden")
        : document.querySelector(".countdown-login").classList.remove("hidden");
    },

    authTokenStorage() {
      this.$store.dispatch("auth/storeAuthToken", "auth");
    },

    checkIsLogin() {
      if (this.token.token) {
        this.loadingData = true;
        const endPoint = `/user-data`;
        const config = {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this?.token?.token}`,
            "Sirmuh-Key": process.env.NUXT_ENV_APP_TOKEN,
          },
        };
        this.$api.defaults.headers.common["Sirmuh-Key"] =
          process.env.NUXT_ENV_APP_TOKEN;
        this.$api
          .get(endPoint, config)
          .then(({ data }) => {
            this.saveNewMenus(data?.menus);
            if (data.data.logins[0].user_token_login === this.token.token) {
              setTimeout(() => {
                this.loadingData = false;
                this.userDataCheck(data.data);
              }, 500);
              this.image =
                this.image_url +
                data.data.profiles.map((user) => user.photo)[0];
              this.userData = { ...data.data };
            } else {
              this.$router.replace("/");
            }
          })
          .finally(() => {
            this.getMenuFromStorage();
          })
          .catch((err) => {
            if (err.error) {
              this.sesiLogout(this.roles ? this.roles : "");
            }
          });
      }
    },

    saveNewMenus(menus) {
      this.$store.dispatch("menu/storeUserMenu", menus);
    },

    userDataCheck(userData) {
      this.roles = this.getRoles(userData.roles[0].name);
      this.name = userData.name;
    },

    getRoles(data) {
      const roles = data.toLowerCase();
      return roles;
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.notifs) > 0) {
        this.checkIsLogin();
      }
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
    menus() {
      return this.$store.getters["menu/getUserMenus"];
    },
  },
};
</script>
