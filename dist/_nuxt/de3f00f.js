(window.webpackJsonp=window.webpackJsonp||[]).push([[153,43,182,187],{670:function(t,e,n){"use strict";n.d(e,"b",(function(){return r.a})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return d}));var r=n(672),o=n(18),l=(n(70),n(15),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),c=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},672:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(18),o=(n(70),n(15),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=9;break}throw new Error("Data not found!");case 9:return t.next=11,o.json();case 11:return l=t.sent,t.abrupt("return",l);case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}())},682:function(t,e,n){"use strict";n.r(e);var r=n(152),o=(n(53),n(42),n(15),n(18)),l=n(14),c=(n(70),n(344),n(37),n(36),n(670)),d=n(225),h=(n(345),{components:{Datepicker:d.a},data:function(){var t;return t={playSound:!1,startPembelianSound:!1,errorPembelianSound:!1,options:"purchase-order",loadingReferenceCode:null,loadingItem:null,loadingDelete:null,loadingSupplier:null,loadingSaldo:null,datePickerConfig:{range:!1},dateFormat:"YYYY-MM-DD",loading:null},Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(t,"options",null),"api_url","https://sirmuh.api.dksindo.com/api/v1"),"api_token","JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"),"keperluans",[]),"barangs",[]),"barangCarts",[]),"listDraftCarts",[]),"currentPage",1),"changeAgain",!1),"selectedBarang",null),Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(t,"selectedBarangDest",null),"selectedKodeKas",null),"selectedSupplier",null),"selectedKeperluan","CETAK"),"showKembali",null),"loadingKembali",null),"showGantiHarga",null),"diskonByBarang",0),"lastItemPemakaianId",null),"masukHutang",null),Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(t,"hutang","Rp. 0"),"showDp",!0),"showBayar",!0),"bayarDpRp","Rp. 0"),"initialHarga",0),"initialQty",0),"saldo_hutang",0),"detail",{}),"input",{tanggal:"",reference_code:this.$route.params.kode,id_pemakaian:this.$route.query.query,bayar:null,barang:null,qty:0,diskon:0,ppn:0,total:"Rp. 0",biaya_operasional:"Rp. 0",harga_proses:"Rp. 0",supplier:Number(this.$route.query.supplier),pembayaran:"custom",kode_kas:null,jatuhTempo:0,hutang:0,kembaliRupiah:"Rp. 0",bayarDp:0,biayabongkar:0,keterangan:""}),"draftItems",[]),Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(t,"products",[]),"readySubmit",!1),"error",!1),"editingItemId",null),"editingQtyId",null),"editingOrderQtyId",null),"validation",[]),"total",0),"bayar",0),"biaya_operasional",0),Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(t,"harga_proses",0),"kembali","Rp. 0"),"dpAwal","Rp. 0"),"terbilang","Nol Rupiah"),"terbilangDp","Nol Rupiah"),"addQty",!1),"qtyById",1),"formatCalculateRupiah",0),"changeSupplierShow",!1),"draft",!1),Object(l.a)(Object(l.a)(t,"pembayarans",[{id:"cash",text:"cash"},{id:"custom",text:"custom"}]),"activeTab","")},watch:{draftItems:function(t){t.length>0&&(this.activeTab=t[0].id)}},beforeMount:function(){this.authTokenStorage()},mounted:function(){this.checkItemPemakaian(!0),this.checkItemPembelian(!0),this.getBarangDests(),this.getJenisKeperluan()},methods:{clearBayar:function(){this.input.bayar=null,this.input.bayarDp=null},clearHarga:function(t){t.harga_beli=null},transformJenisKeperluan:function(t){return t.filter((function(t){return t&&t.id})).map((function(t){return{id:t.kode,text:"".concat(t.kode)}}))},getJenisKeperluan:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=1,o=1;case 3:if(!(r<=o)){e.next=12;break}return e.next=6,Object(c.b)({api_url:"".concat(t.api_url,"/jenis-keperluan"),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,n=n.concat(null==data?void 0:data.data),o=null==data||null===(l=data.meta)||void 0===l?void 0:l.last_page,r++,e.next=3;break;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n().then((function(data){t.keperluans=t.transformJenisKeperluan(data)})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},checkItemPemakaianDestResult:function(t){var e=this;this.loadingItem=t,this.$nuxt.globalLoadingMessage="Proses pengecekan item pemakaian ...";var n="/item-pemakaian-dest-result/".concat(this.input.reference_code),r={headers:{Authorization:"Bearer ".concat(this.token.token)}};this.$api.get(n,r).then((function(t){var data=t.data;if(data.success){var n=e.transformItemPembelian(null==data?void 0:data.data);void 0!==n&&n.length>0&&(e.listDraftCarts=n,e.input.keterangan="Pemakaian barang ".concat(e.selectedKeperluan," ").concat(e.input.reference_code))}})).catch((function(t){e.loadingItem=!1})).finally((function(){e.loadCalculatePemakaian(),setTimeout((function(){e.loadingItem=!1}),500)}))},checkItemPembelian:function(t){var e=this;this.loadingItem=t,this.$nuxt.globalLoadingMessage="Proses pengecekan item pemakaian ...";var n="/item-pemakaian-dest/".concat(this.input.reference_code),r={headers:{Authorization:"Bearer ".concat(this.token.token)}};this.$api.get(n,r).then((function(t){var data=t.data;if(data.success){var n=e.transformItemPembelian(null==data?void 0:data.data);void 0!==n&&n.length>0&&(e.listDraftCarts=n,e.loadCalculatePemakaian(),e.barangCarts=[])}})).catch((function(t){e.loadingItem=!1})).finally((function(){setTimeout((function(){e.loadingItem=!1}),500)}))},checkItemPemakaian:function(t){var e=this;this.loadingItem=t,this.$nuxt.globalLoadingMessage="Proses pengecekan item pemakaian ...";var n="/item-pemakaian-result/".concat(this.input.reference_code),r={headers:{Authorization:"Bearer ".concat(this.token.token)}};this.$api.get(n,r).then((function(t){var data=t.data;if(data.success){e.loadingItem=!1;var n,r,o,l,c=e.transformOriginBarang(null==data?void 0:data.data);if(void 0!==c&&c.length>0)e.detail=null==data?void 0:data.detail,e.selectedKeperluan=null==data||null===(n=data.detail)||void 0===n?void 0:n.keperluan,e.input.reference_code=null==data||null===(r=data.detail)||void 0===r?void 0:r.kode,e.input.keterangan=0===e.listDraftCarts.length?null==data||null===(o=data.detail)||void 0===o?void 0:o.keterangan:"",e.input.tanggal=e.$moment(null==data||null===(l=data.detail)||void 0===l?void 0:l.tanggal,"YYYY-MM-DD HH:mm:ss").toDate(),e.draftItems=c,e.activeTab=e.draftItems[0].id,e.loadCalculatePemakaian()}})).catch((function(t){console.log(t)})).finally((function(){setTimeout((function(){e.loadingItem=!1}),1e3)}))},gantiQty:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t&&(this.editingQtyId=t),e&&(this.editingQtyId=e)},changeBarangDest:function(t){this.loadingItem=!0,t&&void 0!==t.id?this.getDetailBarangDest(null==t?void 0:t.id):console.log("Value Is Null")},setInitialQty:function(t){t.qty=null,this.initialQty=t.qty},changeGantiQty:function(t,e,n){var r=t.target.value;"Escape"===t.key?(this.showGantiQty=!1,this.input.qty=n.qty,n.qty=this.initialQty,this.editingQtyId=null):"Enter"===t.key?(this.showGantiQty=!1,this.input.qty=r,n.qty=r,this.editingQtyId=null,this.updateItemPemakaian(e)):this.input.qty=Number(r)},updateItemPemakaian:function(t){var e=this,n=this.listDraftCarts.filter((function(e){return e.id===t}))[0],r={kode:this.input.reference_code,qty:this.input.qty?parseFloat(this.input.qty):parseFloat(n.qty),harga:this.input.harga?parseFloat(this.input.harga):parseFloat(n.harga_beli)},o="/item-pemakaian-dest/".concat(t),l={headers:{Accept:"application/json",Authorization:"Bearer ".concat(this.token.token)}};this.$api.put(o,r,l).then((function(t){t.data.success&&console.log("Successfully")})).finally((function(){e.checkItemPemakaianDestResult(!1),e.readySubmit=!0})).catch((function(t){console.log(t)}))},transformOriginBarang:function(t){var e=this;return t.map((function(t){return{id:t.id,nama:t.nama,kode:t.kode_pemakaian,kode_barang:t.kode,satuan:t.satuan,harga:null!=t&&t.harga?parseFloat(null==t?void 0:t.harga):e.$roundup(t.hpp),qty:isNaN(t.qty)?0:Number(t.qty),supplier_id:t.id_supplier,nama_supplier:t.nama_supplier,supplier:t.supplier,total:null!==t.qty?parseFloat(t.total):parseFloat(t.hpp)}}))},transformItemPembelian:function(t){var e=this;return void 0!==t&&t.length>0?t.map((function(t){e.lastItemPembelianId=t.id,e.diskonByBarang=e.$roundup(t.diskon);var n=t.qty;t.qty=n>1?n:0;var r=t.qty>1?t.qty*parseFloat(t.harga):parseFloat(t.harga);return e.supplierId=t.supplier_id,{id:t.id,id_barang:t.id_barang,nama:t.nama,kode_barang:t.kode,kode:t.kode_pemakaian,satuan:t.satuan,harga_beli:parseFloat(t.harga),qty:Number(t.qty),formatCalculateRupiah:r,supplier_id:t.supplier_id,nama_supplier:t.nama_supplier,supplier:t.supplier}})):(this.diskonByBarang=this.$roundup(t.diskon),this.supplierId=t.supplier_id,{id:t.id,nama:t.nama,kode_barang:t.kode,kode:t.kode_pemakaian,satuan:t.satuan,harga_beli:this.$roundup(t.harga),qty:Number(t.qty),formatCalculateRupiah:t.formatCalculateRupiah,supplier_id:t.supplier_id,nama_supplier:t.nama_supplier,supplier:t.supplier})},transformBarangDest:function(t){var e={id:t.id,nama:t.nama,kode:t.kode,kode_barang:t.kode,satuan:t.satuan,harga_beli:parseFloat(t.hpp),qty:Number(t.qty),formatCalculateRupiah:t.formatCalculateRupiah,supplier_id:t.id_supplier,nama_supplier:t.nama_supplier,supplier:t.supplier};return this.supplierId=t.id_supplier,e},inputKeterangan:function(t){this.input.keterangan=t.target.value},transformBarangDestLists:function(t){return t.filter((function(t){return t&&t.kode})).map((function(t){return{id:t.id,text:"".concat(t.nama," - ").concat(t.kategori," (").concat(t.kode,")")}}))},getBarangDests:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!0,n=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=1,o=1,l="CETAK"===t.selectedKeperluan?"/barang-cetak-pemakaian":"";case 4:if(!(r<=o)){e.next=13;break}return e.next=7,Object(c.b)({api_url:"".concat(t.api_url).concat(l),token:t.token.token,api_key:t.api_token});case 7:data=e.sent,n=n.concat(null==data?void 0:data.data),o=null==data||null===(d=data.meta)||void 0===d?void 0:d.last_page,r++,e.next=4;break;case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n().then((function(data){t.barangs=t.transformBarangDestLists(data)})).finally((function(){setTimeout((function(){t.loading=!1}),500)})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},getDetailBarangDest:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var data,r,o,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.b)({api_url:"".concat(e.api_url,"/data-barang/").concat(t),token:e.token.token,api_key:e.api_token});case 2:(data=n.sent)&&null!=data&&data.data&&(r=null==data?void 0:data.data,o=e.transformBarangDest(r),l=o.id,d=o.qty,o.id=l,o.qty=d>1?d:0,o.formatCalculateRupiah=o.qty>1?o.qty*o.hpp:o.hpp,r.id===t?e.$swal({icon:"error",title:"Oops...",text:"".concat(o.nama,", sudah ditambahkan!!")}):(e.listDraftCarts.length>0?(e.listDraftCarts.push(o),e.draftItemPembelian(!0,!0,l)):(e.barangCarts.push(o),e.draftItemPembelian(!1,!1,l)),setTimeout((function(){e.qtyDrafts=e.listDraftCarts.map((function(t){return{id:t.id,id_barang:t.id_barang,kode:t.kode,last_qty:t.qty}}))}),500),e.showBayar=!1));case 4:case"end":return n.stop()}}),n)})))()},deletedBarangCarts:function(t){var e=this;this.loadingDelete=!0,this.selectedBarang=null;var n="/item-pemakaian-dest/".concat(t),r={headers:{Authorization:"Bearer ".concat(this.token.token)}};this.$api.delete(n,r).then((function(n){n.data.success&&(e.listDraftCarts=e.listDraftCarts.filter((function(e){return e.id!==t})),e.barangCarts=e.barangCarts.filter((function(e){return e.id!==t})),e.showGantiHarga=!1,e.selectedBarang=null,e.checkItemPemakaianDestResult(!0))})).finally((function(){setTimeout((function(){e.loadingDelete=!1}),500)})).catch((function(t){console.log(t)}))},pad:function(t){return t<10?"0"+t:t},simpanPemakaianBarang:function(t){var e=this;this.loading=!t,this.startPembelianSound=!0,this.$nuxt.globalLoadingMessage="Proses menyimpan pemakaian barang ...",this.options="pemakaian-barang";var n="/pemakaian-barang/".concat(this.input.id_pemakaian),r={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}},o={draft:(this.draft,!0),keperluan:this.selectedKeperluan,keterangan:this.input.keterangan,total:this.total,biaya_operasional:this.biaya_operasional,harga_proses:this.harga_proses};console.log(o),this.$api.put(n,o,r).then((function(t){var data=t.data;null!=data&&data.error&&(e.errorPembelianSound=!0,e.$swal({icon:"error",title:"Oops...",text:"Something went wrong!"})),null!=data&&data.success&&(e.playSound=!0,e.$swal({position:"top-end",icon:"success",title:null==data?void 0:data.message,showConfirmButton:!1,timer:1500}),setTimeout((function(){e.loading=!1;e.$router.push({path:"/dashboard/backoffice/pemakaian-barang",query:{kode:e.input.reference_code}})}),1500))})).finally((function(){e.loading=!1})).catch((function(t){console.log(t),e.loading=!1,e.error=!0,e.errorPembelianSound=!0,e.$swal({title:"Data belum lengkap?",text:"Periksa kembali kolom input data!!",icon:"question"}),e.validation=t.response.data}))},draftItemPembelian:function(t,e){var n,r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}};n=e?{draft:t,kode:"Object"==typeof this.input.reference_code.length?this.input.reference_code[0]:this.input.reference_code,kode_kas:this.input.kode_kas,supplierId:this.supplierId,barangs:this.listDraftCarts.filter((function(t){return t.id===o})).map((function(t,e){return{id:t.id,kode:t.kode,kode_barang:t.kode_barang,qty:t.qty,last_qty:t.last_qty,harga_beli:t.harga_beli,diskon:r.input.diskon,ppn:r.input.ppn,supplier_id:t.supplier_id}}))}:{draft:t,kode:this.input.reference_code,kode_kas:this.input.kode_kas,supplierId:this.supplierId,barangs:this.barangCarts.map((function(t,e){return{id:t.id,kode:t.kode,kode_barang:t.kode,qty:t.qty,last_qty:t.last_qty,harga_beli:t.harga_beli,diskon:r.input.diskon,ppn:r.input.ppn,supplier_id:t.supplier_id}}))},this.$api.post("/item-pemakaian-dest",n,l).then((function(t){var data=t.data;null!=data&&data.error&&(r.errorPembelianSound=!0,r.$swal({icon:"error",title:"Oops...",text:data.message})),null!=data&&data.draft&&(r.draft=!0,r.lastItemPembelianId=null==data?void 0:data.itempembelian_id)})).finally((function(){r.checkItemPemakaianDestResult(!1),r.loading=!1})).catch((function(t){console.log(t)}))},loadCalculatePemakaian:function(){this.biaya_operasional=1e3*this.listDraftCarts.reduce((function(t,e){return parseFloat(e.qty)>1?t+e.qty:t+parseFloat(e.qty)}),0),this.harga_proses=this.draftItems.reduce((function(t,e){return t+e.total}),0)+this.biaya_operasional,console.log(this.harga_proses),this.total=this.biaya_operasional,this.input.biaya_operasional=this.$format(this.biaya_operasional),this.input.total=this.$format(this.biaya_operasional),this.input.harga_proses=this.$format(this.harga_proses),this.generateKembali(this.input.diskon,this.biaya_operasional,this.biaya_operasional)},generateKembali:function(){var t=arguments,e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,l,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:0,o=t.length>1&&void 0!==t[1]?t[1]:0,l=t.length>2&&void 0!==t[2]?t[2]:0,n.next=5,Object(c.b)({api_url:"".concat(e.api_url,"/load-form-penjualan/").concat(r,"/").concat(o,"/").concat(l),token:e.token.token,api_key:e.api_token});case 5:data=n.sent,e.terbilang=null==data?void 0:data.terbilang;case 7:case"end":return n.stop()}}),n)})))()}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}}),f=h,m=n(8),component=Object(m.a)(f,(function(){var t,e,n=this,o=n._self._c;return o("div",[n._m(0),n._v(" "),o("div",{staticClass:"flex justify-between space-x-6"},[o("div",{staticClass:"break-words bg-transparent w-96 mb-6 shadow-sm rounded"},[o("div",[o("div",{staticClass:"flex justify-start space-x-0"},[o("div",{staticClass:"hidden"},[n.playSound?o("audio",{attrs:{autoplay:"",src:"".concat(n.$nuxt.soundUrl,"/pembelian-notification.mp3"),preload:"auto"}}):n._e()]),n._v(" "),o("div",{staticClass:"hidden"},[n.startPembelianSound?o("audio",{attrs:{autoplay:"",src:"".concat(n.$nuxt.soundUrl,"/sweet_text.mp3"),preload:"auto"}}):n._e()]),n._v(" "),o("div",{staticClass:"hidden"},[n.errorPembelianSound?o("audio",{attrs:{autoplay:"",src:"".concat(n.$nuxt.soundUrl,"/error.mp3"),preload:"auto"}}):n._e()]),n._v(" "),n._m(1),n._v(" "),o("div",{staticClass:"shrink-0 w-full"},[o("div",{staticClass:"flex justify-between space-x-2"},[o("div",{staticClass:"shrink-0 w-30 text-black"},[o("input",{directives:[{name:"model",rawName:"v-model",value:n.input.reference_code,expression:"input.reference_code"}],attrs:{type:"text"},domProps:{value:n.input.reference_code},on:{input:function(t){t.target.composing||n.$set(n.input,"reference_code",t.target.value)}}})]),n._v(" "),o("div",{staticClass:"flex-none w-30"},[o("datepicker",{style:{width:"100%",height:"10vh"},attrs:{config:n.datePickerConfig,placeholder:"Tanggal Penjualan",format:n.dateFormat},on:{input:function(t){return n.handleTanggalPenjualan(t)}},model:{value:n.input.tanggal,callback:function(t){n.$set(n.input,"tanggal",t)},expression:"input.tanggal"}})],1)])])])]),n._v(" "),o("div",[o("div",{staticClass:"flex justify-start space-x-0"},[o("div",{staticClass:"flex-none w-36"},[o("h4",{class:"font-bold text-md ".concat(n.changeAgain?"text-emerald-600":"")},[n._v("\n          "+n._s(n.changeAgain?"Pilih Lagi Produk":"Pilih Produk")+"\n        ")])]),n._v(" "),o("div",{staticClass:"shrink-0 w-60 text-black"},[o("Select2",{attrs:{settings:{allowClear:!0,dropdownCss:{top:"auto",bottom:"auto"}},options:[{id:null,text:"Pilih Barang Jadi"}].concat(Object(r.a)(n.barangs)),placeholder:"Pilih Barang Jadi"},on:{change:function(t){return n.changeBarangDest(t)},select:function(t){return n.changeBarangDest(t)}},model:{value:n.selectedBarangDest,callback:function(t){n.selectedBarangDest=t},expression:"selectedBarangDest"}})],1)]),n._v(" "),n.error&&null!==(t=n.validation)&&void 0!==t&&t.barangs?o("div",{staticClass:"mt-6 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[o("span",{staticClass:"font-medium"},[n._v("Danger alert!")]),n._v("\n    "+n._s(null===(e=n.validation)||void 0===e?void 0:e.barangs[0])+"\n  ")]):n._e()]),n._v(" "),o("div",[o("div",{staticClass:"flex justify-start space-x-0 py-6"},[n._m(2),n._v(" "),o("div",{staticClass:"shrink-0 w-full"},[o("label",{staticClass:"block mb-2 text-sm font-medium dark:",attrs:{for:"keterangan"}},[n._v("Keterangan")]),n._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:n.input.keterangan,expression:"input.keterangan"}],staticClass:"block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{id:"keterangan",rows:"4",placeholder:"Tambahkan keterangan..."},domProps:{value:n.input.keterangan},on:{input:[function(t){t.target.composing||n.$set(n.input,"keterangan",t.target.value)},function(t){return n.inputKeterangan(t)}]}})])])]),n._v(" "),o("div",[o("div",{staticClass:"flex justify-start space-x-0 mt-4"},[n._m(3),n._v(" "),o("div",{staticClass:"shrink-0 w-full"},[o("div",{staticClass:"relative mb-3"},[o("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"keperluan"}},[n._v("\n      Jenis Keperluan\n    ")]),n._v(" "),o("Select2",{attrs:{id:"keperluan",settings:{allowClear:!0},options:[{id:null,text:"Jenis Keperluan"}].concat(Object(r.a)(n.keperluans)),placeholder:"Jenis Keperluan"},on:{change:function(t){return n.changeJenisKeperluan(t)},select:function(t){return n.changeJenisKeperluan(t)}},model:{value:n.selectedKeperluan,callback:function(t){n.selectedKeperluan=t},expression:"selectedKeperluan"}})],1),n._v(" "),n.validation.keperluan?o("div",{staticClass:"w-full w-12/12"},[o("div",[o("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[o("i",{staticClass:"fa-solid fa-circle-info"}),n._v(" "),o("div",{staticClass:"px-2"},[n._v("\n          "+n._s(n.validation.keperluan[0])+"\n        ")])])])]):n._e()])])])]),n._v(" "),o("div",[o("div",{staticClass:"flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400",attrs:{role:"alert"}},[o("svg",{staticClass:"flex-shrink-0 inline w-4 h-4 me-3",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"}},[o("path",{attrs:{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"}})]),n._v(" "),o("span",{staticClass:"sr-only"},[n._v("Info")]),n._v(" "),o("div",[n._v("\n      Item Barang Pemakaian Barang.\n    ")])]),n._v(" "),o("div",[o("tabs",{attrs:{options:{useUrlFragment:!1,defaultTabHash:n.draftItems.length>0?n.draftItems[0].id:1}}},n._l(n.draftItems,(function(t,e){return o("tab",{key:t.id,attrs:{name:t.nama,id:t.id}},[o("div",{staticClass:"flex justify-start items-center overflow-x-auto"},[o("div",[o("div",{staticClass:"relative overflow-x-auto shadow-md sm:rounded-lg"},[o("table",{staticClass:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},[o("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[o("tr",[o("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[n._v("\n            Nama Barang\n          ")]),n._v(" "),o("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[n._v("\n          Qty\n        ")]),n._v(" "),o("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[n._v("\n        Harga\n      ")]),n._v(" "),o("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[n._v("\n      Subtotal\n    ")])])]),n._v(" "),o("tbody",n._l(n.draftItems.filter((function(e){return e.id===t.id})),(function(e){return o("tr",{key:e.id,staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[o("th",{staticClass:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white font-bold",attrs:{scope:"row"}},[n._v("\n    "+n._s(e.nama)+"\n  ")]),n._v(" "),o("td",{staticClass:"whitespace-nowrap px-6 py-4"},[o("div",{staticClass:"flex justify-center space-x-2"},[o("div",[n._v("\n        "+n._s(parseFloat(e.qty))+" "+n._s(t.satuan)+"\n      ")])])]),n._v(" "),o("td",{staticClass:"px-6 py-4"},[o("div",{staticClass:"flex justify-between space-x-2"},[o("div",[n._v("\n        "+n._s(n.$format(e.harga))+"\n      ")])])]),n._v(" "),o("td",{staticClass:"px-6 py-4"},[n._v("\n    "+n._s(n.$format(e.total))+"\n  ")])])})),0)])])])])])})),1)],1)])]),n._v(" "),o("div",{staticClass:"bg-transparent mb-4 shadow-sm rounded w-full overflow-x-auto overflow-y-auto"},[n.selectedBarangDest&&n.$_.size(n.listDraftCarts)>0?o("div",{staticClass:"flex-none w-full mb-2 mt-2"},[o("div",{staticClass:"flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",attrs:{role:"alert"}},[o("svg",{staticClass:"flex-shrink-0 inline w-4 h-4 me-3",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"}},[o("path",{attrs:{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"}})]),n._v(" "),o("span",{staticClass:"sr-only"},[n._v("Info")]),n._v(" "),o("div",[n._v("\n     List Produksi Barang "+n._s(n.selectedKeperluan)+"\n   ")])])]):n._e(),n._v(" "),o("div",[o("table",{staticClass:"w-full text-md border-collapse border-b"},[n._m(4),n._v(" "),o("tbody",[n._l(n.listDraftCarts,(function(t){return o("tr",{key:t.id,staticClass:"bg-transparent border-b"},[o("th",{staticClass:"w-80 whitespace-nowrap p-4 text-lg border-l-2 border-r-2",attrs:{scope:"row"}},[o("span",{staticClass:"bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 text-lg rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[n._v("\n    "+n._s(t.nama)+"("+n._s(t.kode_barang)+")\n  ")])]),n._v(" "),n.editingQtyId===t.id?o("td",{staticClass:"px-6 py-4 border-l-2 border-r-2 text-lg w-90"},[o("div",{staticClass:"flex justify-between space-x-2"},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.qty,expression:"item.qty"}],attrs:{type:"text"},domProps:{value:t.qty},on:{input:[function(e){e.target.composing||n.$set(t,"qty",e.target.value)},function(e){return n.changeGantiQty(e,t.id,t)}],keydown:[function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:n.changeGantiQty(e,t.id,t)},function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"enter",13,e.key,"Enter")?null:n.changeGantiQty(e,t.id,t)}],focus:function(e){return n.setInitialQty(t)}}})]),n._v(" "),o("div",[o("button",{staticClass:"px-3 py-3 text-xs font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800",on:{click:function(e){return n.updateItemPemakaian(t.id)}}},[o("i",{staticClass:"fa-solid fa-floppy-disk fa-lg"})])])])]):o("td",{staticClass:"px-6 py-4 text-lg border-l-2 border-r-2 w-90"},[o("div",{staticClass:"flex justify-between whitespace-nowrap space-x-6 text-lg"},[o("div",[n._v("\n      "+n._s(parseFloat(t.qty))+" "+n._s(t.satuan)+"\n    ")]),n._v(" "),o("div",[o("button",{staticClass:"px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",on:{click:function(e){return n.gantiQty(t.id,null)}}},[o("i",{staticClass:"fa-solid fa-repeat fa-sm"})])])])]),n._v(" "),o("td",{staticClass:"px-10 py-4 text-lg border-l-2 border-r-2 text-center w-60"},[n.lastItemPembelianId?o("button",{staticClass:"font-medium text-blue-600 dark:text-blue-500 hover:underline",on:{click:function(e){return n.deletedBarangCarts(t.id)}}},[o("i",{staticClass:"fa-solid fa-trash-can text-red-600 text-xl"})]):n._e()])])})),n._v(" "),n.loadingItem||n.loadingDelete||n.loadingSaldo?o("tr",[o("th",{staticClass:"px-6 py-4 font-medium whitespace-nowrap text-center overflow-x-hidden",attrs:{colspan:"3",scope:"row"}},[o("div",{attrs:{role:"status"}},[o("svg",{staticClass:"w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),n._v(" "),o("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),n._v(" "),o("span",{staticClass:"sr-only"},[n._v("Loading...")])]),n._v(" "),n.loadingItem?o("span",[n._v("Checking item pembelian ...")]):n._e(),n._v(" "),n.loadingDelete?o("span",[n._v("Loading item deleted ...")]):n._e(),n._v(" "),n.loadingSaldo?o("span",[n._v("Proses pengecekan saldo ...")]):n._e()])]):n._e()],2)])])]),n._v(" "),o("form",{on:{submit:function(t){return t.preventDefault(),n.simpanPemakaianBarang(!1)}}},[o("div",{staticClass:"bg-transparent shadow-sm rounded w-full flex justify-start space-x-4 mt-6"},[o("div",{staticClass:"shrink w-[80vw]"},[o("div",{staticClass:"grid grid-cols-1 bg-emerald-600 h-48 content-evenly justify-items-center"},[o("div",{staticClass:"col-span-full"},[o("h4",{staticClass:"font-bold text-4xl"},[n._v("\n        "+n._s(n.input.total)+"\n      ")])])]),n._v(" "),o("div",{staticClass:"grid grid-cols-1 h-12 bg-blueGray-700 text-white"},[o("div",{staticClass:"col-span-full p-2"},[o("h6",{staticClass:"text-lg font-bold"},[n._v("\n        "+n._s(n.terbilang?n.terbilang:"Nol Rupiah")+"\n      ")])])])]),n._v(" "),o("div",[o("ul",{staticClass:"w-80 text-sm font-medium bg-transparent"},[o("li",{staticClass:"w-full py-2"},[o("div",{staticClass:"grid grid-cols-3 gap-0"},[n._m(5),n._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:n.input.biaya_operasional,expression:"input.biaya_operasional"}],staticClass:"h-8 text-black",attrs:{type:"text",disabled:""},domProps:{value:n.input.biaya_operasional},on:{input:function(t){t.target.composing||n.$set(n.input,"biaya_operasional",t.target.value)}}})])])]),n._v(" "),o("li",{staticClass:"w-full py-2"},[o("div",{staticClass:"grid grid-cols-3 gap-0"},[n._m(6),n._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:n.input.harga_proses,expression:"input.harga_proses"}],staticClass:"h-8 text-black",attrs:{type:"text",disabled:""},domProps:{value:n.input.harga_proses},on:{input:function(t){t.target.composing||n.$set(n.input,"harga_proses",t.target.value)}}})])])])])])]),n._v(" "),o("div",{staticClass:"flex justify-end"},[o("div",[o("button",{staticClass:"bg-emerald-600 hover:bg-[#d6b02e] w-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 -mr-6 mt-6 mb-6 mb-2 focus:outline-none text-white",attrs:{disabled:!n.readySubmit}},[n.loading?o("div",[o("svg",{staticClass:"inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),n._v(" "),o("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"#1C64F2"}})]),n._v("\n    Loading...\n  ")]):o("div",[o("i",{staticClass:"fa-regular fa-floppy-disk"}),n._v(" Simpan Data\n  ")])])])])]),n._v(" "),n.loading?o("div",[o("molecules-row-loading",{attrs:{loading:n.loading,options:n.options}})],1):n._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-transparent mb-4 shadow-sm rounded"},[t("hr",{staticClass:"w-full"})])},function(){var t=this._self._c;return t("div",{staticClass:"flex-none w-36"},[t("h4",{staticClass:"font-bold text-md"},[this._v("Ref No")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex-none w-36"},[t("h4",{staticClass:"font-bold text-md"},[this._v("Keterangan")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex-none w-36"},[t("h4",{staticClass:"font-bold text-md"},[this._v("Jenis Keperluan")])])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"text-xs bg-transparent border-b border-t dark:border-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"},[e("tr",[e("th",{staticClass:"px-6 py-3"},[t._v("Barang")]),t._v(" "),e("th",{staticClass:"px-6 py-3 w-10"},[t._v("Qty")]),t._v(" "),e("th",[t._v("Action")])])])},function(){var t=this._self._c;return t("div",[t("label",{staticClass:"font-bold"},[this._v("Biaya Operasional")])])},function(){var t=this._self._c;return t("div",[t("label",{staticClass:"font-bold"},[this._v("Total Harga Proses")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesRowLoading:n(226).default})}}]);