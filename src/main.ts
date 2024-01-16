import { createApp } from 'vue'
import './scss/app.scss'
import router from "../router";
import App from './App.vue'
import tooltip from "./directives/Tooltip/index";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,
         faGithub,
         faSquareInstagram,
         faLinkedin
       } from '@fortawesome/free-brands-svg-icons'

library.add( faUser,
             faClock,
             faWandMagicSparkles,
             faFacebook,
             faGithub,
             faSquareInstagram,
             faLinkedin
            );

const app = createApp(App)
      app.use(router)
      app.component('font-awesome-icon', FontAwesomeIcon)
      app.directive('tooltip', tooltip)
      app.mount('#app')



