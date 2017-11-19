/** @jsx element */

import { element } from 'deku'

const render = ({props}) => {
  const {name} = props
  return (
    <div class='header'>
      <div class='header-image' src='https://i.imgur.com/KLG0rBS.png' />
      <h1>{name}</h1>
    </div>
  )
}

export default {render}
