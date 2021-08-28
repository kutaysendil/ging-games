<template>
  <q-page padding class="bg">
    <div>
      <div v-show="!jobs" class="flex flex-center">
        <h1>No Applications Yet</h1>
      </div>
      <q-markup-table
        v-show="jobs"
        bordered
        square
        separator="cell"
        class="shadow-24"
      >
        <thead>
          <tr class="text-weight-bolder text-h6">
            <th class="text-left">Name</th>
            <th class="text-left">E-mail</th>
            <th class="text-left">Message</th>
            <th class="text-left">CV</th>
            <th class="text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="j in job" :key="j.id" class="text-weight-medium">
            <td class="text-left">{{ j.name }}</td>
            <td class="text-left">{{ j.mail }}</td>
            <td class="text-left">
              <q-btn
                @click="showDialog(j.name, j.message)"
                round
                color="brown-5"
                icon="info"
              />
            </td>
            <td class="text-left">
              <q-btn
                @click="showCV(j.pdfUrl)"
                round
                color="brown-5"
                icon="info"
              />
            </td>
            <td class="text-left">
              <q-btn
                @click="DeleteCv(j.id, j.name)"
                color="black"
                text-color="red"
                icon="fas fa-trash-alt"
              />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </q-page>
</template>

<script>
import db, { auth, imgStorage } from "src/Firebase";
import JobApplyDialog from "pages/Admin/Dialogs/JobApplyDialog.vue";
export default {
  // name: 'PageName',
  data() {
    return {
      user: null,
      job: null,
      jobs: false
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
          .collection("apply")
          .orderBy("addDate", "desc")
          .get();
        this.job = docs.map(doc => {
          const id = doc.id;
          const data = doc.data();
          return { id, ...data };
        });
        if (this.job.length >= 1) {
          this.jobs = true;
        } else {
          this.jobs = false;
        }

        console.log(this.jobs);
      } catch (error) {
        this.$q.notify({
          type: "negative",
          message: ` ${error}`
        });
      }
    },
    showDialog(name, message) {
      this.$q
        .dialog({
          component: JobApplyDialog,

          // optional if you want to have access to
          // Router, Vuex store, and so on, in your
          // custom component:
          parent: this, // becomes child of this Vue node
          // ("this" points to your Vue component)
          // (prop was called "root" in < 1.1.0 and
          // still works, but recommending to switch
          // to the more appropriate "parent" name)

          // props forwarded to component
          // (everything except "component" and "parent" props above):
          value: { name, message }
          // ...more.props...
        })
        .onOk(() => {})
        .onDismiss(() => {});
    },
    showCV(url) {
      window.open(url, "blank");
    },
    async DeleteCv(id, name) {
      this.$q
        .dialog({
          title: "Alert",
          message: "Are you sure you want to delete from database?"
        })
        .onOk(async () => {
          await this.$q.loading.show();
          const storageRef = await imgStorage.ref();
          await storageRef.child(name).delete();
          await db
            .collection("apply")
            .doc(id)
            .delete();

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
  opacity: 0.8;
}
</style>
