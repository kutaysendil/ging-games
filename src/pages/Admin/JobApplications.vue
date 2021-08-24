<template>
  <div class="bg">jobb app</div>
</template>

<script>
import db, { auth, } from "src/Firebase";
export default {
  // name: 'PageName',
  data() {
    return {
      user: null,
      job: []
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
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("~assets/Grad.png");
  opacity: 0.8;
}
</style>
