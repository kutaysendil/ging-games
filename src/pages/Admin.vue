<template>
  <q-page padding class="bg">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        rounded
        outlined
        color="white"
        bg-color="blue-3"
        type="email"
        label="Your Email*"
        lazy-rules
        v-model="mail"
      />
      <q-input
        rounded
        outlined
        label="Enter Your Password* "
        type="password"
        color="white"
        bg-color="blue-3"
        v-model="password"
      />
      <div class="text-center">
        <q-btn label="Login" type="submit" color="blue-6" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      mail: "",
      password: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("~assets/Grad.png");
  opacity: 0.8;
}
</style>
