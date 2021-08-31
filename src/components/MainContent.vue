<template>
  <div class="bg-image">
    <div padding class="q-pt-xl">
      <div
        v-resize-text="{
          minFontSize: '70px',
          maxFontSize: '170px'
        }"
        v-animate-css="animationObject"
        class="text-center text-amber q-pt-xl q-mt-xl"
      >
        <VueTextGlitch
          highlight1="yellow"
          highlight2="orange"
          background="transparent"
          fill="#89D5FB"
          text="Ging Up!"
          :height="222"
          :steps="20"
        />
      </div>

      <p
        v-resize-text="{
          ratio: 1.5,
          minFontSize: '10px',
          maxFontSize: '40px'
        }"
        class=" text-center q-pt-xl q-mt-xl"
      >
        Ging Games is a mobile game company focused on creating engaging
        experiences in tailored 3D spaces for you to play! Anytime, anywhere.
      </p>
      <div class="  q-py-xl q-mt-lg ">
        <div class=" flex justify-evenly q-pa-md q-pt-xl q-mt-lg ">
          <q-btn
            @click="smooth"
            rounded
            color="primary"
            label="discover"
            size="1.4rem"
          /><q-btn
            to="/contact"
            rounded
            color="secondary"
            label="contact"
            size="1.4rem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTextGlitch from "vue-text-glitch";
import { mapState } from "vuex";

export default {
  data() {
    return {
      animationObject: {
        classes: "rubberBand",
        duration: 3000,
        iteration: 10000
      }
    };
  },
  computed: {
    ...mapState("app", ["eleman"])
  },
  components: { VueTextGlitch },
  methods: {
    smooth() {
      this.eleman.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-image {
  background-image: url("~assets/Main_BackG.png");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
}
</style>
