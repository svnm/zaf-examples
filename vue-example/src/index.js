/** @jsx element */

import 'babel-polyfill'
import Vue from 'vue'
import Main from './components/Main.vue'
import {resize, getTicket, getUser, getRequester} from './zaf'

resize()
const state = {
  requester: null,
  user: null,
  ticket: null
}

getTicket().then((result) => {
  state.ticket = result.ticket
  getUser()
  .then((result) => {
    state.user = result.user
    getRequester().then((result) => {
      state.requester = result.requester
      new Vue({
        el: '#root',
        components: { Main }
      })
    })
  })
})
