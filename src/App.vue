<template>
  <div id="App">

    <div class="container-fluid p-0">

      <div class="app-layout">

        <header>

          <NavBar>
            <template v-slot:navbar-brand>
              <a class="navbar-brand ms-sm-3" href="#">
                <img class="logo" src="assets/Icon.png" width="35" height="35" alt=""/>
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

          <Footer>
            <template v-slot:footer-banner>

              <img src="assets/Label-Meleshko.png" width="150" alt="">

            </template>
            <template v-slot:footer-place>

              <ul class="ps-0" v-for="item in location" :key="item.id">
                <li class="footer_title pb-2">{{ item.title }}</li>
                <li class="contacts">
                  <span>г. </span>
                  <span>{{ item.place }}</span>
                </li>
              </ul>

            </template>
            <template v-slot:footer-callback>

              <ul class="ps-0 my-sm-0" v-for="item in callback" :key="item.id">
                <li class="footer_title pb-2">{{ item.title }}</li>
                <li class="contacts">
                  <span>тел: </span>
                  <span>{{ item.phone }}</span>
                </li>
                <li class="contacts">
                  <span>email: </span>
                  <span>{{ item.email }}</span>
                </li>
              </ul>

            </template>
            <template v-slot:footer-call>

              <ul class="ps-0 my-sm-0" v-for="item in icons" :key="item.id">
                <li class="footer_title pb-2">{{ item.title }}</li>
                <li>
                  <span class="icon px-1">
                    <a v-for="point in item.links" :href="point.link" target="_blank">
                      <font-awesome-icon :icon="point.icon" />
                    </a>
                  </span>
                </li>
              </ul>

            </template>

          </Footer>

        </footer>

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { defineComponent, defineAsyncComponent } from 'vue'

import Note from "models/interface/Note";
import Link from "models/interface/Link";

import NavBar from "components/NavBar/NavBar.vue";
// import Footer from  "components/Footer/Footer.vue";

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
      ],
      location: [
        {
          id: 1,
          title: "Местонахождение",
          place: "Полтава",
        } as Note
      ],
      callback: [
        {
          id: 1,
          title: "Обратная связь",
          phone: "0955209822",
          email: "roman.meleshko1@gmail.com"
        } as Note
      ],
      icons: [
        {
          id: 1,
          title: "Связь",
          links: [
            {
              link: "https://github.com/RomanMeleshko/MeleshkoCV",
              icon: "fa-brands fa-github",
            } as Link,
            {
              link: "https://www.instagram.com/roma_meleshko/",
              icon: "fa-brands fa-square-instagram"
            } as Link,
            {
              link: "https://www.linkedin.com/in/roman-meleshko-400036160/",
              icon: "fa-brands fa-linkedin"
            } as Link,
          ],
        } as Note,

      ],
    }
  },
  components: {
    NavBar,
    Footer: defineAsyncComponent({
      loader: () => import("components/Footer/Footer.vue"),
      delay: 1000,
      timeout: 3000
    })
  }
})


</script>

<style lang="scss">
@import "scss/app.scss";
@import "scss/variables.scss";

 // Header

 header {
   position: sticky;
   top: 0px;
   z-index: 999;
 }

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

 // Footer
 ul {
   list-style-type: none;
 }

 .contacts > span:first-child {
   color: #9fa19e;
 }

 .footer_title {
   font-size: clamp(14px, 2.5vw, 16px);
 }

 .contacts {
   font-size: clamp(12px, 2.5vw, 14px);
 }

 .fa-github,
 .fa-square-instagram,
 .fa-linkedin {
   width: 30px;
   height: 30px;
   color: #eece49;
   border-radius: 7px;
   box-shadow: 2px 9px 12px #ECEDED;
   padding: 5px;
   //transform: rotate(0deg);
   transition: all 0.3s linear 0s;

   &:hover {
     transform: scale(1.2);
   }
 }

 .footer_call {
   min-width: 140px;
 }

</style>
