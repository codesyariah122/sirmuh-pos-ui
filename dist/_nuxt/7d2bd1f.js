(window.webpackJsonp=window.webpackJsonp||[]).push([[60,35],{615:function(t,e,n){"use strict";n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return f}));var l=[{id:1,title:"fullname"},{id:2,title:"Photo"},{id:3,title:"username"},{id:4,title:"role"},{id:5,title:"email"},{id:6,title:"phone number"},{id:7,title:"status"},{id:8,title:"last login"},{id:9,title:"expires in"},{id:10,title:"is login"}],o=[{id:1,title:"role name"},{id:2,title:"users"}],r=[{id:1,title:"fullname"},{id:2,title:"email"},{id:3,title:"phone number"},{id:4,title:"status"}],c=[{id:1,title:"kode"},{id:2,title:"nama"},{id:3,title:"photo"},{id:4,title:"tanggal beli"},{id:5,title:"kategori"},{id:6,title:"satuan beli"},{id:7,title:"satuan"},{id:8,title:"isi"},{id:9,title:"stok"},{id:10,title:"harga beli"},{id:11,title:"harga jual"},{id:12,title:"diskon"},{id:13,title:"supplier"},{id:14,title:"barcode"},{id:15,title:"expired"}],d=[{id:1,title:"kode"},{id:2,title:"description"}],h=[{id:1,title:"image"},{id:2,title:"name"},{id:3,title:"no.rek"},{id:4,title:"owner"},{id:5,title:"status"},{id:6,title:"type"}],f=[{id:1,title:"image"},{id:2,title:"name"},{id:3,title:"no.rek"},{id:4,title:"owner"},{id:5,title:"status"},{id:6,title:"type"}]},618:function(t,e,n){"use strict";n.r(e);var l={props:["links","paging","category"],data:function(){return{laquo:"<i class='fa-solid fa-chevron-left'></i>",raquo:"<i class='fa-solid fa-chevron-right'></i>"}},methods:{fetchAllData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.category_id;this.$emit("fetch-data",t,e,n,l)}}},o=l,r=n(5),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("nav",{attrs:{"aria-label":"Page navigation example z-0"}},[e("ul",{staticClass:"flex list-style-none"},t._l(t.links,(function(link,n){return e("div",{key:n},["&laquo; Previous"===link.label?e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  ".concat(t.paging.current>1?"cursor-pointer text-white bg-blueGray-800":"pointer-events-none text-blueGray-800"," focus:shadow-none"),attrs:{tabindex:"-1","aria-disabled":"true"},domProps:{innerHTML:t._s(t.laquo)},on:{click:function(e){t.fetchAllData(t.paging.current-=1)}}})]):link.active?e("li",{staticClass:"page-item active"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded hover:text-white hover:bg-blueGray-800 shadow-md focus:shadow-md ".concat(link.active?"pointer-events-none text-white bg-blueGray-800":"cursor-pointer text-blueGray-900"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])]):"Next &raquo;"===link.label?e("li",{class:"page-item ".concat(t.paging.current===t.paging.last?"disabled":"")},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ".concat(t.paging.current===t.paging.last?"pointer-events-none text-blueGray-800":"cursor-pointer text-white bg-blueGray-800"),domProps:{innerHTML:t._s(t.raquo)},on:{click:function(e){t.fetchAllData(t.paging.current+=1)}}})]):e("li",{staticClass:"page-item"},[e("a",{class:"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-blueGray-900 font-semibold hover:text-blueGray-700 hover:bg-blueGray-800 focus:shadow-none ".concat(link.active?"pointer-events-none":"cursor-pointer"),on:{click:function(e){t.fetchAllData(parseInt(link.label))}}},[t._v(t._s(link.label))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},657:function(t,e,n){"use strict";n.r(e);var l=n(130),o=(n(59),n(36),n(25),n(49),n(11),n(35),n(615)),r=n(610),c={name:"kategori-barang",layout:"admin",data:function(){return{loading:null,options:"",success:null,message_success:"",headers:Object(l.a)(o.d),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],links:[],paging:{current:null,from:null,last:null,per_page:null,total:null}}},created:function(){this.checkNewData()},mounted:function(){this.getKategoriBarang(),this.checkUserLogin()},methods:{handleFilterKategoriBarang:function(param,t){"data-kategori"===t&&this.getKategoriBarang(1,param)},getKategoriBarang:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,param=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(r.c)({api_url:"".concat(this.api_url,"/data-kategori?page=").concat(e).concat(param.kode?"&keywords="+param.kode:""),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){var e,n,l,o,r,c,d,h=[];null==data||null===(e=data.data)||void 0===e||e.map((function(t){var e={kode:null==t?void 0:t.kode,description:null==t?void 0:t.description};h.push(e)})),t.items=[].concat(h),t.links=null==data||null===(n=data.meta)||void 0===n?void 0:n.links,t.paging.current=null==data||null===(l=data.meta)||void 0===l?void 0:l.current_page,t.paging.from=null==data||null===(o=data.meta)||void 0===o?void 0:o.from,t.paging.last=null==data||null===(r=data.meta)||void 0===r?void 0:r.last_page,t.paging.per_page=null==data||null===(c=data.meta)||void 0===c?void 0:c.per_page,t.paging.total=null==data||null===(d=data.meta)||void 0===d?void 0:d.total})).catch((function(t){return console.log(t)}))},deletedBank:function(t){var e=this;this.loading=!0,this.options="delete-bank",Object(r.b)({api_url:"".concat(this.api_url,"/fitur/bank-management/").concat(t),token:this.token.token,api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(data){data.success&&(e.$toast.show("Bank data successfully move to trash !",{type:"info",duration:5e3,position:"top-right",icon:"circle-exclamation"}),e.success=!0,e.scrollToTop())})).finally((function(){setTimeout((function(){e.loading=!1,e.options=""}),1e3)})).catch((function(t){return console.log(t)}))},closeSuccessAlert:function(){this.success=!1,this.message=""}},watch:{notifs:function(){this.$_.size(this.notifs)>0&&this.getKategoriBarang(this.paging.current)},dataNotifs:function(){this.$_.size(this.notifs)>0&&(this.token.token===this.tokenLogins&&(this.message_success=this.messageNotif),this.getKategoriBarang())}}},d=c,h=n(5),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{staticClass:"w-full mb-12 px-4"},[e("cards-card-table",{attrs:{color:"dark",title:"KATEGORI BARANG",types:"data-kategori",queryType:"KATEGORI BARANG",queryMiddle:"kategori-barang",headers:t.headers,columns:t.items,loading:t.loading,success:t.success,messageAlert:t.message_success},on:{"filter-data":t.handleFilterKategoriBarang,"close-alert":t.closeSuccessAlert,"deleted-data":t.deletedBank}}),t._v(" "),e("div",{staticClass:"mt-6 -mb-2"},[e("div",{staticClass:"flex justify-center items-center"},[e("molecules-pagination",{attrs:{links:t.links,paging:t.paging},on:{"fetch-data":t.getKategoriBarang}})],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:n(620).default,MoleculesPagination:n(618).default})}}]);