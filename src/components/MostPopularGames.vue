<template>
  <q-page class="bg">
    <q-separator size="3px" />
    <div ref="eleman">
      <div class="q-pa-xl q-gutter-lg ">
        <div
          v-resize-text="{
            ratio: 1,
            minFontSize: '50px',
            maxFontSize: '80px'
          }"
          class=" baslik q-pb-lg text-bold"
        >
          Most Popular Games
        </div>
        <div
          v-resize-text="{
            ratio: 1.1,
            minFontSize: '10px',
            maxFontSize: '65px'
          }"
          class=" text-subtitle1 q-pt-lg aciklama "
        >
          Play beyond
        </div>
      </div>
      <div class=" row justify-evenly content-center full-width  ">
        <div
          class="col-xs-12 col-md-6 col-lg-4 q-my-xl anim "
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
            <q-img transition="slide-down" class="my-img  " :src="g.photo">
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
      if (this.$q.platform.is.android || this.$q.platform.is.ios) {
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

  border-radius: 25px 25px 50px 50px;
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

  border-radius: 20px 20px 50px 50px;
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

  border-radius: 20px 20px 50px 50px;
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

  border-radius: 0 20px 50px 0;
}

.my-card:hover > .desk {
  display: inline-block;
}
.tabb {
  display: inline-block;
}

.my-img {
  width: 100%;
  height: 12rem;
}
.baslik {
  font-family: "buyuk";
}
.aciklama {
  font-family: "aciklama";
}
.anim {
  font-family: "anim";
}
</style>
