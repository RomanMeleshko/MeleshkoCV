<template>
  <div id="App">

    <div class="container-fluid p-0">

      <div class="app-layout">

        <header>

          <NavBar>
            <template v-slot:navbar-brand>
              <a class="navbar-brand ms-sm-3" href="#">
                <img class="logo" src="assets/Logo_meleshko.jpeg" width="35" height="35" alt=""/>
              </a>
            </template>
            <template v-slot:navbar-items>
              <li v-for="item in items" :key="item.id" class="nav-item me-xl-2 me-lg-3 me-md-2 me-sm-2 px-3">
               <a class="nav-link" :class="item.class" aria-current="page" href="#">{{ item.name }}</a>
             </li>
            </template>
          </NavBar>

        </header>

        <main>

          <router-view></router-view>

        </main>

        <footer>

          <Footer></Footer>

        </footer>

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { defineComponent } from 'vue'

import Note from "models/interface/Note";

import NavBar from "components/NavBar/NavBar.vue";
import Footer from  "components/Footer/Footer.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Home",
          class: "active"
        } as Note,
        {
          id: 2,
          name: "About",
        } as Note,
        {
          id: 3,
          name: "Contact",
        } as Note
      ]

    }
  },
  components: {
    NavBar,
    Footer
  }
})


</script>

<style lang="scss">
@import "scss/app.scss";
@import "scss/variables.scss";

 .logo {
   border-radius: 50%;
 }

 .nav-item {
   border-radius: $radius-item;
   font-size: $font-size-navbar;
 }

 @media (max-width: 576px) {
   .nav-item {
     margin-top: 5px;
     font-size: 12px;
   }
 }

</style>
