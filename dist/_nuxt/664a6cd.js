(window.webpackJsonp=window.webpackJsonp||[]).push([[83,42,142,189,194],{1072:function(t,e,r){"use strict";r.r(e);r(53),r(344),r(37),r(670);var n=r(225),o=(r(345),{props:{type:{type:String,default:null},detail:{type:[Object,Array]},current:{type:[Number,String],default:null},pageData:{type:String,default:null},parentRoute:{type:String,default:null},typeRoute:{type:String,default:null}},components:{Datepicker:n.a},data:function(){return{loading:null,success:null,messageAlert:null,options:"",api_url:"https://sirmuh.api.dksindo.com/api/v1",api_token:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",storageUrl:"https://sirmuh.api.dksindo.com/storage",input:{},validations:[],previewUrl:"",photo:[],isDragging:null}},beforeMount:function(){this.authTokenStorage()},mounted:function(){},methods:{handleDragOver:function(t){t.preventDefault(),this.isDragging=!0},handleDragLeave:function(){this.isDragging=!1},handleDrop:function(t){t.preventDefault(),this.isDragging=!1;var e=t.dataTransfer.files;this.previewUrl=e,this.uploadFiles(e)},handleFileInput:function(t){var e=t.target.files;this.previewUrl=e,this.uploadFiles(e)},uploadFiles:function(t){var e=this;this.input.photo=t[0];var r=this.$refs.fileInput;if(r.files&&r.files.length>0){var n=r.files[0],o=new FileReader;o.onload=function(t){e.previewUrl=t.target.result},o.readAsDataURL(n)}else{event.preventDefault();var l=t[0],c=new FileReader;c.onload=function(t){e.previewUrl=t.target.result},c.readAsDataURL(l)}},removePreview:function(){console.log("Ok remove preview"),this.previewUrl="",this.$set(this.detail,"photo",null)},closeSuccessAlert:function(){this.success=!1,this.message=""},backTo:function(){this.current?this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.typeRoute,"/").concat(this.pageData),query:{current:this.current}}):(console.log("Pasti kadie tolol vue js"),this.$router.go(-1))},updateFotoBarang:function(){var t=this;if(this.loading=!0,this.options="edit-barang",void 0!==this.input.photo){var e="/update-photo-barang/".concat(this.detail.id),r={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(this.token.token)}},n=new FormData;n.append("photo",this.input.photo),this.$api.post(e,n,r).then((function(e){var data=e.data;data.success?(t.success=!0,t.messageAlert=data.message+","+t.detail.nama,t.validations=[],t.$swal({title:t.detail.nama,text:data.message+","+t.detail.nama,imageUrl:t.previewUrl,imageWidth:400,imageHeight:400,imageAlt:t.detail.nama}),setTimeout((function(){t.loading=!1,t.input={}}),500)):(t.$swal({icon:"error",title:"Oops...",text:data.message}),setTimeout((function(){t.loading=!1,t.input={},t.previewUrl=""}),1e3))})).catch((function(e){t.validations=e.response.data,t.success=!1,setTimeout((function(){t.loading=!1}),1e3)}))}else console.log("input photo null"),this.success=!0,this.messageAlert="Tidak ada perubahan data image barang ,"+this.detail.nama,this.validations=[],this.$swal({title:this.detail.nama,text:"Tidak ada perubahan data image barang ,"+this.detail.nama,imageUrl:"".concat(this.storageUrl,"/").concat(this.detail.photo),imageWidth:400,imageHeight:400,imageAlt:this.detail.nama}),setTimeout((function(){t.loading=!1}),500)}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}}),l=r(8),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"},[t.success?e("div",[e("div",{ref:"alertNotifs",staticClass:"flex justify-center w-full bg-transparent mt-4"},[e("div",[e("molecules-success-alert",{attrs:{success:t.success,messageAlert:t.messageAlert},on:{"close-alert":t.closeSuccessAlert}})],1)]),t._v(" "),e("div",{staticClass:"flex justify-center w-full bg-transparent mt-2"},[e("button",{staticClass:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",attrs:{type:"button"},on:{click:t.backTo}},[t._v("\n        Check Data Barang\n      ")])])]):t._e(),t._v(" "),e("div",{staticClass:"flex-auto px-4 lg:px-10 py-10 pt-0"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.updateFotoBarang.apply(null,arguments)}}},[e("h6",{staticClass:"text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"},[t._v("\n        Foto Barang "+t._s(t.detail.nama)+"\n      ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-12/12 px-4 py-6"},[t.previewUrl||t.detail.photo?e("div",{staticClass:"flex justify-between w-full"},[e("div",{staticClass:"grow"},[e("img",{staticClass:"h-auto w-full",attrs:{src:t.previewUrl?t.previewUrl:"".concat(t.storageUrl,"/").concat(t.detail.photo)||null!==t.detail.photo?"".concat(t.storageUrl,"/").concat(t.detail.photo):t.previewUrl}})]),t._v(" "),e("div",{staticClass:"relative h-32 w-32"},[e("button",{staticClass:"bg-transparent rounded-lg absolute top-[-1rem] right-[-2rem] h-16 w-16",on:{click:t.removePreview}},[e("i",{staticClass:"fa-solid fa-xmark text-2xl text-gray-700 font-bold"})])])]):e("div",{staticClass:"flex items-center justify-center w-full"},[e("label",{staticClass:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",attrs:{for:"dropzone-file"}},[e("div",{staticClass:"flex flex-col items-center justify-center pt-5 pb-6 w-full",on:{dragover:t.handleDragOver,dragleave:t.handleDragLeave,drop:t.handleDrop}},[e("h2",{staticClass:"mb-4 text-sm text-gray-500 dark:text-gray-400"},[t._v("\n                  Upload Foto Barang Disini !\n                ")]),t._v(" "),e("i",{staticClass:"fa-solid fa-cloud-arrow-up text-5xl text-gray-500"}),t._v(" "),t._m(0)]),t._v(" "),e("input",{ref:"fileInput",staticClass:"w-full hidden",attrs:{id:"dropzone-file",type:"file"},on:{change:t.handleFileInput}})])]),t._v(" "),t.validations.photo?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("i",{staticClass:"fa-solid fa-circle-info"}),t._v(" "),e("div",{staticClass:"px-2"},[t._v("\n              "+t._s(t.validations.photo[0])+"\n            ")])]):t._e()])]),t._v(" "),e("hr",{staticClass:"mt-6 border-b-1 border-blueGray-300"}),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-12/12 px-4 py-6"},[e("button",{staticClass:"w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",attrs:{type:"submit"}},[t.loading?e("div",[e("svg",{staticClass:"inline w-4 h-4 mr-3 text-white animate-spin",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"}})]),t._v("\n              Loading...\n            ")]):e("span",[e("i",{staticClass:"fa-solid fa-plus"}),t._v(" Update Foto")])]),t._v(" "),t.loading?e("div",[e("molecules-row-loading",{attrs:{loading:t.loading,options:t.options}})],1):t._e()])])])])])}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-2 text-sm text-gray-500 dark:text-gray-400"},[e("span",{staticClass:"font-semibold"},[t._v("Click to upload")]),t._v(" or drag\n                  and drop\n                ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesSuccessAlert:r(671).default,MoleculesRowLoading:r(226).default})},670:function(t,e,r){"use strict";r.d(e,"b",(function(){return n.a})),r.d(e,"a",(function(){return l})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return d}));var n=r(672),o=r(18),l=(r(70),r(15),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),c=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},671:function(t,e,r){"use strict";r.r(e);var n={props:{success:{type:Boolean,default:!1},messageAlert:{type:String,default:""}},methods:{updateSuccess:function(){this.$emit("close-alert")}}},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 max-w-full px-0 mb-4"},[e("div",{staticClass:"col-span-12"},[t.success?e("div",{staticClass:"flex items-center w-full max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",attrs:{id:"toast-success",role:"alert"}},[e("div",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Check icon")])]),t._v(" "),e("div",{staticClass:"ml-3 text-sm font-normal"},[t._v(t._s(t.messageAlert))]),t._v(" "),e("button",{staticClass:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",attrs:{type:"button","data-dismiss-target":"#toast-success","aria-label":"Close"},on:{click:t.updateSuccess}},[e("span",{staticClass:"sr-only"},[t._v("Close")]),t._v(" "),e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},672:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(18),o=(r(70),r(15),function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.api_url,n=e.token,t.next=5,fetch(r,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+n,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=9;break}throw new Error("Data not found!");case 9:return t.next=11,o.json();case 11:return l=t.sent,t.abrupt("return",l);case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}())}}]);