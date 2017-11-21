/** @jsx element */

import 'babel-polyfill'
import {resize} from './zaf'

resize()

import Vue from 'vue'
import App from './components/App.vue'

new Vue({
  el: '#root',
  template: '<App/>',
  components: { App }
})
