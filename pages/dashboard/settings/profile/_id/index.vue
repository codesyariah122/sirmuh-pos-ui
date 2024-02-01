<template>
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
    };
  },

  created() {
    this.prepareProfileData();
  },

  mounted() {
    console.log(this.id);
  },

  methods: {
    prepareProfileData() {
      try {
        if (this.token !== null) {
          this.loadingData = true;
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
              console.log(data.data);
              if (data.success) {
                this.image = this.img_url + "/" + data.data.photo;
                this.user = { ...data.data };
                this.roles = { ...data.data.roles[0] };
              } else {
                this.$router.replace("/");
              }
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
};
</script>
