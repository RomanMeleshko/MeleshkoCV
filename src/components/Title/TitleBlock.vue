<template>
  <div id="TitleBlock">

     <div class="title-block">

        <div class="row justify-content-center pb-2">
           <div class="col-12 text-center p-3">
              <div class="logo-company">
                 <img src="/src/assets/company_name.png" alt="logo"/>
              </div>
           </div>
           <div class="col-12">
              <div v-if="show_icon" class="logo-enter text-center">
                <img src="/src/assets/icon_exit.png" alt="logo" />
              </div>
           </div>
        </div>

     </div>

  </div>
</template>

<script lang="ts">

export default {
  name: "TitleBlock",
  data() {
    return {

    }
  },
  props: {
    show_icon: {
      type: Boolean
    },
  }
}
</script>

<style lang="scss" scoped>

 .title {
   font-size: 32px;
   font-weight: bold;
 }
 .logo-company img {
   width: 150px;
   height: 30px;
 }

 .title-under span {
   color: #8a8a8a;
 }

 .large {
   font-size: 36px;
 }

 .image {
    display: flex;
    align-items: center;
 }

 .foo {
   max-width: 400px;
 }
</style>
