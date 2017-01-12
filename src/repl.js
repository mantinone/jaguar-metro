const repl = require('repl');
const bookshelf = require('../database/connection.js')
const PassengerClass = require('./PassengerClass.js')
const StationClass = require('./StationClass.js')
const TrainClass = require('./TrainClass.js')
const TicketClass = require('./TicketClass')

repl.start().context.m = { bookshelf, PassengerClass, StationClass, TrainClass, TicketClass }
