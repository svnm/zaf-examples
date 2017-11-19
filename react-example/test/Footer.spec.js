import expect from 'expect'
import test from 'tape'
import React from 'react'
import {mount} from 'enzyme'
import Footer from '../src/components/Footer'

require('jsdom-global')()
const wrapper = mount(<Footer />)

test('Footer component has an svg icon and text', (t) => {
  t.pass(
    expect(wrapper.find('svg').length).toEqual(1)
  )

  t.pass(
    expect(wrapper.find('p').text()).toEqual('Made within Melbourne')
  )
  t.end()
})
