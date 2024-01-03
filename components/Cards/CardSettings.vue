<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700 border-0"
  >
    <div class="rounded-t bg-blueGray-700 mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-100 text-xl font-bold">{{ title }}</h6>
        <button
          @click="backTo"
          class="bg-emerald-600 text-white active:bg-emerald-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        >
          <i class="fa-solid fa-arrow-left text-md"></i> Kembali
        </button>
      </div>
    </div>

    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <barangs-form-add
        v-if="pageType === 'barangData' && methodType === 'add'"
        @detail-data="detailData"
        :type="type"
      />
      <barangs-form-edit
        v-if="pageType === 'barangData' && methodType === 'edit'"
        :type="type"
        :detail="detail"
        :slug="slug"
      />

      <barangs-form-upload
        v-if="pageType === 'barangData' && methodType === 'upload'"
        :type="type"
        :detail="detail"
        :slug="slug"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageType: {
      type: String,
      default: null,
    },
    methodType: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    detail: {
      type: [Object, Array],
      default: function () {
        return {};
      },
    },
    slug: {
      type: String,
    },
  },

  mounted() {},

  methods: {
    backTo() {
      this.$router.go(-1);
    },
    detailData(param) {
      this.$emit("detail-data", param);
    },
  },
};
</script>
