<template>
 <div id="App">
    <div class="app">
       <div class="app-wrapper">

          <div class="container-fluid px-0">
             <div class="row mx-0">
                <div class="col px-0">

                  <router-view></router-view>

                </div>
             </div>
          </div>

       </div>
    </div>
 </div>


</template>

<script lang="ts">
import "bootstrap/dist/js/bootstrap.bundle.min.js";

 export default {
  name: "App",
  data() {
    return {

    }
  },

 }

</script>

<style lang="scss" scoped>
@import "./scss/app.scss";

</style>
