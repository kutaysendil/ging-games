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
            <q-route-tab class="xd" to="/games" label="Games" />
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
<style scoped lang="scss">
.xd:hover {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23453886' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 20%;
  border-bottom: 0;
  padding-bottom: 0.3em;
}
</style>
