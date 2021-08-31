<template>
  <q-page class="bg">
    <q-separator size="3px" />
    <div ref="eleman">
      <div class="row justify-evenly content-center full-width">
        <div
          class="col-xs-12 col-md-6 col-lg-4 q-my-xl"
          v-for="g in games"
          :key="g.name"
        >
          <q-card class="my-card ">
            <q-img class="my-img" :src="g.photo" basic>
              <div class="absolute-bottom text-subtitle2 text-center">
                {{ g.name }}
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import db from "src/Firebase";
export default {
  data() {
    return {
      games: []
    };
  },
  mounted() {
    this.$store.commit("app/setEleman", this.$refs.eleman);
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const { docs } = await db
          .collection("games")
          .where("homePageGridNo", ">=", 1)
          .get();
        this.games = docs.map(doc => {
          const { id } = docs;
          const data = doc.data();
          return { id, ...data };
        });
      } catch (error) {
        this.$q.notify({
          type: "negative",
          position: "center",
          message: ` ${error}`
        });
      }
    }
  }
};
</script>

<style lang="scss">
.bg {
  background-color: #d8cece60;
}
.my-card {
  width: 100%;
  max-width: 250px;
  margin: auto;
}
.my-img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
}
</style>
