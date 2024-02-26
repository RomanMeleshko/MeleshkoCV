<template>
 <div id="Footer">

   <div class="footer" id="contact">
     <div class="footer_wrapper">

       <div class="row">
         <div class="col-md-3 col-sm-6 my-4 my-sm-4 d-flex justify-content-center align-items-center">
           <div v-tooltip="textTooltip" class="footer_banner">

             <slot name="footer-banner"></slot>

           </div>
         </div>
         <div class="col-md-3 col-sm-6 d-flex justify-content-sm-center align-items-center">
           <div class="footer_place">

             <slot name="footer-place"></slot>

           </div>
         </div>
         <div class="col-md-3 col-sm-6 d-flex justify-content-sm-center align-items-center">
           <div class="footer_callback">

             <slot name="footer-callback"></slot>

           </div>
         </div>
         <div class="col-md-3 col-sm-6 d-flex justify-content-sm-center align-items-center">
           <div class="footer_call">

             <slot name="footer-call"></slot>

           </div>
         </div>

         <svg class="footer-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
           <path fill="#0099ff" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,218.7C384,203,480,149,576,144C672,139,768,181,864,208C960,235,1056,245,1152,250.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>

       </div>

     </div>
   </div>

 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Footer",
  data() {
    return {
      textTooltip: "My logo!)"
    }
  },
})
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

 .footer-waves {
   margin-top: -150px;
   z-index: -1;
   opacity: 0.8;
 }

 @media all and (max-width: 500px) {
   .footer-waves {
     margin-top: -40px;
   }
 }

</style>
