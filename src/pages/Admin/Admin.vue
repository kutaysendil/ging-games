<template>
  <q-page padding class="bg ">
    <div v-if="user">
      <div class="flex flex-center q-gutter-xl q-py-xl">
        <q-btn
          to="/admin/update"
          color="yellow"
          text-color="black"
          label="Update & Delete Games"
        />
        <q-btn
          to="/admin/jobapplications"
          color="blue"
          text-color="black"
          label="Job applications"
        />
        <logout></logout>
      </div>

      <upload-form></upload-form>
    </div>
    <div v-else>
      <login></login>
    </div>
  </q-page>
</template>

<script>
import { auth } from "src/Firebase";
import Login from "pages/Admin/Login.vue";
import Logout from "pages/Admin/Logout.vue";
import UploadForm from "./UploadForm.vue";
export default {
  // name: 'PageName',
  data() {
    return {
      mail: "",
      password: "",
      user: null
    };
  },
  components: { Login, Logout, UploadForm },
  mounted() {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user = authUser;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("~assets/Grad.png");
  opacity: 0.8;
}
</style>
