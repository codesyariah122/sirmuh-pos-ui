<template>
  <div>
    <!-- <div v-if="loadingData">
      <molecules-row-loading :loading="loadingData" :options="options" />
    </div> -->
    <div v-if="user.karyawans">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12 px-4">
          <settings-profile-card-settings
            @refetch-data="prepareProfileData"
            :user="user"
          />
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <settings-profile-card-profile
            :user="user"
            :profiles="profiles"
            :roles="roles"
            :image="image"
            @refetch-data="prepareProfileData"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @param {string}
 * @returns {string}
 * @author Puji Ermanto <puji.ermanto@gmail.com>
 */
import { getData } from "~/hooks/index";

export default {
  name: "settings-profile",
  layout: "admin",

  data() {
    return {
      id: this.$route.params.id,
      user: {},
      profiles: {},
      roles: {},
      image: "",
      img_url: process.env.NUXT_ENV_ASSET_PUBLIC_URL,
      options: "user-setting",
      loadingData: null,
    };
  },

  created() {
    this.prepareProfileData();
  },

  mounted() {
    console.log(this.id);
  },

  methods: {
    prepareProfileData(loading) {
      try {
        if (this.token !== null) {
          this.loadingData = loading ? loading : true;
          const endPoint = `/user-data`;
          const config = {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token.token}`,
            },
          };
          this.$api
            .get(endPoint, config)
            .then(({ data }) => {
              if (data.success) {
                this.image = this.img_url + "/" + data.data.photo;
                this.user = { ...data.data };
                this.roles = { ...data.data.roles[0] };
              } else {
                this.$router.replace("/");
              }
            })
            .finally(() => {
              setTimeout(() => {
                this.loadingData = false;
              }, 1500);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } catch (err) {
        console.error(err);
      }
    },
  },

  watch: {
    notifs() {
      if (this.$nuxt.notifs[0].routes === "profile") {
        this.prepareProfileData(false);
      }
    },
  },
};
</script>
