(window.webpackJsonp=window.webpackJsonp||[]).push([[152,43,174,187],{670:function(t,e,n){"use strict";n.d(e,"b",(function(){return r.a})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return d}));var r=n(672),o=n(18),l=(n(70),n(15),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),c=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},672:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(18),o=(n(70),n(15),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=9;break}throw new Error("Data not found!");case 9:return t.next=11,o.json();case 11:return l=t.sent,t.abrupt("return",l);case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}())},681:function(t,e,n){"use strict";n.r(e);var r=n(152),o=(n(53),n(18)),l=n(14),c=(n(70),n(344),n(37),n(42),n(15),n(28),n(346),n(43),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(44),n(36),n(117),n(19),n(27),n(670)),d=n(225),h=(n(345),{components:{Datepicker:d.a},data:function(){var t;return t={playSound:!1,startPembelianSound:!1,errorPembelianSound:!1,options:"purchase-order",loadingReferenceCode:null,loadingItem:null,loadingDelete:null,loadingSupplier:null,loadingSaldo:null,datePickerConfig:{range:!1},dateFormat:"YYYY-MM-DD",loading:null},Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(t,"options",null),"api_url","https://sirmuh.api.dksindo.com/api/v1"),"api_token","JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"),"barangs",[]),"keperluans",[]),"barangCarts",[]),"listDraftCarts",[]),"currentPage",1),"changeAgain",!1),"selectedBarang",null),Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(t,"selectedKodeKas",null),"selectedSupplier",null),"selectedKeperluan","CETAK"),"supplierId",this.$route.query.supplier),"supplier",{}),"suppliers",[]),"kas",[]),"detailKas",{}),"showDetailKas",null),"loadingKas",null),Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(t,"showKembali",null),"loadingKembali",null),"showGantiHarga",null),"diskonByBarang",0),"lastItemPembelianId",null),"masukHutang",null),"hutang","Rp. 0"),"showDp",!0),"showBayar",!0),"bayarDpRp","Rp. 0"),Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(t,"initialHarga",0),"qtyDrafts",[]),"saldo_hutang",0),"input",{tanggal:new Date,reference_code:null,bayar:null,barang:null,qty:0,diskon:0,ppn:0,total:"Rp. 0",supplier:Number(this.$route.query.supplier),pembayaran:"custom",kode_kas:null,jatuhTempo:0,hutang:0,kembaliRupiah:"Rp. 0",bayarDp:0,biayabongkar:0}),"readySubmit",!1),"error",!1),"editingItemId",null),"editingQtyId",null),"validation",[]),"total",0),Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(t,"bayar",0),"kembali","Rp. 0"),"dpAwal","Rp. 0"),"terbilang","Nol Rupiah"),"terbilangDp","Nol Rupiah"),"addQty",!1),"qtyById",1),"formatCalculateRupiah",0),"changeSupplierShow",!1),"draft",!1),Object(l.a)(t,"pembayarans",[{id:"cash",text:"cash"},{id:"custom",text:"custom"}])},beforeMount:function(){this.authTokenStorage(),this.generateReferenceCode()},mounted:function(){this.getBarangLists(),this.checkItemPembelian(!0),this.getJenisKeperluan(),this.draftQtyById()},methods:{clearBayar:function(){this.input.bayar=null,this.input.bayarDp=null},clearHarga:function(t){t.harga_beli=null},draftQtyById:function(){this.listDraftCarts.length>0?this.qtyDrafts=this.listDraftCarts.map((function(t){return{id:t.id,id_barang:t.id_barang,kode:t.kode,last_qty:t.qty}})):this.qtyDrafts=this.barangCarts.map((function(t){return{id:t.id,id_barang:t.id_barang,kode:t.kode,last_qty:t.qty}}))},transformJenisKeperluan:function(t){return t.filter((function(t){return t&&t.id})).map((function(t){return{id:t.kode,text:"".concat(t.kode)}}))},getJenisKeperluan:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=1,o=1;case 3:if(!(r<=o)){e.next=12;break}return e.next=6,Object(c.b)({api_url:"".concat(t.api_url,"/jenis-keperluan"),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,n=n.concat(null==data?void 0:data.data),o=null==data||null===(l=data.meta)||void 0===l?void 0:l.last_page,r++,e.next=3;break;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n().then((function(data){t.keperluans=t.transformJenisKeperluan(data)})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},checkItemPembelian:function(t){var e=this;this.loadingItem=t,this.$nuxt.globalLoadingMessage="Proses pengecekan item pemakaian ...";var n=localStorage.getItem("ref_code")?JSON.parse(localStorage.getItem("ref_code")):null;if(n&&null!==(null==n?void 0:n.ref_code)){this.input.reference_code=n.ref_code;var o="/item-pemakaian/".concat(n&&null!==(null==n?void 0:n.ref_code)?null==n?void 0:n.ref_code:""),l={headers:{Authorization:"Bearer ".concat(this.token.token)}};this.$api.get(o,l).then((function(t){var data=t.data;if(data.success){var n=e.transformItemPembelian(null==data?void 0:data.data);void 0!==n&&n.length>0&&(e.input.reference_code=Object(r.a)(new Set(n.map((function(t){return t.kode})))),e.listDraftCarts=n,e.loadCalculateItemPembelianDetect(),e.input.keterangan=e.$_.isEmpty(n)?"":"Pemakaian barang ".concat(e.input.reference_code),e.barangCarts=[])}})).catch((function(t){console.log(t),e.loadingItem=!1})).finally((function(){setTimeout((function(){e.loadingItem=!1}),500)}))}else setTimeout((function(){e.loadingItem=!1}),1e3)},updateItemPemakaian:function(t){var e=this,n=this.listDraftCarts.filter((function(e){return e.id===t}))[0],r={kode:this.input.reference_code,qty:this.input.qty?parseFloat(this.input.qty):parseFloat(n.qty),harga:this.input.harga?parseFloat(this.input.harga):parseFloat(n.harga_beli)},o="/item-pemakaian/".concat(t),l={headers:{Accept:"application/json",Authorization:"Bearer ".concat(this.token.token)}};this.$api.put(o,r,l).then((function(t){t.data.success&&console.log("Successfully")})).finally((function(){e.checkItemPembelian(!1),e.readySubmit=!0})).catch((function(t){console.log(t)}))},generateReferenceCode:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loadingReferenceCode=!0,!(n=localStorage.getItem("ref_code")?JSON.parse(localStorage.getItem("ref_code")):null)||null===(null==n?void 0:n.ref_code)){e.next=7;break}t.input.reference_code=n.ref_code,setTimeout((function(){t.loadingReferenceCode=!1}),500),e.next=12;break;case 7:return e.next=9,Object(c.b)({api_url:"".concat(t.api_url,"/generate-reference-code/pemakaian-barang"),token:t.token.token,api_key:t.api_token});case 9:data=e.sent,r=null==data?void 0:data.data,null!=data&&data.success&&(o={ref_code:r.ref_code},localStorage.setItem("ref_code",JSON.stringify(o)),t.input.reference_code=r.ref_code,setTimeout((function(){t.loadingReferenceCode=!1}),500));case 12:case"end":return e.stop()}}),e)})))()},gantiQty:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t&&(this.editingQtyId=t),e&&(this.editingQtyId=e)},gantiHarga:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t&&(this.editingItemId=t),e&&(this.editingItemId=e)},setInitialHarga:function(t){this.initialHarga=t.harga_beli},updateQty:function(t,e){var n=this;if(e){var r=this.listDraftCarts.map((function(t){return t})).find((function(e){return e.id===t})),o=this.qtyDrafts.map((function(t){return t})).find((function(e){return e.id===t}));if(r){var l=Number(r.qty)>1?Number(r.qty):1;this.input.qty=l,this.input.last_qty=o&&o.qty?o.qty:null,r.qty=l,r.formatCalculateRupiah=l*r.harga_beli,this.total=this.listDraftCarts.reduce((function(t,e){return void 0===Number(e.harga_beli)||isNaN(Number(e.harga_beli))?t:parseFloat(e.qty)>1?t+e.formatCalculateRupiah:t+Number(e.harga_beli)}),0),this.input.total=this.$format(this.total),this.input.bayar=this.$format(this.total),this.generateKembali(this.input.diskon,this.total,this.total),this.recalculateJumlahRupiah(l,this.input.diskon),this.updateItemPemakaian(t),setTimeout((function(){n.showGantiQty=!1,n.editingQtyId=null,n.qtyDrafts=n.listDraftCarts.map((function(t){return{id:t.id,id_barang:t.id_barang,kode:t.kode,last_qty:t.qty}}))}),500)}else console.error("Item not found")}else{var c=this.barangCarts.map((function(t){return t})).find((function(e){return e.id===t}));if(c){var d=parseFloat(c.qty)>1?c.qty:1;this.input.qty=d,c.qty=d,c.formatCalculateRupiah=d*c.harga_beli,this.total=this.barangCarts.reduce((function(t,e){return void 0===Number(e.harga_beli)||isNaN(Number(e.harga_beli))?t:parseFloat(e.qty)>1?t+e.formatCalculateRupiah:t+Number(e.harga_beli)}),0),this.input.total=this.$format(this.total),this.input.bayar=this.$format(this.total),this.generateKembali(this.input.diskon,this.total,this.total),this.recalculateJumlahRupiah(d,this.input.diskon),this.draftItemPembelian(e,!1,t),setTimeout((function(){n.showGantiQty=!1,n.editingQtyId=null}),500)}else console.error("Item not found")}},changeGantiQty:function(t,e,n){var r=t.target.value;"Escape"===t.key?(this.showGantiQty=!1,this.input.qty=n.qty,n.qty=this.initialQty,this.editingQtyId=null):"Enter"===t.key?(this.showGantiQty=!1,this.input.qty=r,n.qty=r,this.editingQtyId=null,this.updateQty(n.id,!0)):this.input.qty=Number(r)},setInitialQty:function(t){t.qty=null,this.initialQty=t.qty},updateHarga:function(t,e){var n=this,r=this.input.harga;if(e){var o=this.listDraftCarts.map((function(t){return t})).find((function(e){return e.id===t}));o.harga_beli=this.$roundup(r),this.transformBarang(o),this.total=0,this.input.total=this.$format(this.total),this.input.bayar=this.$format(this.total),this.generateKembali(this.input.diskon,this.total,this.total),this.draftItemPembelian(e,!0,t),setTimeout((function(){n.editingItemId=null}),500)}else{var l=this.barangCarts.find((function(e){return e.id===t}));l.harga_beli=this.$roundup(r),this.transformBarang(l),this.total=0,this.input.total=this.$format(this.total),this.input.bayar=this.$format(this.total),this.generateKembali(this.input.diskon,this.total,this.total),this.draftItemPembelian(e,!1,t),setTimeout((function(){n.editingItemId=null}),500)}},changeBarang:function(t){this.loadingItem=!0,t&&void 0!==t.id?this.getDetailBarang(null==t?void 0:t.id):console.log("Value Is Null")},changeGantiHarga:function(t,e,n){var r=t.target.value;"Escape"===t.key?(this.showGantiHarga=!1,this.input.harga=Number(this.initialHarga),n.harga_beli=this.initialHarga,this.editingItemId=null):"Enter"===t.key?(this.showGantiHarga=!1,this.input.harga=Number(r),n.harga_beli=r,this.editingItemId=null,this.updateHarga(n.id,!0)):this.input.harga=Number(r)},changeBayar:function(t){var e=this;this.loadingKembali=!0,this.showKembali=!0;var n=Number(t.target.value),r=parseInt(this.input.total.replace(/[^0-9]/g,"")),o=n-r;this.readySubmit=!0,this.showDp?(this.input.hutang=0,this.masukHutang=!1,this.showKembali=!1,this.dpAwal="Dp Awal : ".concat(this.$format(n)),this.hutang=this.$format(n),this.input.kembali=null,this.generateDpTerbilang(this.input.diskon,n,n)):(this.input.hutang=0,this.input.kembali=this.$format(o),this.kembali="Kembali : RP. ".concat(o),this.input.kembaliRupiah=this.$format(o),this.masukHutang=!1),this.input.bayar=n,this.input.diterima=n,this.generateKembali(this.input.diskon,r,r),setTimeout((function(){e.loadingKembali=!1,e.checkSaldo(!1)}),1500)},transformBarangLists:function(t){return t.filter((function(t){return t&&t.kode})).map((function(t){return{id:t.id,text:"".concat(t.nama," - ").concat(t.kategori," (").concat(t.kode,")")}}))},transformItemPembelian:function(t){var e=this;return void 0!==t&&t.length>0?t.map((function(t){e.lastItemPembelianId=t.id,e.diskonByBarang=e.$roundup(t.diskon);var n=t.qty_asal;t.qty_asal=n>1?n:0;var r=t.qty_asal>1?t.qty_asal*t.harga_beli:t.harga_beli;return e.supplierId=t.supplier_id,{id:t.id,id_barang:t.id_barang,nama:t.nama,kode_barang:t.kode,kode:t.kode_pemakaian,satuan:t.satuan,harga_beli:parseFloat(t.harga_beli),qty:Number(t.qty_asal),formatCalculateRupiah:r,supplier_id:t.supplier_id,nama_supplier:t.nama_supplier,supplier:t.supplier}})):(this.diskonByBarang=this.$roundup(t.diskon),this.supplierId=t.supplier_id,{id:t.id,nama:t.nama,kode_barang:t.kode,kode:t.kode_pemakaian,satuan:t.satuan,harga_beli:this.$roundup(t.harga_beli),qty:Number(t.qty_asal),formatCalculateRupiah:t.formatCalculateRupiah,supplier_id:t.supplier_id,nama_supplier:t.nama_supplier,supplier:t.supplier})},transformBarang:function(t){this.diskonByBarang=this.$roundup(t.diskon);var e={id:t.id,nama:t.nama,kode:t.kode,kode_barang:t.kode,satuan:t.satuan,harga_beli:parseFloat(t.hpp),qty:Number(t.qty_asal),formatCalculateRupiah:t.formatCalculateRupiah,supplier_id:t.id_supplier,nama_supplier:t.nama_supplier,supplier:t.supplier};return this.supplierId=t.id_supplier,e},inputKeterangan:function(t){this.input.keterangan=t.target.value},getBarangLists:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!0,n=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=1,o=1;case 3:if(!(r<=o)){e.next=12;break}return e.next=6,Object(c.b)({api_url:"".concat(t.api_url,"/data-barang/?page=").concat(r),token:t.token.token,api_key:t.api_token});case 6:data=e.sent,n=n.concat(null==data?void 0:data.data),o=null==data||null===(l=data.meta)||void 0===l?void 0:l.last_page,r++,e.next=3;break;case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n().then((function(data){t.barangs=t.transformBarangLists(data)})).finally((function(){setTimeout((function(){t.loading=!1}),500)})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},getDetailBarang:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var data,r,o,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.b)({api_url:"".concat(e.api_url,"/data-barang/").concat(t),token:e.token.token,api_key:e.api_token});case 2:(data=n.sent)&&null!=data&&data.data&&(r=null==data?void 0:data.data,o=e.transformBarang(r),l=o.id,d=o.qty,o.id=l,o.qty=d>1?d:0,o.formatCalculateRupiah=o.qty>1?o.qty*o.hpp:o.hpp,r.id===t?e.$swal({icon:"error",title:"Oops...",text:"".concat(o.nama,", sudah ditambahkan!!")}):(e.listDraftCarts.length>0?(e.listDraftCarts.push(o),e.draftItemPembelian(!0,!0,l)):(e.barangCarts.push(o),e.draftItemPembelian(!1,!1,l)),setTimeout((function(){e.qtyDrafts=e.listDraftCarts.map((function(t){return{id:t.id,id_barang:t.id_barang,kode:t.kode,last_qty:t.qty}})),e.input.keterangan="Pembelian P.O ".concat(e.input.reference_code)}),500),e.showBayar=!1));case 4:case"end":return n.stop()}}),n)})))()},deletedBarangCarts:function(t){var e=this;this.loadingDelete=!0,this.selectedBarang=null;var n="/item-pemakaian/".concat(t),r={headers:{Authorization:"Bearer ".concat(this.token.token)}};this.$api.delete(n,r).then((function(n){n.data.success&&(e.listDraftCarts=e.listDraftCarts.filter((function(e){return e.id!==t})),e.barangCarts=e.barangCarts.filter((function(e){return e.id!==t})),e.showGantiHarga=!1,e.selectedBarang=null,e.checkItemPembelian(!0),e.loadCalculateItemPembelianDetect())})).finally((function(){setTimeout((function(){e.loadingDelete=!1}),500)})).catch((function(t){console.log(t)}))},pad:function(t){return t<10?"0"+t:t},recalculateTotalBayar:function(t){var e=this,n=this.total,r=n-n*(t/100);this.total=r,this.input.diskon=t,this.input.diskon_rupiah=r,this.input.total=this.$format(r),setTimeout((function(){e.draftItemPembelian(!0)}),500)},recalculateJumlahRupiah:function(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.total=this.barangCarts.reduce((function(t,e){return t+(e.formatCalculateRupiah||0)}),0);var e=t/100*this.total;this.total-=e;var n=this.input.ppn/100*this.total;this.total+=n,this.bayar=.8*this.total},checkSaldo:function(t){var e=this;if(null!==this.input.kode_kas){this.loadingSaldo=t,this.options="purchase-order";var n="/check-saldo/".concat(this.input.kode_kas,"?entitas=").concat(this.input.bayar),r={headers:{Authorization:"Bearer ".concat(this.token.token)}};this.$api.get(n,r).then((function(data){var t,n;null!=data&&null!==(t=data.data)&&void 0!==t&&t.error&&e.$swal({icon:"error",title:"Oops...",text:null==data||null===(n=data.data)||void 0===n?void 0:n.message})})).finally((function(){setTimeout((function(){e.loadingSaldo=!1}),500)})).catch((function(t){e.loadingSaldo=!1,console.log(t)}))}else this.$swal({icon:"error",title:"Oops...",text:"Pilih data kas terlebih dahulu"}),this.checkItemPembelian(!1)},simpanPembelian:function(t){var e=this;this.loading=!t,this.startPembelianSound=!0,this.$nuxt.globalLoadingMessage="Proses menyimpan pemakaian barang ...",this.options="pemakaian-barang";var n={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}},r={kode:"string"==typeof this.input.reference_code?this.input.reference_code:this.input.reference_code[0],draft:(this.draft,!0),keperluan:this.selectedKeperluan,keterangan:this.input.keterangan,total:this.total};this.$api.post("/pemakaian-barang",r,n).then((function(t){var data=t.data;null!=data&&data.error&&(e.errorPembelianSound=!0,e.$swal({icon:"error",title:"Oops...",text:"Something went wrong!"})),null!=data&&data.success&&(e.playSound=!0,e.$swal({position:"top-end",icon:"success",title:null==data?void 0:data.message,showConfirmButton:!1,timer:1500}),setTimeout((function(){e.loading=!1;e.$router.push({path:"/dashboard/backoffice/pemakaian-barang",query:{kode:e.input.reference_code}})}),1500))})).finally((function(){e.loading=!1})).catch((function(t){e.loading=!1,e.error=!0,e.errorPembelianSound=!0,e.$swal({title:"Data belum lengkap?",text:"Periksa kembali kolom input data!!",icon:"question"}),e.validation=t.response.data}))},draftItemPembelian:function(t,e){var n,r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token.token)}};n=e?{draft:t,kode:this.input.reference_code.length>0?this.input.reference_code[0]:this.input.reference_code,kode_kas:this.input.kode_kas,supplierId:this.supplierId,barangs:this.listDraftCarts.filter((function(t){return t.id===o})).map((function(t,e){return{id:t.id,kode:t.kode,kode_barang:t.kode_barang,qty:t.qty,last_qty:t.last_qty,harga_beli:t.harga_beli,diskon:r.input.diskon,ppn:r.input.ppn,supplier_id:t.supplier_id}}))}:{draft:t,kode:this.input.reference_code,kode_kas:this.input.kode_kas,supplierId:this.supplierId,barangs:this.barangCarts.map((function(t,e){return{id:t.id,kode:t.kode,kode_barang:t.kode,qty:t.qty,last_qty:t.last_qty,harga_beli:t.harga_beli,diskon:r.input.diskon,ppn:r.input.ppn,supplier_id:t.supplier_id}}))},console.log(n),this.$api.post("/item-pemakaian",n,l).then((function(t){var data=t.data;null!=data&&data.error&&(r.errorPembelianSound=!0,r.$swal({icon:"error",title:"Oops...",text:data.message})),null!=data&&data.draft&&(r.draft=!0,r.input.reference_code=null==data?void 0:data.data,r.lastItemPembelianId=null==data?void 0:data.itempembelian_id)})).finally((function(){r.checkItemPembelian(!1),r.loading=!1})).catch((function(t){console.log(t)}))},loadCalculateItemPembelianDetect:function(){this.total=this.listDraftCarts.reduce((function(t,e){return void 0===e.harga_beli||isNaN(e.harga_beli)?t:Number(e.qty)>1?t+e.formatCalculateRupiah:t+Number(e.harga_beli)}),0),this.input.total=this.$format(this.total),this.input.bayar=this.$format(this.total),this.generateKembali(this.input.diskon,this.total,this.total)},generateDpTerbilang:function(){var t=arguments,e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,l,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:0,o=t.length>1&&void 0!==t[1]?t[1]:0,l=t.length>2&&void 0!==t[2]?t[2]:0,n.next=5,Object(c.b)({api_url:"".concat(e.api_url,"/load-form-penjualan/").concat(r,"/").concat(o,"/").concat(l),token:e.token.token,api_key:e.api_token});case 5:data=n.sent,e.terbilangDp=null==data?void 0:data.terbilang;case 7:case"end":return n.stop()}}),n)})))()},generateKembali:function(){var t=arguments,e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,l,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:0,o=t.length>1&&void 0!==t[1]?t[1]:0,l=t.length>2&&void 0!==t[2]?t[2]:0,n.next=5,Object(c.b)({api_url:"".concat(e.api_url,"/load-form-penjualan/").concat(r,"/").concat(o,"/").concat(l),token:e.token.token,api_key:e.api_token});case 5:data=n.sent,e.terbilang=null==data?void 0:data.terbilang;case 7:case"end":return n.stop()}}),n)})))()}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}}),f=h,m=n(8),component=Object(m.a)(f,(function(){var t,e,n=this,o=n._self._c;return o("div",[n._m(0),n._v(" "),o("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-transparent w-96 mb-6 shadow-sm rounded"},[o("div",[o("div",{staticClass:"flex justify-start space-x-0"},[o("div",{staticClass:"hidden"},[n.playSound?o("audio",{attrs:{autoplay:"",src:"".concat(n.$nuxt.soundUrl,"/pembelian-notification.mp3"),preload:"auto"}}):n._e()]),n._v(" "),o("div",{staticClass:"hidden"},[n.startPembelianSound?o("audio",{attrs:{autoplay:"",src:"".concat(n.$nuxt.soundUrl,"/sweet_text.mp3"),preload:"auto"}}):n._e()]),n._v(" "),o("div",{staticClass:"hidden"},[n.errorPembelianSound?o("audio",{attrs:{autoplay:"",src:"".concat(n.$nuxt.soundUrl,"/error.mp3"),preload:"auto"}}):n._e()]),n._v(" "),n._m(1),n._v(" "),o("div",{staticClass:"shrink-0 w-full"},[o("div",{staticClass:"flex justify-between space-x-2"},[o("div",{staticClass:"shrink-0 w-30 text-black"},[o("input",{directives:[{name:"model",rawName:"v-model",value:n.input.reference_code,expression:"input.reference_code"}],attrs:{type:"text"},domProps:{value:n.input.reference_code},on:{input:function(t){t.target.composing||n.$set(n.input,"reference_code",t.target.value)}}})]),n._v(" "),o("div",{staticClass:"flex-none w-30"},[o("datepicker",{style:{width:"100%",height:"10vh"},attrs:{config:n.datePickerConfig,placeholder:"Tanggal Penjualan",format:n.dateFormat},on:{input:function(t){return n.handleTanggalPenjualan(t)}},model:{value:n.input.tanggal,callback:function(t){n.$set(n.input,"tanggal",t)},expression:"input.tanggal"}})],1)])])])]),n._v(" "),o("div",[o("div",{staticClass:"flex justify-start space-x-0 mt-6"},[o("div",{staticClass:"flex-none w-36"},[o("h4",{class:"font-bold text-md ".concat(n.changeAgain?"text-emerald-600":"")},[n._v("\n      "+n._s(n.changeAgain?"Pilih Lagi Produk":"Pilih Produk")+"\n    ")])]),n._v(" "),o("div",{staticClass:"shrink-0 w-60 text-black"},[o("Select2",{attrs:{settings:{allowClear:!0,dropdownCss:{top:"auto",bottom:"auto"}},options:[{id:null,text:"Pilih Barang"}].concat(Object(r.a)(n.barangs)),placeholder:"Pilih Barang"},on:{change:function(t){return n.changeBarang(t)},select:function(t){return n.changeBarang(t)}},model:{value:n.selectedBarang,callback:function(t){n.selectedBarang=t},expression:"selectedBarang"}})],1)]),n._v(" "),n.error&&null!==(t=n.validation)&&void 0!==t&&t.barangs?o("div",{staticClass:"mt-6 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[o("span",{staticClass:"font-medium"},[n._v("Danger alert!")]),n._v("\n"+n._s(null===(e=n.validation)||void 0===e?void 0:e.barangs[0])+"\n")]):n._e()]),n._v(" "),o("div",[o("div",{staticClass:"flex justify-start space-x-0 py-6"},[n._m(2),n._v(" "),o("div",{staticClass:"shrink-0 w-full"},[o("label",{staticClass:"block mb-2 text-sm font-medium dark:",attrs:{for:"keterangan"}},[n._v("Keterangan Beli")]),n._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:n.input.keterangan,expression:"input.keterangan"}],staticClass:"block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{id:"keterangan",rows:"4",placeholder:"Tambahkan keterangan...",disabled:!n.showDetailKas},domProps:{value:n.input.keterangan},on:{input:[function(t){t.target.composing||n.$set(n.input,"keterangan",t.target.value)},function(t){return n.inputKeterangan(t)}]}})])])]),n._v(" "),o("div",[o("div",{staticClass:"flex justify-start space-x-0 mt-4"},[n._m(3),n._v(" "),o("div",{staticClass:"shrink-0 w-full"},[o("div",{staticClass:"relative mb-3"},[o("label",{staticClass:"block uppercase text-blueGray-600 text-xs font-bold mb-2",attrs:{htmlFor:"keperluan"}},[n._v("\n      Jenis Keperluan\n    ")]),n._v(" "),o("Select2",{attrs:{id:"keperluan",settings:{allowClear:!0},options:[{id:null,text:"Jenis Keperluan"}].concat(Object(r.a)(n.keperluans)),placeholder:"Jenis Keperluan"},on:{change:function(t){return n.changeJenisKeperluan(t)},select:function(t){return n.changeJenisKeperluan(t)}},model:{value:n.selectedKeperluan,callback:function(t){n.selectedKeperluan=t},expression:"selectedKeperluan"}})],1),n._v(" "),n.validation.keperluan?o("div",{staticClass:"w-full w-12/12"},[o("div",[o("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[o("i",{staticClass:"fa-solid fa-circle-info"}),n._v(" "),o("div",{staticClass:"px-2"},[n._v("\n          "+n._s(n.validation.keperluan[0])+"\n        ")])])])]):n._e()])])])]),n._v(" "),o("div",{staticClass:"bg-transparent mb-4 shadow-sm rounded w-full overflow-x-auto overflow-y-auto"},[o("div",[o("table",{staticClass:"w-full text-md border-collapse border-b"},[n._m(4),n._v(" "),n.listDraftCarts.length>0?o("tbody",[n._l(n.listDraftCarts,(function(t,e){return o("tr",{key:e,staticClass:"bg-transparent border-b"},[o("th",{staticClass:"whitespace-nowrap p-4 text-lg",attrs:{scope:"row"}},[o("span",{staticClass:"bg-gray-100 text-gray-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500"},[n._v("\n      "+n._s(t.nama)+"("+n._s(t.kode_barang)+")\n    ")])]),n._v(" "),n.editingQtyId===t.id?o("td",{staticClass:"px-6 py-4"},[o("div",{staticClass:"flex justify-between space-x-2"},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.qty,expression:"draft.qty"}],staticClass:"w-20",attrs:{type:"text"},domProps:{value:t.qty},on:{input:[function(e){e.target.composing||n.$set(t,"qty",e.target.value)},function(e){return n.changeGantiQty(e,t.id,t)}],keydown:[function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:n.changeGantiQty(e,t.id,t)},function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"enter",13,e.key,"Enter")?null:n.changeGantiQty(e,t.id,t)}],focus:function(e){return n.setInitialQty(t)}}})]),n._v(" "),o("div",[o("button",{staticClass:"px-3 py-3 text-xs font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800",on:{click:function(e){return n.updateQty(t.id,!0)}}},[o("i",{staticClass:"fa-solid fa-floppy-disk fa-lg"})])])])]):o("td",{staticClass:"px-6 py-4"},[o("div",{staticClass:"flex justify-between whitespace-nowrap space-x-6 text-lg"},[o("div",[n._v("\n      "+n._s(parseFloat(t.qty))+" "+n._s(t.satuan)+"\n    ")]),n._v(" "),o("div",[o("button",{staticClass:"px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",on:{click:function(e){return n.gantiQty(t.id,null)}}},[o("i",{staticClass:"fa-solid fa-repeat fa-sm"})])])])]),n._v(" "),n.editingItemId===t.id?o("td",{staticClass:"px-6 py-4 text-black"},[o("div",{staticClass:"flex justify-between space-x-2"},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.harga_beli,expression:"draft.harga_beli"}],staticClass:"w-auto",attrs:{type:"text",min:"1"},domProps:{value:t.harga_beli},on:{input:[function(e){e.target.composing||n.$set(t,"harga_beli",e.target.value)},function(e){return n.changeGantiHarga(e,t.id,t)}],keydown:[function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:n.changeGantiHarga(e,t.id,t)},function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"enter",13,e.key,"Enter")?null:n.changeGantiHarga(e,t.id,t)}],focus:function(e){return n.setInitialHarga(t)}}})]),n._v(" "),o("div",[o("button",{staticClass:"px-3 py-3 text-xs font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800",on:{click:function(e){return n.updateHarga(t.id,!0)}}},[o("i",{staticClass:"fa-solid fa-floppy-disk fa-lg"})])])])]):o("td",{staticClass:"px-6 py-4"},[o("div",{staticClass:"flex justify-between space-x-2 text-right"},[o("div",{staticClass:"font-semibold"},[n._v("\n      "+n._s(n.$format(t.harga_beli))+"\n    ")]),n._v(" "),o("div",[o("button",{staticClass:"px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",on:{click:function(e){return n.gantiHarga(t.id,null)}}},[o("i",{staticClass:"fa-solid fa-repeat fa-lg"})])])])]),n._v(" "),o("td",{staticClass:"whitespace-nowrap p-4 text-lg"},[o("span",{staticClass:"bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 text-lg rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"},[n._v("\n  "+n._s(t.nama_supplier)+" ("+n._s(t.supplier)+")\n")])]),n._v(" "),o("td",{staticClass:"whitespace-nowrap p-4 text-lg text-right font-bold"},[n._v("\n  "+n._s(n.$format(t.harga_beli*t.qty))+"\n")]),n._v(" "),o("td",{staticClass:"px-10 py-4"},[n.lastItemPembelianId?o("button",{staticClass:"font-medium text-blue-600 dark:text-blue-500 hover:underline",on:{click:function(e){return n.deletedBarangCarts(t.id)}}},[o("i",{staticClass:"fa-solid fa-trash-can text-red-600 text-xl"})]):n._e()])])})),n._v(" "),n.loadingItem||n.loadingDelete||n.loadingSaldo?o("tr",[o("th",{staticClass:"px-6 py-4 font-medium whitespace-nowrap text-center overflow-x-hidden",attrs:{colspan:"3",scope:"row"}},[o("div",{attrs:{role:"status"}},[o("svg",{staticClass:"w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),n._v(" "),o("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),n._v(" "),o("span",{staticClass:"sr-only"},[n._v("Loading...")])]),n._v(" "),n.loadingItem?o("span",[n._v("Checking item pembelian ...")]):n._e(),n._v(" "),n.loadingDelete?o("span",[n._v("Loading item deleted ...")]):n._e(),n._v(" "),n.loadingSaldo?o("span",[n._v("Proses pengecekan saldo ...")]):n._e()])]):n._e()],2):n._e()])])]),n._v(" "),o("form",{on:{submit:function(t){return t.preventDefault(),n.simpanPembelian(!1)}}},[o("div",{staticClass:"bg-transparent shadow-sm rounded w-full flex justify-start space-x-4 mt-6"},[o("div",{staticClass:"shrink w-[80vw]"},[o("div",{staticClass:"grid grid-cols-1 bg-emerald-600 h-48 content-evenly justify-items-center"},[o("div",{staticClass:"col-span-full"},[o("h4",{staticClass:"font-bold text-4xl text-white"},[n._v("\n        "+n._s(n.showKembali?n.kembali:n.input.total)+"\n      ")])])]),n._v(" "),o("div",{staticClass:"grid grid-cols-1 h-12 bg-blueGray-700 text-white"},[o("div",{staticClass:"col-span-full p-2"},[o("h6",{staticClass:"text-lg font-bold text-white"},[n._v("\n        "+n._s(n.terbilang?n.terbilang:"Nol Rupiah")+"\n      ")])])])]),n._v(" "),o("div",[o("ul",{staticClass:"w-80 text-sm font-medium bg-transparent"},[o("li",{staticClass:"w-full py-2"},[o("div",{staticClass:"grid grid-cols-3 gap-0"},[n._m(5),n._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:n.input.total,expression:"input.total"}],staticClass:"h-8 text-black",attrs:{type:"text",disabled:""},domProps:{value:n.input.total},on:{input:function(t){t.target.composing||n.$set(n.input,"total",t.target.value)}}})])])])])])]),n._v(" "),o("div",{staticClass:"flex justify-end"},[o("div",[o("button",{staticClass:"bg-emerald-600 hover:bg-[#d6b02e] w-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 -mr-6 mt-6 mb-2 focus:outline-none text-white",attrs:{disabled:!n.readySubmit}},[n.loading?o("div",[o("svg",{staticClass:"inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600",attrs:{"aria-hidden":"true",role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),n._v(" "),o("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"#1C64F2"}})]),n._v("\n    Loading...\n  ")]):o("div",[o("i",{staticClass:"fa-regular fa-floppy-disk"}),n._v(" Simpan Data\n  ")])])])])]),n._v(" "),n.loading?o("div",[o("molecules-row-loading",{attrs:{loading:n.loading,options:n.options}})],1):n._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-transparent mb-4 shadow-sm rounded"},[t("hr",{staticClass:"w-full"})])},function(){var t=this._self._c;return t("div",{staticClass:"flex-none w-36"},[t("h4",{staticClass:"font-bold text-md"},[this._v("Ref No")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex-none w-36"},[t("h4",{staticClass:"font-bold text-md"},[this._v("Keterangan")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex-none w-36"},[t("h4",{staticClass:"font-bold text-md"},[this._v("Jenis Keperluan")])])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"text-xs bg-transparent border-b border-t dark:border-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"},[e("tr",[e("th",{staticClass:"px-6 py-3"},[t._v("Barang")]),t._v(" "),e("th",{staticClass:"px-6 py-3 w-10"},[t._v("Qty")]),t._v(" "),e("th",{staticClass:"px-6 py-3"},[t._v("Harga Beli")]),t._v(" "),e("th",{staticClass:"px-6 py-3"},[t._v("Supplier")]),t._v(" "),e("th",{staticClass:"px-6 py-3"},[t._v("Subtotal")]),t._v(" "),e("th",[t._v("Action")])])])},function(){var t=this._self._c;return t("div",[t("label",{staticClass:"font-bold"},[this._v("Total")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesRowLoading:n(226).default})}}]);