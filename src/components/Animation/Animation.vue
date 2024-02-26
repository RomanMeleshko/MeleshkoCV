<template>
 <div id="Animation">
   <div :class="class_name">
     <img class="animation-logo" :src="img" alt="" />
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
    img: {
      type: String
    },
    class_name: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

 .ufo, .oppo {
   z-index: -999;
   opacity: 0.2;
   width: 50%;
   height: 50%;
   margin: auto;
   position: absolute;
   top: 0; left: 0; bottom: 0; right: 0;
 }

 .ufo {
   animation: 15s move ease-in infinite;
 }

 .oppo {
   width: 0%;
   height: 0%;
   animation: 30s move_rotate ease-in infinite;
 }

@media (max-width: 576px) {
  .animation-logo {
    height: 130px;
  }

  .oppo {
    left: -30px;
  }
}

@keyframes move {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(150px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes move_rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(60deg);
  }
  100% {
    transform: rotate(0deg);
  }
}


</style>
