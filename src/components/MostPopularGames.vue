<template>
  <q-page padding>
    <div v-for="(item, i) in games" :key="i">
      {{ item }}

      <q-card class="my-card">
        <q-img :src="item.img">
          <div class="text-subtitle2 absolute-top text-center">
            Title
          </div>
        </q-img>
      </q-card>
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
