<template>
  <div class="flex flex-wrap">
    <pre>
        {{ "test" }}
      </pre
    >
  </div>
</template>

<script>
/**
 * @param {string}
 * @returns {string}
 * @author Puji Ermanto <puji.ermanto@gmail.com>
 */

export default {
  name: "data-role-management-edit",
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
    this.detailRoleUser(
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

    detailRoleUser(slug = "") {
      try {
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
        if (this.$nuxt.notifs[0].routes === "data-role-management") {
          this.storedFormData();
          this.detailRoleUser(this.formData ? this.formData.data[0] : "");
        }
      }
    },
  },
};
</script>
