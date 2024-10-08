import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import FlightSearch from "../components/FlightSearch";
import FlightCard from "../components/FlightCard";
import SortFlights from "../components/SortFlights";
import AdSide from "../components/AdSide";

const HomePage = () => {
  const [flights, setFlights] = useState([]); // Flight data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const flightsResponse = await axios.get( // Get all flights from the API
          "http://localhost:5000/api/flights"
        );
        const flightsData = flightsResponse.data.flights || []; 
        setFlights(flightsData); // Set the flight data 
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        setError("API isteğinde hata oluştu"); // Set error message
        setLoading(false); // Set loading to false when error occurs
        console.error("API isteğinde hata oluştu: ", error); // Log the error
      }
    };

    fetchData(); // Call the fetch data function
  }, []);

  // Loading state
  if (loading) { 
    return <p>Yükleniyor...</p>;
  }

  // Error state
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='flex flex-col w-full h-screen p-8 gap-6 bg-[#f5f3f7]'>
      <Header />
      <div className='flex flex-row gap-6 justify-between'>
        <div className='flex flex-col w-10/12 gap-6'>
          <FlightSearch />
          <div className='flex flex-row w-full gap-6'>
            <div className='flex flex-col gap-6 w-full overflow-y-auto max-h-[440px] scrollbar-hide'>
              {flights.length === 0 ? (
                <p>Uçuş bulunamadı</p> // Display a message if no flights are available
              ) : (
                flights.map((flight) => (
                  <FlightCard key={flight.id} flight={flight}  showButton={true}/>
                ))
              )}
            </div>
            <SortFlights />
          </div>
        </div>
        <AdSide />
      </div>
    </div>
  );
};

export default HomePage;
