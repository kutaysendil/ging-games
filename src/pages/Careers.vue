<template>
  <q-page padding class="bg ">
    <template>
      <div :class="$q.screen.gt.sm ? '' : 'hidden'">
        <div class="q-pa-md q-gutter-lg ">
          <q-breadcrumbs>
            <q-breadcrumbs-el label="Home" icon="fas fa-home" to="/" />
            <q-breadcrumbs-el label="Careers" icon="fas fa-laptop-house" />
          </q-breadcrumbs>
        </div>
        <div
          v-resize-text="{
            ratio: 1.5,
            minFontSize: '10px',
            maxFontSize: '20px'
          }"
          class="column q-gutter-xl q-col-gutter-lg "
        >
          <div class="col q-gutter-xl q-col-gutter-lg q-mb-lg">
            <div class="row items-center  q-col-gutter-lg">
              <div class="col-1"></div>
              <div class="col-6  items-center content-center">
                <q-card bordered style="max-width: 700px; ">
                  <q-card-section>
                    <div
                      v-resize-text="{
                        ratio: 1,
                        minFontSize: '10px',
                        maxFontSize: '30px'
                      }"
                      class="text-h6"
                    >
                      Opportunities
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section>
                    {{ oppor }}
                  </q-card-section>
                  <q-card-actions>
                    <q-space />
                    <q-btn flat to="careers/apply">Apply Now</q-btn>
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

          <div class="col q-gutter-xl q-col-gutter-lg q-mb-lg">
            <div class="row items-center  q-col-gutter-lg">
              <div class="col-1"></div>
              <div class="col-4  " style="max-width: 500px;  ">
                <q-img
                  fit="fit"
                  src="~assets/careeers/object.png"
                  spinner-color="white"
                />
              </div>
              <div class="col-6  items-center flex  justify-end">
                <q-card bordered style="max-width: 700px; ">
                  <q-card-section>
                    <div
                      v-resize-text="{
                        ratio: 1,
                        minFontSize: '10px',
                        maxFontSize: '30px'
                      }"
                      class="text-h6"
                    >
                      Be part of the team
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section>
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
                <q-card bordered style="max-width: 700px; ">
                  <q-card-section>
                    <div
                      v-resize-text="{
                        ratio: 1,
                        minFontSize: '10px',
                        maxFontSize: '30px'
                      }"
                      class="text-h6"
                    >
                      Culture
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section>
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
        <div class="column q-gutter-xl ">
          <div class="col  q-pt-lg  q-mb-lg">
            <div class="row items-center  q-col-gutter-lg">
              <div class="col-6  items-center content-center">
                <q-card bordered style="max-width: 700px; ">
                  <q-card-section>
                    <div
                      v-resize-text="{
                        ratio: 1,
                        minFontSize: '10px',
                        maxFontSize: '30px'
                      }"
                      class="text-h6"
                    >
                      Opportunities
                    </div>
                  </q-card-section>

                  <q-card-section>
                    {{ oppor }}
                  </q-card-section>
                  <q-card-actions>
                    <q-space />
                    <q-btn flat>Apply Now</q-btn>
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
                <q-card bordered style="max-width: 700px; ">
                  <q-card-section>
                    <div
                      v-resize-text="{
                        ratio: 1,
                        minFontSize: '10px',
                        maxFontSize: '30px'
                      }"
                      class="text-h6"
                    >
                      Be part of the team
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section>
                    {{ bePart }}
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>

          <div class="col  q-pt-lg  q-mb-lg">
            <div class="row items-center  q-col-gutter-lg">
              <div class="col-6  items-center content-center">
                <q-card bordered style="max-width: 700px; ">
                  <q-card-section>
                    <div
                      v-resize-text="{
                        ratio: 1,
                        minFontSize: '10px',
                        maxFontSize: '30px'
                      }"
                      class="text-h6"
                    >
                      Culture
                    </div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section>
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
          <div class="col row justify-center">
            <q-card class="my-card">
              <q-img src="~assets/careeers/object.png" spinner-color="white" />

              <q-card-section>
                <div class="text-h6">Opportunities</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{ oppor }}
              </q-card-section>
              <q-card-actions align="center">
                <q-btn color="white" text-color="black" label="Apply Now" />
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
                <div class="text-h6">Be part of the team</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
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
                <div class="text-h6">Culture</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{ culture }}
              </q-card-section>
              <q-card-actions align="center">
                <q-btn color="white" text-color="black" label="Apply Now" />
              </q-card-actions>
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
.bg {
  background-image: url("~assets/Grad.png");
  opacity: 0.8;
  background-repeat: space;
}
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
