<template>
  <q-page padding class="bg  ">
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
    <template>
      <div :class="$q.screen.gt.sm ? '' : 'hidden'">
        <div class="q-pa-md q-gutter-lg ">
          <q-breadcrumbs>
            <q-breadcrumbs-el label="Home" icon="fas fa-home" to="/" />
            <q-breadcrumbs-el label="Careers" icon="fas fa-laptop-house" />
          </q-breadcrumbs>
        </div>
        <div class="column q-gutter-sm q-col-gutter-lg  ">
          <div class="col q-gutter-xl q-col-gutter-lg q-mb-lg">
            <div class="row items-center  q-col-gutter-lg">
              <div class="col-1"></div>
              <div class="col-6  items-center content-center">
                <q-card bordered class="cardd" style="max-width: 700px; ">
                  <q-card-section>
                    <div
                      v-resize-text="{
                        ratio: 1.5,
                        minFontSize: '10px',
                        maxFontSize: '50px'
                      }"
                      class="text-h6 text-bold q-pa-sm q-pt-lg"
                    >
                      Opportunities
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section
                    v-resize-text="{
                      ratio: 2,
                      minFontSize: '10px',
                      maxFontSize: '24px'
                    }"
                    class=" text-weight-light"
                  >
                    {{ oppor }}
                  </q-card-section>
                  <q-card-actions>
                    <q-space />

                    <q-btn
                      to="/careers/apply"
                      rounded
                      color="transparent"
                      label="Apply Now"
                      size="1.5rem"
                      text-color="purple-9"
                      padding="5px 4rem"
                      outline
                    />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-4  " style="max-width: 500px;  ">
                <q-img
                  fit="fit"
                  src="~assets/careeers/object.png"
                  spinner-color="white"
                />
              </div>
            </div>
          </div>

          <div class="col  q-col-gutter-sm ">
            <div class="row items-center  q-col-gutter-sm">
              <div class="col-1"></div>
              <div class="col-4  " style="max-width: 500px;  ">
                <q-img
                  fit="fit"
                  src="~assets/careeers/ddddd.png"
                  spinner-color="white"
                />
              </div>
              <div class="col-6  items-center flex  justify-end">
                <q-card bordered class="cardd" style="max-width: 700px; ">
                  <q-card-section>
                    <div
                      v-resize-text="{
                        ratio: 1.5,
                        minFontSize: '10px',
                        maxFontSize: '50px'
                      }"
                      class="text-h6 q-pa-sm q-pt-lg "
                    >
                      Be part of the team
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section
                    v-resize-text="{
                      ratio: 2,
                      minFontSize: '10px',
                      maxFontSize: '24px'
                    }"
                    class=" text-weight-light"
                  >
                    {{ bePart }}
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>

          <div class="col q-gutter-xl q-col-gutter-lg q-mb-lg">
            <div class="row items-center  q-col-gutter-lg">
              <div class="col-1"></div>
              <div class="col-6  items-center content-center">
                <q-card class="cardd" bordered style="max-width: 700px; ">
                  <q-card-section>
                    <div
                      v-resize-text="{
                        ratio: 1.5,
                        minFontSize: '10px',
                        maxFontSize: '50px'
                      }"
                      class="text-h6 q-pa-sm q-pt-lg "
                    >
                      Culture
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section
                    v-resize-text="{
                      ratio: 2,
                      minFontSize: '10px',
                      maxFontSize: '24px'
                    }"
                    class=" text-weight-light"
                  >
                    {{ culture }}
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-4  " style="max-width: 500px;   ">
                <q-img
                  fit="fit"
                  src="~assets/careeers/cultures.png"
                  spinner-color="white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template>
      <div :class="$q.screen.sm ? '' : 'hidden'">
        <div class="q-pa-md q-gutter-lg ">
          <q-breadcrumbs>
            <q-breadcrumbs-el label="Home" icon="fas fa-home" to="/" />
            <q-breadcrumbs-el label="Careers" icon="fas fa-laptop-house" />
          </q-breadcrumbs>
        </div>
        <div class="column q-gutter-sm ">
          <div class="col  ">
            <div class="row items-center  ">
              <div class="col-6  items-center content-center">
                <q-card
                  bordered
                  class="cardd q-mr-lg"
                  style="max-width: 500px; "
                >
                  <q-card-section>
                    <div
                      v-resize-text="{
                        ratio: 1.5,
                        minFontSize: '10px',
                        maxFontSize: '36px'
                      }"
                      class="text-h6 "
                    >
                      Opportunities
                    </div>
                  </q-card-section>

                  <q-card-section
                    v-resize-text="{
                      ratio: 2,
                      minFontSize: '10px',
                      maxFontSize: '24px'
                    }"
                  >
                    {{ oppor }}
                  </q-card-section>
                  <q-card-actions>
                    <q-space />
                    <q-btn
                      to="/careers/apply"
                      rounded
                      color="transparent"
                      label="Apply Now"
                      size="1.1rem"
                      text-color="purple-9"
                      padding="5px 4rem"
                      outline
                    />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-6  " style="max-width: 600px;  ">
                <q-img
                  fit="fit"
                  src="~assets/careeers/object.png"
                  spinner-color="white"
                />
              </div>
            </div>
          </div>
          <div class="col  q-pt-lg  q-mb-lg">
            <div class="row items-center  q-col-gutter-lg">
              <div class="col-6  " style="max-width: 500px;  ">
                <q-img
                  fit="fit"
                  src="~assets/careeers/object.png"
                  spinner-color="white"
                />
              </div>
              <div class="col-6  items-center flex  justify-end">
                <q-card class="cardd" bordered style="max-width: 700px; ">
                  <q-card-section>
                    <div
                      v-resize-text="{
                        ratio: 1.5,
                        minFontSize: '10px',
                        maxFontSize: '36px'
                      }"
                      class="text-h6 "
                    >
                      Be part of the team
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section
                    v-resize-text="{
                      ratio: 2,
                      minFontSize: '10px',
                      maxFontSize: '24px'
                    }"
                  >
                    {{ bePart }}
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>

          <div class="col  q-pt-lg  q-mb-lg">
            <div class="row items-center  ">
              <div class="col-6  items-center content-center">
                <q-card class="cardd" bordered style="max-width: 700px; ">
                  <q-card-section>
                    <div
                      v-resize-text="{
                        ratio: 1.5,
                        minFontSize: '16px',
                        maxFontSize: '46px'
                      }"
                      class="text-h6  "
                    >
                      Culture
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section
                    v-resize-text="{
                      ratio: 2,
                      minFontSize: '10px',
                      maxFontSize: '24px'
                    }"
                  >
                    {{ culture }}
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-6  " style="max-width: 500px;   ">
                <q-img
                  fit="fit"
                  src="~assets/careeers/cultures.png"
                  spinner-color="white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template>
      <div :class="$q.screen.xs ? '' : 'hidden'">
        <div class="q-pa-md q-gutter-lg ">
          <q-breadcrumbs>
            <q-breadcrumbs-el label="Home" icon="fas fa-home" to="/" />
            <q-breadcrumbs-el label="Careers" icon="fas fa-laptop-house" />
          </q-breadcrumbs>
        </div>
        <div class="column q-gutter-xl">
          <div class="col row justify-center ">
            <q-card class="my-card">
              <q-img src="~assets/careeers/object.png" spinner-color="white" />

              <q-card-section
                v-resize-text="{
                  ratio: 1.5,
                  minFontSize: '10px',
                  maxFontSize: '50px'
                }"
              >
                <div class="text-h6 ">Opportunities</div>
              </q-card-section>

              <q-card-section
                class="q-pt-none"
                v-resize-text="{
                  ratio: 2,
                  minFontSize: '8px',
                  maxFontSize: '30px'
                }"
              >
                {{ oppor }}
              </q-card-section>
              <q-card-actions align="center">
                <q-btn
                  to="/careers/apply"
                  rounded
                  color="transparent"
                  label="Apply Now"
                  size="1rem"
                  text-color="purple-9"
                  padding="5px 4rem"
                  outline
                />
              </q-card-actions>
            </q-card>
          </div>
          <div class="col row justify-center">
            <q-card class="my-card">
              <q-img
                src="~assets/careeers/cultures.png"
                spinner-color="white"
              />

              <q-card-section>
                <div
                  class="text-h6 "
                  v-resize-text="{
                    ratio: 1.5,
                    minFontSize: '10px',
                    maxFontSize: '50px'
                  }"
                >
                  Be part of the team
                </div>
              </q-card-section>

              <q-card-section
                class="q-pt-none "
                v-resize-text="{
                  ratio: 2,
                  minFontSize: '8px',
                  maxFontSize: '30px'
                }"
              >
                {{ bePart }}
              </q-card-section>
            </q-card>
          </div>
          <div class="col row justify-center q-pb-lg">
            <q-card class="my-card">
              <q-img
                src="~assets/careeers/cultures.png"
                spinner-color="white"
              />

              <q-card-section>
                <div
                  class="text-h6 "
                  v-resize-text="{
                    ratio: 1.5,
                    minFontSize: '10px',
                    maxFontSize: '50px'
                  }"
                >
                  Culture
                </div>
              </q-card-section>

              <q-card-section
                class="q-pt-none "
                v-resize-text="{
                  ratio: 2,
                  minFontSize: '8px',
                  maxFontSize: '30px'
                }"
              >
                {{ culture }}
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </template>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      bePart:
        "Game making is a tedious project where the ultimate input is the effort of the team.  Here in Ging Games we aim to make the production process as  fun (if not more) as the game itself. We believe in a development environment where each individual has a voice.",
      oppor:
        "Ready to become a part of our team? We have vacant positions for evelopers, designers and artists. Our goal as a team is to continiously grow. Both as versatile game-makers and balanced individuals. Buckle up, pack your strengths, your passion and your sense of identity and contact us!",
      culture:
        "Our team culture nourishes differences and takes each idea into equation. We hope to create a working environment where each individual can feel valued, safe and heard. Our strength is our ability to cooperate towards a common goal, taking inspiration from each other."
    };
  }
};
</script>

<style lang="scss" scoped>
.cardd {
  border-radius: 25px;
}
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
  top: 63%;
  left: 81%;
}
.bg8 {
  background-image: url("~assets/Grad.png");
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  position: absolute;
  top: 73%;
  left: 5%;
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

.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
