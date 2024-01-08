<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <cards-card-table
        color="dark"
        title="DATA BARANG"
        types="data-barang"
        queryType="DATA_BARANG"
        queryMiddle="barang"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :messageAlert="message_success"
        @filter-data="handleFilterBarang"
        @close-alert="closeSuccessAlert"
        @deleted-data="deleteBarang"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getBarangData"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jasa",
  layout: "admin",
};
</script>
