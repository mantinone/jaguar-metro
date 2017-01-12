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
  passengers: () => this.hasMany(Passenger, ['PASSENGER.id']).through(TrainAndPassenger),
  stations: () => this.hasMany(Station, ['STATION.id']).through(StationAndTrain),
  lastStation: () => this.belongsTo(Station, ['LastStation'])
});

const Station = bookshelf.Model.extend({
  tableName: 'STATION',
  trains: () => this.hasMany(Train, ['TRAIN.id']).through(StationAndTrain),
  passengers: () => this.hasMany(Passenger, ['PASSENGER.id']).through(StationAndPassenger),
  currentTrain: () => this.hasMany(Train, ['LastStation']),
  tickets: ()=> this.hasMany(Ticket, ['STATION.id'])
})

const Passenger = bookshelf.Model.extend({
  tableName: 'PASSENGER',
  trains: () => this.hasMany(Train, ['TRAIN.id']).through(TrainAndPassenger),
  stations: () => this.hasMany(Station, ['STATION.id']).through(StationAndPassenger),
  tickets: () => this.hasMany(Ticket, ['PASSENGER.id'])
})

const Ticket = bookshelf.Model.extend({
  tableName: 'TICKET',
  passenger: () => this.belongsTo(Passenger, ['PASSENGER.id']),
  station: () => this.belongsTo(Station, ['STATION.id'])
})

const StationAndTrain = bookshelf.Model.extend({
  tableName: 'STATION_AND_TRAIN',
  station: () => this.belongsTo(Station, ['STATION.id']),
  train: () => this.belongsTo(train, ['TRAIN.id'])
})

const StationAndPassenger = bookshelf.Model.extend({
  tableName: 'STATION_AND_PASSENGER',
  station: () => this.belongsTo(Station, ['STATION.id']),
  passenger: () => this.belongsTo(Passenger, ['PASSENGER.id'])
})

const TrainAndPassenger = bookshelf.Model.extend({
  tableName: 'TRAIN_AND_PASSENGER',
  train: () => this.belongsTo(Train, ['TRAIN.id']),
  passenger: () => this.belongsTo(Passenger, ['PASSENGER.id'])
})

console.log("Connection Ran")

module.exports = { bookshelf, Train, Passenger, Station, Ticket, StationAndTrain, StationAndPassenger, TrainAndPassenger }
