import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'

function render () {
  ReactDOM.render(
    <Main />,
    document.getElementById('root')
  )
}

render()
