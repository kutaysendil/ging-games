<template>
  <div class="bg-image">
    <q-page padding>
      <div
        v-resize-text="{
          minFontSize: '70px',
          maxFontSize: '170px'
        }"
        v-animate-css="animationObject"
        class="text-center text-amber q-pt-xl"
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
        class=" text-center q-pt-xl"
      >
        Ging Games is a mobile game company focused on creating engaging
        experiences in tailored 3D spaces for you to play! Anytime, anywhere.
      </p>
      <div class="flex justify-center q-pt-xl ">
        <div v-for="(btn, i) in buttons" :key="i" class="q-pa-md q-pt-xl ">
          <q-btn
            v-resize-text="{
              ratio: 1.5,
              minFontSize: '20px',
              maxFontSize: '140px'
            }"
            rounded
            :color="btn.color"
            :label="btn.label"
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
      },
      buttons: [
        {
          label: "discover",
          color: "primary"
        },
        {
          label: "contact",
          color: "secondary"
        }
      ]
    };
  },
  components: { VueTextGlitch }
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
