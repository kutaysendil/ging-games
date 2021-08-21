<template>
  <q-page class="about " padding>
    <div class="row q-pt-lg">
      <div
        v-resize-text="{
          ratio: 1,
          minFontSize: '50px',
          maxFontSize: '100px'
        }"
        class="text-center col q-pt-lg text-bold"
      >
        About Us
      </div>
      <div class=" q-pt-lg">
        <div class="q-pt-lg">
          <div class="row q-pt-lg">
            <div
              v-resize-text="{
                ratio: 2.2,
                minFontSize: '10px',
                maxFontSize: '50px'
              }"
              class="q-pt-lg col-xs-12 col-md-6   flex items-center "
            >
              <q-img
                src="~assets/abouts.png"
                spinner-color="white"
                class="q-py-lg "
              />
            </div>
            <div class="col-xs-12 q-py-lg col-md-6 ">
              <div
                v-resize-text="{
                  ratio: 2.2,
                  minFontSize: '10px',
                  maxFontSize: '50px'
                }"
                class="text-weight-light"
              >
                Ging Games is a mobile game company based in Ankara, Turkey.
                Since our launch in 2019 we have worked with numerous bussiness
                partners to bring the best mobile casual and hyper-casual titles
                to people around the world. We value efficient teamwork and
                meaningful dialogue in our production.
                <br />
                <br />
                <br />
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
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about {
  background-color: #8be4fe;
  opacity: 0.8;
}
</style>
