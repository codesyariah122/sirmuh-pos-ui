<template>
  <!-- Header -->
  <div class="relative bg-purple-900 md:pt-32 pb-32 pt-24">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4"></div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="TOTAL USERS"
              :statTitle="`${totalUser}`"
              :data="userPerRole"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              :statDescripiron="{
                user_online: 'User is online',
                admin: 'User Admin',
                author: 'User Author',
                user: ' User Donation',
              }"
              statIconName="fas fa-users"
              statIconColor="bg-orange-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4"></div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="PERFORMANCE"
              statTitle="49,65%"
              statArrow="up"
              statPercent="12"
              statPercentColor="text-emerald-500"
              :statDescripiron="{ text: 'Since last month' }"
              statIconName="fas fa-percent"
              statIconColor="bg-emerald-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import fingerPrintIcon from "~/assets/icons/fingerprint.svg";

export default {
  components: {
    CardStats,
  },

  data() {
    return {
      api_url: process.env.NUXT_ENV_API_URL,
      dataPercent: {},
    };
  },

  mounted() {
    this.getTotalUser();
  },

  computed: {
    totalUser() {
      return this.$store.getters["totals/getTotalUser"];
    },

    userPerRole() {
      return this.$store.getters["totals/getUserPerRole"];
    },
  },
  watch: {
    notifs() {
      if (this.$_.size(this.notifs)) {
        this.getTotalUser();
      }
    },
  },
};
</script>
