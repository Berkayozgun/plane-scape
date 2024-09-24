import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
  flightName: String, // Flight name from the API
  flightNumber: Number, // Flight number
  scheduleDateTime: Date, // Departure time
  actualLandingTime: Date, // Arrival time
  estimatedLandingTime: Date, // Estimated arrival time
  airlineCode: Number, // Airline code
  aircraftType: {
    iataMain: String,
    iataSub: String,
  },
  baggageClaim: {
    belts: [String],
  },
  route: {
    destinations: [String],
  },
  publicFlightState: {
    flightStates: [String],
  },
  codeshares: {
    codeshares: [String],
  },
});

const Flight = mongoose.model("Flight", flightSchema); 

export default Flight;
