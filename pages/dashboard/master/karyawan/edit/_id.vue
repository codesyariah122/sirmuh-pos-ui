<template>
  <div class="flex flex-wrap">
    <div v-if="loading">
      <molecules-row-loading :loading="loading" :options="options" />
    </div>

    <div
      v-else
      :class="`w-full ${type === 'edit' ? 'lg:w-12/12' : 'lg:w-12/12'} px-4`"
    >
      <cards-card-settings
        pageType="karyawanData"
        link="karyawan"
        title="Edit Karyawan"
        types="karyawan"
        queryType="DATA_KARYAWAN"
        queryMiddle="karyawan"
        pageData="karyawan"
        methodType="edit"
        parentRoute="master"
        :typeRoute="typeRoute"
        :selectedRoute="selectedRoute"
        :type="type"
        :detail="detail"
        :slug="slug"
        :current="current"
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

export default {
  name: "karyawan-data-edit",
  layout: "admin",

  data() {
    return {
      loading: null,
      slug: this.$route.params.id,
      current: this.$route.query["current"],
      routePath: this.$route.path,
      typeRoute: null,
      selectedRoute: null,
      loadingDetail: null,
      successNew: null,
      messageNew: "",
      detail: {},
      users: [],
      type: this.$route.query["type"],
      options: this.globalOptions,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  created() {
    this.checkNewData();
  },

  mounted() {
    if (this.slug) {
      this.detailKaryawan(this.slug);
    }
    this.generatePath();
  },

  methods: {
    generatePath() {
      const pathSegments = this.routePath.split("/");
      const stringRoute = pathSegments[2];
      const typeRoute = pathSegments[3];
      const selectedRoute = pathSegments[4];
      this.stringRoute = stringRoute;
      this.typeRoute = typeRoute;
      this.selectedRoute = selectedRoute;
    },

    detailKaryawan(slug = "") {
      try {
        if (this.$_.isObject(this.token)) {
          this.loading = true;
          this.$nuxt.globalLoadingMessage =
            "Proses menyiapkan data karyawan ...";

          const endPoint = `${this.api_url}/data-karyawan/${slug}`;
          const config = {
            headers: {
              Authorization: `Bearer ${this?.token?.token}`,
              "Sirmuh-Key": process.env.NUXT_ENV_APP_TOKEN,
            },
          };
          this.$api
            .get(endPoint, config)
            .then(({ data }) => {
              if (data.success) {
                this.detail = data?.data;
                this.users = data?.data?.users;
              }
            })
            .finally(() => {
              setTimeout(() => {
                this.loading = false;
              }, 2500);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Error Access!",
          });
          this.$router.replace("/");
        }
      } catch (err) {
        console.error(err);
      }
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },

  watch: {
    notifs() {
      if (this.notifs && this.$_.size(this.notifs) > 0) {
        if (
          this.$nuxt.notifs[0].routes === "karyawan" ||
          this.$nuxt.notifs[0].routes === "profile"
        ) {
          this.detailKaryawan(this.slug);
        }
      }
    },
  },
};
</script>
