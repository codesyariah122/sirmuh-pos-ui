<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-6' : 'max-w-full'}`">
      <cards-card-table
      color="light"
      title="HISTORY PROGRAMM"
      types="data-history"
      queryType="DATA_HISTORY"
      queryMiddle="data-history"
      :headers="headers"
      :columns="items"
      :loading="loading"
      :success="success"
      :paging="paging"
      :messageAlert="message_success"
      @filter-data="handleFilterBarang"
      @close-alert="closeSuccessAlert"
      @deleted-data="deleteHistory"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
          :links="links"
          :paging="paging"
          @fetch-data="getHistoryProgramm"
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
 * @author Puji Ermanto <puuji.ermanto@gmail.com>
 */
  import { getData, deleteData } from "~/hooks/index";

  export default {
    name: "history-programm",
    layout: "admin",

    data() {
      return {
        current: this.$route.query["current"],
        image_url: process.env.NUXT_ENV_ASSET_PUBLIC_URL,
        loading: null,
        options: "",
        success: null,
        message_success: "",
        headers: [],
        api_url: process.env.NUXT_ENV_API_URL,
        items: [],
        links: [],
        paging: {
          current: null,
          from: null,
          last: null,
          per_page: null,
          total: null,
        },
      };
    },

    created() {
      this.checkNewData();
    },

    mounted() {
      this.getHistoryProgramm(this.current ? Number(this.current) : 1, {}, true);
    },

    methods: {
      handleFilterBarang(param, types) {
        if (types === "data-history") {
          this.getHistoryProgramm(1, param, false);
        }
      },

      async getHistoryProgramm(page = 1, param = {}, loading) {
        this.loading = loading;
        this.$nuxt.globalLoadingMessage = "Proses menyiapkan history programm ...";
        let endPoint = `${this.api_url}/history-programm${page ? '?page='+page : ''}`;

        try {
          const data = await getData({
            api_url: endPoint,
            token: this.token.token,
            api_key: process.env.NUXT_ENV_APP_TOKEN,
          });

          if (data?.success) {
            const cells = await Promise.all(data?.data?.map(async (cell) => {
              const photoUrl = `${this.image_url}/${cell?.photo}`;
              const isPhotoAccessible = await this.checkImageAvailability(photoUrl);

              return {
                id: cell?.id,
                tanggal: cell?.tanggal,
                user: cell?.user,
                keterangan: cell?.keterangan,
                routes: cell?.routes,
                route_name: cell?.route_name,
                name: cell?.name,
                photo: isPhotoAccessible ? photoUrl : require('~/assets/img/robot-vector.webp')
              };
            }));

            this.items = [...cells];
            this.links = data?.meta?.links;
            this.paging.current = data?.meta?.current_page;
            this.paging.from = data?.meta?.from;
            this.paging.last = data?.meta?.last_page;
            this.paging.per_page = data?.meta?.per_page;
            this.paging.total = data?.meta?.total;

            setTimeout(() => {
              this.loading = false;
            }, 500);
          }
        } catch (err) {
          console.log(err);
        }
      },

      checkImageAvailability(url) {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = url;
        });
      },

      deleteHistory(id) {
        this.loading = true;
        this.options = "delete-history";
        deleteData({
          api_url: `${this.api_url}/data-history/${id}`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
          if (data.success) {
            this.message_success = data.message;
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
          this.getHistoryProgramm(this.paging.current, {}, false);
        }
      },
    },
  };
</script>
