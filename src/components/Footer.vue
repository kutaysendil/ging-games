<template>
  <div class="bg-black ">
    <div :class="$q.screen.gt.sm ? '' : 'hidden'">
      <div class="row q-py-xl flex items-center">
        <div class="col-2 q-pl-xl flex flex-center">
          <q-avatar size="6rem"
            ><img src="~assets/GingOrange.png" alt=""
          /></q-avatar>
        </div>
        <div class="col-2">
          <div class="column text-right">
            <q-btn
              class="col"
              :to="{ name: '', hash: 'about' }"
              @click="aboutus"
              size="1rem"
              label="about us"
            />
            <q-btn class="col" size="1rem" to="contact" label="contact" />
            <q-btn class="col" size="1rem" to="careers" label="careers" />
          </div>
        </div>
        <div class="col-1">
          <svg height="100%" width="100%">
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              style="stroke:white;stroke-width:1"
            />
          </svg>
        </div>
        <div class="col-1">
          <q-btn
            icon="fab fa-instagram"
            type="a"
            size="1.5rem"
            href="https://www.instagram.com/ging.games/?igshid=1qffouyw8wfwl&hl=en"
            target="__blank"
            class="white"
          />
        </div>
        <div class="col-1">
          <q-btn
            icon="fab fa-linkedin"
            type="a"
            href="https://www.linkedin.com/company/ging-games/about/"
            target="__blank"
            size="1.5rem"
            class="white"
          />
        </div>
        <div class="col-1">
          <q-btn
            class="white"
            icon="far fa-envelope"
            size="1.5rem"
            to="contact"
          />
        </div>
        <div class="col-3  text-left">
          <div class="row items-center">
            <q-avatar icon="fas fa-map-marker" size="4rem" />

            <div class=" ">
              <div
                v-resize-text="{
                  ratio: 2,
                  minFontSize: '13px',
                  maxFontSize: '25px'
                }"
              >
                Mustafa Kemal Mah. No:274/7
              </div>
              <div
                v-resize-text="{
                  ratio: 2,
                  minFontSize: '15px',
                  maxFontSize: '25px'
                }"
              >
                Kapı 200 Cankaya Ankara
              </div>
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
        class="text-center q-py-md "
      >
        © 2021 Ging Games, Inc. All Rights Reserved.
      </div>
    </div>
    <div :class="$q.screen.sm ? '' : 'hidden'">
      <div class="row q-py-lg  items-center">
        <div class="col-1">
          <q-avatar size="4rem"
            ><img src="~assets/ginglogo.png" alt=""
          /></q-avatar>
        </div>
        <div class="col-2">
          <div class="column">
            <q-btn class="col" label="about us" />
            <q-btn class="col" to="careers" label="contact" />
            <q-btn class="col" to="careers" label="careers" />
          </div>
        </div>
        <div class="col-1">
          <svg height="100%" width="100%">
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              style="stroke:white;stroke-width:1"
            />
          </svg>
        </div>
        <div class="col-1">
          <q-btn
            icon="fab fa-instagram"
            type="a"
            size="1rem"
            href="https://www.instagram.com/ging.games/?igshid=1qffouyw8wfwl&hl=en"
            target="__blank"
            class="white"
          />
        </div>
        <div class="col-1">
          <q-btn
            icon="fab fa-linkedin"
            type="a"
            href="https://www.linkedin.com/company/ging-games/about/"
            target="__blank"
            size="1rem"
            class="white"
          />
        </div>
        <div class="col-1">
          <q-btn
            class="white"
            icon="far fa-envelope"
            size="1rem"
            to="contact"
          />
        </div>
        <div class="col-1">
          <q-avatar icon="fas fa-map-marker" size="3rem" />
        </div>
        <div class="col-4">
          <div class=" ">
            <div
              v-resize-text="{
                ratio: 2,
                minFontSize: '13px',
                maxFontSize: '18px'
              }"
            >
              Mustafa Kemal Mah. No:274/7
            </div>
            <div
              v-resize-text="{
                ratio: 2,
                minFontSize: '15px',
                maxFontSize: '20px'
              }"
            >
              Kapı 200 Cankaya Ankara
            </div>
          </div>
        </div>
      </div>
      <div
        v-resize-text="{
          ratio: 1.5,
          minFontSize: '9px',
          maxFontSize: '18px'
        }"
        class="text-center q-py-md "
      >
        © 2020 Ging Games, Inc. All Rights Reserved.
      </div>
    </div>
    <div :class="$q.screen.xs ? '' : 'hidden'">
      <div class="row q-py-lg  items-center">
        <div class="col-2">
          <q-avatar size="4rem"
            ><img src="~assets/ginglogo.png" alt=""
          /></q-avatar>
        </div>
        <div class="col-4">
          <div class="column">
            <q-btn class="col" label="about us" />
            <q-btn class="col" to="/contact" label="contact" />
            <q-btn class="col" to="careers" label="careers" />
          </div>
        </div>
        <div class="col-6">
          <div class="column">
            <div class="col">
              <q-btn
                icon="fab fa-instagram"
                class="white"
                type="a"
                href="https://www.instagram.com/ging.games/?igshid=1qffouyw8wfwl&hl=en"
                target="__blank"
                size="0.5rem"
              />
              <q-btn
                icon="fab fa-linkedin"
                type="a"
                href="https://www.linkedin.com/company/ging-games/about/"
                target="__blank"
                class="white"
                size="0.5rem"
              />
              <q-btn
                icon="far fa-envelope"
                class="text-amber-6"
                to="contact"
                size="0.5rem"
              />
            </div>
            <div class="col row items-center ">
              <div class=" col-2  ">
                <q-avatar class="" icon="fas fa-map-marker" size="2rem" />
              </div>
              <div class="col-10 text-center items-center">
                <div
                  v-resize-text="{
                    ratio: 2,
                    minFontSize: '6px',
                    maxFontSize: '10px'
                  }"
                >
                  Mustafa Kemal Mah. No:274/7
                </div>
                <div
                  v-resize-text="{
                    ratio: 2,
                    minFontSize: '8px',
                    maxFontSize: '12px'
                  }"
                >
                  Kapı 200 Cankaya Ankara
                </div>
              </div>
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
        class="text-center q-py-md text-amber-8"
      >
        © 2020 Ging Games, Inc. All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("app", ["about"])
  },
  methods: {
    aboutus() {
      this.about.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style>
.adres {
  font-weight: 10px;
}
</style>
