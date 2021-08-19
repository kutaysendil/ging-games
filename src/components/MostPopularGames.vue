<template>
  <q-page padding>
    <div class="q-pa-md row q-col-gutter-lg">
      <div
        class="col-xs-6 col-lg-4 col-xl-3"
        v-for="(item, i) in games"
        :key="i"
      >
        <q-card bordered class="bg-grey-2">
          <q-card-section>
            <q-img :src="item.img">
              <div class="absolute-bottom text-subtitle2 text-center bg-amber">
                {{ item.name }}as
              </div>
            </q-img>
          </q-card-section>
          <q-card-actions> </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      games: [
        { name: "deneme", img: "" },
        { name: "deneme1", img: "" },
        { name: "deneme2", img: "" },
        { name: "deneme3", img: "" },
        { name: "deneme4", img: "" },
        { name: "deneme5", img: "" },
        { name: "deneme6", img: "" },
        { name: "deneme7", img: "" }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
