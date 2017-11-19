/** @jsx h */
/** @flow */

import { h, Component } from 'preact'
import styled from 'styled-components'

type Props = {
  name: string
}

export default class extends Component<Props> {
  render () {
    const {name} = this.props
    return (
      <Header>
        <HeaderImage src='https://i.imgur.com/KLG0rBS.png' />
        <h1>{name}</h1>
      </Header>
    )
  }
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  text-align: center;
`
const HeaderImage = styled.img`
  height: 40px;
  width: 40px;
  margin: 5px auto;
`
