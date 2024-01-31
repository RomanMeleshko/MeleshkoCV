<template>
  <div id="Home">
    <div class="home">

<!--      <Transition name="home">-->

      <div v-if="show" class="home_wrapper">
        <div class="row p-4">
          <div class="col col-md-6 col-lg-6 d-flex justify-content-center align-items-center">

            <TitleInfo>
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

      </div>

<!--      </Transition>-->


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

export default {
  name: "Home",
  data() {
    return {
      show: false
    }
  },

  mounted() {
    this.show = true;
  },

  components: {
    Foto,
    TitleInfo
  }
}
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

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

 .sub_title {
   font-size: clamp(12px, 2.5vw, 18px);
   color: #767475;
 }

// .home-enter-active,
// .home-leave-active {
//  transition: opacity 3s ease,
//              margin-top 2s ease;
//}
//
// .home-enter-from,
// .home-leave-to {
//   opacity: 0;
//   margin-top: 50px;
//}


</style>
