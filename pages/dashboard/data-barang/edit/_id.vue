<template>
  <div class="flex flex-wrap">
    <div
      v-if="successNew"
      :class="`w-full ${type === 'edit' ? 'lg:w-12/12' : 'lg:w-8/12'} px-4`"
    >
      <cards-card-profile
        pageType="barangData"
        link="barang"
        title="Edit Barang"
        methodType="edit"
        :successNew="successNew"
        :messageNew="messageNew"
        :item="detail"
      />
    </div>

    <div
      v-else
      :class="`w-full ${type === 'edit' ? 'lg:w-12/12' : 'lg:w-8/12'} px-4`"
    >
      <cards-card-settings
        pageType="barangData"
        link="barang"
        title="Edit Barang"
        types="data-barang"
        queryType="DATA_BARANG"
        queryMiddle="data-barang"
        pageData="data-barang"
        methodType="edit"
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
      loadingDetail: null,
      successNew: null,
      messageNew: "",
      detail: {},
      type: this.$route.query["type"],
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
  },

  methods: {
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
        this.storedFormData();
        this.detailBarang(this.formData ? this.formData.data[0] : "");
      }
    },
  },
};
</script>
