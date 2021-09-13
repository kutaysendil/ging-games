<template>
  <q-page padding>
    <div>
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg3"></div>
      <div class="bg4"></div>
      <div class="bg6"></div>
      <div class="bg5"></div>
      <div class="bg7"></div>
      <div class="bg8"></div>
      <div class="bg9"></div>
    </div>
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
        class="text-h4 "
      >
        Experience beyond fun
      </div>
    </div>
    <div class=" row  justify-center content-center full-width ">
      <div
        class="col-xs-6 col-md-4 col-lg-3 q-my-lg  q-gutter-md  "
        v-for="g in games"
        :key="g.name"
      >
        <q-card @click="phone" bordered class="my-card">
          <a
            v-if="$q.platform.is.desktop"
            :href="g.url"
            :class="g.url.length < 3 && 'disabled'"
            class="apple text-center desk "
            target="_blank"
          >
            <q-avatar class="vert" icon="fab fa-apple" />
          </a>
          <a
            v-if="$q.platform.is.desktop"
            :class="g.googleurl.length < 3 && 'disabled'"
            :href="g.googleurl > 5 ? g.googleurl : ''"
            class="google text-center desk"
            target="_blank"
          >
            <q-avatar class="vert" icon="fab fa-google-play" />
          </a>
          <a
            v-if="$q.platform.is.android"
            :href="g.googleurl.length == '' ? g.url : g.googleurl"
            class="justgoogle "
            target="_blank"
          >
            <q-avatar
              v-if="g.googleurl == ''"
              class="vertt"
              icon="fab fa-apple"
            />
            <q-avatar v-else class="vertt" icon="fab fa-google-play" />
          </a>
          <a
            v-if="$q.platform.is.ios"
            :href="g.url.length == '' ? g.googleurl : g.url"
            class="justgoogle "
            target="_blank"
          >
            <q-avatar
              v-if="g.url.length == ''"
              class="vertt"
              icon="fab fa-google-play"/>
            <q-avatar class="vertt" icon="fab fa-apple"
          /></a>
          <q-img transition="slide-down" class="my-img " :src="g.photo">
            <template v-slot:loading>
              <q-spinner-ball color="white" />
            </template>
            <div
              class="absolute-bottom text-subtitle2 text-center "
              v-resize-text="{
                ratio: 1,
                minFontSize: '15px',
                maxFontSize: '22px'
              }"
            >
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
.ceza {
  pointer-events: none;
}
.desk {
  padding-top: 10%;
}
.my-card {
  width: 100%;
  max-width: 250px;
  margin: auto;
  box-shadow: 10px 10px 8px #888888;
}

.justgoogle {
  position: absolute;
  z-index: 3;
  display: none;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-bottom: 40%;
  font: bold 12px/100px Sans-Serif;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-color: rgba(100, 100, 100, 0.9);
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
  padding-top: 30%;
}
.vertt {
  padding-top: 20%;
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
  // width: 100%;
  // height: 12rem;
}

.bg1 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 10%;
  left: 10%;
  bottom: 80%;
}
.bg3 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 3%;
  left: 1%;
  bottom: 80%;
}
.bg2 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 2%;
  left: 80%;
}
.bg3 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 0%;
  left: 40%;
}
.bg3 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 33%;
  left: 12%;
}
.bg4 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 29%;
  left: 61%;
}
.bg5 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 53%;
  left: 1%;
}
.bg6 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 58%;
  left: 41%;
}
.bg7 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 63%;
  left: 81%;
}
.bg8 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 73%;
  left: 5%;
}
.bg9 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 83%;
  left: 33%;
}
.bg9 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 93%;
  left: 21%;
}
@media (hover: hover) and (pointer: fine) {
  .my-card:active > a,
  .my-card:focus > a {
    display: inline-block;
  }
}

@media only screen and (max-width: 600px) {
  .my-card {
    width: 100%;
    max-width: 120px;
    margin: auto;
    box-shadow: 10px 10px 8px #888888;
  }
}
</style>
