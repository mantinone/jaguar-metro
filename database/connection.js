const knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : process.env.USER,
    database : 'jaguar-metro',
    charset  : 'utf8'
  }
});

const bookshelf = require('bookshelf')(knex);

const Train = bookshelf.Model.extend({
  tableName: 'TRAIN',
  passengers: () => this.hasMany(Passenger).through(TrainAndPassenger),
  stations: () => this.hasMany(Station).through(StationAndTrain),
  lastStation: () => this.belongsTo(Station)
});

var Trains = bookshelf.Collection.extend({
  model: Train
});

const Station = bookshelf.Model.extend({
  tableName: 'STATION',
  trains: () => this.hasMany(Train).through(StationAndTrain),
  passengers: () => this.hasMany(Passenger).through(StationAndPassenger),
  currentTrain: () => this.hasMany(Train),
  tickets: ()=> this.hasMany(Ticket)
})

var Stations = bookshelf.Collection.extend({
  model: Station
});

const Passenger = bookshelf.Model.extend({
  tableName: 'PASSENGER',
  trains: () => this.hasMany(Train).through(TrainAndPassenger),
  stations: () => this.hasMany(Station).through(StationAndPassenger),
  tickets: () => this.hasMany(Ticket)
})

var Passengers = bookshelf.Collection.extend({
  model: Passenger
});

const Ticket = bookshelf.Model.extend({
  tableName: 'TICKET',
  passenger: () => this.belongsTo(Passenger),
  station: () => this.belongsTo(Station)
})

var Tickets = bookshelf.Collection.extend({
  model: Ticket
});

const StationAndTrain = bookshelf.Model.extend({
  tableName: 'STATION_AND_TRAIN',
  idAttribute: null,
  station: () => this.belongsTo(Station),
  train: () => this.belongsTo(Train)
})

var StationAndTrainRecords = bookshelf.Collection.extend({
  model: StationAndTrain
});

const StationAndPassenger = bookshelf.Model.extend({
  tableName: 'STATION_AND_PASSENGER',
  idAttribute: null,
  station: () => this.belongsTo(Station),
  passenger: () => this.belongsTo(Passenger)
})

const StationAndPassengerRecords = bookshelf.Collection.extend({
  model: StationAndPassenger
})

const TrainAndPassenger = bookshelf.Model.extend({
  tableName: 'TRAIN_AND_PASSENGER',
  idAttribute: null,
  train: () => this.belongsTo(Train),
  passenger: () => this.belongsTo(Passenger)
})

const TrainAndPassengerRecords = bookshelf.Collection.extend({
  model: StationAndPassenger
})

module.exports = {
  bookshelf,
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
  TrainAndPassengerRecords}
