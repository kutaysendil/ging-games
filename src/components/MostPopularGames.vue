<template>
  <q-page padding>
    <div ref="eleman">
      <div class="row q-col-gutter-sm items-center  justify-around ">
        <div
          class="col-xs-12 col-md-6 col-lg-4 q-gutter-lg q-pb-xl"
          v-for="g in games"
          :key="g.name"
        >
          <q-card class="my-card ">
            <q-img :src="g.photo" basic>
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
        console.log(error);
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
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
