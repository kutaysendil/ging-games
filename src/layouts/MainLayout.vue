<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal elevated class="bg-transparent text-white">
      <q-toolbar class="bg-black ">
        <q-toolbar-title shrink>
          <q-btn flat round to="/" @click="smooth"
            ><img src="~assets/ginglogo.png" alt=""
          /></q-btn>
        </q-toolbar-title>
        <q-toolbar-title>
          <q-tabs
            class="text-white "
            align="right"
            indicator-color="blue"
            active-color="grey"
            active-bg-color="yellow"
            outside-arrows
          >
            <q-route-tab to="/games" label="Games" />
            <q-route-tab to="/careers" label="CAREERS" />
            <q-route-tab to="/contact" label="Contact" />
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
      <q-btn fab icon="keyboard_arrow_up" color="blue-3" />
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
<style scoped lang="scss"></style>
