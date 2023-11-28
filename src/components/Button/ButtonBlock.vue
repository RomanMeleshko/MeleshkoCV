<template>
 <div id="Button">

    <div class="button-block">
       <div class="button-block-wrapper">
          <div class="button-enter">
             <button type="submit" :class="class_name">
                 {{ name }}
             </button>
          </div>
       </div>
    </div>

 </div>
</template>

<script lang="ts">

export default {
  name: "Button",
  data() {
    return {

    }
  },

  props: {
    name: {
      type: String
    },
    class_name: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

 .button-block button {
   width: 100%;
   height: 64px;
   outline: none;
   border-radius: 8px;
   border: none;
   font-size: 20px;
   color: #ffffff;
   background: #227AFF;

     &.simple {
       height: 42px;
       font-size: 16px;
     }
 }

</style>
