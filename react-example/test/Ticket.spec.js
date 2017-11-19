import expect from 'expect'
import test from 'tape'
import React from 'react'
import {mount} from 'enzyme'
import Ticket from '../src/components/Ticket'

require('jsdom-global')()

const onReplyClick = (reply) => { console.log('reply') }
const ticket = {subject: 'A test ticket'}
const user = {name: 'User', avatarUrl: 'avatar.png'}
const requester = {name: 'Requester', avatarUrl: 'avatar.png'}

const wrapper = mount(
  <Ticket
    requester={requester}
    user={user}
    ticket={ticket}
    onReplyClick={onReplyClick} />
)

test('Ticket component onReplyClick updates the reply value', (t) => {
  t.pass(
    expect(wrapper.instance().props.onReplyClick).toEqual(onReplyClick)
  )

  t.pass(
    expect(wrapper.instance().state.reply).toEqual('')
  )
  t.end()
})

test('Ticket component has a textarea and button', (t) => {
  t.pass(
    expect(wrapper.find('textarea').length).toEqual(1)
  )

  t.pass(
    expect(wrapper.find('button').length).toEqual(1)
  )

  t.end()
})
