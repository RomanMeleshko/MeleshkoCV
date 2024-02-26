<template>
 <div id="ButtonTop">

    <div class="scrollTop mt-4" @click="scrollTop" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="400">
      <slot name="buttonTop"></slot>
    </div>

 </div>
</template>

<script lang="ts">
export default {
  el: "#buttontop",
  name: "ButtonTop",
  data() {
    return {
    }
  },

  methods: {
     scrollTop(): void {
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

</style>
