<template>
  <div class="flex flex-wrap">
    <div
      :class="`w-full ${type === 'edit' ? 'lg:w-12/12' : 'lg:w-12/12'} px-4`"
    >
      <cards-card-settings
        pageType="barangData"
        pageData="barang-by-suppliers"
        link="barang"
        :title="`${detail.photo !== null ? 'Edit' : 'Upload'} Foto Barang`"
        methodType="upload"
        types="barang-by-suppliers"
        :type="type"
        :detail="detail"
        :slug="slug"
        :current="current"
        :parentRoute="parentRoute"
        :typeRoute="typeRoute"
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
  name: "barang-data-foto",
  layout: "admin",

  data() {
    return {
      slug: this.$route.params.id,
      loadingDetail: null,
      successNew: null,
      messageNew: "",
      detail: {},
      type: this.$route.query["type"],
      current: this.$route.query["current"],
      routePath: this.$route.path,
      parentRoute: null,
      typeRoute: null,
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
    this.detailBarang(
      this.formData !== null ? this.formData.data[0] : this.slug
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

    detailBarang(slug = "") {
      try {
        if (this.$_.isObject(this.token)) {
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
              this.detail = data?.data;
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
          this.detailBarang(this.formData ? this.formData.data[0] : "");
        }
      }
    },
  },
};
</script>
