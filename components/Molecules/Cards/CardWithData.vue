<template>
  <ul>
    <li v-if="statDescripiron.type === 'TOTAL_USER'">
      <span
        class="mr-2"
        :class="[data.user_online ? 'text-emerald-600' : statPercentColor]"
      >
        <i
          v-if="data.user_online"
          class="fa-solid fa-circle text-success-600 text-xs"
        ></i>

        {{ data.user_online ? data.user_online : `-` }}
      </span>
      <span class="whitespace-nowrap text-emerald-600">
        <i class="fa-solid fa-user-check"></i>
        {{ statDescripiron.user_online }}</span
      >
      <ul>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i class="fa-solid fa-user-plus text-xs"></i>

            {{ data.admin ? data.admin : `0` }}
          </span>
          <span class="whitespace-nowrap">{{ statDescripiron.admin }}</span>
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i class="fa-solid fa-user-pen text-xs"></i>

            {{ data.kasir ? data.kasir : `0` }}
          </span>
          <span class="whitespace-nowrap">{{ statDescripiron.kasir }}</span>
        </li>
      </ul>
    </li>
    <li v-if="statDescripiron.type === 'TOTAL_BARANG'">
      <span class="text-blueGray-400 font-bold">
        {{ statDescripiron.total_barang }}
      </span>
      <br />
      <span
        class="mr-2"
        :class="[data.total_qty ? 'text-emerald-600' : statPercentColor]"
      >
        <i
          v-if="data.total_qty"
          class="fa-solid fa-boxes-stacked text-success-600 text-xs"
        ></i>

        {{ data.total_qty ? data.nama : `-` }}
        <span class="font-extrabold text-blueGray-400">:</span>
      </span>
      <span class="whitespace-nowrap text-emerald-600">
        {{ data.total_qty }} Barang</span
      >
    </li>
    <li>
      <hr class="my-4 md:min-w-full" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    statPercentColor: {
      type: String,
      default: "text-emerald-500",
    },
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
    statDescripiron: {
      type: Object,
      default: () => {
        return {};
      },
    },

    statPercent: {
      type: String,
      default: "3.48",
    },
  },
};
</script>
