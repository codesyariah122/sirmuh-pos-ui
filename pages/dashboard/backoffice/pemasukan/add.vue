<template>
  <div class="flex flex-wrap">
    <div
      :class="`w-full ${routeName === 'add' ? 'lg:w-12/12' : 'lg:w-8/12'} px-4`"
    >
      <cards-card-settings
        pageType="pemasukanData"
        link="pemasukan"
        title="Tambah Pemasukan Baru"
        methodType="add"
        :type="type"
        pageData="/backoffice/pemasukan"
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
  name: "pemasukan-data-add",
  layout: "admin",

  data() {
    return {
      routeName: this.$route.name.split("-").pop(),
      loadingDetail: null,
      successNew: null,
      messageNew: "",
      type: this.$route.query["type"],
    };
  },

  created() {
    this.checkNewData();
  },

  watch: {
    notifs() {
      if (this.notifs && this.$_.size(this.notifs) > 0) {
        if (this.$nuxt.notifs[0].routes === "data-pelanggan") {
          console.log("Add Created");
        }
      }
    },
  },
};
</script>
