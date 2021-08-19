<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal elevated class="bg-transparent text-white">
      <q-toolbar class="bg-primary ">
        <q-toolbar-title shrink>
          <q-btn flat round to="/" icon="assets/gingLogo.png" />
        </q-toolbar-title>
        <q-toolbar-title>
          <q-tabs
            class="text-black "
            align="right"
            indicator-color="blue"
            active-color="grey"
            active-bg-color="yellow"
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
          <div>Footer</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script>
export default {};
</script>
<style scoped lang="scss"></style>
