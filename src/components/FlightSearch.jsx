import React from "react";

function FlightSearch() {
  return (
    <div className='flex flex-col w-full bg-white rounded-xl justify-evenly h-[200px] p-6'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row'>
          <div>svg</div>
          <h1>Book your flight</h1>
        </div>
        <div className='flex flex-row'>
          <div>round trip</div>
          <h1>one way</h1>
        </div>
      </div>

      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row'>
          <div>svg</div>

          <input type='text' placeholder='Enter city or airport' />
        </div>
        <div className='flex flex-row'>
          <div>svg</div>

          <input type='text' placeholder='Enter city or airport' />
        </div>
        <div className='flex flex-row'>
          <div>svg</div>

          <input type='date' />
        </div>
        <div className='flex flex-row'>
          <div>svg</div>

          <input type='date' />
        </div>
      </div>

      <button className='bg-[#4a1b96] w-2/12 text-white rounded-xl p-2'>
        Show flights
      </button>
    </div>
  );
}

export default FlightSearch;
