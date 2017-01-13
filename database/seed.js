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
  } = require('./connection.js')

const buildStationsAndStuff = () => {
  console.log('Begin building Stations')
  return Stations.forge([
    {Order: 1, Name: 'Downtown'},
    {Order: 2, Name: 'Elm Street'},
    {Order: 3, Name: 'Foret Gardens'},
    {Order: 4, Name: 'Annex'},
    {Order: 6, Name: '10th Ave'},
    {Order: 9, Name: 'Waterfront'},
    {Order: 10, Name: 'Colosseum'},
    {Order: 11, Name: 'Central Station'},
    {Order: 12, Name: 'Parkside'},
    {Order: 13, Name: 'Grand Boulevard'},
    {Order: 14, Name: 'Monument Valley'},
    {Order: 18, Name: 'Museum Isle'}
  ]).invokeThen('save')
  .then( result => {
    console.log('Added records for Stations')
    buildTrains()
  })
  .catch(function (err) {
    console.error('Error Saving Record');
    console.error(err);
  });
}

const buildTrains = () => {
  console.log('Begin building Trains')
  Trains.forge([
    {Capacity: 100, NumOnboard: 0, LastStation: 12},
    {Capacity: 90, NumOnboard: 0, LastStation: 3},
    {Capacity: 110, NumOnboard: 0, LastStation: 6},
    {Capacity: 50, NumOnboard: 0, LastStation: 9}
  ]).invokeThen('save')
  .then( result => {
    console.log('Added records for Trains')
    buildStationsAndTrains()
  })
  .catch(function (err) {
    console.error('Error Saving Record');
    console.error(err);
  });
}

const buildStationsAndTrains = () => {
  console.log('Begin building StationsAndTrains')
  StationAndTrainRecords.forge([
    {Arrived: '2017-1-16 12:21:13 ', 'TRAIN_id': 1, 'STATION_id': 12},
    {Arrived: '2017-1-16 12:21:13 ', 'TRAIN_id': 2, 'STATION_id': 3},
    {Arrived: '2017-1-16 12:21:13 ', 'TRAIN_id': 3, 'STATION_id': 6},
    {Arrived: '2017-1-16 12:21:13 ', 'TRAIN_id': 4, 'STATION_id': 9}
  ]).invokeThen('save')
  .then( result => {
    console.log('Added join table records')
    bookshelf.knex.destroy()
  })
  .catch(function (err) {
    console.error('Error Saving Record');
    console.error(err);
  });
}

const buildPassengers = () => {
  console.log('Begin building Passengers')
  return Passengers.forge([
    {FirstName: 'Phillip', LastName: 'Barnes'},
    {FirstName: 'Jacob', LastName: 'Marley'},
    {FirstName: 'Jane', LastName: 'Lane'},
    {FirstName: 'Julia', LastName: 'Fenton'},
    {FirstName: 'Jules', LastName: 'Verne'},
    {FirstName: 'Laura', LastName: 'Chapman'}
  ]).invokeThen('save')
  .then( result => {
    console.log('Added records for passengers')
  })
  .catch(function (err) {
    console.error('Error Saving Record');
    console.error(err);
  });
}

const buildSeed = () => {
  console.log ('building seed')

  buildPassengers()
  buildStationsAndStuff()
}

buildSeed()
