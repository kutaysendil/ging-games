<template>
  <q-page class="about" padding>
    <div class="row">
      <div
        v-resize-text="{
          ratio: 1.5,
          minFontSize: '10px',
          maxFontSize: '200px'
        }"
        class="text-center col q-pt-lg"
      >
        About Us
      </div>
      <div class=" q-pt-lg">
        <div class="q-pt-lg">
          <div class="row q-pt-lg">
            <div class="q-pt-lg col-xs-12 col-md-6 flex items-center ">
              <img src="~assets/abouts.png" alt="" />
            </div>
            <div
              v-resize-text="{
                ratio: 1.5,
                minFontSize: '5px',
                maxFontSize: '30px'
              }"
              class="col-xs-12 q-pt-lg col-md-6"
            >
              Ging Games is a mobile game company based in Ankara, Turkey. Since
              our launch in 2019 we have worked with numerous bussiness partners
              to bring the best mobile casual and hyper-casual titles to people
              around the world. We value efficient teamwork and meaningful
              dialogue in our production.
              <br />
              <br />
              We firmly believe in democratizing the concept of 'play' by
              creating mobile experiences for everyone, everywhere. We embrace
              constraints in our day-to-day production pipeline and try to bring
              creative, aesthetically pleasing and explosively fun mobile games
              to life.
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
}
</style>
