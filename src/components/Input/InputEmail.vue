<template>
  <div id="Input-email">

     <div class="email-block">
        <div class="email-label my-2 text-left">
           <label for="emailInput">{{ title }}</label>
        </div>
        <div class="email-enter">
           <input id="emailInput" :class="class_name" v-model="email" type="email" class="form-control" autocomplete="on" required />
           <div class="valid-feedback">
             Looks good!
           </div>
        </div>
     </div>

  </div>
</template>

<script lang="ts">

export default {
  name: "Input-email",
  data() {
    let any;
    return {
      email: any
    }
  },

  watch: {
    email( value ) {
      this.$emit( 'getValue', value );
    }
  },

  props: {
    title: {
      type: String
    },
    class_name: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

 .email-block input:focus {
   outline: 1px solid #586C8C;
 }

 .simple {
   height: 56px;
   outline: none;
   font-size: 16px;
   border: 1px solid #586C8C;
   border-radius: 8px;
 }

 .regular {
   height: 42px;
   border: 1px solid #CCCCCC;
 }
</style>
