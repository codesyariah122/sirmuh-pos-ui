(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{836:function(t,e,r){"use strict";r.r(e);r(344);var n={props:{item:{type:Object,default:function(){return{}}},timelines:{type:Array,default:function(){return[]}}},methods:{generateLunas:function(data){return 1==data.lunas||"LUNAS"===data.visa?'<i class="fa-solid fa-check fa-lg text-emerald-600"></i>':'<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>'}}},d=r(8),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("tr",{staticClass:"border-b border-gray-200 dark:border-gray-700 text-lg border-l-2 border-r-2"},[e("th",{staticClass:"p-4 text-lg border-l-2 border-r-2",attrs:{scope:"row"}},[t._v("\n  "+t._s(t.$moment(t.item.created_at).format("LLLL"))+"\n")]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg border-l-2 border-r-2"},[e("span",{staticClass:"bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 font-medium rounded border border-blue-400"},[t._v("\n  "+t._s(t.item.kode)+"\n")])]),t._v(" "),e("td",{staticClass:"p-4 text-lg border-l-2 border-r-2"},[e("span",{staticClass:"bg-indigo-100 text-indigo-800 text-md font-medium me-2 px-2.5 py-0.5 rounded border border-indigo-400"},[t._v("\n    "+t._s(t.item.kas_kode)+"\n  ")])]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg border-l-2 border-r-2"},[null!==t.item.kas_biaya?e("span",{staticClass:"bg-indigo-100 text-indigo-800 text-md font-medium me-2 px-2.5 py-0.5 rounded border border-indigo-400"},[t._v("\n    "+t._s(t.item.kas_biaya)+"\n  ")]):e("span",{staticClass:"text-center"},[t._v("-")])]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg border-l-2 border-r-2"},[t._v("\n  "+t._s(t.$format(t.item.biayabongkar))+"\n")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg border-l-2 border-r-2"},[t._v("\n  "+t._s(t.$format(t.item.jumlah))+"\n")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg border-l-2 border-r-2"},[t._v("\n  "+t._s(t.$format(t.item.diterima))+"\n")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg border-l-2 border-r-2"},[t._v("\n  "+t._s(null!==t.item.kembali?t.$format(t.item.kembali):t.$format(Number(t.item.diterima)-Number(t.item.jumlah)))+"\n")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-lg border-l-2 border-r-2 text-center"},[e("span",{domProps:{innerHTML:t._s(t.generateLunas({lunas:t.item.lunas,visa:t.item.visa}))}})]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right text-lg border-l-2 border-r-2"},[t._v("\n  "+t._s(t.$format(t.item.hutang))+"\n")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-center"},[t._v("\n  "+t._s("undefined"!==t.item.keterangan?t.item.keterangan:"-")+"\n")]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg border-l-2 border-r-2"},[e("span",{staticClass:"bg-green-100 me-2 px-2.5 py-0.5 text-green-800 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v("\n  "+t._s(t.item.operator)+"\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);