require('babel-register')
var enzyme = require('enzyme')
var Adapter = require('enzyme-adapter-react-16')
enzyme.configure({ adapter: new Adapter() })

require('./Header.spec.js')
require('./Footer.spec.js')
require('./Ticket.spec.js')
