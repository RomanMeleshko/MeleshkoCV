<template>
 <div id="Input">

    <div class="input-block">

       <div class="input-label my-2">
          <label for="simpleInput">{{ title }}</label>
       </div>
       <div class="input-enter">
          <input id="simpleInput" :class="class_name" v-model="text" type="text" class="form-control" autocomplete="on" required />
          <small class="small-text">{{ small_text }}</small>
       </div>

    </div>

 </div>
</template>

<script lang="ts">
export default {
  name: "Input",
  data() {
    let string

    return {
      text: string
    }
  },

  watch: {
    text( value ) {
      this.$emit( 'getValue', value );
    }
  },

  props: {
    title: {
      type: String
    },
    class_name: {
      type: String
    },
    small_text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

 .simple {
   height: 42px;
   border: 1px solid #CCCCCC;
 }

 .small-text {
   color: #575A5D;
 }
</style>
