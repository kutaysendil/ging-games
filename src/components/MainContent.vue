<template>
  <div class="bg-image">
    <div padding>
      <div
        v-resize-text="{
          minFontSize: '70px',
          maxFontSize: '170px'
        }"
        v-animate-css="animationObject"
        class="text-center text-black anim  fonty"
      >
        <VueTextGlitch
          highlight1="#6FD9FD"
          highlight2="#E48BD8"
          background="transparent"
          fill="grey-5"
          text="Ging Up"
          :height="222"
          :steps="20"
          class="text-white"
        />
      </div>

      <p
        v-resize-text="{
          ratio: 2.4,
          minFontSize: '10px',
          maxFontSize: '40px'
        }"
        class=" text-center  padd  "
      >
        Ging Games is a mobile game company focused on creating engaging
        experiences in tailored 3D spaces for you to play ! Anytime, Anywhere.
      </p>
      <div class="  q-py-xl q-mt-lg ">
        <div class=" flex justify-center q-gutter-xl  ">
          <q-btn
            @click="smooth"
            rounded
            color="transparent"
            label="discover"
            size="1.5rem"
            text-color="black"
            padding="0 4rem"
            outline
          /><q-btn
            to="/contact"
            rounded
            color="black"
            label="contact"
            size="1.5rem"
            text-color="white"
            padding="5px 4rem"
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
        classes: "pulse",
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
.fonty {
  font-family: "anim";
}
.padd {
  padding-left: 20%;
  padding-right: 20%;
}
.anim {
  padding-top: 10%;
}
.btn {
  border: 3px solid black;
}
</style>
