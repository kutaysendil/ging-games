<template>
  <q-page class="bg " padding>
    <div class=" q-gutter-xl flex flex-center">
      <q-btn
        color="red-6"
        text-color="black"
        label="back"
        icon="fas fa-chevron-left"
        @click="back"
      />
    </div>
    <div class="q-pa-md row q-col-gutter-lg">
      <div v-for="(g, i) in games" :key="i" class="col-xs-12 col-md-4">
        <q-card class="my-card full-height full-width " bordered>
          <q-img class="my-img" :src="g.photo">
            <div class="absolute-bottom">
              <div class="text-h6">
                Name:
                <span class="text-bold">{{ g.name }}</span>
              </div>
              <div class="text-subtitle2">
                Games grid no: {{ g.GamesGridNo }}
              </div>
            </div>
          </q-img>

          <q-card-actions class="row q-col-gutter-lg " align="left">
            <div class="col-12 q-col-gutter-lg">
              <div class="flex justify-between">
                <q-input
                  dense
                  v-model="name[i]"
                  label="Name"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 3) || 'Please type your name '
                  ]"
                />
                <q-btn
                  flat
                  label="Update"
                  @click="uName(g.id, i)"
                  :disable="name.length == 0"
                  icon="far fa-edit"
                  color="primary"
                />
              </div>
              <div class="flex justify-between">
                <q-input
                  dense
                  v-model.number="grid[i]"
                  label="Grid No"
                  type="number"
                />
                <q-btn
                  @click="uGrid(g.id, i)"
                  flat
                  label="Update"
                  :disable="grid.length == 0"
                  icon="far fa-edit"
                  color="primary"
                />
              </div>
              <div class="flex justify-between">
                <q-input
                  dense
                  v-model="gourl[i]"
                  label="GoogleUrl"
                  :rules="[
                    val =>
                      (val && val.length > 3) || 'Please type your google url'
                  ]"
                />
                <q-btn
                  @click="uGUrl(g.id, i)"
                  flat
                  label="Update"
                  :disable="gourl.length == 0"
                  icon="far fa-edit"
                  color="primary"
                />
              </div>
              <div class="flex justify-between">
                <q-input dense v-model="appurl[i]" label="AppStoreUrl" />
                <q-btn
                  @click="uAUrl(g.id, i)"
                  flat
                  label="Update"
                  :disable="appurl.length == 0"
                  icon="far fa-edit"
                  color="primary"
                />
              </div>
              <div class="flex flex-center">
                <q-btn
                  @click="deleteG(g.id, g.photo)"
                  icon="fas fa-trash"
                  color="red"
                  label="Delete"
                />
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import db, { auth, imgStorage } from "src/Firebase";
export default {
  // name: 'PageName',
  data() {
    return {
      user: null,
      games: null,
      name: [],
      grid: [],
      gourl: [],
      appurl: []
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
          .where("GamesGridNo", ">=", 1)
          .orderBy("GamesGridNo")
          .get();
        this.games = docs.map(doc => {
          const id = doc.id;
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
    },
    async uName(id, i) {
      this.$q
        .dialog({
          title: "Alert",
          message: "Are you sure ?",
          transitionShow: "slide-down",
          transitionHide: "slide-down",
          color: "green"
        })
        .onOk(async () => {
          await this.$q.loading.show();
          const update = await db.collection("games").doc(id);
          await update
            .update({ name: this.name[i] })
            .then(() => {
              console.log("suecces");
            })
            .catch(err => {
              console.log("error", err);
            });
          await this.$q.loading.hide();
          await this.$router.go();
        });
    },
    async uGrid(id, i) {
      console.log(typeof this.grid);
      this.$q
        .dialog({
          title: "Alert",
          message: "Are you sure ?",
          transitionShow: "slide-down",
          transitionHide: "slide-down",
          color: "green"
        })
        .onOk(async () => {
          await this.$q.loading.show();
          const update = await db.collection("games").doc(id);
          await update
            .update({ GamesGridNo: this.grid[i] })
            .then(() => {
              console.log("suecces");
            })
            .catch(err => {
              console.log("error", err);
            });
          await this.$q.loading.hide();
          await this.$router.go();
        });
    },
    async uGUrl(id, i) {
      this.$q
        .dialog({
          title: "Alert",
          message: "Are you sure ?",
          transitionShow: "slide-down",
          transitionHide: "slide-down",
          color: "green"
        })
        .onOk(async () => {
          await this.$q.loading.show();
          const update = await db.collection("games").doc(id);
          await update
            .update({ googleurl: this.gourl[i] })
            .then(() => {
              console.log("suecces");
            })
            .catch(err => {
              console.log("error", err);
            });
          await this.$q.loading.hide();
          await this.$router.go();
        });
    },
    async uAUrl(id, i) {
      this.$q
        .dialog({
          title: "Alert",
          message: "Are you sure ?",
          transitionShow: "slide-down",
          transitionHide: "slide-down",
          color: "green"
        })
        .onOk(async () => {
          await this.$q.loading.show();
          const update = await db.collection("games").doc(id);
          await update
            .update({ url: this.appurl[i] })
            .then(() => {
              console.log("suecces");
            })
            .catch(err => {
              console.log("error", err);
            });
          await this.$q.loading.hide();
          await this.$router.go();
        });
    },
    async deleteG(id, url) {
      this.$q
        .dialog({
          title: "Alert",
          message: "Are you sure ?",
          transitionShow: "slide-down",
          transitionHide: "slide-down",
          color: "red"
        })
        .onOk(async () => {
          await this.$q.loading.show();
          const storageRef = await imgStorage.refFromURL(url);
          storageRef.delete();
          await db
            .collection("games")
            .doc(id)
            .delete()
            .then(() => {
              console.log("delete");
            })
            .catch(err => {
              console.log("error", err);
            });
          await this.$q.loading.hide();
          await this.$router.go();
        })
        .onCancel(() => {})
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("~assets/Grad.png");
}
.my-card {
  width: 100%;
  max-width: 450px;
}
.my-img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
}
.q-dialog-plugin .q-card {
  background-color: rgb(22, 113, 218);
  color: red;
}
</style>
