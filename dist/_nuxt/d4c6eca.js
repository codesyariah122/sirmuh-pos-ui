(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{679:function(t,e,l){t.exports=l.p+"img/team-2-800x800.3e08ef1.jpg"},682:function(t,e,l){"use strict";l.r(e);l(62),l(115),l(15);var r=l(679),n=l.n(r),o={props:{item:{type:Object,default:function(){return{}}},title:{type:String},current:{type:String,default:null},stringRoute:{type:String,default:null},parentRoute:{type:String,default:null},typeRoute:{type:String,default:null},selectedRoute:{type:String,default:null},types:{type:String,default:null}},data:function(){return{image_url:"https://sirmuh.api.dksindo.com/storage",team2:n.a}},methods:{redirectUpload:function(t,e){this.$router.push({path:"/dashboard/".concat(this.parentRoute,"/").concat(this.types,"/upload/").concat(t),query:{type:e,current:this.current}})}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&this.$nuxt.notifs.find((function(t){return"profile"===t.routes}))&&this.prepareProfileData(!1)}}},c=l(8),component=Object(c.a)(o,(function(){var t,e,r,n,o,c,d=this,m=d._self._c;return m("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-24"},[m("div",{staticClass:"px-6"},[m("div",{staticClass:"flex flex-wrap justify-center"},[m("div",{staticClass:"w-full px-4 flex justify-center"},[m("div",{staticClass:"relative"},[d.item.photo?m("img",{staticClass:"shadow-xl rounded-full h-36 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px",attrs:{alt:d.title,src:"".concat(d.image_url,"/").concat(null===(t=d.item)||void 0===t?void 0:t.photo)}}):m("div",[m("img",{staticClass:"shadow-xl rounded-full h-36 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px",attrs:{src:l(152),alt:"no-photo-barang"}}),d._v(" "),m("button",{staticClass:"mt-2 ml-24 px-3 py-2 font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800",attrs:{type:"button"},on:{click:function(t){return d.redirectUpload(d.item.id,"upload-gambar")}}},[m("i",{staticClass:"fa-solid fa-plus"}),d._v("   Upload Gambar\n          ")])])])]),d._v(" "),m("div",{staticClass:"w-full px-4 text-center mt-20"},[m("div",{staticClass:"flex justify-center py-4 lg:pt-4 pt-8"},[m("div",{staticClass:"mr-2 p-6 text-center"},[m("span",{staticClass:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},[d._v("\n          "+d._s(d.$roundup(d.item.toko))+"\n        ")]),d._v(" "),m("span",{staticClass:"text-sm text-blueGray-400"},[d._v("Stok")])]),d._v(" "),m("div",{staticClass:"mr-2 p-6 text-center"},[m("span",{staticClass:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},[d._v("\n        "+d._s(d.item.satuanbeli)+"\n      ")]),d._v(" "),m("span",{staticClass:"text-sm text-blueGray-400"},[d._v("Satuan Beli")])]),d._v(" "),m("div",{staticClass:"lg:mr-2 p-3 text-center"},[m("span",{staticClass:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},[m("img",{staticClass:"w-10",attrs:{src:"".concat(d.image_url,"/qrcodes/").concat(d.item.kode_barcode,".png"),alt:d.item.kode_barcode}})]),d._v(" "),m("span",{staticClass:"text-sm text-blueGray-400"},[d._v("Barcode")])])])])]),d._v(" "),m("div",{staticClass:"text-center mt-6"},[m("h3",{staticClass:"text-xl font-semibold leading-normal mb-2 text-blueGray-700"},[d._v("\n    "+d._s(d.$capitalize(d.title))+"\n  ")]),d._v(" "),m("div",{staticClass:"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"},[m("i",{staticClass:"fa-solid fa-layer-group mr-2 text-lg text-blueGray-400"}),d._v("\n  Kategori - "+d._s(null===(e=d.item)||void 0===e?void 0:e.kategori)+"\n")]),d._v(" "),m("div",{staticClass:"mb-2 text-blueGray-600 mt-10"},[m("i",{staticClass:"fa-solid fa-boxes-packing mr-2 text-lg text-blueGray-400"}),d._v("\n  Supplier -\n  "+d._s((null===(r=d.item)||void 0===r||null===(r=r.suppliers)||void 0===r||null===(r=r[0])||void 0===r?void 0:r.nama)||d.item.supplier||d.item.supplier)+"\n")]),d._v(" "),m("div",{staticClass:"mb-2 text-blueGray-600"},[m("i",{staticClass:"fa-solid fa-table-list mr-2 text-lg text-blueGray-400"}),d._v("\n  Kategori -\n  "+d._s((null===(n=d.item)||void 0===n||null===(n=n.kategoris)||void 0===n||null===(n=n[0])||void 0===n?void 0:n.kode)||(null===(o=d.item)||void 0===o?void 0:o.kategori)||d.item.kategori)+"\n")]),d._v(" "),m("div",{staticClass:"mb-2 text-blueGray-600"},[m("i",{staticClass:"fa-solid fa-coins mr-2 text-lg text-blueGray-400"}),d._v("\n  Harga Beli -\n  "+d._s(d.$format(null===(c=d.item)||void 0===c?void 0:c.hpp))+"\n")])]),d._v(" "),m("div",{staticClass:"mt-10 py-10 border-t border-blueGray-200 text-center"},[m("div",{staticClass:"flex flex-wrap justify-center"},[m("div",{staticClass:"w-full lg:w-9/12 px-4"},[m("p",{staticClass:"mb-4 text-lg leading-relaxed text-blueGray-700"},[d._v("\n        "+d._s(d.item.ket?d.item.ket:"Belum ada keterangan ...")+"\n      ")]),d._v(" "),m("a",{staticClass:"font-normal text-emerald-500",attrs:{href:"javascript:void(0);"}},[d._v("\n        Show more\n      ")])])])]),d._v(" "),m("div",{staticClass:"mt-10 py-10 border-t border-bluGray-400 text-center"},[m("div",{staticClass:"flex flex-wrap justify-center"},[m("div",{staticClass:"w-full lg:w-9/12 px-4"},[m("button",{staticClass:"text-white bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none",attrs:{type:"button"},on:{click:function(t){return d.$router.push({path:"/dashboard/".concat(d.parentRoute,"/").concat(d.selectedRoute,"?current=").concat(d.current)})}}},[m("i",{staticClass:"fa-solid fa-arrow-left"}),d._v(" Kembali\n    ")])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);