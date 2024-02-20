<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg"
  >
    <roles-detail-cell
      v-if="type === 'data-role-management'"
      :detail="detail"
      :headers="headers"
      :loading="loading"
      @back-to="backTo"
    />
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default: function () {
        return {};
      },
    },
    headers: {
      type: [Array, Object],
    },
    type: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: null,
    },
  },

  data() {
    return {
      image_url: process.env.NUXT_ENV_STORAGE_URL,
      public_asset: process.env.NUXT_ENV_ASSET_PUBLIC_URL,
    };
  },

  methods: {
    backTo() {
      setTimeout(() => {
        this.$router.go(-1);
      }, 500);
    },
  },
};
</script>
