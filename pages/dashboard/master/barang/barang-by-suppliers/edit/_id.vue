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
        pageType="barangData"
        link="barang"
        title="Edit Barang"
        types="barang-by-suppliers"
        queryType="DATA_BARANG"
        queryMiddle="barang-by-suppliers"
        pageData="barang-by-suppliers"
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
  name: "barang-data-edit",
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
      type: this.$route.query["type"],
      options: this.globalOptions,
    };
  },

  beforeMount() {
    this.authTokenStorage();
    this.storedFormData();
  },

  created() {
    this.checkNewData();
  },

  mounted() {
    this.$nuxt.checkRolesAccess();
    this.detailBarang(
      this.formData !== null ? this.formData.data[0] : this.slug,
      true
    );
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

    storedFormData() {
      this.$store.dispatch("success/storedFormData", "success-form");
    },

    detailBarang(slug = "", loading) {
      try {
        if (this.$_.isObject(this.token)) {
          this.loading = loading;
          this.$nuxt.globalLoadingMessage = "Proses menyiapkan data barang ...";

          const endPoint = `${this.api_url}/data-barang/${slug}`;
          const config = {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this?.token?.token}`,
              "Content-Type": "application/json",
              "Sirmuh-Key": process.env.NUXT_ENV_APP_TOKEN,
            },
          };
          this.$api
            .get(endPoint, config)
            .then(({ data }) => {
              if (data.success) {
                this.detail = data?.data;
              }
            })
            .finally(() => {
              setTimeout(() => {
                this.loading = false;
              }, 1500);
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
    formData() {
      return this.$store.getters["success/formData"];
    },
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },

  watch: {
    notifs() {
      if (this.notifs && this.$_.size(this.notifs) > 0) {
        if (this.$nuxt.notifs[0].routes === "data-barang") {
          this.storedFormData();
          this.detailBarang(null, false);
        }
      }
    },
  },
};
</script>
