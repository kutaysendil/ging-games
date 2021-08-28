<template>
  <q-page class="bg flex flex-center" padding>
    <div class=" q-gutter-xl">
      <q-btn
        color="red-6"
        text-color="black"
        label="back"
        icon="fas fa-chevron-left"
        @click="back"
      />
      gamespage
    </div></q-page
  >
</template>

<script>
import db, { auth } from "src/Firebase";
export default {
  // name: 'PageName',
  data() {
    return {
      user: null,
      games: []
    };
  },
  mounted() {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user = authUser;
      } else if (!this.user) {
        this.$router.push("/");
      }
    });
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const { docs } = await db
          .collection("games")
          .orderBy("GamesGridNo")
          .get();
        this.games = docs.map(doc => {
          const { id } = docs;
          const data = doc.data();
          return { id, ...data };
        });
      } catch (error) {
        this.$q.notify({
          type: "negative",
          message: ` ${error}`
        });
      }
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("~assets/Grad.png");
  opacity: 0.8;
}
</style>
