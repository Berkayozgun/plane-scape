import React from "react";

function FlightCard() {
  return (
    <div className='flex w-full h-[220px] bg-white p-6 rounded-xl'>
      <div className='flex flex-col w-full justify-between items-center'>
        <div className='flex w-full'>
          <div>Milano - Madrid</div>
        </div>

        <div className='flex flex-row items-center justify-between w-full'>
          <div>
            <div>svg - Departure</div>
            <div className='font-bold'>10:00 AM</div>
            <div>Airport: MXP</div>
          </div>

          <div>
            <div>svg- Airline</div>
            <div>svg-plane</div>
            <div>2h25m(Nonstop)</div>
          </div>

          <div>
            <div>svg - Arrival</div>
            <div className='font-bold'>12:25 PM</div>
            <div>Airport: MAD</div>
          </div>
        </div>

        <div className='flex flex-row justify-between w-full'>
          <div>
            <div className='flex font-bold'>Price : $ 200</div>
            <div>Round Trip</div>
          </div>

          <div>
            <button className='bg-[#4a1b96] text-white rounded-xl p-2'>
              Book Flight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
