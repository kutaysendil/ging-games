<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal elevated class="bg-transparent text-white">
      <q-toolbar class="bg-black ">
        <q-toolbar-title shrink>
          <q-btn flat round to="/"
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

    <q-footer elevated class="bg-grey-8 text-white">
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
  components: { Footer }
};
</script>
<style scoped lang="scss"></style>
