<template>
  <div class="bg">
    <div v-for="j in games" :key="j.message">
      <div>name:{{ j.name }}</div>
      <div>Homepage:{{ j.homePage }}</div>
      <div>Photo:{{ j.photo }}</div>
      <div>DownloadUrl:{{ j.url }}</div>
    </div>
  </div>
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
        const { docs } = await db.collection("games").get();
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
