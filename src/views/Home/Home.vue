<template>
  <div id="Home">
    <div class="home">

      <div v-if="show" class="home_wrapper">

        <Animation>
          <img class="animation_view" src="/src/assets/rocket.gif" />
        </Animation>

        <div class="row p-4 mood">
          <div class="col col-md-6 col-lg-6 d-flex justify-content-center align-items-center" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">

            <TitleInfo ref="info">
              <template v-slot:title>

                <div class="title_block text-center text-sm-start text-md-start text-lg-start text-xl-start">
                  <p class="title p-2"><span class="r-light-blue">Front end</span> Developer</p>
                  <p class="sub_title">Creating Frontend it is art of the numbers on the clean canvas of the browser</p>
                  <span>
                    <button v-tooltip="textTooltip" class="get_start">Get start</button>
                  </span>
                </div>

              </template>
            </TitleInfo>

          </div>
          <div class="col col-md-6 col-lg-6 pt-2 d-flex justify-content-center align-items-center" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">

            <Foto>
              <template v-slot:foto>

                <div class="wrapper_foto">
                  <img class="foto" src="assets/Meleshko.png" alt="foto"/>
                  <div class="shadow-foto"></div>
                </div>

              </template>

            </Foto>

          </div>
        </div>

        <div class="row py-4 justify-content-center" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
          <div class="col-md-10 col-sm-10 px-4 d-flex justify-content-center">

            <TitleInfo>
              <template v-slot:title>

                <div class="title_block text-center text-sm-start text-md-start text-lg-start text-xl-start">
                  <p class="title_info">The some a little <span class="r-apple-green">info</span> about me</p>
                </div>

              </template>
            </TitleInfo>

          </div>
        </div>

        <div class="row" id="about">

          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 py-xl-5 py-lg-5 py-md-5 py-3 px-5 d-flex justify-content-center align-items-center title-block" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">

            <TitleInfo>

              <template v-slot:title>

              <div>
                <h1 class="header-title">About me</h1>
                <p class="text-block">
                   {{ textMe }}
                </p>
              </div>

              </template>
            </TitleInfo>

          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 py-xl-5 py-lg-5 py-md-4 py-3 d-flex justify-content-center" data-aos="fade-up-left" data-aos-delay="50" data-aos-duration="1000">

            <Foto>
              <template v-slot:foto>

                <div>
                  <img class="foto" src="assets/work.png" alt="man">
                  <div class="shadow-foto"></div>
                </div>

              </template>
            </Foto>

          </div>
        </div>


        <div class="row">
          <div class="col-xl-6 col-lg-6 order-md-first order-sm-first order-last col-md-6 col-sm-6 py-xl-5 py-lg-5 py-md-4 py-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">

            <Foto>
              <template v-slot:foto>

                <div class="">
                  <img class="foto" src="assets/reach.png" alt="man">
                  <div class="shadow-foto"></div>
                </div>

              </template>
            </Foto>

          </div>
          <div class="col-xl-6 col-lg-6 order-md-last order-first order-sm-last col-md-6 col-sm-6 py-xl-5 py-lg-5 py-md-5 py-3 px-5 d-flex justify-content-center align-items-center title-block" data-aos="zoom-in-left" data-aos-delay="50" data-aos-duration="1000">

            <TitleInfo ref="info">
              <template v-slot:title>

              <div>
                <h1 class="header-title"><span class="r-hard-gray foo">About </span> education</h1>
                <p class="text-block r-light-gray">
                  {{ textEducation }}
                </p>
              </div>

              </template>
            </TitleInfo>

          </div>
        </div>


        <div class="row">

          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 py-xl-5 py-lg-5 py-md-5 py-3 px-5 d-flex justify-content-center align-items-center title-block" data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000">

            <TitleInfo>

              <template v-slot:title>

              <div>
                <h1 class="header-title">About hobby</h1>
                <p class="text-block">
                  {{ textHobby }}
                </p>
              </div>

              </template>
            </TitleInfo>

          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 py-xl-5 py-lg-5 py-md-4 py-3 d-flex justify-content-center" data-aos="flip-right" data-aos-delay="50" data-aos-duration="1000">

            <Foto>
              <template v-slot:foto>

                <div>
                  <img class="foto" src="assets/just.png" alt="man">
                  <div class="shadow-foto"></div>
                </div>

              </template>
            </Foto>

          </div>
        </div>

        <ButtonTop>
          <template v-slot:buttonTop>

            <img class="buttonTop" src="/src/assets/polar-rocket.gif" />

          </template>
        </ButtonTop>

      </div>

    </div>

  </div>

</template>

<script lang="ts">
import Foto from "components/Home/Foto.vue";
import TitleInfo from "components/Home/TitleInfo.vue";
import Animation from "components/Animation/Animation.vue";
import ButtonTop from "components/Buttons/ButtonTop.vue";

import AOS from 'aos';

import { defineComponent } from 'vue';

export default defineComponent({
  el: '#home',
  name: "Home",
  data() {
    return {
      show: false,
      showButtonTop: false,
      count: 0,
      textTooltip: "This place for feature feature!Not now)",

      textMe: "I am glad see everyone to here at my page)It is really important for me)\n" +
              "And I would like to share to you with my working experience and my education)\n" +
              "Just scroll down and can meeting more details about me!",

      textEducation: "I graduated from Kharkiv National University and got specialty " +
                     "System protection of information and cybersecurity.\n" +
                     "But at the last course of my education liked to learn " +
                     "programming and already more than five years work as Frontend developer.",

      textHobby: "What about hobby?) Actually I liking speed ride on the sport motorbike.\n" +
                  "Not a long time before I bought the motorbike it is SUZUKI Z1)\n" +
                  "At the question what do you feel while to ride?\n" +
                  "You know....it is absolute unbelievable feeling))\n" +
                  "The sound of the wheels under the motorbike and smell of the road give me absolutely\n" +
                  "and i am glad that can to share it with you)"
    }
  },

  mounted() {

    this.show = true;

     AOS.init();

  },


  components: {
    Foto,
    TitleInfo,
    Animation,
    ButtonTop
  }
});
</script>

<style lang="scss">
@import "scss/variables.scss";

 .foo {
   font-weight: normal;
 }

 // ======= ButtonTop scroll ========
 .buttonTop {
   width: 90px;
   height: 90px;
   border-radius: 50%;
   position: absolute;
   right: 20px;
   margin-top: -50px;
   transition: 0.5s;
   outline: none;
   border: none;
 }

 .buttonTop:hover {
   transform: translate(0,-8px);
 }

 .home {
   opacity: 1;
 }

 .vision {
   opacity: 0;
   margin-top: 70px;
 }

 .wrapper_foto {
   position: relative;
   background: #ff7f51;
   border-radius: 50%;
 }

 .foto {
   width: 100%;
   max-width: 400px;
   min-width: 200px;
   filter: drop-shadow(0px -2px 5px #333333);
 }

 .text-block {
   max-width: 400px;
   min-width: 200px;
   font-size: clamp(12px, 4.5vw, 16px);
   border-radius: 50%;
   white-space: break-spaces;
 }

 .v-text {
   border-radius: 25px;
   background: #e0e0e0;
   box-shadow:  34px 34px 69px #bebebe,
                -34px -34px 69px #ffffff;
 }

 .get_start {
   position: relative;
   border: none;
   padding: 10px 40px;
   border-radius: 20px;
   background: #ff7f51;
   color: #ffffff;
 }

 // ======== Title page =========
 .title {
   font-size: clamp(20px, 4.5vw, 48px);
 }
 .title_info {
   font-size: clamp(20px, 4.5vw, 48px);
 }

 .sub_title {
   font-size: clamp(14px, 2.5vw, 18px);
   color: #767475;
 }
  .header-title {
    font-size: clamp(18px, 4.5vw, 48px);
  }

 // ========== Animation elements which have wrapper Transition tag =========
 .home-enter-active,
 .home-leave-active {
  transition: opacity 3s ease,
              margin-top 2s ease;
  }

 .home-enter-from,
 .home-leave-to {
   opacity: 0;
   margin-top: 50px;
 }

 // ========== Animation for others views =======
 .animation_view {
   position: absolute;
 }

 @media (max-width: 1200px) {
   .animation_view {
     width: 700px;
   }
 }
 @media (max-width: 992px) {
   .animation_view {
     width: 600px;
   }
 }
 @media (max-width: 768px) {
   .animation_view {
     width: 500px;
   }
 }
 @media (max-width: 576px) {
   .animation_view {
     width: 320px;
   }
 }

</style>
