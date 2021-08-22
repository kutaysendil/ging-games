<template>
  <q-page padding class="bg ">
    <template>
      <div :class="$q.screen.gt.md ? 'show' : 'hidden'">
        <div class="q-pa-md q-gutter-sm ">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el label="Games" icon="fas fa-gamepad" />
          </q-breadcrumbs>
        </div>
        <div class="column q-gutter-lg">
          <div class="col q-gutter-lg">
            <div class="row ">
              <div class="col-7">
                <q-card bordered>
                  <q-card-section>
                    <div class="text-h6">Opportunities</div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section>
                    Ready to become a part of our team? We have vacant positions
                    for developers, designers and artists. Our goal as a team is
                    to continiously grow. Both as versatile game-makers and
                    balanced individuals. Buckle up, pack your strengths, your
                    passion and your sense of identity and contact us!
                  </q-card-section>
                  <q-card-actions>
                    <q-space />
                    <q-btn flat>Action 1</q-btn>
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-5 " style="max-width: 400px; height: 200px;">
                <q-img
                  fit="fit"
                  src="~assets/careeers/object.png"
                  spinner-color="white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template>
      <div :class="$q.screen.gt.md ? 'hidden' : 'show'">
        <div class="q-pa-md q-gutter-sm ">
          <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el label="Games" icon="fas fa-gamepad" />
          </q-breadcrumbs>
        </div>
        <div class="column q-gutter-lg">
          <div class="col q-gutter-lg">
            <div class="row ">
              <div class="col-7">
                <q-card bordered>
                  <q-card-section>
                    <div class="text-h6">Opportunities</div>
                  </q-card-section>

                  <q-separator dark inset />

                  <q-card-section>
                    Ready to become a part of our team? We have vacant positions
                    for developers, designers and artists. Our goal as a team is
                    to continiously grow. Both as versatile game-makers and
                    balanced individuals. Buckle up, pack your strengths, your
                    passion and your sense of identity and contact us!
                  </q-card-section>
                  <q-card-actions>
                    <q-space />
                    <q-btn flat>Action 1</q-btn>
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col-5 " style="max-width: 400px; height: 200px;">
                <q-img
                  fit="fit"
                  src="~assets/careeers/object.png"
                  spinner-color="white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("~assets/Grad.png");
  opacity: 0.5;
  background-repeat: space;
}
</style>
