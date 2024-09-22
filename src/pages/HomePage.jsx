import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import FlightSearch from "../components/FlightSearch";
import FlightCard from "../components/FlightCard";
import SortFlights from "../components/SortFlights";
import AdSide from "../components/AdSide";

const HomePage = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true); // Yükleme durumu
  const [error, setError] = useState(null); // Hata durumu

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Uçuşları API'den çek
        const flightsResponse = await axios.get(
          "http://localhost:5000/api/flights"
        );
        const flightsData = flightsResponse.data.flights || [];

        setFlights(flightsData); // Uçuş verilerini ayarla
        setLoading(false); // Yükleme tamamlandı
      } catch (error) {
        setError("API isteğinde hata oluştu");
        setLoading(false); // Hata durumunda da yükleme sonlanmalı
        console.error("API isteğinde hata oluştu: ", error);
      }
    };

    fetchData(); // Sayfa yüklendiğinde API isteği yap
  }, []);

  // Yükleme durumu
  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  // Hata durumu
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
                <p>Uçuş bulunamadı</p> // Uçuşlar yoksa bilgilendirme
              ) : (
                flights.map((flight) => (
                  <FlightCard key={flight.id} flight={flight} />
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
