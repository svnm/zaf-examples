// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import {button, colors} from '../styles'

type ticketType = {subject: string}
type userType = {name: string, avatarUrl: string}

type Props = {
  requester: userType,
  user: userType,
  ticket: ticketType,
  onReplyClick: (reply: string) => void,
}
type State = {
  reply: string,
}

export default class extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {reply: ''}
  }
  render () {
    const {requester, user, ticket} = this.props
    const {reply} = this.state
    return (
      <Ticket>
        {requester && ticket && <div>
          <Subject>{ticket.subject}</Subject>
          <NamerWrapper>
            { requester.avatarUrl && <UserImage src={requester.avatarUrl} />}
            { requester.name && <p>{requester.name}</p>}
          </NamerWrapper>
        </div>}
        <hr />
        {user && <div>
          <NamerWrapper>
            { user.avatarUrl && <UserImage src={user.avatarUrl} />}
            { user.name && <p>{user.name}</p>}
          </NamerWrapper>
        </div>}

        <textarea
          rows='3'
          autoComplete='off'
          placeholder='Enter your reply'
          onChange={(e) => { this.setState({reply: e.target.value}) }}
          value={reply} />
        <Button type='button' onClick={() => this.props.onReplyClick(reply)}>Reply</Button>
      </Ticket>
    )
  }
}

const Ticket = styled.div`
  padding: 10px 5px;
`

const Button = styled.button`
  ${button()}
`
const NamerWrapper = styled.div`
  display: flex;
  padding: 8px 0;
`
const UserImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`
const Subject = styled.p`
  color: ${colors.$grey_dark};
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
`
