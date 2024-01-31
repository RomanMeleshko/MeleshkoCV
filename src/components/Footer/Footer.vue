<template>
 <div id="Footer">

   <div class="footer">
     <div class="footer_wrapper">

       <div class="row">
         <div class="col-md-3 col-sm-6 my-4 my-sm-4 d-flex justify-content-center align-items-center">
           <div class="footer_banner">

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

    }
  }
})
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

 .footer {
   margin-top: 10px;
   padding: $footer-padding;
   background: $background-block;
   border-radius: $radius-block;
 }

 //.footer .contacts {
 //  font-size: clamp(12px, 2.5vw, 14px);
 //}

 //.footer_banner label {
 //  border-radius: 7px;
 //  padding: 10px;
 //  font-weight: normal;
 //  box-shadow: 2px 9px 12px #ECEDED;
 //  font-size: clamp(18px, 2.5vw, 25px);
 //}

 //.footer_title {
 //  font-size: clamp(14px, 2.5vw, 16px);
 //}

 //.fa-github,
 //.fa-square-instagram,
 //.fa-linkedin {
 //  width: 30px;
 //  height: 30px;
 //  color: #eece49;
 //  border-radius: 7px;
 //  box-shadow: 2px 9px 12px #ECEDED;
 //  padding: 5px;
 //  //transform: rotate(0deg);
 //  transition: all 0.3s linear 0s;
 //
 //  &:hover {
 //    transform: scale(1.2);
 //  }
 //}

 //ul {
 //  list-style-type: none;
 //}
 //
 //.contacts > span:first-child {
 //  color: #9fa19e;
 //}

 //.footer_call {
 //  min-width: 140px;
 //}

</style>
