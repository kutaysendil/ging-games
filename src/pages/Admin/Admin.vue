<template>
  <q-page padding class="bg ">
    <div v-if="!user">
      <login></login>
    </div>
    <div v-else>
      <logout></logout>
      <upload-form></upload-form>
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
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      auth
        .signInWithEmailAndPassword(this.mail, this.password)
        .then(res => console.log(res))
        .catch(err => console.log(err.message));
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
