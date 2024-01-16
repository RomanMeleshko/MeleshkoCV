<template>
 <div id="Footer">

   <div class="footer">
     <div class="footer_wrapper">

       <div class="row">
         <div class="col d-flex justify-content-center align-items-center">
           <div class="footer_banner">
             <label>FRONT END</label>
           </div>
         </div>
         <div class="col">
           <div class="footer_place">

             <ul class="ps-0">
               <li class="footer_title pb-2">Местонахождение</li>
               <li class="contacts">
                 <span class="pre">г. </span>
                 <span>Полтава</span>
               </li>
             </ul>

           </div>
         </div>
         <div class="col">
           <div class="footer_callback">

             <ul class="ps-0">
               <li class="footer_title pb-2">Обратная связь</li>
               <li class="contacts">
                 <span>тел. </span>
                 <span>0955209822</span>
               </li>
               <li class="contacts">
                 <span>email. </span>
                 <span>roman.meleshko1@gmail.com</span>
               </li>
             </ul>

           </div>
         </div>
         <div class="col">
           <div class="footer_call">

             <ul class="ps-0">
               <li class="footer_title pb-2">Связь</li>
               <li>
                 <span class="icon px-1">
                   <a href="https://github.com/RomanMeleshko/MeleshkoCV" target="_blank">
                     <font-awesome-icon icon="fa-brands fa-github" />
                   </a>
                 </span>
                 <span class="icon px-1">
                   <a href="https://www.instagram.com/roma_meleshko/" target="_blank">
                     <font-awesome-icon icon="fa-brands fa-square-instagram" />
                   </a>
                 </span>
                 <span class="icon px-1">
                   <a href="https://www.linkedin.com/in/roman-meleshko-400036160/" target="_blank">
                     <font-awesome-icon icon="fa-brands fa-linkedin" />
                   </a>
                 </span>
               </li>
             </ul>

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
   font-size: 14px;
   margin-top: 10px;
   padding: $footer-padding;
   background: $background-block;
   border-radius: $radius-block;
 }

 .footer_banner {
   font-size: 20px;
 }

 .footer_title {
   font-size: 16px;
 }

 .fa-github,
 .fa-square-instagram,
 .fa-linkedin {
   width: 30px;
   height: 30px;
   color: #1A9FF5;
 }

 ul {
   list-style-type: none;
 }

 .contacts > span:first-child {
   color: #9fa19e;
 }

 //.dron {
 //  display: flex;
 //  justify-content: center;
 //  align-items: center;
 //}
</style>
