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
        <div class="flex items-center mb-3">
          <span class="mb-1 px-3  text-md font-semibold text-gray-900 dark:text-white">New notification</span>
          <button @click="() => dropdownPopoverShow = false" type="button" class="ms-auto bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
            <span class="sr-only">Close</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
          </button>
        </div>
        <div class="col-span-full text-blueGray-800">
          <hr class="my-2 md:min-w-full" />
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
