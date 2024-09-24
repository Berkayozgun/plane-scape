import React from "react";
import axios from "axios";

const FlightCard = ({ flight, showButton }) => {
  // Tarihleri formatlayarak AM/PM formatına dönüştürme
  const formatTime = (dateTime) => {
    return new Date(dateTime).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // AM/PM formatını aktif et
    });
  };
  const calculateFlightDuration = (departureTime, arrivalTime) => {
    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);
    const duration = new Date(arrival - departure);
    const hours = duration.getUTCHours();
    const minutes = duration.getUTCMinutes();
    return `${hours}h ${minutes}m`;
  };

  const saveFlight = async () => {
    const flightData = {
      flightName: flight.flightName, // API'den gelen uçuş ismi
      flightNumber: flight.flightNumber, // API'den gelen uçuş numarası
      scheduleDateTime: flight.scheduleDateTime,
      actualLandingTime: flight.actualLandingTime,
      estimatedLandingTime: flight.estimatedLandingTime, // Eğer varsa
      airlineCode: flight.airlineCode, // Eğer String ise Number'a çevir
      aircraftType: flight.aircraftType || { iataMain: "", iataSub: "" }, // Varsayılan değer
      baggageClaim: flight.baggageClaim || { belts: [] }, // Varsayılan değer
      route: flight.route,
      publicFlightState: flight.publicFlightState || { flightStates: [] }, // Varsayılan değer
      codeshares: flight.codeshares || { codeshares: [] }, // Varsayılan değer
    };
    try {
      // POST isteği ile uçuş verilerini backend'e gönder
      const response = await axios.post(
        "http://localhost:5000/api/save-flight",
        flightData
      );
      console.log("Flight saved:", response.data);
      alert("Flight booked successfully!");
    } catch (error) {
      console.error("Error saving flight:", error);
      alert("Failed to book the flight.");
    }
  };

  return (
    <div className='flex w-full h-[220px] bg-white rounded-xl p-6'>
      <div className='flex flex-col w-full justify-between items-center'>
        <div className='flex w-full'>
          <div className='font-bold'>
            {flight.route.destinations[0]} - {flight.prefixICAO}
          </div>
        </div>

        <div className='flex flex-row items-center gap-2 justify-between w-full'>
          <div className='flex flex-col '>
            <div className='flex flex-row gap-2'>
              <svg
                width='24'
                height='24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <image
                  href='https://www.svgrepo.com/show/340139/departure.svg'
                  height='24'
                  width='24'
                />
              </svg>
              <div className='text-sm'>Departure</div>
            </div>
            <div className='font-bold'>
              {formatTime(flight.scheduleDateTime)}
            </div>
            <div>Airport: {flight.route.destinations[0]}</div>
          </div>

          <div className='flex flex-col h-full items-center'>
            <div>Airline:{flight.airlineCode}</div> {/* Havayolu kodu */}
            <svg
              width='24'
              height='24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <image
                href='https://www.svgrepo.com/show/391945/plane.svg'
                height='24'
                width='24'
              />
            </svg>
            <div>
              {calculateFlightDuration(
                flight.scheduleDateTime,
                flight.actualLandingTime
              )}{" "}
              (Nonstop)
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-2'>
              <svg
                width='24'
                height='24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <image
                  href='https://www.svgrepo.com/show/339782/arrival.svg'
                  height='24'
                  width='24'
                />
              </svg>
              <div className='text-sm'>Arrival</div>
            </div>
            <div className='font-bold'>
              {formatTime(flight.actualLandingTime)}
            </div>
            <div>Airport: {flight.prefixICAO}</div>
          </div>
        </div>

        <div className='flex flex-row justify-between w-full'>
          <div>
            <div className='flex font-bold text-[#4a1b96] mt-6'>
              Price: ${Math.floor(Math.random() * 500)}
            </div>
            <div className='text-sm text-gray-600'>Round Trip</div>
          </div>

          <div>
            {showButton && (
              <button
                className='bg-[#4a1b96] text-white rounded-br-xl rounded-tl-xl mt-6 -mr-6 p-6 font-semibold'
                onClick={saveFlight}
              >
                Book Flight
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
