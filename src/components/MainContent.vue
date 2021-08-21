<template>
  <div class="bg-image">
    <q-page padding class="q-pt-xl">
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
      <div class="flex justify-center q-pt-xl q-mt-xl ">
        <div class="q-pa-md q-pt-xl q-mt-xl q-px-lg ">
          <q-btn
            @click="smooth"
            rounded
            color="primary"
            label="discover"
            size="lg"
          /><q-btn
            to="/contact"
            rounded
            color="secondary"
            label="contact"
            size="lg"
          />
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import VueTextGlitch from "vue-text-glitch";
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
  components: { VueTextGlitch },
  methods: {
    smooth() {
      const el = this.$parent.$children[1].$el;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
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
