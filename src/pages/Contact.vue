<template>
  <q-page padding>
    <div>
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg3"></div>
      <div class="bg4"></div>
      <div class="bg6"></div>
      <div class="bg5"></div>
      <div class="bg7"></div>
      <div class="bg8"></div>
      <div class="bg9"></div>
    </div>
    <div class="q-pa-md q-gutter-lg q-pt-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" icon="fas fa-home" to="/" />
        <q-breadcrumbs-el label="Contact" icon="fas fa-paper-plane" />
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
          class="col q-pa-lg baslik"
        >
          Contact Us!
        </div>
        <div class="col q-pt-xl">
          <div class="row justify-around items-center q-col-gutter-md q-pt-xl">
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
                      name="name"
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
                      name="email"
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
                      name="message"
                      :rules="[
                        val =>
                          (val && val.length > 30) || 'Please type your message'
                      ]"
                    />
                    <div class="flex flex-center">
                      <vue-recaptcha
                        :sitekey="this.key"
                        :loadRecaptchaScript="true"
                      ></vue-recaptcha>
                    </div>
                    <div class="text-center flex flex-center">
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
          class="col  "
        >
          Contact Us!
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
                      name="name"
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
                      name="email"
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
                      name="message"
                      :rules="[
                        val =>
                          (val && val.length > 30) || 'Please type your message'
                      ]"
                    />
                    <div class="flex">
                      <div
                        style=" transform:scale(0.77);
    transform-origin:0 0;"
                      >
                        <vue-recaptcha
                          :sitekey="this.key"
                          :loadRecaptchaScript="true"
                        ></vue-recaptcha>
                      </div>
                    </div>
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
                  name="name"
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
                  name="email"
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
                  name="message"
                  :rules="[
                    val =>
                      (val && val.length > 30) || 'Please type your message'
                  ]"
                />
                <div class="flex flex-center">
                  <div
                    style=" 
    transform-origin:0 0;"
                  >
                    <vue-recaptcha
                      size="10000px"
                      :sitekey="this.key"
                      :loadRecaptchaScript="true"
                    ></vue-recaptcha>
                  </div>
                </div>
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
import emailjs from "emailjs-com";
import VueRecaptcha from "vue-recaptcha";

export default {
  // name: 'PageName',
  data() {
    return {
      name: null,
      mail: null,
      message: null,
      key: process.env.GOOGLE_CAPTCHA_KEY
    };
  },
  components: { VueRecaptcha },
  methods: {
    onSubmit(e) {
      emailjs
        .sendForm(
          `${process.env.YOUR_SERVICE_ID}`,
          `${process.env.YOUR_TEMPLATE_ID}`,
          e.target,
          `${process.env.YOUR_USER_ID}`
        )
        .then(result => {
          //(this.name = null), (this.mail = null), (this.message = null);

          this.$q.notify({
            type: "positive",
            timeout: "1500",
            message: `Success - You are being redirected to the homepage.`
          });
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
        })
        .catch(error => {
          if (error.status === 400) {
            this.$q.notify({
              type: "negative",
              position: "center",
              message: `Are you robot ?`
            });
          } else {
            this.$q.notify({
              type: "negative",
              message: ` ${error.text}`
            });
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.bg1 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 10%;
  left: 10%;
  bottom: 80%;
}
.bg3 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 3%;
  left: 1%;
  bottom: 80%;
}
.bg2 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 2%;
  left: 80%;
}
.bg3 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 0%;
  left: 40%;
}
.bg3 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 33%;
  left: 12%;
}
.bg4 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 29%;
  left: 61%;
}
.bg5 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 53%;
  left: 1%;
}
.bg6 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 58%;
  left: 41%;
}
.bg7 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 11%;
  left: 51%;
}
.bg8 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 8%;
  left: 25%;
}
.bg9 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 83%;
  left: 33%;
}
.bg9 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 93%;
  left: 21%;
}
</style>
