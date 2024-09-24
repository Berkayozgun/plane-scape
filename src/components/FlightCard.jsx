import React from "react";
import axios from "axios";

// This component displays the flight details in a card format.
// It also includes a button to book the flight. When the button is clicked, the flight data is sent to the backend.
// The flight data is saved in the database.
// The flight card displays the departure and arrival times, airline code, flight duration, and price.
// The flight card also includes the departure and arrival airports.

const FlightCard = ({ flight, showButton }) => {
  // Function to format the time in 12-hour format
  const formatTime = (dateTime) => {
    return new Date(dateTime).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // AM/PM format
    });
  };
  const calculateFlightDuration = (departureTime, arrivalTime) => {
    // Calculate the duration of the flight
    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);
    const duration = new Date(arrival - departure);
    const hours = duration.getUTCHours();
    const minutes = duration.getUTCMinutes();
    return `${hours}h ${minutes}m`;
  };

  const saveFlight = async () => {
    const flightData = {
      flightName: flight.flightName, // Flight name from the API
      scheduleDateTime: flight.scheduleDateTime, // Departure time
      actualLandingTime: flight.actualLandingTime, // Arrival time
      estimatedLandingTime: flight.estimatedLandingTime, // Estimated arrival time
      airlineCode: flight.airlineCode, // Airline code
      aircraftType: flight.aircraftType || { iataMain: "", iataSub: "" }, // Default value
      baggageClaim: flight.baggageClaim || { belts: [] }, // Default value
      route: flight.route, // Route details
      publicFlightState: flight.publicFlightState || { flightStates: [] }, // Default value
      codeshares: flight.codeshares || { codeshares: [] }, // Default value
    };
    try {
      // Send the flight data to the backend with a POST request to save the flight
      const response = await axios.post(
        "http://localhost:5000/api/save-flight",
        flightData
      );
      alert("Flight booked successfully!"); // Show an alert message on success
      window.location.href = "/flights"; // Redirect to the saved flights page
    } catch (error) {
      console.error("Error saving flight:", error);
      alert("Failed to book the flight."); // Show an alert message on error
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
            <div>Airline:{flight.airlineCode}</div>
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
              Price: ${Math.floor(Math.random() * 500)} {/* Random price */}
            </div>
            <div className='text-sm text-gray-600'>Round Trip</div>
          </div>

          <div>
            {showButton && ( // Show the button only if the showButton prop is true
              <button
                className='bg-[#4a1b96] text-white rounded-br-xl rounded-tl-xl mt-6 -mr-6 p-6 font-semibold'
                onClick={saveFlight} // Call the saveFlight function when the button is clicked
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
