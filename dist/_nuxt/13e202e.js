(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{716:function(t,e,r){"use strict";var n=r(5),l=r(364).values;n({target:"Object",stat:!0},{values:function(t){return l(t)}})},839:function(t,e,r){"use strict";r.r(e);r(15),r(716);var n={props:{timelines:{type:Array,default:function(){return[]}},timeTitle:{type:String,default:null}},computed:{groupedTimelines:function(){var t=this.timelines.reduce((function(t,e){var r=e.kode_barang;return t[r]||(t[r]=[]),t[r].push(e),t}),{});return Object.values(t)}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",t._l(t.groupedTimelines,(function(r){return e("li",{key:r.kode_barang,staticClass:"mb-10 ms-4"},[e("div",{staticClass:"absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"}),t._v(" "),e("time",{staticClass:"mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500"},[e("span",{staticClass:"bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[t._v("\n        "+t._s(t.timeTitle)+" "+t._s(t.$capitalize(r[0].nama_barang))+" ("+t._s(r[0].kode_barang)+")\n      ")])]),t._v(" "),e("h3",{staticClass:"text-lg font-semibold text-gray-900 dark:text-white"},[t._v("\n      Subtotal : "+t._s(t.$format(r.reduce((function(t,e){return t+parseFloat(e.subtotal)}),0)))+"\n    ")]),t._v(" "),e("p",{staticClass:"text-base font-normal text-gray-500 dark:text-gray-400"},[t._v("\n      QTY : "+t._s(r.reduce((function(t,e){return t+parseFloat(e.qty)}),0))+" "+t._s(r[0].satuan)+"\n    ")]),t._v(" "),e("p",{staticClass:"mb-4 text-base font-normal text-gray-500 dark:text-gray-400"},[t._v("\n      Harga Satuan : "+t._s(t.$format(r[0].harga_satuan))+"\n    ")]),t._v(" "),e("p",{staticClass:"mb-4 text-base font-normal text-gray-500 dark:text-gray-400"},[t._v("\n      Supplier : "),e("span",{staticClass:"bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v("\n        "+t._s(r[0].supplier)+"\n      ")])]),t._v(" "),e("p",{staticClass:"mb-4 text-base font-normal text-gray-500 dark:text-gray-400"},[t._v("\n      Alamat Suplier : ")]),e("address",[t._v(t._s(t.$capitalize(r[0].alamat_supplier)))]),t._v(" "),e("p")])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);