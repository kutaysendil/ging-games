<template>
  <div class="q-pa-lg">
    <div :class="$q.screen.gt.sm ? '' : 'hidden'">
      <div class="row ">
        <div class="col-xs-12 col-md-6 flex items-center  ">
          <q-img
            src="~assets/careeers/carrears.png"
            class="img"
            spinner-color="white"
          />
        </div>
        <div class="col-xs-12 col-md-6 ">
          <div
            v-resize-text="{
              ratio: 1,
              minFontSize: '50px',
              maxFontSize: '80px'
            }"
            class="q-py-md text-center "
          >
            Careers
          </div>
          <div
            v-resize-text="{
              ratio: 2,
              minFontSize: '10px',
              maxFontSize: '35px'
            }"
            class="text-weight-light q-pa-xl "
          >
            We are always looking for talented and creatively driven individuals
            to join our team. We offer a cozy work environment, fair social and
            financial compansation for you hard work and lots and lots of
            coffee.
          </div>
          <div class="text-center q-py-lg">
            <q-btn
              to="/careers"
              rounded
              color="transparent"
              label="see more"
              size="1.5rem"
              text-color="deep-purple-5"
              padding="5px 4rem"
              outline
            />
          </div>
        </div>
      </div>
    </div>
    <div :class="$q.screen.sm ? '' : 'hidden'">
      <div class="row ">
        <div class="col-xs-12 col-md-6   ">
          <div
            v-resize-text="{
              ratio: 1,
              minFontSize: '50px',
              maxFontSize: '80px'
            }"
            class="q-py-md text-center "
          >
            Careers
          </div>
          <q-img
            src="~assets/careeers/carrears.png"
            class="img"
            spinner-color="white"
          />
        </div>
        <div class="col-xs-12 col-md-6 ">
          <div
            v-resize-text="{
              ratio: 2,
              minFontSize: '10px',
              maxFontSize: '35px'
            }"
            class="text-weight-light q-pa-xl "
          >
            We are always looking for talented and creatively driven individuals
            to join our team. We offer a cozy work environment, fair social and
            financial compansation for you hard work and lots and lots of
            coffee.
          </div>
          <div class="text-center q-py-lg">
            <q-btn
              to="/careers"
              rounded
              color="transparent"
              label="see more"
              size="1.5rem"
              text-color="deep-purple-5"
              padding="5px 4rem"
              outline
            />
          </div>
        </div>
      </div>
    </div>
    <div :class="$q.screen.xs ? '' : 'hidden'">
      <div class="row ">
        <div class="col-xs-12    ">
          <div
            v-resize-text="{
              ratio: 1,
              minFontSize: '50px',
              maxFontSize: '80px'
            }"
            class="q-py-xs text-center "
          >
            Careers
          </div>
          <q-img
            src="~assets/careeers/carrears.png"
            class="img"
            spinner-color="white"
          />
        </div>
        <div class="col-xs-12 ">
          <div
            v-resize-text="{
              ratio: 2,
              minFontSize: '10px',
              maxFontSize: '35px'
            }"
            class="text-weight-light q-pa-sm "
          >
            We are always looking for talented and creatively driven individuals
            to join our team. We offer a cozy work environment, fair social and
            financial compansation for you hard work and lots and lots of
            coffee.
          </div>
          <div class="text-center q-py-sm">
            <q-btn
              to="/careers"
              rounded
              color="transparent"
              label="see more"
              size="1.5rem"
              text-color="deep-purple-5"
              padding="5px 4rem"
              outline
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.img {
  opacity: 0.8;
  width: 100%;
}
</style>
