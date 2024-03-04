<template>
 <div class="NavBar">

   <nav class="navbar navbar-expand-sm navbar-light">
     <div class="container-fluid px-xl-0 px-lg-0 px-md-0 px-sm-0">
       <slot name="navbar-brand"></slot>
       <button class="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarTogglerDemo">
         <ul class="navbar-nav mb-lg-0">
           <slot name="navbar-items"></slot>
         </ul>
       </div>
     </div>
   </nav>

 </div>
</template>

<script lang="ts">
export default {
  el: "#NavBar",
  name: "NavBar",
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

 .navbar {
   border-radius: 30px;
   background: #FEFEFE;
 }

 .navbar-collapse {
   flex-flow: row-reverse;
 }

 .navbar-toggler {
   width: 40px;
   height: 30px;
   outline: none;
   box-shadow: none;
   border: none;

   &:focus {
     box-shadow: none;
   }
 }

 button:focus(:focus-visible) {
   outline: none;
 }

 .navbar-toggler-icon {
   width: 20px;
   height: 20px;
 }

 // ======= Animation elements which have wrapper Transition tag ========
 .nav-enter-active,
 .nav-leave-active {
  transition: opacity 3s ease,
              margin-top 2s ease;
  }

 .nav-enter-from,
 .nav-leave-to {
   opacity: 0;
   margin-top: 50px;
 }

</style>
