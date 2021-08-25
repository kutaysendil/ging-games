<template>
  <div class="flex flex-center">
    <q-card style="width:600px;">
      <q-card-section>
        <q-form @submit="onUpload" class="q-gutter-md">
          <q-input
            rounded
            outlined
            color="white"
            bg-color="blue-3"
            label="Name *"
            lazy-rules
            v-model="name"
          /><q-input
            rounded
            outlined
            color="white"
            bg-color="blue-3"
            label="AppStore Link *"
            lazy-rules
            v-model="url"
          /><q-input
            rounded
            outlined
            color="white"
            bg-color="blue-3"
            label="Google Link *"
            lazy-rules
            v-model="googleurl"
          />
          <q-checkbox v-model="homePage" label="Home Page" />
          <q-input
            @input="
              val => {
                file = val[0];
              }
            "
            @change="previewImage"
            accept="image/*"
            filled
            type="file"
            @rejected="onRejected"
            bg-color="blue-3"
            dense
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
      googleurl: "",
      homePage: false,
      imageData: null,
      picture: null,
      isUpload: false
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
    previewImage(event) {
      this.picture = null;
      this.imageData = event.target.files[0];
      console.log(this.imageData);
    },

    async onUpload() {
      this.picture = null;
      this.$q.loading.show({
        message: "Uploading..."
      });
      const storageRef = await imgStorage.ref();
      const fileRef = await storageRef.child(this.imageData.name);
      await fileRef.put(this.imageData);
      this.picture = await fileRef.getDownloadURL();
      await db.collection("games").add({
        name: this.name,
        url: this.url,
        googleurl: this.googleurl,
        photo: this.picture,
        homePage: this.homePage
      });

      this.$q.loading.hide();
      await this.$q.notify({
        type: "positive",
        position: "center",
        message: `Successfully uploaded.`
      });
      await (this.name = ""),
        (this.url = ""),
        (this.picture = null),
        (this.imageData = null),
        (this.googleurl = ""),
        (this.homePage = false);
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("~assets/Grad.png");
  opacity: 0.8;
}

.upload {
}
</style>
