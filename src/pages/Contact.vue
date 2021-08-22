<template>
  <q-page padding class="bg ">
    <div class="q-pa-md q-gutter-lg q-pt-xl">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" icon="fas fa-home" to="/" />
        <q-breadcrumbs-el label="Contact" icon="fas fa-paper-plane" />
      </q-breadcrumbs>
    </div>
    <div :class="$q.screen.gt.sm ? '' : 'hidden'">
      <div class="column q-pt-xl">
        <div
          v-resize-text="{
            ratio: 1,
            minFontSize: '10px',
            maxFontSize: '80px'
          }"
          class="col q-pa-lg"
        >
          Write To Us!
        </div>
        <div class="col q-pt-xl">
          <div class="row justify-around items-center q-col-gutter-xl q-pt-xl">
            <div class="col-4  " style="max-width:550px;  ">
              <q-img
                style=" opacity:5;"
                src="~assets/contactus.png"
                spinner-color="white"
              />
            </div>

            <div class="col-8 q-pr-xl " style="max-width:900px;">
              <q-card class="my-card">
                <q-card-section>
                  <q-form @submit="onSubmit" class="q-gutter-md">
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
            <div class="col-6  " style="max-width:550px;  ">
              <q-img
                style="background:white;"
                src="~assets/contactus.png"
                spinner-color="white"
              />
            </div>

            <div class="col-6  " style="max-width:600px;">
              <q-card class="my-card">
                <q-card-section>
                  <q-form @submit="onSubmit" class="q-gutter-md">
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
              <q-img src="~assets/contactus.png" spinner-color="white" />
            </q-card-section>
            <q-card-section>
              <q-form @submit="onSubmit" class="q-gutter-sm">
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
      message: null
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
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
