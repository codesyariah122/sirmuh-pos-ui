<template>
  <div class="flex flex-wrap">
    <div v-if="loading">
      <molecules-row-loading :loading="loading" :options="options" />
    </div>
    <div v-else
      :class="`w-full ${type === 'edit' ? 'lg:w-12/12' : 'lg:w-12/12'} px-4`"
    >
      <cards-card-settings
        pageType="kasData"
        link="kas"
        title="Edit Data Kas"
        types="data-kas"
        queryType="DATA_KAS"
        queryMiddle="kas"
        pageData="kas"
        methodType="edit"
        :parentRoute="parentRoute"
        :typeRoute="typeRoute"
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
      slug: this.$route.params.id,
      current: this.$route.query["current"],
      routePath: this.$route.path,
      parentRoute: null,
      typeRoute: null,
      loadingDetail: null,
      successNew: null,
      messageNew: "",
      detail: {},
      type: this.$route.query["type"],
      loading: null,
      options: "data-kas-edit"
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
    this.detailKas(
      this.formData !== null ? this.formData.data[0] : this.slug,
      {},
      true
    );
    this.generatePath();
  },

  methods: {
    generatePath() {
      const pathSegments = this.routePath.split("/");
      const parentRoute = pathSegments[2];
      const typeRoute = pathSegments[3];
      this.parentRoute = parentRoute;
      this.typeRoute = typeRoute;
    },

    storedFormData() {
      this.$store.dispatch("success/storedFormData", "success-form");
    },

    detailKas(slug = "", param, loading) {
      try {
        if (this.$_.isObject(this.token)) {
          this.loading = loading;
          this.$nuxt.globalLoadingMessage = "Proses menyiapkan data kas ...";
          const endPoint = `${this.api_url}/data-kas/${slug}`;
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
                this.detail = data?.data[0];
              }
            })
            .finally(() => {
              this.loading = false;
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
        if (this.$nuxt.notifs[0].routes === "kas") {
          this.storedFormData();
          this.detailKas(this.formData ? this.formData.data[0] : "");
        }
      }
    },
  },
};
</script>
