<template>
  <q-page padding class="bg ">
    <div class="q-pa-md q-gutter-lg q-pt-xl">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" icon="fas fa-home" to="/" />
        <q-breadcrumbs-el
          label="Careers"
          icon="fas fa-laptop-house"
          to="/careers"
        />
        <q-breadcrumbs-el label="Apply" icon="fas fa-code-branch" />
      </q-breadcrumbs>
    </div>
    <div :class="$q.screen.gt.sm ? '' : 'hidden'">
      <div class="column ">
        <div
          v-resize-text="{
            ratio: 1,
            minFontSize: '10px',
            maxFontSize: '80px'
          }"
          class="col q-pa-sm"
        >
          Write To Us!
        </div>
        <div class="col q-pt-xl">
          <div class="row justify-around items-center q-col-gutter-xl q-pt-xl">
            <div class="col-4  " style="max-width:450px;  ">
              <q-img
                style=" opacity:5;"
                src="~assets/careeers/apply.png"
                spinner-color="white"
              />
            </div>

            <div class="col-8 q-pr-xl " style="max-width:900px;">
              <q-card class="my-card">
                <q-card-section>
                  <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
                  >
                    <q-input
                      rounded
                      outlined
                      color="white"
                      bg-color="blue-3"
                      label="Your name *"
                      lazy-rules
                      :rules="[
                        val =>
                          (val && val.length > 3) ||
                          'Please type your name correctly'
                      ]"
                      v-model="name"
                    />

                    <q-input
                      rounded
                      outlined
                      color="white"
                      bg-color="blue-3"
                      type="email"
                      label="Your Email*"
                      lazy-rules
                      :rules="[
                        val =>
                          (val && val.length > 10) || 'Please type your mail'
                      ]"
                      v-model="mail"
                    />
                    <q-file
                      v-model="files"
                      rounded
                      outlined
                      color="white"
                      bg-color="blue-3"
                      label="Upload Your CV"
                      accept=".pdf"
                      @rejected="onRejected"
                    />
                    <q-input
                      rounded
                      outlined
                      label="Enter Your Message Here... "
                      type="textarea"
                      color="white"
                      bg-color="blue-3"
                      v-model="message"
                      :rules="[
                        val =>
                          (val && val.length > 30) || 'Please type your message'
                      ]"
                    />
                    <div class="text-center">
                      <q-btn label="Submit" type="submit" color="blue-6" />
                      <q-btn
                        label="Reset"
                        type="reset"
                        color="primary"
                        flat
                        class="q-ml-sm"
                      />
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$q.screen.sm ? '' : 'hidden'">
      <div class="column">
        <div
          v-resize-text="{
            ratio: 1,
            minFontSize: '10px',
            maxFontSize: '80px'
          }"
          class="col "
        >
          Write To Us!
        </div>
        <div class="col ">
          <div class="row justify-around items-center q-col-gutter-xl q-pt-md">
            <div class="col-6  " style="max-width:400px;  ">
              <q-img src="~assets/careeers/apply.png" spinner-color="white" />
            </div>

            <div class="col-6  " style="max-width:600px;">
              <q-card class="my-card">
                <q-card-section>
                  <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
                  >
                    <q-input
                      rounded
                      outlined
                      color="white"
                      bg-color="blue-3"
                      label="Your name *"
                      lazy-rules
                      :rules="[
                        val =>
                          (val && val.length > 3) ||
                          'Please type your name correctly'
                      ]"
                      v-model="name"
                    />

                    <q-input
                      rounded
                      outlined
                      color="white"
                      bg-color="blue-3"
                      type="email"
                      label="Your Email*"
                      lazy-rules
                      :rules="[
                        val =>
                          (val && val.length > 10) || 'Please type your mail'
                      ]"
                      v-model="mail"
                    />
                    <q-file
                      v-model="files"
                      rounded
                      outlined
                      color="white"
                      bg-color="blue-3"
                      label="Upload Your CV"
                      accept=".pdf"
                      @rejected="onRejected"
                    />
                    <q-input
                      rounded
                      outlined
                      label="Enter Your Message Here... "
                      type="textarea"
                      color="white"
                      bg-color="blue-3"
                      v-model="message"
                      :rules="[
                        val =>
                          (val && val.length > 30) || 'Please type your message'
                      ]"
                    />
                    <div class="text-center">
                      <q-btn label="Submit" type="submit" color="blue-6" />
                      <q-btn
                        label="Reset"
                        type="reset"
                        color="primary"
                        flat
                        class="q-ml-sm"
                      />
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$q.screen.xs ? '' : 'hidden'">
      <div>
        <div class="col-6  " style="max-width:600px;">
          <div class="my-card">
            <q-card-section>
              <q-img src="~assets/careeers/apply.png" spinner-color="white" />
            </q-card-section>
            <q-card-section>
              <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-sm">
                <q-input
                  rounded
                  outlined
                  color="white"
                  bg-color="blue-3"
                  label="Your name *"
                  lazy-rules
                  :rules="[
                    val =>
                      (val && val.length > 3) ||
                      'Please type your name correctly'
                  ]"
                  v-model="name"
                />
                <q-input
                  rounded
                  outlined
                  color="white"
                  bg-color="blue-3"
                  type="email"
                  label="Your Email*"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 10) || 'Please type your mail'
                  ]"
                  v-model="mail"
                />
                <q-file
                  v-model="files"
                  rounded
                  outlined
                  color="white"
                  bg-color="blue-3"
                  label="Upload Your CV"
                  accept=".pdf"
                  @rejected="onRejected"
                />
                <q-input
                  rounded
                  outlined
                  label="Enter Your Message Here... "
                  type="textarea"
                  color="white"
                  bg-color="blue-3"
                  v-model="message"
                  :rules="[
                    val =>
                      (val && val.length > 30) || 'Please type your message'
                  ]"
                />
                <div class="text-center">
                  <q-btn label="Submit" type="submit" color="blue-6" />
                  <q-btn
                    label="Reset"
                    type="reset"
                    color="primary"
                    flat
                    class="q-ml-sm"
                  />
                </div>
              </q-form>
            </q-card-section>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      name: null,
      mail: null,
      message: null,
      files: null
    };
  },
  methods: {
    onSubmit() {
      console.log("OK");
    },
    onReset() {
      this.name = null;
      this.mail = null;
      this.message = null;
      this.files = false;
    },
    onRejected(rejectedEntries) {
      this.$q.notify({
        type: "negative",
        message: ` File did not pass validation constraints. You can update just PDF.`
      });
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
