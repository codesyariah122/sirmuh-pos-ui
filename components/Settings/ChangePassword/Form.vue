<template>
  <div
  class="relative flex flex-col max-w-full break-words w-screen mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
  <div class="rounded-t bg-white mb-0 px-6 py-6">
    <div class="text-center flex justify-between">
      <h6 class="text-blueGray-700 text-xl font-bold">Change Password</h6>
      <button
      @click="$router.go(-1)"
      class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
      type="button"
      >
      Back
    </button>
  </div>

  <div class="flex justify-center mt-4 mb-4">
    <div>
      <molecules-success-alert
      :success="success"
      :messageAlert="message_success"
      @close-alert="closeSuccessAlert"
      />
    </div>
  </div>
</div>
<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
  <form @submit.prevent="changePassword">
    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
      User Password
    </h6>
    <div v-if="error" class="flex justify-center mt-4 mb-4">
      <div>
        <div
        class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
        >
        <i class="fa-solid fa-triangle-exclamation text-md"></i> &nbsp;
        <div>
          <span class="font-medium">Ooops!</span> {{ message_error }}
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
      <div class="relative w-full mb-6">
        <input
        v-model="input.current_password"
        id="current-password"
        :class="`${
          error
          ? 'pass1 h-12 w-full mt-6 rounded-lg outline-none p-2 border border-solid border-red-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-red-600'
          : 'pass1 h-12 w-full border mt-6 rounded-lg outline-none p-2'
        }`"
        type="password"
        placeholder="Current Password"
        />
        <i
        @click="showingPassword('#current-password')"
        :class="`fa ${
          hidePassword ? 'fa-eye-slash' : 'fa-eye'
        } eye_1 absolute top-10 right-3 cursor-pointer`"
        ></i>
      </div>
      <div v-if="validations.current_password" class="flex py-6">
        <div
        class="flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
        role="alert"
        >
        <span class="font-medium"
        ><i class="fa-solid fa-circle-exclamation"></i>&nbsp;{{
          validations.current_password[0]
        }}</span
        >
      </div>
    </div>
  </div>
  <div class="w-full lg:w-6/12 px-4">
    <div class="relative w-full mb-6">
      <input
      v-model="input.new_password"
      id="new-password"
      :class="`${
        error
        ? 'pass1 h-12 w-full mt-6 rounded-lg outline-none p-2 border border-solid border-red-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-red-600'
        : 'pass1 h-12 w-full border mt-6 rounded-lg outline-none p-2'
      }`"
      type="password"
      placeholder="New Password"
      />
      <i
      @click="showingPassword('#new-password')"
      :class="`fa ${
        hidePassword ? 'fa-eye-slash' : 'fa-eye'
      } eye_1 absolute top-10 right-3 cursor-pointer`"
      ></i>
    </div>
    <div v-if="validations.new_password" class="flex py-6">
      <div
      class="flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
      role="alert"
      >
      <span class="font-medium"
      ><i class="fa-solid fa-circle-exclamation"></i>&nbsp;{{
        validations.new_password[0]
      }}</span
      >
    </div>
  </div>
</div>

<div class="w-full lg:w-6/12 px-4">
  <div class="relative w-full mb-6">
    <input
    v-model="input.new_password_confirmation"
    id="new-password-confirmation"
    :class="`${
      error
      ? 'pass1 h-12 w-full mt-6 rounded-lg outline-none p-2 border border-solid border-red-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-red-600'
      : 'pass1 h-12 w-full border mt-6 rounded-lg outline-none p-2'
    }`"
    type="password"
    placeholder="New Password Confirmation"
    />
    <i
    @click="showingPassword('#new-password-confirmation')"
    :class="`fa ${
      hidePassword ? 'fa-eye-slash' : 'fa-eye'
    } eye_1 absolute top-10 right-3 cursor-pointer`"
    ></i>
  </div>
  <div v-if="validations.new_password_confirmation" class="flex py-6">
    <div
    class="flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
    role="alert"
    >
    <span class="font-medium"
    ><i class="fa-solid fa-circle-exclamation"></i>&nbsp;{{
      validations.new_password_confirmation[0]
    }}</span
    >
  </div>
</div>
</div>
</div>

<div class="flex flex-wrap">
  <div class="flex-shrink-0 lg:w-12/12 w-full py-10">
    <button
    type="submit"
    class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
    <div v-if="loading">
      <svg
      aria-hidden="true"
      role="status"
      class="inline w-4 h-4 mr-3 text-white animate-spin"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="#E5E7EB"
      />
      <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
      />
    </svg>
    Loading...
  </div>
  <span v-else
  ><i class="fa-solid fa-plus"></i> Change Password</span
  >
</button>
</div>
</div>

<div v-if="loading">
  <molecules-row-loading :loading="loading" :options="options" />
</div>
</form>
</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        loading: null,
        success: null,
        message_success: "",
        options: "",
        api_token: process.env.NUXT_ENV_APP_TOKEN,
        user: {},
        input: {},
        error: false,
        hidePassword: true,
        message_error: "",
        validations: [],
      };
    },

    methods: {
      changePassword() {
        this.$swal({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Change Password!",
        }).then((result) => {
          if (result.isConfirmed) {
            try {
              if (this.token !== null) {
                this.error = false;
                this.validations = [];
                this.loading = true;
                this.options = "change-password";
                const endPoint = `/change-password`;
                const config = {
                  headers: {
                    Accept: "application/json",
                  },
                };

                const dataPassword = {
                  current_password: this.input.current_password,
                  new_password: this.input.new_password,
                  new_password_confirmation: this.input.new_password_confirmation,
                };

                this.$api.defaults.headers.common[
                  "Authorization"
                  ] = `Bearer ${this.token.token}`;
                this.$api.defaults.headers.common["Dku-Api-Key"] = this.api_token;

                this.$api
                .put(endPoint, dataPassword, config)
                .then(({ data }) => {
                  if (data.error) {
                    this.$toast.show(data.message, {
                      type: "error",
                      duration: 1500,
                      position: "top-right",
                      icon: "triangle-exclamation",
                    });
                    this.error = true;
                    this.message_error = data.message;
                  }

                  if (data.success) {
                    this.$toast.show(data.message, {
                      type: "success",
                      duration: 1500,
                      position: "top-right",
                      icon: "check-double",
                    });
                    this.success = true;
                    this.message_success = data.message;
                  }
                })
                .finally(() => {
                  setTimeout(() => {
                    this.loading = false;
                    this.options = "";
                    this.input = {};
                  }, 1500);
                })
                .catch((err) => {
                  this.validations = err?.response?.data;
                });
              }
            } catch (err) {
              console.error(err);
            }
          }
        });
      },

      showingPassword(selector) {
        const password = document.querySelector(selector);
        if (password.type === "password") {
          password.type = "text";
          this.hidePassword = false;
        } else {
          password.type = "password";
          this.hidePassword = true;
        }
      },

      closeSuccessAlert() {
        this.success = false;
        this.message_success = "";
        this.$router.go(-1);
      },
    },
  };
</script>
