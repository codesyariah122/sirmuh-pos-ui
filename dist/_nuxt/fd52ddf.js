(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{787:function(t,e,n){"use strict";n.r(e);n(25),n(19),n(27);var r={props:{columns:{type:[Array,Object],default:function(){return{}}},parentRoute:{type:String,default:null},typeRoute:{type:String,default:null},types:{type:String},paging:{type:[Array,Object],default:function(){return{}}}},data:function(){return{image_url:"https://sirmuh.api.dksindo.com/storage",userData:[],name:""}},beforeMount:function(){this.authTokenStorage()},mounted:function(){this.checkUserLogin()},methods:{deletedData:function(t){this.$emit("deleted-data",t)},restoredData:function(t){this.$emit("restored-data",t)},checkUserLogin:function(){var t=this;if(this.$_.isObject(this.token)){var e,n="".concat(this.api_url,"/user-data"),r={headers:{Accept:"application/json",Authorization:"Bearer ".concat(null==this||null===(e=this.token)||void 0===e?void 0:e.token),"Content-Type":"application/json","Sirmuh-Key":"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}};this.$api.get(n,r).then((function(e){var n,data=e.data;t.userData=null==data?void 0:data.data,t.name=null==data||null===(n=data.data)||void 0===n?void 0:n.name})).catch((function(t){console.log(t)}))}else this.$swal({icon:"error",title:"Oops...",text:"Error Access!"}),this.$router.replace("/")}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("tbody",t._l(t.columns,(function(n){return e("tr",{key:n.id},[e("td",{staticClass:"p-4 text-left text-lg border-l-2 border-r-2 w-90"},[null!==n.nama?e("span",{staticClass:"bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v("\n        "+t._s(n.nama)+"\n      ")]):e("span",{staticClass:"bg-yellow-100 text-yellow-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400"},[t._v("\n        (Tidak ada kategori)\n      ")])]),t._v(" "),"KG"===n.satuan?e("td",{staticClass:"whitespace-nowrap p-8 text-lg border-l-2 border-r-2"},[t._v("\n      "+t._s(t.$convweight(n.total))+"\n    ")]):e("td",{staticClass:"whitespace-nowrap p-8 text-lg border-l-2 border-r-2"},[t._v("\n      "+t._s(t.$roundup(n.total))+" ("+t._s(n.satuan)+")\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);