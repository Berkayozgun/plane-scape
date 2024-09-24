import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "../db/db.js"; // MongoDB bağlantısı
import Flight from "./models/Flight.js"; // Flight modeli

dotenv.config(); // load environment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Cross-origin resource sharing
app.use(express.json()); // JSON body parser

connectDB(); // MongoDB connection

// API endpoint for fetching flights from the Schiphol API
app.get("/api/flights", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.schiphol.nl/public-flights/flights",
      {
        method: "GET",
        headers: {
          resourceversion: "v4", // API version 4
          app_id: process.env.APP_ID, // API ID from the environment variables
          app_key: process.env.APP_KEY, // API key from the environment variables
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok"); // Error handling
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching flight data:", error); // Log error
    res.status(500).json({ error: "Failed to fetch flight data" }); // Error response
  }
});

// Endpoint for saving a flight to the database (MongoDB)
app.post("/api/save-flight", async (req, res) => {
  try {
    const flightData = req.body; // Flight data from the request body

    const flight = new Flight({
      flightName: flightData.flightName,
      flightNumber: flightData.flightNumber,
      scheduleDateTime: flightData.scheduleDateTime,
      actualLandingTime: flightData.actualLandingTime,
      estimatedLandingTime: flightData.estimatedLandingTime,
      airlineCode: flightData.airlineCode,
      aircraftType: flightData.aircraftType,
      baggageClaim: flightData.baggageClaim,
      route: flightData.route,
      publicFlightState: flightData.publicFlightState,
      codeshares: flightData.codeshares,
    });

    await flight.save(); // Save the flight to the database
    res.status(201).json({ message: "Flight saved successfully" }); // Success response
  } catch (error) {
    console.error("Error saving flight:", error); // Log error
    res.status(500).json({ error: "Failed to save flight" }); // Error response
  }
});

// Endpoint for fetching saved flights from the database
app.get("/api/saved-flights", async (req, res) => {
  try {
    const flights = await Flight.find(); // Fetch all flights from the database
    res.json({ flights }); // Send the flights as JSON
  } catch (error) {
    console.error("Error fetching saved flights:", error); // Log error
    res.status(500).json({ error: "Failed to fetch saved flights" }); // Error response
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log the server URL
});
