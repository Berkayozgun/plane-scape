import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "../db/db.js"; // MongoDB bağlantısı
import Flight from "./models/Flight.js"; // Flight modeli

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // JSON verileri işleyecek

// MongoDB bağlantısını başlat
connectDB();

// API endpoint for fetching flights
app.get("/api/flights", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.schiphol.nl/public-flights/flights",
      {
        method: "GET",
        headers: {
          resourceversion: "v4",
          app_id: process.env.APP_ID,
          app_key: process.env.APP_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    res.json(data);
    console.log("Flight data fetched successfully");
  } catch (error) {
    console.error("Error fetching flight data:", error);
    res.status(500).json({ error: "Failed to fetch flight data" });
  }
});

app.post("/api/save-flight", async (req, res) => {
  try {
    console.log(req.body); // Gelen veriyi kontrol etmek için

    const flightData = req.body;

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

    await flight.save();
    res.status(201).json({ message: "Flight saved successfully" });
  } catch (error) {
    console.error("Error saving flight:", error);
    res.status(500).json({ error: "Failed to save flight" });
  }
});

// Kayıtlı uçuşları getiren endpoint
app.get("/api/saved-flights", async (req, res) => {
  try {
    const flights = await Flight.find(); // Tüm uçuşları al
    res.json({ flights });
  } catch (error) {
    console.error("Error fetching saved flights:", error);
    res.status(500).json({ error: "Failed to fetch saved flights" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
