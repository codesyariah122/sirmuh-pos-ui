(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{909:function(t,e,l){"use strict";l.r(e);l(27),l(637);var n={name:"cetak-return-pembelian",layout:"admin",data:function(){return{showModal:!1,kode:this.$route.query.kode,routePath:this.$route.path,stringRoute:null,typeRoute:null,loading:null,options:"",success:null,message_success:"",cetakStorage:localStorage.getItem("cetak_code")?JSON.parse(localStorage.getItem("cetak_code")):null,api_url:"https://sirmuh.api.dksindo.com/api/v1",items:[],links:[],paging:{current:null,from:null,last:null,per_page:null,total:null}}},created:function(){this.checkNewData()},mounted:function(){this.getItemPembelianLangsung()},methods:{getItemPembelianLangsung:function(){null!==this.cetakStorage||this.cetakStorage.ref_code===this.kode?console.log(this.cetakStorage.ref_code):this.$router.push("/dashboard/transaksi/jual/penjualan-toko")}}},o=l(8),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"flex flex-wrap mt-12"},[t("div",{staticClass:"w-full mb-12 px-4"},[t("cards-card-table",{attrs:{color:"dark",title:"CETAK RETURN PENJUALAN - ".concat(this.kode),types:"cetak",queryType:"CETAK_RETURN_PENJUALAN",queryMiddle:"cetak-return-penjualan"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardTable:l(642).default})}}]);