<template>
  <div id="Home">
    <div class="home">

      <Transition name="home">

      <div v-if="show" class="home_wrapper">
        <div class="row p-4">
          <div class="col col-md-6 col-lg-6 d-flex justify-content-center align-items-center">

            <TitleInfo ref="info">
              <template v-slot:title>
                <div class="title_block text-center text-sm-start text-md-start text-lg-start text-xl-start">
                  <p class="title">Front end <span>Developer</span></p>
                  <p class="sub_title">Creating Frontend it is art of the numbers on the clean canvas of the browser</p>
                  <p>
                    <button class="get_start">Get start</button>
                  </p>
                </div>
              </template>
            </TitleInfo>

          </div>
          <div class="col col-md-6 col-lg-6 d-flex justify-content-center align-items-center">

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




        <div class="row py-4 justify-content-center">
          <div class="col-md-10 col-sm-10 px-4 border d-flex justify-content-center">

            <TitleInfo>
              <template v-slot:title>
                <div class="title_block text-center text-sm-start text-md-start text-lg-start text-xl-start">
                  <p class="title_info">The some a little info about me</p>
                </div>
              </template>
            </TitleInfo>

          </div>
        </div>

        <div class="row">

          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 py-xl-5 py-lg-5 py-md-5 py-3 px-5 d-flex justify-content-center align-items-center title-block border">

            <TitleInfo data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">

              <template v-slot:title>

              <div>
                <h1>About me</h1>
                <p class="text-block">
                  I am glad see everyone to here at my page)It is really important for me)
                  And I would like to share to you with my working experience and my education)
                  Just scroll down and can meeting more details about me!
                </p>
              </div>

              </template>
            </TitleInfo>

          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 py-5 border d-flex justify-content-center">

            <Foto>
              <template v-slot:foto>
                <div class="">
                  <img class="foto" src="assets/work.png" alt="man">
                  <div class="shadow-foto"></div>
                </div>
              </template>
            </Foto>

          </div>
        </div>


        <div class="row">
          <div class="col-xl-6 col-lg-6 order-md-first order-sm-first order-last col-md-6 col-sm-6 py-5 border d-flex justify-content-center">

            <Foto>
              <template v-slot:foto>
                <div class="">
                  <img class="foto" src="assets/reach.png" alt="man">
                  <div class="shadow-foto"></div>
                </div>
              </template>
            </Foto>

          </div>
          <div class="col-xl-6 col-lg-6 order-md-last order-first order-sm-last col-md-6 col-sm-6 py-xl-5 py-lg-5 py-md-5 py-3 px-5 d-flex justify-content-center align-items-center title-block border">

            <TitleInfo ref="info">
              <template v-slot:title>

              <div>
                <h1>About me</h1>
                <p class="text-block">
                  I am glad see everyone to here at my page)It is really important for me)
                  And I would like to share to you with my working experience and my education)
                  Just scroll down and can meeting more details about me!
                </p>
              </div>

              </template>
            </TitleInfo>

          </div>
        </div>

      </div>

      </Transition>


    </div>



<!--   <font-awesome-icon icon="fa-solid fa-user" class="icon"/>-->
<!--   <font-awesome-icon icon="fa-solid fa-clock" class="icon" />-->
<!--   <font-awesome-icon icon="fa-brands fa-facebook" />-->

<!--   <font-awesome-icon icon="user" />-->

<!--   <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />-->

<!--   <font-awesome-icon icon="fa-brands fa-github" />-->
<!--   <font-awesome-icon icon="fa-brands fa-square-instagram" />-->
<!--   <font-awesome-icon icon="fa-brands fa-linkedin" />-->

<!--   <div class="wrapper">-->
<!--     <div class="drop"></div>-->
<!--   </div>-->



  </div>

</template>

<script lang="ts">
import Foto from "components/Home/Foto.vue";
import TitleInfo from "components/Home/TitleInfo.vue";

import AOS from 'aos';

import { defineComponent } from 'vue';

export default defineComponent({
  el: '#home',
  name: "Home",
  data() {
    return {
      show: false,
      count: 0,
      heightWindow: window.innerHeight
    }
  },

  methods: {

    scrollElem( evt, el ) {

      let getBottomScroll: number = this.heightWindow / 6;

      if ( document.body.scrollTop > getBottomScroll ) {
        el.setAttribute(
          'style',
          'opacity: 1;'
        )

        el.classList.add( 'v-enter-active',
                          'v-leave-active',
                          'v-enter-from',
                          'v-leave-to' );


      }
      return document.body.scrollTop > getBottomScroll;

    },


  },

  mounted() {

    this.show = true;

     AOS.init();

  },


  components: {
    Foto,
    TitleInfo,
  }
});
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

 .home {
   opacity: 1;
 }

 .vision {
   opacity: 0;
   margin-top: 70px;
 }

 .wrapper_foto {
   background: #FF6F30;
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
 }

 .get_start {
   border: none;
   padding: 10px 40px;
   border-radius: 20px;
   background: #FF6F30;
   color: #ffffff;
 }

 .title {
   font-size: clamp(14px, 4.5vw, 48px);
 }
 .title_info {
   font-size: clamp(18px, 4.5vw, 48px);
 }

 .sub_title {
   font-size: clamp(12px, 2.5vw, 18px);
   color: #767475;
 }


 .foo div {
   padding-top: 200px;
   padding-bottom: 200px;
   margin-top: 120px;
 }

 // Animation elements which have wrapper Transition tag
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


 // Animation elements which have v-scroll attribute
 .v-enter-active,
 .v-leave-active {
  transition: opacity 3s ease,
              margin-top 1s ease-out;
  }

 .v-enter-from,
 .v-leave-to {
   opacity: 0;
   margin-top: 50px;
 }


</style>
