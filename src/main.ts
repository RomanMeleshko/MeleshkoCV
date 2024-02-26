import { createApp } from 'vue'
import './scss/app.scss'
import router from "../router";
import App from './App.vue'
import tooltip from "directives/Tooltip/index";
import scroll from "directives/Scroll/index";

import AOS from "aos";
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,
         faGithub,
         faSquareInstagram,
         faLinkedin,
         faLinkedinIn,
         faInstagram
       } from '@fortawesome/free-brands-svg-icons'

library.add( faUser,
             faClock,
             faWandMagicSparkles,
             faFacebook,
             faGithub,
             faSquareInstagram,
             faLinkedin,
             faLinkedinIn,
             faInstagram
            );


const app = createApp(App)
      app.use(router)
      app.use(AOS as any)
      app.component('font-awesome-icon', FontAwesomeIcon)
      app.directive('tooltip', tooltip)
      app.directive('scroll', scroll)
      app.mount('#app')



