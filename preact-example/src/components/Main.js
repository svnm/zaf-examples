/** @jsx h */

import 'babel-polyfill'
import { h, Component } from 'preact'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import Ticket from './Ticket'
import {colors} from '../styles'
import ZAFClient from 'zendesk_app_framework_sdk'
const zafClient = ZAFClient.init()

export default class extends Component {
  constructor () {
    super()
    this.state = {
      requester: null,
      user: null,
      ticket: null
    }
  }

  componentDidMount () {
    zafClient.invoke('resize', { width: '100%', height: '400px' })
    this.getTicket()
    this.getUser()
    this.getRequester()
  }

  getTicket () {
    zafClient.get('ticket').then((response) => {
      const subject = response.ticket.subject
      this.setState({ticket: {subject}})
    }, (response) => {
      console.log(`Error from zafClient ticket status: ${response.status}`)
    })
  }

  getUser () {
    zafClient.get('currentUser').then((response) => {
      const name = response.currentUser.name
      const avatarUrl = response.currentUser.avatarUrl
      this.setState({user: {name, avatarUrl}})
    }, (response) => {
      console.log(`Error from zafClient currentUser status: ${response.status}`)
    })
  }

  getRequester () {
    zafClient.get('ticket.requester.id').then((data) => {
      zafClient.request(
        {url: `/api/v2/users/${data['ticket.requester.id']}.json`, type: 'GET', dataType: 'json'}
      )
      .then((response) => {
        const name = response.user.name
        const avatarUrl = response.user.photo.content_url
        this.setState({requester: {name, avatarUrl}})
      }, (response) => {
        console.log(`Error from zafClient ticket.requester status: ${response.status}`)
      })
    })
  }

  handleReplyClick (reply) {
    zafClient.invoke('ticket.comment.appendText', reply)
  }

  render () {
    const {requester, user, ticket} = this.state
    return (
      <Main>
        <Header name='Zendesk Test App' />
        <Ticket requester={requester} user={user} ticket={ticket} onReplyClick={(e, reply) => this.handleReplyClick(e, reply)} />
        <Footer />
      </Main>
    )
  }
}

const Main = styled.div`
  margin: 0;

  textarea {
    flex: 1;
    resize: none;
    border: 1px solid;
    border: 1px solid ${colors.$grey_light};
    color: ${colors.$grey_dark};
    font-size: 16px;
    padding: 6px;
    outline: none;
    margin: 5px 0;
    width: 100%;
  }
  hr {
    background: ${colors.$grey_light};
    border-color: ${colors.$grey_light};
    margin: 2px 0;
  }
  h1 {
    color: ${colors.$grey_mid};
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
    text-align: center;
  }
  p {
    color: ${colors.$grey_mid};
    font-size: 14px;
    margin-top: 5px;
    margin-left: 5px;
  }
`
