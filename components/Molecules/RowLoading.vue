<style scoped>
  .loader {
    border: 13px solid #01d28e;
    border-top: 8px solid transparent;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<template>
  <div
    v-if="loading || options"
    wire:loading
    class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-80 flex flex-col items-center justify-center"
  >
    <div class="loader mb-4"></div>
    <p class="w-1/3 text-center text-white">{{ $nuxt.globalLoadingMessage }}</p>

  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: null,
    },
    options: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
  },
};
</script>
