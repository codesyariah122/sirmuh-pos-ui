<template>
  <div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
  >
  <div class="px-6">
    <div class="flex flex-wrap justify-center">
      <div class="w-full px-4 flex justify-center">
        <div class="relative">
          <div class="items-center flex">
            <span class="w-12 h-12 text-sm text-white bg-blueGray-200 border-0 border-none inline-flex items-center justify-center rounded-full">
              <div>
                <div role="status">
                  <svg aria-hidden="true" class="w-4 h-4 me-0 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                  <span class="sr-only">Loading...</span>
                </div>
                <span class="text-3xl">😖</span>
              </div>
              <img
              :alt="userData.name"
              :src="image"
              class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
              />
            </span>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <div class="mt-24 px-6">
          <!-- Popup upload photo -->
          <button
          v-on:click="toggleModal()"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          type="button"
          >
          <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
          Change Photo
        </span>
      </button>

      <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 bg-gray-300 dark:bg-gray-300 bg-opacity-50 z-50 outline-none focus:outline-none justify-center items-center flex"
      >
      <div class="relative w-auto my-6 mx-auto max-w-6xl inset-0">
        <form>
          <!--content-->
          <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
          <!--header-->
          <div
          class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
          >
          <h3 class="text-3xl font-semibold">Change Photo</h3>
          <button
          class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          v-on:click="toggleModal()"
          >
          <span
          class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
          >
          ×
        </span>
      </button>
    </div>
    <!--body-->
    <div class="relative p-6 flex-auto">
      <div class="w-full lg:w-12/12 px-4 py-6">
        <div
        v-if="previewUrl && input.photo !== null"
        class="flex justify-between w-full"
        >
        <div class="grow">
          <img :src="previewUrl" class="h-auto w-full" />
        </div>
        <div class="relative h-32 w-32">
          <button
          @click="removePreview"
          class="bg-transparent rounded-lg absolute top-[-1rem] right-[-2rem] h-16 w-16"
          >
          <i
          class="fa-solid fa-xmark text-2xl text-gray-700 font-bold"
          ></i>
        </button>
      </div>
    </div>
    <div
    v-else
    class="flex items-center justify-center w-full"
    >
    <label
    for="dropzone-file"
    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
    <div
    class="flex flex-col items-center justify-center pt-5 pb-6"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
    >
    <h2
    class="mb-4 text-sm text-gray-500 dark:text-gray-400"
    >
    Upload Foto Here !
  </h2>
  <i
  class="fa-solid fa-cloud-arrow-up text-5xl text-gray-500"
  ></i>
  <p
  class="mb-2 text-sm text-gray-500 dark:text-gray-400"
  >
  <span class="font-semibold"
  >Click to upload</span
  >
  or drag and drop
</p>
</div>
<input
ref="fileInput"
id="dropzone-file"
type="file"
class="hidden"
@change="handleFileInput"
/>
</label>
</div>
</div>
</div>
<!--footer-->
<div
class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
>
<button
class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
type="button"
v-on:click="toggleModal()"
>
Close
</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
<div class="text-justify mt-24">
  <h3
  class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 capitalize"
  >
  {{ user.name }}
</h3>
<div
class="text-sm text-justify mt-0 mb-2 text-blueGray-400 font-bold uppercase"
>
<i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
Address :
<address v-html="user.karyawans[0].alamat"></address>
</div>
</div>
<div class="mb-2 text-left text-blueGray-600 mt-10">
  <i
  class="fas fa-envelope-circle-check mr-2 text-lg text-blueGray-400"
  ></i>
  Email : {{ user.email }}
</div>
<div class="mb-2 text-blueGray-600">
  <i class="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
  Phone: {{ user.phone }}
</div>

<div class="mb-2 text-blueGray-600">
  <i class="fas fa-user-shield mr-2 text-lg text-blueGray-400"></i>
  Roles: {{ user.roles[0].name }}
</div>
</div>
<div class="mt-10 py-10 border-t border-blueGray-200 text-center">
  <div class="flex flex-wrap justify-center">
    <div class="w-full lg:w-9/12 px-4">
      <span class="text-blueGray-400 text-left">About : </span>
      <article
      class="mb-4 text-justify text-lg leading-relaxed text-blueGray-700"
      v-html="profiles.about"
      ></article>
      <a href="javascript:void(0);" class="font-normal text-emerald-500">
        Show more
      </a>
    </div>
  </div>
</div>

<div v-if="loading">
  <molecules-row-loading :loading="loading" :options="options" />
</div>
</div>
</template>
<script>
  export default {
    props: {
      user: {
        type: Object,
      default: function () {
        return {};
      },
    },
    profiles: {
      type: Object,
    default: function () {
      return {};
    },
  },
  roles: {
    type: Object,
  default: function () {
    return {};
  },
},
image: {
  type: String,
default: "",
},
},

data() {
  return {
    loading: null,
    options: "upload-profile-picture",
    showModal: false,
    api_token: process.env.NUXT_ENV_APP_TOKEN,
    img_url: process.env.NUXT_ENV_ASSET_PUBLIC_URL,
    input: {},
    previewUrl: "",
    success: null,
    message_success: "",
  };
},

methods: {
  toggleModal() {
    this.showModal = !this.showModal;
    this.previewUrl = this.previewUrl !== "" ? "" : this.previewUrl;
  },
  handleDragOver(event) {
    event.preventDefault();
    this.isDragging = true;
  },
  handleDragLeave() {
    this.isDragging = false;
  },
  handleDrop(event) {
    event.preventDefault();
    this.isDragging = false;

    const files = event.dataTransfer.files;
    this.uploadFiles(files);
  },

  handleFileInput(event) {
    const files = event.target.files;
    this.uploadFiles(files);
  },

  uploadFiles(files) {
    this.uploadProcess(files[0]);
    const fileInput = this.$refs.fileInput;

    if (fileInput.files && fileInput.files.length > 0) {
      console.log("kesini");
      const file = fileInput.files[0];

      const reader = new FileReader();

      reader.onload = (e) => {
        this.previewUrl = e.target.result;
      };

      reader.readAsDataURL(file);
    } else {
      event.preventDefault();
      const file = files[0];

      const reader = new FileReader();

      reader.onload = (e) => {
        this.previewUrl = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  },

  uploadProcess(photo) {
    try {
      if (this.token !== null) {
        this.loading = true;
        this.options = "change-photo";

        const formData = new FormData();
        formData.append("photo", photo);

        const endPoint = `/update-profile-photo`;
        const config = {
          headers: {
            Accept: "application/json",
          },
        };

        this.$api.defaults.headers.common[
          "Authorization"
          ] = `Bearer ${this.token.token}`;
        this.$api.defaults.headers.common["Dku-Api-Key"] = this.api_token;

        this.$api
        .post(endPoint, formData, config)
        .then(({ data }) => {
          if (data.success) {
            this.$toast.show(data.message, {
              type: "success",
              duration: 1500,
              position: "top-right",
              icon: "check-double",
            });
            this.$emit("refetch-data");
            this.success = true;
            this.message_success = data.message;
            this.showModal = false;
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
            this.options = "";
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    } catch (err) {
      console.error(err);
    }
  },

  removePreview() {
    this.previewUrl = "";
  },

  closeSuccessAlert() {
    this.success = false;
    this.message = "";
    this.detailCampaign();
  },
},

watch: {
  notifs() {
    if (this.$_.size(this.$nuxt.notifs) > 0) {
      console.log(this.$nuxt.notifs.length)
      const relevantNotif = this.$nuxt.notifs.find((notif) => 
        ["profile"].includes(notif.routes)
        );
      if (relevantNotif) {
        this.$emit('prepareProfileData', false);
      }
    }
  },
},
};
</script>
