<template>
  <div>
    <div class="flex flex-wrap pt-6">
      <div class="w-full">
        <cards-card-detail-master
          :detail="item"
          :headers="headers"
          :loading="loadingDetail"
          type="data-role-management"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { DETAIL_ROLE_TABLE } from "~/utils/table-detail-role";
import { getData } from "~/hooks/index";

export default {
  name: "detail-role-user",
  layout: "admin",
  data() {
    return {
      role: this.$route.params.role,
      loadingDetail: null,
      current: this.$route.query["current"],
      item: {},
      headers: [...DETAIL_ROLE_TABLE],
      nama: "",
      routePath: this.$route.path,
      stringRoute: null,
      typeRoute: null,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  created() {
    this.getDetailBarang();
    this.generatePath();
  },

  methods: {
    generatePath() {
      const pathSegments = this.routePath.split("/");
      const stringRoute = pathSegments[2];
      const typeRoute = pathSegments[3];
      this.stringRoute = stringRoute;
      this.typeRoute = typeRoute;
    },

    getDetailBarang() {
      this.loadingDetail = true;
      getData({
        api_url: `${this.api_url}/data-role-management/${this.role}`,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
        token: this.token.token,
      })
        .then(({ data }) => {
          this.item = data;
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingDetail = false;
          }, 1500);
        })
        .catch((err) => console.log(err));
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
