<template>
  <q-page>
    <q-btn
      color="white"
      text-color="black"
      label="Standard"
      @click="scrollToElement()"
    />
    <main-content :reff="reff"></main-content>
    <most-popular-games @click="onClickChild"> </most-popular-games>
    <about-us></about-us>

    <h1 ref="deneme">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      perferendis repellat quaerat sequi nisi maiores adipisci, commodi earum a
      sint corporis similique in, obcaecati eaque? Atque dolorem, quod ipsam
      quae inventore minus soluta dicta obcaecati provident sequi incidunt
      possimus. Libero saepe possimus deserunt veritatis eligendi non in
      necessitatibus obcaecati deleniti!
    </h1>
    <h1 ref="mostPopu">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      perferendis repellat quaerat sequi nisi maiores adipisci, commodi earum a
      sint corporis similique in, obcaecati eaque? Atque dolorem, quod ipsam
      quae inventore minus soluta dicta obcaecati provident sequi incidunt
      possimus. Libero saepe possimus deserunt veritatis eligendi non in
      necessitatibus obcaecati deleniti!
    </h1>
  </q-page>
</template>

<script>
import mainContent from "components/MainContent.vue";
import aboutUs from "components/AboutUs.vue";
import mostPopularGames from "components/MostPopularGames.vue";
export default {
  data() {
    return {
      animationObject: {
        classes: "flash",
        duration: 3000,
        iteration: 10000
      },
      reff: null
    };
  },
  components: { mainContent, mostPopularGames, aboutUs },
  methods: {
    scrollToElement() {
      console.log(this.$refs);
      //   const el = this.$refs.mostPopu;
      //   if (el) {
      //     // Use el.scrollIntoView() to instantly scroll to the element
      //     el.scrollIntoView({ behavior: "smooth" });
    },
    onClickChild(value) {
      this.reff = value;
    }
  }
};
</script>
<style></style>
