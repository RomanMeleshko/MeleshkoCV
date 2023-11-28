<template>
 <div id="Title">

    <div class="title">

      <p class="my-2" :class="{ small: small_text, gray: color_gray }">
        {{ title }}
      </p>

    </div>

 </div>
</template>

<script lang="ts">
export default {
  name: "Title.vue",
  data() {
    return {

    }
  },

  props: {
    title: {
      type: String
    },
    small_text: {
      type: Boolean
    },
    color_gray: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>

 .small {
   font-size: 14px;
 }

 .gray {
   color: #8a8a8a;
 }
</style>
