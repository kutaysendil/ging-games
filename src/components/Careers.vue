<template>
  <div class="q-pa-lg">
    <div>
      <div class="row ">
        <div class="col-xs-12 col-md-6 ">
          <div
            v-resize-text="{
              ratio: 1,
              minFontSize: '50px',
              maxFontSize: '80px'
            }"
            class="q-py-md text-center text-bold baslik"
          >
            Careers
          </div>
          <div
            v-resize-text="{
              ratio: 1.6,
              minFontSize: '16px',
              maxFontSize: '50px'
            }"
            class="text-weight-light q-pa-xl aciklama"
          >
            We are always looking for talented and creatively driven individuals
            to join our team. We offer a cozy work environment, fair social and
            financial compansation for you hard work and lots and lots of
            coffee.
          </div>
          <div class="text-center q-py-lg">
            <q-btn
              to="/careers"
              color="black"
              text-color="white"
              label="See More"
              size="1.4rem"
            />
          </div>
        </div>
        <div class="col-xs-12 col-md-6 ">
          <q-img
            src="~assets/careeers/carrears.png"
            class="img"
            spinner-color="white"
          />
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
}
.baslik {
  font-family: "buyuk";
}
.aciklama {
  font-family: "baslik";
}
</style>
