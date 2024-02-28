<template>
 <div id="Animation">

   <div class="rocket">
     <slot></slot>
   </div>

 </div>
</template>

<script lang="ts">


export default {
  el: "#Animation",
  name: "Animation",
  data() {
    return {
    }
  },

  props: {
    animation_images: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

 .rocket {
   z-index: -999;
   opacity: 0.1;
   display: flex;
   justify-content: center;
 }

 .rocket {
   animation: 30s move ease-in-out infinite;
 }

@keyframes move {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
  }
}

</style>
