import React, { Component } from 'react'
import styled from 'styled-components'
import {colors} from '../styles'

export default class extends Component {
  render () {
    return (
      <Footer>
        <p>
        Made with
        <svg fill='currentColor' height='24' viewBox='0 0 24 24' width='24'>
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
        </svg>
        in Melbourne
      </p>
      </Footer>
    )
  }
}

const Footer = styled.div`
  padding: 5px 0;
  svg {
    color: ${colors.$green};
    height: 14px;
    width: 14px;
    vertical-align: text-top;
    margin: 0 2px;
  }
  p {
    color: ${colors.$grey_mid};
    text-align: center;
  }
`
