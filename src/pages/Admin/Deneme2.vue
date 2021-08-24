<template>
  <div>
    <div>
      <div>
        <q-input type="file" @change="previewImage" accept="image/*" />
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
          label="Link *"
          lazy-rules
          v-model="url"
        />
      </div>
      <div>
        <p>
          Progress: {{ uploadValue.toFixed() + "%" }}
          <progress id="progress" :value="uploadValue" max="100"></progress>
        </p>
      </div>
      <div v-if="imageData != null">
        <img class="preview" :src="picture" />
        <br />
        <q-btn @click="onUpload" label="Upload" />
      </div>
    </div>
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
      imageData: null,
      picture: null,
      uploadValue: 0
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    async onUpload() {
      this.picture = null;
      // const storageRef = imgStorage.ref(`${this.name}`).put(this.imageData);
      // await storageRef.on(
      //   `state_changed`,
      //   snapshot => {
      //     this.uploadValue =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //   },
      //   error => {
      //     console.log(error.message);
      //   },
      //   await (async () => {
      //     this.uploadValue = 100;
      //     await storageRef.snapshot.ref.getDownloadURL().then(url => {
      //       return (this.picture = url);
      //     });
      //   })
      // );
      const storageRef = await imgStorage.ref();
      const fileRef = await storageRef.child(this.name);
      await fileRef.put(this.imageData);

      this.picture = await fileRef.getDownloadURL();
      await db.collection("games").add({
        name: this.name,
        url: this.url,
        photo: this.picture
      });
      await this.$q.notify({
        type: "positive",
        message: `Successfully uploaded.`
      });
      await (this.name = ""),
        (this.url = ""),
        (this.picture = null),
        (this.imageData = null);
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("~assets/Grad.png");
  opacity: 0.8;
}
.preview {
  width: 200px;
}
</style>
