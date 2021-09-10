<template>
  <q-page>
    <main-content></main-content>
    <most-popular-games> </most-popular-games>
    <about-us id="about"></about-us>
    <careers></careers>
  </q-page>
</template>

<script>
import mainContent from "components/MainContent.vue";
import aboutUs from "components/AboutUs.vue";
import mostPopularGames from "components/MostPopularGames.vue";
import careers from "components/Careers.vue";
export default {
  data() {
    return {
      animationObject: {
        classes: "flash",
        duration: 3000,
        iteration: 10000
      }
    };
  },

  components: { mainContent, mostPopularGames, aboutUs, careers }
};
</script>
<style></style>
