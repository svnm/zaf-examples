/** @jsx element */

import 'babel-polyfill'
import Main from './components/Main'
import { createApp, element } from 'deku'
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
      let render = createApp(document.getElementById('root'))
      render(
        <Main
          ticket={state.ticket}
          user={state.user}
          requester={state.requester} />
      )
    })
  })
})
