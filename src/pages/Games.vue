<template>
  <q-page padding class=" bg ">
    <div class="q-pa-md q-gutter-lg ">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" icon="fas fa-home" to="/" />
        <q-breadcrumbs-el label="Games" icon="fas fa-gamepad" />
      </q-breadcrumbs>
      <div
        v-resize-text="{
          ratio: 1.3,
          minFontSize: '10px',
          maxFontSize: '50px'
        }"
        class="text-h4"
      >
        Experience beyond fun
      </div>
    </div>
    <div class=" row justify-evenly content-center full-width ">
      <div
        class="col-xs-12 col-md-6 col-lg-4 q-my-xl "
        v-for="g in games"
        :key="g.name"
      >
        <q-card bordered class="my-card ">
          <a
            :href="g.url"
            :class="g.url.length < 3 && 'disabled'"
            class="apple text-center "
          >
            <q-avatar class="vert" icon="fab fa-apple"
          /></a>
          <a
            :class="g.googleurl.length < 3 && 'disabled'"
            :href="g.googleurl > 5 ? g.googleurl : ''"
            class="google text-center"
          >
            <q-avatar class="vert" icon="fab fa-google-play" />
          </a>
          <q-img transition="slide-down" class="my-img  " :src="g.photo">
            <template v-slot:loading>
              <q-spinner-ball color="white" />
            </template>
            <div class="absolute-bottom text-subtitle2 text-center">
              {{ g.name }}
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import db from "src/Firebase";
export default {
  // name: 'PageName',
  data() {
    return {
      games: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const { docs } = await db
          .collection("games")
          .where("GamesGridNo", ">=", 1)
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
          position: "center",
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
  background-repeat: space;
}
.ceza {
  pointer-events: none;
}
.my-card {
  width: 100%;
  max-width: 250px;
  margin: auto;
  box-shadow: 10px 10px 8px #888888;

  border-radius: 25px 25px 50px 50px;
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

  border-radius: 20px 0 0 50px;
}
.vert {
  padding-top: 30%;
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

  border-radius: 0 20px 50px 0;
}

.my-card:hover > a {
  display: inline-block;
}
.my-img {
  width: 100%;
  height: 12rem;
}
@media (hover: hover) and (pointer: fine) {
  .my-card:active > a,
  .my-card:focus > a {
    display: inline-block;
  }
}
</style>
