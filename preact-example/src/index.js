/** @jsx h */

import 'babel-polyfill'
import { h, render } from 'preact'
import Main from './components/Main'

render((
  <Main />
), document.getElementById('root'))
