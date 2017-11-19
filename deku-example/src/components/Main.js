/** @jsx element */

import Header from './Header'
import Footer from './Footer'
import Ticket from './Ticket'

import { element } from 'deku'
require('./styles.css')

function render ({ props }) {
  const {requester, user, ticket} = props

  return (
    <div class='zaf-app'>
      <Header name='Zendesk Test App' />
      <Ticket
        requester={requester}
        user={user}
        ticket={ticket} />
      <Footer />
    </div>
  )
}

export default {render}
