(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{680:function(t,e,l){"use strict";l.d(e,"a",(function(){return n}));var n=[{id:1,title:"tanggal"},{id:2,title:"no faktur"},{id:7,title:"jumlah"},{id:13,title:"supplier"},{id:8,title:"lunas"},{id:12,title:"operator"}]},920:function(t,e,l){"use strict";l.r(e);var n=l(149),o=(l(27),l(680)),r=(l(637),{name:"cetak-purchase-order",layout:"admin",data:function(){return{showModal:!1,kode:this.$route.query.kode,routePath:this.$route.path,stringRoute:null,typeRoute:null,loading:null,options:"",success:null,message_success:"",cetakStorage:localStorage.getItem("cetak_code")?JSON.parse(localStorage.getItem("cetak_code")):null,headers:Object(n.a)(o.a),api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],links:[],paging:{current:null,from:null,last:null,per_page:null,total:null}}},created:function(){this.checkNewData()},mounted:function(){this.getItemPembelianLangsung()},methods:{getItemPembelianLangsung:function(){null!==this.cetakStorage||this.cetakStorage.ref_code===this.kode?console.log(this.cetakStorage.ref_code):(console.log("di direct bro"),this.$router.push("/dashboard/transaksi/beli/pembelian-langsung"))}}}),c=l(8),component=Object(c.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"flex flex-wrap mt-12"},[t("div",{staticClass:"w-full mb-12 px-4"},[t("cards-card-table",{attrs:{color:"dark",title:"CETAK PURCHASE ORDER - ".concat(this.kode),types:"cetak",queryType:"CETAK_PURCHASE_ORDER",queryMiddle:"cetak-purchase-order"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:l(642).default})}}]);