<template>
  <div>
    <q-card>
      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input
            rounded
            outlined
            color="white"
            bg-color="blue-3"
            label="Name *"
            lazy-rules
            :rules="[
              val => (val && val.length > 3) || 'Please type  name correctly'
            ]"
            v-model="name"
          />
          <q-file
            v-model="files"
            rounded
            outlined
            color="white"
            bg-color="blue-3"
            label="Photo"
            accept="image/*"
            @rejected="onRejected"
            ref="input1"
          />

          <div class="text-center">
            <q-btn label="upload database" type="submit" color="blue-6" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import db, { imgStorage } from "src/Firebase";
export default {
  // name: 'PageName',
  data() {
    return {
      name: "",
      url: "",
      files: null
    };
  },
  created() {},
  methods: {
    onRejected(rejectedEntries) {
      this.$q.notify({
        type: "negative",
        message: ` File did not pass validation constraints. You can update just image.`
      });
    },
    onSubmit() {
      console.log(this.name, this.files);
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
