<template>
  <q-page padding class="flex flex-center">
    <div class="">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          rounded
          outlined
          color="white"
          bg-color="blue-3"
          type="email"
          autofocus
          autogrow
          name="mail"
          label="Your Email*"
          lazy-rules
          v-model="mail"
        />
        <q-input
          rounded
          outlined
          label="Enter Your Password* "
          type="password"
          name="pass"
          color="white"
          bg-color="blue-3"
          v-model="password"
        />

        <div class="text-center">
          <q-btn label="Login" type="submit" color="blue-6" />
        </div>
      </q-form>
    </div>
  </q-page>
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
