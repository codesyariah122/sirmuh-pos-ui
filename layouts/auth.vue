<template>
  <div>
    <main>
      <section class="relative w-screen h-screen py-40 min-h-screen">
        <div
        class="absolute top-0 w-screen h-full bg-slate-950 bg-cover bg-no-repeat bg-center"
        :style="`background-image: url('${bgImage}');`"
        ></div>
        <Nuxt />
      </section>
    </main>
  </div>
</template>
<script>
  import registerBg2 from "@/assets/img/bg-barokah-lim.png";

  export default {
    name: 'auth',
    data() {
      return {
        bgImage: registerBg2,
      };
    },
  };
</script>
