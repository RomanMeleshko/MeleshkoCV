<template>
 <div id="InputSelect">

    <div class="input-select-block">

       <div class="select-label my-2">
          <label for="selectInput">{{ title }}</label>
       </div>
       <div class="select-enter d-flex">
          <div class="select-phone d-flex">
             <label class="input-group-text label-left" for="inputGroupSelect01">
               <img src="/src/assets/US.png" width="28px" height="20px" />
             </label>
             <select class="form-select label-right" id="inputGroupSelect01">
               <option selected>+355</option>
               <option value="1">+380</option>
               <option value="2">+995</option>
               <option value="3">+844</option>
             </select>
          </div>
          <input id="selectInput" :class="class_name" v-model="numberPhone" type="text" class="form-control" autocomplete="on" required />
       </div>

    </div>

 </div>
</template>

<script lang="ts">
export default {
  name: "InputSelect",
  data() {
    let string

    return {
      numberPhone: string = ""
    }
  },

  watch: {
    numberPhone( value ) {
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

 .select-phone {
   min-width: 160px;
   margin-right: 10px;
 }

 .label-left {
   border-radius: 4px 0px 0px 4px;
 }

 .label-right {
   border-radius: 0px 4px 4px 0px;
 }

 .simple {
   height: 42px;
   border: 1px solid #CCCCCC;
 }

</style>
