<template>
 <div id="Home">
   <p>
     Icons are bellow
   </p>



   <font-awesome-icon icon="fa-solid fa-user" class="icon"/>
   <font-awesome-icon icon="fa-solid fa-clock" class="icon" />
   <font-awesome-icon icon="fa-brands fa-facebook" />

   <font-awesome-icon icon="user" />

   <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles" />

   <font-awesome-icon icon="fa-brands fa-github" />
   <font-awesome-icon icon="fa-brands fa-square-instagram" />
   <font-awesome-icon icon="fa-brands fa-linkedin" />

   <div class="wrapper">
     <div class="drop"></div>
   </div>

 </div>

</template>

<script lang="ts">

export default {
  name: "Home",
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>

 .fa-facebook {
   width: 30px;
   height: 30px;
   background: red;
 }

 .wrapper {
   width: 200px;
   height: 200px;
   position: relative;
 }

 .drop {
   width: 200px;
   height: 200px;
   background: #121FCF;
   background: linear-gradient(to top right, #121FCF 0%, #CF1512 100%);

 }
</style>
