<template>
  <div class="flex flex-wrap">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12  px-6' : 'max-w-full'}`">
      <settings-change-password-form />
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
  name: "settings-change-password",
  layout: "admin",
};
</script>
