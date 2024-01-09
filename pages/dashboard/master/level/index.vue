<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <cards-card-table
        color="dark"
        title="DATA ROLE USER"
        types="data-role-management"
        queryType="DATA_ROLE_USER"
        queryMiddle="data-role-management"
        :parentRoute="stringRoute"
        :typeRoute="typeRoute"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :messageAlert="message_success"
        @filter-data="handleFilterBarang"
        @close-alert="closeSuccessAlert"
        @deleted-data="deleteRoleUser"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getUserRole"
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
import { USER_ROLE_TABLE } from "~/utils/table-user-role";
import { getData } from "~/hooks/getData/index";
import CardTable from "@/components/Cards/CardTable.vue";

export default {
  name: "level",
  layout: "admin",
  components: {
    CardTable,
  },
  data() {
    return {
      items: [],
      links: [],
      paging: {
        current: null,
        from: null,
        last: null,
        per_page: null,
        total: null,
      },
      headers: [...USER_ROLE_TABLE],
      api_url: process.env.NUXT_ENV_API_URL,
      message: "",
      loading: null,
      options: "",
      success: null,
      message_success: "",
      current: this.$route.query["current"],
      routePath: this.$route.path,
      stringRoute: null,
      typeRoute: null,
    };
  },

  created() {
    this.checkNewData();
  },

  mounted() {
    this.getUserRole(this.current ? Number(this.current) : 1, {});
    this.generatePath();
  },

  methods: {
    generatePath() {
      const pathSegments = this.routePath.split("/");
      const stringRoute = pathSegments[2];
      const typeRoute = pathSegments[3];
      console.log(typeRoute);
      this.stringRoute = stringRoute;
      this.typeRoute = typeRoute;
    },

    handleFilterBarang(param, types) {
      if (types === "data-role-management") {
        this.getUserRole(1, param);
      }
    },

    getUserRole(page = 1, param = {}) {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs[0]?.user?.email === this.$nuxt.userData.email) {
          this.loading = true;
        } else {
          if (this.current) {
            this.loading = true;
          } else {
            this.loading = false;
          }
        }
      } else {
        this.loading = true;
      }
      getData({
        api_url: `${this.api_url}/data-role-management`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then(({ data }) => {
          let cells = [];
          data?.map((cell) => {
            cells.push({
              id: cell?.id,
              name: cell?.name,
              total_user: cell?.user[0]?.total_user,
            });
          });
          this.items = [...cells];
          this.links = data?.meta?.links;
          this.paging.current = data?.meta?.current_page;
          this.paging.from = data?.meta?.from;
          this.paging.last = data?.meta?.last_page;
          this.paging.per_page = data?.meta?.per_page;
          this.paging.total = data?.meta?.total;

          setTimeout(() => {
            this.loading = false;
          }, 1500);
        })
        .catch((err) => console.log(err));
    },

    deleteRoleUser(id) {
      this.loading = true;
      this.options = "delete-barang";
      deleteData({
        api_url: `${this.api_url}/data-barang/${id}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          if (data.success) {
            this.message_success = data.message;
            // if (this.$_.size(this.$nuxt.notifs) > 0) {
            //   if (
            //     this.$nuxt.notifs[0].user.email === this.$nuxt.userData.email
            //   ) {
            //     this.$toast.show("Data barang successfully move to trash !", {
            //       type: "info",
            //       duration: 5000,
            //       position: "top-right",
            //       icon: "circle-exclamation",
            //     });
            //   }
            // }
            this.success = true;
            this.scrollToTop();
            setTimeout(() => {
              this.loading = false;
              this.options = "";
            }, 1500);
          }
        })
        .catch((err) => console.log(err));
    },

    closeSuccessAlert() {
      this.success = false;
      this.message = "";
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        this.getDataKaryawan(this.paging.current);
      }
    },
  },
};
</script>
