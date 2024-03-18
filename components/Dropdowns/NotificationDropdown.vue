<template>
  <div>
    <a
      class="text-blueGray-200 block py-1 px-3 cursor-pointer"
      @click="toggleDropdown"
      ref="btnDropdownRef"
    >
      <div class="relative m-6 inline-flex w-fit">
        <div v-if="$nuxt.showNotif"
          class="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-pink-700 p-2.5 text-xs"
        ></div>
        <div
          class="relative inline-flex items-center rounded-full bg-transparent px-0 py-0 text-center 2xl:text-gray-400 dark:text-gray-800"
        >
          <i class="fa-solid fa-bell text-2xl shadow-2xl"></i>
        </div>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <div v-if="$nuxt.showNotif" class="grid grid-cols-1">
        <div class="col-span-full text-blueGray-800">
          <!-- <a
            href="javascript:void(0);"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >
            <i class="fa-solid fa-circle text-success-600"/> {{notif}}
          </a> -->
          <ul class="h-auto py-2 overflow-y-auto text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton">
            <li v-for="(notif, idx) in new Set($nuxt.listNotifs.map(notif => notif.notif).reverse())" :key="idx">
              <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <i class="fa-solid fa-circle text-success-600"/> <span class="font-medium text-sm ml-2"> {{notif}} </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
      showModal: false,
    };
  },


  methods: {
    toggleDropdown(event) {
      event.preventDefault()
      this.dropdownPopoverShow = !this.dropdownPopoverShow;

      if (this.dropdownPopoverShow) {
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
        document.addEventListener("click", this.hideDropdown);
      } else {
          // Menghapus event listener dari dokumen
        document.removeEventListener("click", this.hideDropdown);
      }
    },

    toggleModal: function(){
      this.showModal = !this.showModal;
      // this.$emit('accept-payment', id)
      setTimeout(() => {
        this.dropdownPopoverShow = false;
      }, 500)
    },

    hideDropdown(event) {
      const targetElement = event.target;

      if (this.$refs.btnDropdownRef && !this.$refs.btnDropdownRef.contains(targetElement) && this.$refs.popoverDropdownRef && !this.$refs.popoverDropdownRef.contains(targetElement)
          ) {
          this.dropdownPopoverShow = false;
          // Menghapus event listener dari dokumen
          document.removeEventListener("click", this.hideDropdown);
      }
    },
  },
};
</script>
