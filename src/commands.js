const { bookshelf,
  Train,
  Trains,
  Passenger,
  Passengers,
  Station,
  Stations,
  Ticket,
  Tickets,
  StationAndTrain,
  StationAndTrainRecords,
  StationAndPassenger,
  StationAndPassengerRecords,
  TrainAndPassenger,
  TrainAndPassengerRecords
} = require('../database/connection.js')

const retrieveRecord = ( model ) => {
  return model.fetch()
        .then( result => {
          return result.toJSON()
        })
}

const getPassenger = ( data ) => {
  return retrieveRecord( Passenger.forge(data) )
    .then(result => result )
}

const getStation = (data) => {
  return retrieveRecord( Station.forge(data) )
}

const getTrain = (data) => {
  return retrieveRecord( Train.forge(data) )
}

const getTicket = (data) => {
  return retrieveRecord( Ticket.forge(data) )
}

module.exports = {
  getPassenger,
  getStation,
  getTrain,
  getTicket
}
