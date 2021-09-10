<template>
  <q-page class="asd">
    <q-separator size="3px" />
    <div ref="eleman">
      <div class="q-pa-xl q-gutter-lg  ">
        <div
          v-resize-text="{
            ratio: 1,
            minFontSize: '50px',
            maxFontSize: '80px'
          }"
          class=" text-h2 text-weight-light"
        >
          Most Popular Games
        </div>
        <div
          v-resize-text="{
            ratio: 1,
            minFontSize: '50px',
            maxFontSize: '80px'
          }"
          class="text-weight-thin"
        >
          Play beyond
        </div>
      </div>
      <div class=" row justify-center content-center    ">
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
            >
              <q-avatar class="vert" icon="fab fa-apple"
            /></a>
            <a
              v-if="$q.platform.is.desktop"
              :class="g.googleurl.length < 3 && 'disabled'"
              :href="g.googleurl > 5 ? g.googleurl : ''"
              class="google text-center desk"
            >
              <q-avatar class="vert" icon="fab fa-google-play" />
            </a>
            <a
              v-if="$q.platform.is.android"
              :class="g.googleurl.length < 3 && 'disabled'"
              :href="g.googleurl > 5 ? g.googleurl : ''"
              class="justgoogle "
            >
              <q-avatar class="vertt" icon="fab fa-google-play" />
            </a>
            <a
              v-if="$q.platform.is.ios"
              :href="g.url"
              :class="g.url.length < 3 && 'disabled'"
              class="justgoogle    "
            >
              <q-avatar class="vertt" icon="fab fa-apple"
            /></a>
            <q-img transition="slide-down" class="my-img " :src="g.photo">
              <template v-slot:loading>
                <q-spinner-ball color="white" />
              </template>
              <div
                class="absolute-bottom text-subtitle2 text-center text-amber-8"
              >
                {{ g.name }}
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
      <div class="text-center q-py-lg">
        <q-btn
          to="/games"
          rounded
          color="transparent"
          label="see more"
          size="1.5rem"
          text-color="deep-purple-5"
          padding="5px 4rem"
          outline
        />
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
    phone() {
      // if (this.$q.platform.is.android || this.$q.platform.is.ios) {
      if (this.$q.platform.is.desktop) {
      }
    },
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
.tabb {
  display: inline-block;
}
.asd {
  opacity: 0.8;
}
.my-img {
  //  width: 100%;
  // height: 12rem;
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
