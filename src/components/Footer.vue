<template>
  <div class="bg-black">
    <div :class="$q.screen.gt.sm ? '' : 'hidden'">
      <div class="row q-py-xl">
        <div class="col-2 q-pl-xl flex flex-center">
          <q-avatar size="4rem"
            ><img src="~assets/ginglogo.png" alt=""
          /></q-avatar>
        </div>
        <div class="col-3">
          <div class="column text-right">
            <q-btn class="col " size="2rem" to="/contact" label="contact" />
            <q-btn class="col" size="2rem" to="careers" label="careers" />
          </div>
        </div>
        <div class="col-5">
          <div class="column text-center">
            <div class="col">
              <q-btn
                icon="fab fa-instagram"
                type="a"
                size="2rem"
                href="https://www.instagram.com/ging.games/?igshid=1qffouyw8wfwl&hl=en"
                target="__blank"
              />
              <q-btn
                icon="fab fa-linkedin"
                type="a"
                href="https://www.linkedin.com/company/ging-games/about/"
                target="__blank"
                size="2rem"
              />
            </div>
            <div class="col ">
              <q-btn
                icon="fab fa-facebook"
                size="2rem"
                type="a"
                href="https://www.facebook.com/Ging-Games-106200504084982/about/?ref=page_internal"
                target="__blank"
              />
              <q-btn icon="far fa-envelope" size="2rem" to="contact" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-resize-text="{
          ratio: 1.2,
          minFontSize: '10px',
          maxFontSize: '20px'
        }"
        class="text-center q-py-md"
      >
        © 2020 Ging Games, Inc. All Rights Reserved.
      </div>
    </div>
    <div :class="$q.screen.sm ? '' : 'hidden'">
      <div class="row q-py-lg">
        <div class="col-2">
          <q-avatar size="4rem"
            ><img src="~assets/ginglogo.png" alt=""
          /></q-avatar>
        </div>
        <div class="col-4">
          <div class="column">
            <q-btn class="col" to="/contact" label="contact" />
            <q-btn class="col" to="careers" label="careers" />
          </div>
        </div>
        <div class="col-6">
          <div class="column text-center">
            <div class="col ">
              <q-btn
                icon="fab fa-instagram"
                type="a"
                href="https://www.instagram.com/ging.games/?igshid=1qffouyw8wfwl&hl=en"
                target="__blank"
              />
              <q-btn
                icon="fab fa-linkedin"
                type="a"
                href="https://www.linkedin.com/company/ging-games/about/"
                target="__blank"
              />
            </div>
            <div class="col ">
              <q-btn
                icon="fab fa-facebook"
                type="a"
                href="https://www.facebook.com/Ging-Games-106200504084982/about/?ref=page_internal"
                target="__blank"
              />
              <q-btn icon="far fa-envelope" to="contact" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-resize-text="{
          ratio: 1.2,
          minFontSize: '5px',
          maxFontSize: '14px'
        }"
        class="text-center q-py-md"
      >
        © 2020 Ging Games, Inc. All Rights Reserved.
      </div>
    </div>
    <div :class="$q.screen.xs ? '' : 'hidden'">
      <div class="row q-py-lg">
        <div class="col-3">
          <q-avatar size="4rem"
            ><img src="~assets/ginglogo.png" alt=""
          /></q-avatar>
        </div>
        <div class="col-4">
          <div class="column">
            <q-btn class="col" to="/contact" label="contact" />
            <q-btn class="col" to="careers" label="careers" />
          </div>
        </div>
        <div class="col-5">
          <div class="column">
            <div class="col">
              <q-btn
                icon="fab fa-instagram"
                type="a"
                href="https://www.instagram.com/ging.games/?igshid=1qffouyw8wfwl&hl=en"
                target="__blank"
              />
              <q-btn
                icon="fab fa-linkedin"
                type="a"
                href="https://www.linkedin.com/company/ging-games/about/"
                target="__blank"
              />
            </div>
            <div class="col ">
              <q-btn
                icon="fab fa-facebook"
                type="a"
                href="https://www.facebook.com/Ging-Games-106200504084982/about/?ref=page_internal"
                target="__blank"
              />
              <q-btn icon="far fa-envelope" to="contact" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-resize-text="{
          ratio: 1.2,
          minFontSize: '5px',
          maxFontSize: '14px'
        }"
        class="text-center q-py-md"
      >
        © 2020 Ging Games, Inc. All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
