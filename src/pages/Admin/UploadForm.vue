<template>
  <div>
    <q-card>
      <q-card-section>
        <q-form class="q-gutter-md">
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
          <q-file
            rounded
            outlined
            color="white"
            bg-color="blue-3"
            label="Photo"
            accept="image/*"
            @rejected="onRejected"
            @change="previewImage"
          />

          <div class="text-center">
            <div v-if="imageData != null">
              <img class="preview" :src="picture" />
              <br />
            </div>
            <p>
              Progress: {{ uploadValue.toFixed() + "%" }}
              <progress id="progress" :value="uploadValue" max="100"></progress>
            </p>
            <q-btn label="upload database" @click="onSubmit" color="blue-6" />
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
      imageData: null,
      picture: null,
      uploadValue: 0
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
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onSubmit() {
      this.picture = null;
      const storageRef = imgStorage.ref(`${this.name}`).put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
          });
        }
      );
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
