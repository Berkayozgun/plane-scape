import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
