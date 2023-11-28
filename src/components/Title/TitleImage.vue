<template>
 <div id="TitleImage">

    <div class="title-image-block">

       <div class="row justify-content-center pb-3 mx-0">
          <div class="col-auto icon px-2">
             <img v-if="show_image" :src="image" class="image" width="50" height="50" />
          </div>
          <div class="col-auto max-width-col">
            <label class="title pt-2" :class="{ large: large_title, small: small_title }" >{{ title }}</label>
          </div>
       </div>

    </div>

 </div>
</template>

<script lang="ts">
export default {
  name: "TitleImage",
  data() {
    return {

    }
  },

  props: {
    title: {
      type: String
    },
    show_image: {
      type: Boolean
    },
    image: {
      type: String
    },
     large_title: {
      type: Boolean
    },
    small_title: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>

 .title {
   font-size: 32px;
   font-weight: bold;
 }

 .large {
   font-size: 36px;
 }

 .small {
   font-size: 26px;
 }

 .max-width-col {
   max-width: 330px;
 }

 .icon {
   display: flex;
   align-items: center;
 }
</style>
