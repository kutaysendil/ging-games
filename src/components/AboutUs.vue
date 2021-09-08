<template>
  <div>
    <q-separator size="3px" />
    <q-page class="about " padding>
      <div ref="about">
        <div :class="$q.screen.gt.md ? '' : 'hidden'" class=" q-pt-lg">
          <div
            v-resize-text="{
              ratio: 1,
              minFontSize: '50px',
              maxFontSize: '80px'
            }"
            class=" q-pl-xl text-h2 q-pt-lg "
          >
            About Us
          </div>
          <div class=" q-pt-lg">
            <div class="q-pt-lg">
              <div class="row q-pt-lg">
                <div class="col-xs-12 q-py-lg col-md-8 ">
                  <div
                    v-resize-text="{
                      ratio: 2,
                      minFontSize: '10px',
                      maxFontSize: '35px'
                    }"
                    class="text-weight-light q-pa-xl "
                  >
                    Ging Games is a mobile game company based in Ankara, Turkey.
                    Since our launch in 2019 we have worked with numerous
                    bussiness partners to bring the best mobile casual and
                    hyper-casual titles to people around the world. We value
                    efficient teamwork and meaningful dialogue in our
                    production.
                    <br />
                    <br />
                    <br />
                    We firmly believe in democratizing the concept of 'play' by
                    creating mobile experiences for everyone, everywhere. We
                    embrace constraints in our day-to-day production pipeline
                    and try to bring creative, aesthetically pleasing and
                    explosively fun mobile games to life.
                  </div>
                </div>
                <div
                  v-resize-text="{
                    ratio: 1,
                    minFontSize: '50px',
                    maxFontSize: '80px'
                  }"
                  class="q-pt-lg col-xs-12 col-md-4   flex items-center "
                >
                  <q-img
                    src="~assets/abouts.png"
                    spinner-color="white"
                    class="imgs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ipad">
          <div
            v-resize-text="{
              ratio: 1,
              minFontSize: '50px',
              maxFontSize: '80px'
            }"
            class=" q-pl-xl text-h2 q-pt-lg "
          >
            About Us
          </div>
          <div class=" q-pt-lg">
            <div class="q-pt-lg">
              <div class="row q-pt-lg">
                <div class="col-5 ">
                  <div class="text-weight-light q-pa-xl text-subtitle1 ">
                    Ging Games is a mobile game company based in Ankara, Turkey.
                    Since our launch in 2019 we have worked with numerous
                    bussiness partners to bring the best mobile casual and
                    hyper-casual titles to people around the world. We value
                    efficient teamwork and meaningful dialogue in our
                    production.
                    <br />
                    <br />
                    <br />
                    We firmly believe in democratizing the concept of 'play' by
                    creating mobile experiences for everyone, everywhere. We
                    embrace constraints in our day-to-day production pipeline
                    and try to bring creative, aesthetically pleasing and
                    explosively fun mobile games to life.
                  </div>
                </div>
                <div class="q-pt-lg col-7   flex items-center ">
                  <q-img
                    src="~assets/abouts.png"
                    spinner-color="white"
                    class="imgs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="$q.screen.sm ? '' : 'hidden'">
          <div
            v-resize-text="{
              ratio: 1,
              minFontSize: '50px',
              maxFontSize: '80px'
            }"
            class=" q-pl-xl text-h2 q-pt-lg "
          >
            About Us
          </div>
          <div class="row q-pt-lg">
            <div class="col-xs-12 q-py-lg col-md-8 ">
              <div
                v-resize-text="{
                  ratio: 2,
                  minFontSize: '10px',
                  maxFontSize: '25px'
                }"
                class="text-weight-light q-pa-xl "
              >
                Ging Games is a mobile game company based in Ankara, Turkey.
                Since our launch in 2019 we have worked with numerous bussiness
                partners to bring the best mobile casual and hyper-casual titles
                to people around the world. We value efficient teamwork and
                meaningful dialogue in our production.
                <div class="q-pt-lg col-xs-12 col-md-4   flex items-center ">
                  <q-img
                    src="~assets/abouts.png"
                    spinner-color="white"
                    class="imgs"
                  />
                </div>
                We firmly believe in democratizing the concept of 'play' by
                creating mobile experiences for everyone, everywhere. We embrace
                constraints in our day-to-day production pipeline and try to
                bring creative, aesthetically pleasing and explosively fun
                mobile games to life.
              </div>
            </div>
          </div>
        </div>
        <div :class="$q.screen.xs ? '' : 'hidden'">
          <div
            v-resize-text="{
              ratio: 1,
              minFontSize: '50px',
              maxFontSize: '80px'
            }"
            class=" q-pl-xl text-h4 q-pt-lg "
          >
            About Us
          </div>
          <div class="row ">
            <div class="col-xs-12 col-md-8 ">
              <div
                v-resize-text="{
                  ratio: 2,
                  minFontSize: '10px',
                  maxFontSize: '25px'
                }"
                class="text-weight-light q-pa-xl "
              >
                Ging Games is a mobile game company based in Ankara, Turkey.
                Since our launch in 2019 we have worked with numerous bussiness
                partners to bring the best mobile casual and hyper-casual titles
                to people around the world. We value efficient teamwork and
                meaningful dialogue in our production.
                <div class="q-pt-lg col-xs-12 col-md-4   flex items-center ">
                  <q-img
                    src="~assets/abouts.png"
                    spinner-color="white"
                    class="imgs"
                  />
                </div>
                We firmly believe in democratizing the concept of 'play' by
                creating mobile experiences for everyone, everywhere. We embrace
                constraints in our day-to-day production pipeline and try to
                bring creative, aesthetically pleasing and explosively fun
                mobile games to life.
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
    <q-separator size="3px" />
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  mounted() {
    this.$store.commit("app/setAbout", this.$refs.about);
  }
};
</script>

<style lang="scss">
.about {
  background-color: #8be4fe;
  opacity: 0.8;
}
.imgs {
  width: 60rem;
  height: auto;
}
.ipad {
  display: none;
}
@media only screen and (max-width: 1366px) and (min-width: 900px) {
  .ipad {
    display: block;
  }
}
</style>
