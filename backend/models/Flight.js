import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  flightName: String,
  flightNumber: Number,
  scheduleDateTime: Date,
  actualLandingTime: Date,
  estimatedLandingTime: Date,
  airlineCode: Number,
  aircraftType: {
    iataMain: String,
    iataSub: String,
  },
  baggageClaim: {
    belts: [String]
  },
  route: {
    destinations: [String]
  },
  publicFlightState: {
    flightStates: [String]
  },
  codeshares: {
    codeshares: [String]
  }
});

const Flight = mongoose.model('Flight', flightSchema);

export default Flight;
