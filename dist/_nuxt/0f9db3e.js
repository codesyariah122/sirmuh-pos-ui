(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{811:function(t,e,l){"use strict";l.r(e);l(25),l(15),l(36);var r={props:{user:{type:Object,default:function(){return{}}},profiles:{type:Object,default:function(){return{}}},roles:{type:Object,default:function(){return{}}},image:{type:String,default:""}},data:function(){return{loading:null,options:"upload-profile-picture",showModal:!1,api_token:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",img_url:"http://192.168.1.8:4041",input:{},previewUrl:"",success:null,message_success:""}},methods:{toggleModal:function(){this.showModal=!this.showModal,this.previewUrl=""!==this.previewUrl?"":this.previewUrl},handleDragOver:function(t){t.preventDefault(),this.isDragging=!0},handleDragLeave:function(){this.isDragging=!1},handleDrop:function(t){t.preventDefault(),this.isDragging=!1;var e=t.dataTransfer.files;this.uploadFiles(e)},handleFileInput:function(t){var e=t.target.files;this.uploadFiles(e)},uploadFiles:function(t){var e=this;this.uploadProcess(t[0]);var l=this.$refs.fileInput;if(l.files&&l.files.length>0){console.log("kesini");var r=l.files[0],o=new FileReader;o.onload=function(t){e.previewUrl=t.target.result},o.readAsDataURL(r)}else{event.preventDefault();var n=t[0],d=new FileReader;d.onload=function(t){e.previewUrl=t.target.result},d.readAsDataURL(n)}},uploadProcess:function(t){var e=this;try{if(null!==this.token){this.loading=!0,this.options="change-photo";var l=new FormData;l.append("photo",t);this.$api.defaults.headers.common.Authorization="Bearer ".concat(this.token.token),this.$api.defaults.headers.common["Dku-Api-Key"]=this.api_token,this.$api.post("/update-profile-photo",l,{headers:{Accept:"application/json"}}).then((function(t){var data=t.data;data.success&&(e.$toast.show(data.message,{type:"success",duration:1500,position:"top-right",icon:"check-double"}),e.$emit("refetch-data"),e.success=!0,e.message_success=data.message,e.showModal=!1)})).finally((function(){setTimeout((function(){e.loading=!1,e.options=""}),1500)})).catch((function(t){console.log(t)}))}}catch(t){console.error(t)}},removePreview:function(){this.previewUrl=""},closeSuccessAlert:function(){this.success=!1,this.message="",this.detailCampaign()}}},o=l(8),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"},[e("div",{staticClass:"px-6"},[e("div",{staticClass:"flex flex-wrap justify-center"},[e("div",{staticClass:"w-full px-4 flex justify-center"},[e("div",{staticClass:"relative"},[e("div",{staticClass:"items-center flex"},[e("span",{staticClass:"w-12 h-12 text-sm text-white bg-blueGray-200 border-0 border-none inline-flex items-center justify-center rounded-full"},[e("div",[e("div",{attrs:{role:"status"}},[e("svg",{staticClass:"w-4 h-4 me-0 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Loading...")])]),t._v(" "),e("span",{staticClass:"text-3xl"},[t._v("😖")])]),t._v(" "),e("img",{staticClass:"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px",attrs:{alt:t.userData.name,src:t.image}})])])])]),t._v(" "),e("div",{staticClass:"w-full flex justify-center"},[e("div",{staticClass:"mt-24 px-6"},[e("button",{staticClass:"relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",attrs:{type:"button"},on:{click:function(e){return t.toggleModal()}}},[e("span",{staticClass:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"},[t._v("\n          Change Photo\n        ")])]),t._v(" "),t.showModal?e("div",{staticClass:"overflow-x-hidden overflow-y-auto fixed inset-0 bg-gray-300 dark:bg-gray-300 bg-opacity-50 z-50 outline-none focus:outline-none justify-center items-center flex"},[e("div",{staticClass:"relative w-auto my-6 mx-auto max-w-6xl inset-0"},[e("form",[e("div",{staticClass:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},[e("div",{staticClass:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"},[e("h3",{staticClass:"text-3xl font-semibold"},[t._v("Change Photo")]),t._v(" "),e("button",{staticClass:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",on:{click:function(e){return t.toggleModal()}}},[e("span",{staticClass:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"},[t._v("\n          ×\n        ")])])]),t._v(" "),e("div",{staticClass:"relative p-6 flex-auto"},[e("div",{staticClass:"w-full lg:w-12/12 px-4 py-6"},[t.previewUrl&&null!==t.input.photo?e("div",{staticClass:"flex justify-between w-full"},[e("div",{staticClass:"grow"},[e("img",{staticClass:"h-auto w-full",attrs:{src:t.previewUrl}})]),t._v(" "),e("div",{staticClass:"relative h-32 w-32"},[e("button",{staticClass:"bg-transparent rounded-lg absolute top-[-1rem] right-[-2rem] h-16 w-16",on:{click:t.removePreview}},[e("i",{staticClass:"fa-solid fa-xmark text-2xl text-gray-700 font-bold"})])])]):e("div",{staticClass:"flex items-center justify-center w-full"},[e("label",{staticClass:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",attrs:{for:"dropzone-file"}},[e("div",{staticClass:"flex flex-col items-center justify-center pt-5 pb-6",on:{dragover:t.handleDragOver,dragleave:t.handleDragLeave,drop:t.handleDrop}},[e("h2",{staticClass:"mb-4 text-sm text-gray-500 dark:text-gray-400"},[t._v("\n    Upload Foto Here !\n  ")]),t._v(" "),e("i",{staticClass:"fa-solid fa-cloud-arrow-up text-5xl text-gray-500"}),t._v(" "),t._m(0)]),t._v(" "),e("input",{ref:"fileInput",staticClass:"hidden",attrs:{id:"dropzone-file",type:"file"},on:{change:t.handleFileInput}})])])])]),t._v(" "),e("div",{staticClass:"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"},[e("button",{staticClass:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",attrs:{type:"button"},on:{click:function(e){return t.toggleModal()}}},[t._v("\nClose\n")])])])])])]):t._e()])])]),t._v(" "),e("div",{staticClass:"text-justify mt-24"},[e("h3",{staticClass:"text-xl font-semibold leading-normal mb-2 text-blueGray-700 capitalize"},[t._v("\n        "+t._s(t.user.name)+"\n      ")]),t._v(" "),e("div",{staticClass:"text-sm text-justify mt-0 mb-2 text-blueGray-400 font-bold uppercase"},[e("i",{staticClass:"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"}),t._v("\n      Address :\n      "),e("address",{domProps:{innerHTML:t._s(t.user.karyawans[0].alamat)}})])]),t._v(" "),e("div",{staticClass:"mb-2 text-left text-blueGray-600 mt-10"},[e("i",{staticClass:"fas fa-envelope-circle-check mr-2 text-lg text-blueGray-400"}),t._v("\n    Email : "+t._s(t.user.email)+"\n  ")]),t._v(" "),e("div",{staticClass:"mb-2 text-blueGray-600"},[e("i",{staticClass:"fas fa-phone mr-2 text-lg text-blueGray-400"}),t._v("\n    Phone: "+t._s(t.user.phone)+"\n  ")]),t._v(" "),e("div",{staticClass:"mb-2 text-blueGray-600"},[e("i",{staticClass:"fas fa-user-shield mr-2 text-lg text-blueGray-400"}),t._v("\n    Roles: "+t._s(t.user.roles[0].name)+"\n  ")])]),t._v(" "),e("div",{staticClass:"mt-10 py-10 border-t border-blueGray-200 text-center"},[e("div",{staticClass:"flex flex-wrap justify-center"},[e("div",{staticClass:"w-full lg:w-9/12 px-4"},[e("span",{staticClass:"text-blueGray-400 text-left"},[t._v("About : ")]),t._v(" "),e("article",{staticClass:"mb-4 text-justify text-lg leading-relaxed text-blueGray-700",domProps:{innerHTML:t._s(t.profiles.about)}}),t._v(" "),e("a",{staticClass:"font-normal text-emerald-500",attrs:{href:"javascript:void(0);"}},[t._v("\n        Show more\n      ")])])])]),t._v(" "),t.loading?e("div",[e("molecules-row-loading",{attrs:{loading:t.loading,options:t.options}})],1):t._e()])}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-2 text-sm text-gray-500 dark:text-gray-400"},[e("span",{staticClass:"font-semibold"},[t._v("Click to upload")]),t._v("\n  or drag and drop\n")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesRowLoading:l(195).default})}}]);