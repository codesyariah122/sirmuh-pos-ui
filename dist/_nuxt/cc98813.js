(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{835:function(t,e,r){"use strict";r.r(e);var n={props:{timelines:{type:Array,default:function(){return[]}},item:{type:Object,default:function(){return{}}},timeTitle:{type:String,default:null}}},d=r(8),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",t._l(t.timelines,(function(r){return e("li",{key:r.id,staticClass:"mb-10 ms-4"},[e("div",{staticClass:"absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"}),t._v(" "),e("time",{staticClass:"mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"},[t._v("\n      "+t._s(t.timeTitle)+" "+t._s(r.angsuran_ke)+"\n    ")]),t._v(" "),e("h3",{staticClass:"text-lg font-semibold text-gray-900 dark:text-white"},[t._v("\n      Dibayarkan : "+t._s(t.$format(r.bayar_angsuran))+"\n    ")]),t._v(" "),e("h3",{staticClass:"text-lg font-semibold text-gray-900 dark:text-white"},[t._v("\n      Dari kas : "),null!==r.kas?e("span",{staticClass:"bg-indigo-100 text-indigo-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400"},[t._v("\n        "+t._s(r.kas)+"\n      ")]):e("span",[t._v("Kas transaksi")])]),t._v(" "),e("p",{staticClass:"mb-4 mt-2 text-base font-normal text-gray-500 dark:text-gray-400"},[t._v("\n      Sisa Hutang : "+t._s(t.$format(r.jumlah))+"\n    ")]),t._v(" "),e("p",{staticClass:"mb-4 text-base font-normal text-gray-500 dark:text-gray-400"},[t._v("\n      Dibayarkan oleh : "),parseFloat(r.bayar_angsuran)>0?e("span",{staticClass:"bg-green-100 text-green-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v(" "+t._s(r.operator))]):t._e()]),t._v(" "),e("p",{staticClass:"mb-4 text-base font-normal text-gray-500 dark:text-gray-400"},[t._v("\n      Dibayarkan di tanggal : "),e("time",{attrs:{datetime:t.$moment(r.created_at).format("L")}},[t._v("\n        "+t._s(t.$moment(r.created_at).format("LLLL"))+"\n      ")])]),t._v(" "),e("div",{staticClass:"mt-4 flex justify-start space-x-6"},[t._m(0,!0),t._v(" "),e("div",[e("article",[t._v("\n          "+t._s(r.keterangan)+"\n        ")])])])])})),0)}),[function(){var t=this._self._c;return t("div",[t("span",[this._v("Keterangan : ")])])}],!1,null,null,null);e.default=component.exports}}]);