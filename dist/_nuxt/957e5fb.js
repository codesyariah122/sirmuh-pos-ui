(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{787:function(t,e,r){"use strict";r.r(e);var n={props:{item:{type:Object,default:function(){return{}}},timelines:{type:Array,default:function(){return[]}}},methods:{generateLunas:function(data){return 1==data.lunas||"LUNAS"===data.visa?'<i class="fa-solid fa-check fa-lg text-emerald-600"></i>':'<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>'}}},d=r(8),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("tr",{staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[e("th",{staticClass:"whitespace-nowrap p-4 text-lg",attrs:{scope:"row"}},[t._v("\n    "+t._s(t.$moment(t.item.tanggal).format("LL"))+"\n  ")]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("span",{staticClass:"bg-blue-100 me-2 px-2.5 py-0.5 text-blue-800 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[t._v("\n      "+t._s(t.item.kode)+"\n    ")])]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("span",{staticClass:"bg-indigo-100 text-indigo-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400"},[t._v("\n      "+t._s(t.item.kas_kode)+" ("+t._s(t.item.kas_nama)+")\n    ")])]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right"},[t._v("\n    "+t._s(t.$format(t.item.jumlah))+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right"},[t._v("\n    "+t._s(t.$format(t.item.bayar))+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right"},[t._v("\n    "+t._s(t.$format(t.item.diterima))+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right"},[t._v("\n    "+t._s(t.item.kembali?t.$format(t.item.kembali):t.$format(t.item.diterima-t.item.bayar))+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-lg text-center"},[e("span",{domProps:{innerHTML:t._s(t.generateLunas({lunas:t.item.lunas,visa:t.item.visa}))}})]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-right"},[t._v("\n    "+t._s(t.$format(t.item.hutang))+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n    "+t._s(t.$roundup(t.item.tempo)>0?"".concat(t.$roundup(t.item.tempo),"  Hari"):"-")+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4"},[t._v("\n    "+t._s(t.$roundup(t.item.tempo)>0?t.$moment(t.item.tanggal).add(t.item.tempo,"days").format("LL"):"-")+"\n  ")]),t._v(" "),e("td",{staticClass:"px-6 py-4 text-center"},[t._v("\n    "+t._s("undefined"!==t.item.keterangan?t.item.keterangan:"-")+"\n  ")]),t._v(" "),e("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[e("span",{staticClass:"bg-green-100 text-green-800 me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"},[t._v("\n      "+t._s(t.item.operator)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports}}]);