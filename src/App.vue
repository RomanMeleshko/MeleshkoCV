<template>
  <div id="App">

    <div class="container-fluid p-0">

      <div class="app-layout">

        <header>

          <NavBar data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <template v-slot:navbar-brand>

              <a class="navbar-brand ms-sm-3" href="#">
                <img class="logo" src="assets/Icon.png" width="35" height="35" alt=""/>
              </a>

            </template>
            <template v-slot:navbar-items>

              <li v-for="item in items" :key="item.id" class="nav-item me-xl-2 me-lg-3 me-md-2 me-sm-2 px-3">
               <a class="nav-link" :class="item.class" aria-current="page" :href="item.link">{{ item.name }}</a>
             </li>

            </template>
          </NavBar>

        </header>

        <main>

          <router-view></router-view>

        </main>

        <footer>

          <Footer class="foo" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <template v-slot:footer-banner>

              <label class="banner" style="position: relative">
                <span class="banner-text" style="position: absolute">M</span>
                <img src="assets/yellow.png" width="90" alt="">
              </label>

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
import AOS from 'aos';

import { defineComponent } from 'vue';

import Note from "models/interface/Note";
import Link from "models/interface/Link";

import NavBar from "components/NavBar/NavBar.vue";
import Footer from  "components/Footer/Footer.vue";
import ButtonTop from "components/Buttons/ButtonTop.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Home",
          class: "active",
          link: "#home"
        } as Note,
        {
          id: 2,
          name: "About",
          link: "#about"
        } as Note,
        {
          id: 3,
          name: "Contact",
          link: "#contact"
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
              icon: "fa-brands fa-instagram"
            } as Link,
            {
              link: "https://www.linkedin.com/in/roman-meleshko-400036160/",
              icon: "fa-brands fa-linkedin-in"
            } as Link,
          ],
        } as Note,

      ],
    }
  },

  mounted() {
    AOS.init();
  },

  components: {
    NavBar,
    Footer,
    ButtonTop
  }
})


</script>

<style lang="scss">
@import "scss/app.scss";
@import "scss/variables.scss";

 // Header
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
 .fa-instagram,
 .fa-linkedin-in {
   width: 30px;
   height: 30px;
   color: #FF6F30;
   border-radius: 7px;
   padding: 5px;
   transition: all 0.3s linear 0s;

   &:hover {
     transform: scale(1.2);
   }
 }

 .footer_call {
   min-width: 140px;
 }

 .banner {
   position: relative;
 }
 .banner-text {
   top: 50%;
   left: 50%;
   font-style: italic;
   font-size: 30px;
   transform: translate(-50%, -50%);
 }

</style>
