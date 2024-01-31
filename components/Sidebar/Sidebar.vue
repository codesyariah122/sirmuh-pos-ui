<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>

<template>
  <nav
    class="md:left-0 text-blueGray-600 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative z-10 py-4 px-6"
    :style="{ width: sidebarWidth }"
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
      <div class="flex justify-start">
        <div>
          <router-link
            class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            :to="`/dashboard/${roles}`"
          >
            <img
              :src="`${storage_url}/tokos/${companies.logo}`"
              style="max-width: 150px"
            />
          </router-link>
        </div>
      </div>

      <div class="flex justify-start">
        <div>
          <h4 class="font-bold">
            {{ companies.name }}
          </h4>
          <blockquote class="text-left font-semibold text-xs capitalize">
            {{ companies.about }}
          </blockquote>
          <address class="text-sm mt-2">
            {{ companies.address }}
          </address>
        </div>
      </div>

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
            <div v-if="loadingData" class="w-6/12 lg:block hidden">
              <div class="text-center">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
            <div v-else class="w-6/12 lg:block hidden">
              <div class="flex justify-start">
                <div>
                  <router-link
                    class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    :to="`/dashboard/${roles}`"
                  >
                    <img
                      :src="`${storage_url}/tokos/${companies.logo}`"
                      style="max-width: 150px"
                    />
                  </router-link>
                </div>
              </div>

              <div class="flex justify-center">
                <div>
                  <h4 class="font-bold">
                    {{ companies.name }}
                  </h4>
                  <blockquote class="text-left">
                    {{ companies.about }}
                  </blockquote>
                  <address>
                    {{ companies.address }}
                  </address>
                </div>
              </div>
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
            class="md:min-w-full text-blueGray-600 text-sm uppercase font-bold block pt-2 pb-4 no-underline"
          >
            {{ menu.menu }}
          </h6>
          <!-- Navigation -->
          <ul class="md:flex-col md:min-w-full flex flex-col list-none">
            <li
              v-for="sub in menu.sub_menus"
              :key="sub.id"
              class="relative items-center cursor-pointer"
            >
              <div v-if="$_.isArray(menu?.sub_menus)">
                <div v-if="$_.size(menu?.sub_menus) > 0">
                  <!-- Parent menu with dropdown -->
                  <div class="group relative">
                    <a
                      v-if="
                        $_.size(menu?.sub_menus) > 0 &&
                        $_.size(sub.child_sub_menus) > 0
                      "
                      @click="toggleDropdown(sub.id)"
                      :class="{
                        'text-blueGray-700': isOpen(sub.id),
                        'hover:text-blueGray-600': !isOpen(sub.id),
                      }"
                      disabled
                      class="text-sm text-black uppercase py-3 font-bold block group flex items-center relative"
                      :style="{
                        'margin-bottom': `${
                          isOpen(sub.id)
                            ? calculateDropdownTop($_.size(sub.child_sub_menus))
                            : 0
                        }px`,
                      }"
                    >
                      <i :class="`fa-solid fa-${sub.icon} mr-2 text-sm`"></i>
                      {{ sub.menu }}
                      <i
                        v-if="$_.size(sub.child_sub_menus) > 0"
                        :class="
                          isOpen(sub.id)
                            ? 'fas fa-chevron-down ml-auto'
                            : 'fas fa-chevron-right ml-auto'
                        "
                      ></i>
                    </a>

                    <router-link
                      v-else
                      :to="`/dashboard/${menu.menu
                        .replace(/\s/g, '')
                        .trim()
                        .toLowerCase()}/${sub.link}`"
                      v-slot="{ href, navigate, isActive }"
                    >
                      <a
                        :href="href"
                        @click="navigate"
                        class="text-sm text-black uppercase py-3 font-bold block group flex items-center relative"
                        :class="[
                          isActive
                            ? 'text-emerald-600 hover:text-blueGray-600'
                            : 'text-black uppercase font-bold hover:text-emerald-600',
                        ]"
                      >
                        <i :class="`fa-solid fa-${sub.icon} mr-2 text-sm`"></i>
                        {{ sub.menu }}
                      </a>
                    </router-link>

                    <!-- Dropdown content -->
                    <div
                      v-if="isOpen(sub.id)"
                      class="absolute top-full left-3 space-y-2 z-10 w-60"
                    >
                      <!-- Child menus -->
                      <div class="flex flex-col">
                        <router-link
                          v-for="child in sub.child_sub_menus"
                          :key="child.id"
                          :to="`/dashboard/${menu.menu.toLowerCase()}/${
                            sub.link
                          }/${child.link}`"
                          v-slot="{ href, navigate, isActive }"
                        >
                          <a
                            :href="href"
                            @click="navigate"
                            class="block text-xs uppercase py-3 font-bold"
                            :class="[
                              isActive
                                ? 'text-emerald-600 hover:text-blueGray-600'
                                : 'text-blueGray-600 hover:text-blueGray-500',
                            ]"
                          >
                            <div class="flex justify-start space-x-4">
                              <div>
                                <i
                                  :class="`${
                                    isActive
                                      ? 'fa-solid fa-circle'
                                      : 'fa-regular fa-circle'
                                  }`"
                                ></i>
                              </div>
                              <div>{{ child.menu }}</div>
                            </div>
                          </a>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <!-- Divider -->
          <hr class="my-4 md:min-w-full" />
        </div>

        <!-- Copyright -->
        <molecules-dksindo-copy />
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
      collapseShow: this.$nuxt.globalCollapseShow,
      activeSubmenu: null,
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
      storage_url: process.env.NUXT_ENV_STORAGE_URL,
      photo: "",
      messageNotif: "",
      menuSubMenuNotifs: [],
      companies: [],
      openMenus: [],
      routePath: this.$route.path.split("/dashboard/")[1],
      isMenuActiveOpen: false,
      sidebarWidth: this.$nuxt.isChrome ? "20vw" : "18vw",
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
    this.getDataPerusahaan();
  },

  methods: {
    toggleSidebarWidth() {
      this.sidebarWidth = this.sidebarWidth === "17vw" ? "25vw" : "17vw";
    },

    getMenuFromStorage() {
      this.$store.dispatch("menu/storeGetUserMenu", "menus");
    },

    toggleDropdown(menuId) {
      const index = this.openMenus.indexOf(menuId);

      this.activeSubmenu = this.activeSubmenu === menuId ? null : menuId;
      if (index === -1) {
        this.openMenus.push(menuId);
      } else {
        this.openMenus.splice(index, 1);
      }
    },

    isOpen(menuId) {
      return this.openMenus.includes(menuId);
    },

    calculateDropdownTop(size) {
      const parentMenuHeight = 40 * size;
      return parentMenuHeight;
    },
    calculateChildTop(index) {
      const childHeight = 30;
      return index * childHeight;
    },
    calculateDropdownHeight(childSubMenus) {
      return childSubMenus ? childSubMenus.length * 40 + 20 : 0;
    },

    toggleCollapseShow: function (classes, binding) {
      this.collapseShow = classes;
      !binding
        ? document.querySelector(".countdown-login").classList.add("hidden")
        : document.querySelector(".countdown-login").classList.remove("hidden");
    },

    authTokenStorage() {
      this.$store.dispatch("auth/storeAuthToken", "auth");
    },

    getDataPerusahaan() {
      this.loadingData = true;
      const endPoint = `/data-perusahaan`;
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
          this.companies = data?.data[0];
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingData = false;
          }, 1500);
        })
        .catch((err) => {
          if (err.error) {
            this.sesiLogout(this.roles ? this.roles : "");
          }
        });
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
