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
            <a
              :href="g.url"
              :class="g.url.length < 3 && 'disabled'"
              class="apple text-center vertical-middle"
              ><q-avatar class="vert" icon="fab fa-apple"/></a
            ><a
              :href="g.googleurl"
              t
              :class="g.googleurl.length < 3 && 'disabled'"
              class="google text-center"
            >
              <q-avatar class="vert" icon="fab fa-google-play" />
            </a>
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
.my-card > .google {
  position: absolute;
  z-index: 3;
  display: none;
  width: 50%;
  height: 100%;
  text-align: center;
  font: bold 12px/100px Sans-Serif;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-color: rgba(100, 100, 100, 0.9);
}
.vert {
  padding-top: 100%;
}
.my-card > .apple {
  position: absolute;
  left: 50%;
  z-index: 3;
  display: none;
  width: 50%;
  height: 100%;
  text-align: center;
  font: bold 12px/100px Sans-Serif;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-color: rgba(100, 100, 100, 0.9);
}

.my-card:hover > a {
  display: inline-block;
}
.my-img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
}
@media (hover: hover) and (pointer: fine) {
  .my-card:active > a,
  .my-card:focus > a {
    display: inline-block;
  }
}
</style>
