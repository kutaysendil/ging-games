<template>
  <div>
    <q-btn @click="logout" color="white" text-color="black" label="logout" />
  </div>
</template>

<script>
import { auth } from "src/Firebase";
export default {
  // name: 'PageName',
  data() {
    return {
      mail: "",
      password: "",
      user: null
    };
  },

  methods: {
    logout() {
      auth.signOut();
      this.$q.notify({
        type: "positive",
        timeout: "1500",
        message: `Successfully logged out`
      });
      setTimeout(() => {
        this.$router.push("/");
      }, 2000);
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
