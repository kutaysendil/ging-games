<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal elevated class="bg-transparent text-white">
      <q-toolbar class="bg-black ">
        <q-toolbar-title shrink>
          <q-btn flat round to="/" @click="smooth"
            ><img class="logo" src="~assets/GingOrange.png" alt=""
          /></q-btn>
        </q-toolbar-title>
        <q-toolbar-title>
          <q-tabs
            class="text-white  "
            align="right"
            indicator-color="orange-8"
            active-color="orange-5"
            active-bg-color=""
            mobile-arrows
            outside-arrows
            :breakpoint="700"
            left-icon="fas fa-caret-left"
            right-icon="fas fa-caret-right"
          >
            <q-route-tab class="xd " to="/games" label="Games" />
            <q-route-tab class="xd" to="/careers" label="CAREERS" />
            <q-route-tab class="xd" to="/contact" label="Contact" />
          </q-tabs>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="amber-5" />
    </q-page-scroller>
    <q-footer elevated class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <Footer></Footer>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script>
import Footer from "components/Footer.vue";

export default {
  components: { Footer },

  methods: {
    smooth() {
      const el = this.$parent.$children[0].$el;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
</script>
<style lang="scss">
.xd {
  width: 15rem;
}
.q-tab__label {
  font-size: 40px;
}
.logo {
  width: 70px;
}
@media only screen and (max-width: 600px) {
  .q-tab__label {
    font-size: 20px;
  }
  .logo {
    width: 50px;
  }
}
@media only screen and (min-width: 1366px) {
  .q-tab__label {
    font-size: 28px;
  }
}
</style>
