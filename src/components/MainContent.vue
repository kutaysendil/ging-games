<template>
  <div class="bg-image">
    <q-page padding>
      <div
        v-resize-text="{
          minFontSize: '70px',
          maxFontSize: '170px'
        }"
        v-animate-css="animationObject"
        class="text-center text-amber"
      >
        Ging UP!
      </div>
      <p
        v-resize-text="{
          ratio: 1.5,
          minFontSize: '10px',
          maxFontSize: '40px'
        }"
        class=" text-center q-mt-lg"
      >
        Ging Games is a mobile game company focused on creating engaging
        experiences in tailored 3D spaces for you to play! Anytime, anywhere.
      </p>
    </q-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationObject: {
        classes: "flash",
        duration: 3000,
        iteration: 10000
      }
    };
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
