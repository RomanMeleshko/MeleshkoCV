<template>
 <div id="InputArea">

    <div class="input-area-block">
       <div class="input-label my-2">
          <label for="simpleInput">{{ title }}</label>
       </div>
       <div class="input-enter">
          <textarea id="simpleInput" v-model="text" type="text" class="form-control" autocomplete="on" required />
       </div>
    </div>

 </div>
</template>

<script lang="ts">
export default {
  name: "InputArea",
  data() {
    let string

    return {
      text: string
    }
  },

  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
