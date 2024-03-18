<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <router-link
        class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 text-emerald-600 hover:bg-blueGray-800 hover:rounded-md hover:text-emerald-600"
        to="/"
      >
        <i class="fa-solid fa-door-open fa-2xl"></i> Halaman Awal
      </router-link>
      <div class="flex justify-start">
        <div>
          <router-link
            class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            :to="`/dashboard/${roles}`"
          >
            <img v-if="companies.logo"
              :src="`${storage_url}/tokos/${companies && companies?.logo}`"
              style="max-width: 150px"
            />
          </router-link>
        </div>
      </div>

      <div v-if="!$nuxt.isMobile" class="flex justify-start">
        <div>
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
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                to="/"
              >
                {{companies.name}}
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
       
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
); }

<script>
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
  data() {
    return {
      collapseShow: "hidden",
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
      sidebarWidth: this.$nuxt.isChrome ? "19vw" : "18.5vw",
    };
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
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
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
  components: {
    NotificationDropdown,
    UserDropdown,
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
