import React, { useEffect, useState } from "react";
import axios from "axios";
import FlightCard from "../components/FlightCard"; // Uçuş kartı bileşenini dahil et

const SavedFlights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/saved-flights");
        setFlights(response.data.flights || []);
      } catch (error) {
        console.error("Error fetching saved flights:", error);
      }
    };

    fetchFlights();
  }, []);
   
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Saved Flights</h1>
      {flights.length === 0 ? (
        <p style={{ textAlign: "center" }}>No saved flights available.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 mt-4">
          {flights.map(flight => (
            <FlightCard key={flight._id} flight={flight} showButton={false}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedFlights;
