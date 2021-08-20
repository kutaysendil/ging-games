<template>
  <q-page padding>
    <div ref="test">
      <q-btn @click="asd" color="white" text-color="black" label="Standard" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      perferendis repellat quaerat sequi nisi maiores adipisci, commodi earum a
      sint corporis similique in, obcaecati eaque? Atque dolorem, quod ipsam
      quae inventore minus soluta dicta obcaecati provident sequi incidunt
      possimus. Libero saepe possimus deserunt veritatis eligendi non in
      necessitatibus obcaecati deleniti!
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
  },
  methods: {
    asd() {
      this.$emit("click", this.$refs.test);
    }
  }
};
</script>

<style lang="scss"></style>
