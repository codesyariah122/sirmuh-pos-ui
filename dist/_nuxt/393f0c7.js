(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{638:function(t,e,l){"use strict";l.r(e);l(24),l(11),l(35);var r={props:{user:{type:Object,default:function(){return{}}},profiles:{type:Object,default:function(){return{}}},roles:{type:Object,default:function(){return{}}},image:{type:String,default:""}},data:function(){return{loading:null,options:"",showModal:!1,api_token:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l",img_url:"https://sirmuh.api.dksindo.com/",input:{},previewUrl:"",success:null,message_success:""}},methods:{toggleModal:function(){this.showModal=!this.showModal,this.previewUrl=""!==this.previewUrl?"":this.previewUrl},handleDragOver:function(t){t.preventDefault(),this.isDragging=!0},handleDragLeave:function(){this.isDragging=!1},handleDrop:function(t){t.preventDefault(),this.isDragging=!1;var e=t.dataTransfer.files;this.uploadFiles(e)},handleFileInput:function(t){var e=t.target.files;this.uploadFiles(e)},uploadFiles:function(t){var e=this;this.uploadProcess(t[0]);var l=this.$refs.fileInput;if(l.files&&l.files.length>0){console.log("kesini");var r=l.files[0],o=new FileReader;o.onload=function(t){e.previewUrl=t.target.result},o.readAsDataURL(r)}else{event.preventDefault();var n=t[0],c=new FileReader;c.onload=function(t){e.previewUrl=t.target.result},c.readAsDataURL(n)}},uploadProcess:function(t){var e=this;try{if(null!==this.token){this.loading=!0,this.options="change-photo";var l=new FormData;l.append("photo",t);this.$api.defaults.headers.common.Authorization="Bearer ".concat(this.token.token),this.$api.defaults.headers.common["Dku-Api-Key"]=this.api_token,this.$api.post("/fitur/upload-photo",l,{headers:{Accept:"application/json"}}).then((function(t){var data=t.data;data.success&&(e.$toast.show(data.message,{type:"success",duration:1500,position:"top-right",icon:"check-double"}),e.$emit("refetch-data"),e.success=!0,e.message_success=data.message,e.showModal=!1)})).finally((function(){setTimeout((function(){e.loading=!1,e.options=""}),1500)})).catch((function(t){console.log(t)}))}}catch(t){console.error(t)}},removePreview:function(){this.previewUrl=""},closeSuccessAlert:function(){this.success=!1,this.message="",this.detailCampaign()}}},o=l(5),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"},[e("div",{staticClass:"px-6"},[e("div",{staticClass:"flex flex-wrap justify-center"},[e("div",{staticClass:"w-full px-4 flex justify-center"},[e("div",{staticClass:"relative"},[e("img",{staticClass:"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px",attrs:{alt:t.userData.name,src:t.image}})])]),t._v(" "),e("div",{staticClass:"w-full flex justify-center"},[e("div",{staticClass:"mt-24 px-6"},[e("button",{staticClass:"relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",attrs:{type:"button"},on:{click:function(e){return t.toggleModal()}}},[e("span",{staticClass:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"},[t._v("\n              Change Photo\n            ")])]),t._v(" "),t.showModal?e("div",{staticClass:"overflow-x-hidden overflow-y-auto fixed inset-0 bg-gray-300 dark:bg-gray-300 bg-opacity-50 z-50 outline-none focus:outline-none justify-center items-center flex"},[e("div",{staticClass:"relative w-auto my-6 mx-auto max-w-6xl inset-0"},[e("form",[e("div",{staticClass:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},[e("div",{staticClass:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"},[e("h3",{staticClass:"text-3xl font-semibold"},[t._v("\n                      Change Photo\n                    ")]),t._v(" "),e("button",{staticClass:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",on:{click:function(e){return t.toggleModal()}}},[e("span",{staticClass:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"},[t._v("\n                        ×\n                      ")])])]),t._v(" "),e("div",{staticClass:"relative p-6 flex-auto"},[e("div",{staticClass:"w-full lg:w-12/12 px-4 py-6"},[t.previewUrl&&null!==t.input.photo?e("div",{staticClass:"flex justify-between w-full"},[e("div",{staticClass:"grow"},[e("img",{staticClass:"h-auto w-full",attrs:{src:t.previewUrl}})]),t._v(" "),e("div",{staticClass:"relative h-32 w-32"},[e("button",{staticClass:"bg-transparent rounded-lg absolute top-[-1rem] right-[-2rem] h-16 w-16",on:{click:t.removePreview}},[e("i",{staticClass:"fa-solid fa-xmark text-2xl text-gray-700 font-bold"})])])]):e("div",{staticClass:"flex items-center justify-center w-full"},[e("label",{staticClass:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",attrs:{for:"dropzone-file"}},[e("div",{staticClass:"flex flex-col items-center justify-center pt-5 pb-6",on:{dragover:t.handleDragOver,dragleave:t.handleDragLeave,drop:t.handleDrop}},[e("h2",{staticClass:"mb-4 text-sm text-gray-500 dark:text-gray-400"},[t._v("Upload Banner Here !")]),t._v(" "),e("i",{staticClass:"fa-solid fa-cloud-arrow-up text-5xl text-gray-500"}),t._v(" "),t._m(0)]),t._v(" "),e("input",{ref:"fileInput",staticClass:"hidden",attrs:{id:"dropzone-file",type:"file"},on:{change:t.handleFileInput}})])])])]),t._v(" "),e("div",{staticClass:"flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"},[e("button",{staticClass:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",attrs:{type:"button"},on:{click:function(e){return t.toggleModal()}}},[t._v("\n                      Close\n                    ")]),t._v(" "),e("button",{staticClass:"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",attrs:{type:"button"},on:{click:function(e){return t.toggleModal()}}},[t._v("\n                      Save Changes\n                    ")])])])])])]):t._e()])])]),t._v(" "),e("div",{staticClass:"text-justify mt-24"},[e("h3",{staticClass:"text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 capitalize"},[t._v("\n        "+t._s(t.user.name)+"\n      ")]),t._v(" "),e("div",{staticClass:"text-sm text-justify mt-0 mb-2 text-blueGray-400 font-bold uppercase"},[e("i",{staticClass:"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"}),t._v("\n        Address : "+t._s(t.profiles.address)+"\n      ")]),t._v(" "),e("div",{staticClass:"text-sm text-justify mt-0 mb-2 text-blueGray-400 font-bold uppercase"},[e("i",{staticClass:"fas fa-tree-city mr-2 text-lg text-blueGray-400"}),t._v("\n        City : "+t._s(t.profiles.city)+"\n      ")]),t._v(" "),e("div",{staticClass:"text-sm text-justify mt-0 mb-2 text-blueGray-400 font-bold uppercase"},[e("i",{staticClass:"fas fa-signs-post mr-2 text-lg text-blueGray-400"}),t._v("\n        Post Code : "+t._s(t.profiles.post_code)+"\n      ")]),t._v(" "),e("div",{staticClass:"text-sm text-justify mt-0 mb-2 text-blueGray-400 font-bold uppercase"},[e("i",{staticClass:"fas fa-earth-asia mr-2 text-lg text-blueGray-400"}),t._v("\n        Province : "+t._s(t.profiles.province)+"\n      ")]),t._v(" "),e("div",{staticClass:"mb-2 text-left text-blueGray-600 mt-10"},[e("i",{staticClass:"fas fa-envelope-circle-check mr-2 text-lg text-blueGray-400"}),t._v("\n        Email : "+t._s(t.user.email)+"\n      ")]),t._v(" "),e("div",{staticClass:"mb-2 text-blueGray-600"},[e("i",{staticClass:"fas fa-phone mr-2 text-lg text-blueGray-400"}),t._v("\n        Phone: "+t._s(t.user.phone)+"\n      ")]),t._v(" "),e("div",{staticClass:"mb-2 text-blueGray-600"},[e("i",{staticClass:"fas fa-user-lock mr-2 text-lg text-blueGray-400"}),t._v("\n        Username : "+t._s(t.profiles.username)+"\n      ")]),t._v(" "),e("div",{staticClass:"mb-2 text-blueGray-600"},[e("i",{staticClass:"fas fa-user-shield mr-2 text-lg text-blueGray-400"}),t._v("\n        Roles: "+t._s(t.roles.name)+"\n      ")]),t._v(" "),e("div",{staticClass:"mb-2 text-blueGray-600"},[e("i",{class:"fas ".concat("INACTIVE"===t.user.status?"fa-square-person-confined":"fa-shield"," mr-2 text-lg text-blueGray-400")}),t._v("\n        Status: "+t._s(t.user.status)+"\n      ")])]),t._v(" "),e("div",{staticClass:"mt-10 py-10 border-t border-blueGray-200 text-center"},[e("div",{staticClass:"flex flex-wrap justify-center"},[e("div",{staticClass:"w-full lg:w-9/12 px-4"},[e("span",{staticClass:"text-blueGray-400 text-left"},[t._v("About : ")]),t._v(" "),e("article",{staticClass:"mb-4 text-justify text-lg leading-relaxed text-blueGray-700",domProps:{innerHTML:t._s(t.profiles.about)}}),t._v(" "),e("a",{staticClass:"font-normal text-emerald-500",attrs:{href:"javascript:void(0);"}},[t._v("\n            Show more\n          ")])])])])]),t._v(" "),t.loading?e("div",[e("molecules-row-loading",{attrs:{loading:t.loading,options:t.options}})],1):t._e()])}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-2 text-sm text-gray-500 dark:text-gray-400"},[e("span",{staticClass:"font-semibold"},[t._v("Click to upload")]),t._v(" or drag and drop")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesRowLoading:l(315).default})}}]);