<template>
  <q-page>
    <main-content></main-content>
    <most-popular-games> </most-popular-games>
    <about-us></about-us>
    <careers></careers>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
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
  components: { mainContent, mostPopularGames, aboutUs, careers },
  methods: {}
};
</script>
<style></style>
