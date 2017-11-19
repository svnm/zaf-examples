import expect from 'expect'
import test from 'tape'
import React from 'react'
import {mount} from 'enzyme'
import Header from '../src/components/Header'

require('jsdom-global')()
const wrapper = mount(<Header name='Zendesk Test App' />)

test('Header component has a header image and name', (t) => {
  t.pass(
    expect(wrapper.find('img').length).toEqual(1)
  )

  t.pass(
    expect(wrapper.find('h1').text()).toEqual('Zendesk Test App')
  )
  t.end()
})
