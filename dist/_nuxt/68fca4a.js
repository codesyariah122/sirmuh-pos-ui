(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{780:function(t,e,r){"use strict";r.r(e);r(25),r(53),r(20),r(29);var n={props:{columns:{type:[Array,Object],default:function(){return{}}},parentRoute:{type:String,default:null},typeRoute:{type:String,default:null},types:{type:String},paging:{type:[Array,Object],default:function(){return{}}}},data:function(){return{image_url:"https://sirmuh.api.dksindo.com/storage",userData:[],name:"",roleId:null}},beforeMount:function(){this.authTokenStorage()},mounted:function(){this.checkUserLogin()},methods:{redirectUpload:function(t,e){this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.typeRoute,"/data-barang/upload/").concat(t),query:{type:e,current:this.paging.current}})},deletedData:function(t){this.$emit("deleted-data",t)},restoredData:function(t){this.$emit("restored-data",t)},checkUserLogin:function(){var t=this;if(this.$_.isObject(this.token)){var e,r="".concat(this.api_url,"/user-data"),n={headers:{Accept:"application/json",Authorization:"Bearer ".concat(null==this||null===(e=this.token)||void 0===e?void 0:e.token),"Content-Type":"application/json","Sirmuh-Key":"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}};this.$api.get(r,n).then((function(e){var r,n,data=e.data;t.userData=null==data?void 0:data.data,t.name=null==data||null===(r=data.data)||void 0===r?void 0:r.name,t.roleId=null==data||null===(n=data.data)||void 0===n?void 0:n.role})).catch((function(t){console.log(t)}))}else this.$swal({icon:"error",title:"Oops...",text:"Error Access!"}),this.$router.replace("/")}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("tbody",t._l(t.columns,(function(r,n){return e("tr",{key:n},[e("th",{staticClass:"whitespace-nowrap p-4 text-lg",staticStyle:{width:"50px"}},[t._v("\n      "+t._s(t.$moment(r.tanggal).format("L"))+"\n    ")]),t._v(" "),e("td",{staticClass:"border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"},[e("span",{staticClass:"bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[t._v("\n      "+t._s(r.kode)+"\n    ")])]),t._v(" "),e("td",{staticClass:"border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"},[e("span",{staticClass:"bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v(t._s(r.nama_supplier)+" ("+t._s(r.supplier)+")")])]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("span",{staticClass:"bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400"},[t._v("\n    "+t._s(r.operator)+"\n  ")])]),t._v(" "),e("td",{staticClass:"border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"},["LUNAS"===r.visa?e("span",{staticClass:"bg-green-100 text-green-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v("\n"+t._s(r.visa)+"\n")]):e("span",{staticClass:"bg-red-100 text-red-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"},[t._v("\n"+t._s(r.visa)+"\n")])]),t._v(" "),e("td",{staticClass:"border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"},[t._v("\n"+t._s(t.$roundup(r.diskon))+"\n")]),t._v(" "),e("td",{staticClass:"border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"},[t._v("\n"+t._s(t.$roundup(r.tax))+"\n")]),t._v(" "),e("td",{staticClass:"border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-right"},[t._v("\n"+t._s(t.$format(r.jumlah))+"\n")]),t._v(" "),r.token!==t.token.token&&"VICKY ANDRIANI"!==r.name?e("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left"}):t._e()])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);