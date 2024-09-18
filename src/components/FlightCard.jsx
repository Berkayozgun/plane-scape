import React from "react";

const FlightCard = ({ flight }) => {
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
            <div>{flight.airlineCode}</div> {/* Havayolu kodu */}
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
              Duration:{" "}
              {calculateFlightDuration(
                flight.scheduleDateTime,
                flight.actualLandingTime
              )}
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
              <div className="text-sm">Arrival</div>

            </div>
              <div className='font-bold'>
                {formatTime(flight.actualLandingTime)}
              </div>
              <div>Airport: {flight.prefixICAO}</div>
            </div>
          
        </div>

        <div className='flex flex-row justify-between w-full'>
          <div>
            <div className='flex font-bold text-[#4a1b96]'>
              Price: ${Math.floor(Math.random() * 500)}
            </div>
            <div className='text-sm text-gray-600'>Round Trip</div>
          </div>

          <div>
            <button className='bg-[#4a1b96] text-white rounded-br-xl rounded-tl-xl mt-6 -mr-6 p-6 font-semibold'>
              Book Flight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
