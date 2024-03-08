<template>
  <div>
    <a
      class="text-blueGray-500 block"
      href="!#"
      @click="toggleDropdown"
      ref="btnDropdownRef"
    >
      <div v-if="image === null" class="relative flex items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
        <span
          class="w-12 h-12 text-sm text-white bg-blueGray-200 border-0 border-none inline-flex items-center justify-center rounded-full"
        >
          <img
            alt="..."
            class="w-full rounded-full align-middle border-none shadow-lg"
            :src="require('~/assets/img/default.jpg')"
          />
        </span>
      </div>
      <div v-else class="items-center flex">
        <span class="w-12 h-12 text-sm text-white bg-blueGray-200 border-0 border-none inline-flex items-center justify-center rounded-full">
          <div v-if="image === null">
            <div role="status">
              <svg aria-hidden="true" class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
              <span class="sr-only">Loading...</span>
            </div>
            Preparing your file
          </div>
          <img v-else
            alt="..."
            class="w-full rounded-full align-middle border-none shadow-lg"
            :src="image"
          />
        </span>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <a
        @click="redirectRolesPage(roles)"
        class="capitalize text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:underline hover:text-blue-700 hover:decoration-double"
      >
        {{ name }}
      </a>

      <p
        class="text-sm py-2 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-blueGray-700 cursor-pointer hover:underline hover:text-blue-700 hover:decoration-double"
      >
        {{ userData.email }}
      </p>
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <a
        href="javascript:void(0)"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-gray-600 hover:text-white"
        @click="redirectSettingsPage(userData.id)"
      >
        Setting
      </a>

      <a
        @click="$nuxt.logout(), (dropdownPopoverShow = false)"
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-gray-600 hover:text-white"
      >
        Logout
      </a>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
import image from "@/assets/img/default.jpg";

export default {
  data() {
    return {
      notifs: [],
      updateProfileNotifs: [],
      loadingData: null,
      api_url: process.env.NUXT_ENV_API_URL,
      dropdownPopoverShow: false,
      image: image,
      roles: "",
      name: "",
      userData: [],
      path: this.$route.path,
      image_url: process.env.NUXT_ENV_ASSET_PUBLIC_URL,
      photo: "",
      messageNotif: "",
    };
  },

  created() {
    this.checkNewData();
    this.checkUpdateEvent();
    this.checkIsLogin();
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.$nextTick(() => {
      createPopper(
        this.$refs && this?.$refs?.btnDropdownRef,
        this.$refs && this?.$refs?.popoverDropdownRef,
        {
          placement: "bottom-start",
        }
        );
      document.addEventListener("click", this?.hideDropdown && this?.hideDropdown);
    });
  },

  methods: {
    authTokenStorage() {
      this.$store.dispatch("auth/storeAuthToken", "auth");
    },

    toggleDropdown(event) {
      event.preventDefault();
      // Menambahkan pengamanan
      if (this.$refs && this?.$refs?.btnDropdownRef && this?.$refs?.popoverDropdownRef) {
        this.dropdownPopoverShow = !this.dropdownPopoverShow;

        if (this.dropdownPopoverShow) {
          createPopper(
            this?.$refs?.btnDropdownRef,
            this?.$refs?.popoverDropdownRef,
            {
              placement: "bottom-start",
            }
          );
          document.addEventListener("click", this?.hideDropdown);
        } else {
          document.removeEventListener("click", this?.hideDropdown);
        }
      }
    },

    hideDropdown(event) {
      const targetElement = event.target;

      if (
        !this.$refs?.btnDropdownRef.contains(targetElement) &&
        !this.$refs?.popoverDropdownRef.contains(targetElement)
      ) {
        this.dropdownPopoverShow = false;

        document.removeEventListener("click", this?.hideDropdown);
      }
    },

    redirectSettingsPage(id) {
      this.$router.push(`/dashboard/settings/profile/${id}`);
      this.dropdownPopoverShow = false;
    },

    redirectRolesPage(role) {
      this.$router.push(`/dashboard/${role}`)
    },

    checkNewData() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "EventNotification",
        (e) => {
          this.messageNotif = e[0].notif;
          this.notifs.push(e[0]);
        }
      );
    },

    checkUpdateEvent() {
      window.Echo.channel(process.env.NUXT_ENV_PUSHER_CHANNEL).listen(
        "UpdateProfileEvent",
        (e) => {
          this.updateProfileNotifs.push(e[0]);
        }
      );
    },

    checkIsLogin() {
      if (_.isObject(this.token)) {
        this.loadingData = true;
        const endPoint = `${this.api_url}/user-data`;
        const config = {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this?.token?.token}`,
          },
        };
        this.$api.defaults.headers.common["Sirmuh-Key"] =
          process.env.NUXT_ENV_APP_TOKEN;
        this.$api
          .get(endPoint, config)
          .then(({ data }) => {
            if (data.data.logins[0].user_token_login === this.token.token) {
              this.userData = data?.data;
              setTimeout(() => {
                this.loadingData = false;
                this.userDataCheck(data.data);
              }, 500);
              this.userToken = data.data.logins.map((d) => d.user_token_login);
              this.image = this.image_url + "/" + data.data.photo;
              this.userData = { ...data.data };
            } else {
              this.$router.replace("/");
            }
          })
          .catch((err) => {
            console.log(err);
            if (err.error) {
              // this.$router.replace("/auth/login")
              this.sesiLogout(this.roles ? this.roles : "");
            }
          });
      }
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

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.notifs) > 0) {
        if (this.$route.path === "/") {
          setTimeout(() => {
            location.reload();
          }, 1000);
        }

        this.checkIsLogin();
      }
    },
    updateProfileNotifs() {
      if (this.$_.size(this.updateProfileNotifs) > 0) {
        this.checkIsLogin();
      }
    },
  },
};
</script>
