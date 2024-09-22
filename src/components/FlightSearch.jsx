import React from "react";

function FlightSearch() {
  return (
    <div className='flex flex-col w-full bg-white rounded-xl justify-evenly h-[200px] gap-4 p-6'>
      <div className='flex flex-row justify-between items-center gap-4'>
        <div className='flex flex-row gap-2 items-center'>
          <svg
            width='20'
            height='20'
            fill='#4a1b96'
            xmlns='http://www.w3.org/2000/svg'
          >
            <image
              href='https://www.svgrepo.com/show/391945/plane.svg'
              height='20'
              width='20'
            />
          </svg>
          <h1 className='font-semibold'>BOOK YOUR FLIGHT</h1>
        </div>
        <div className='flex flex-row p-1 gap-1'>
          <button className='flex border'>round trip</button>
          <button className='flex border'>one way</button>
        </div>
      </div>

      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row rounded-xl items-center border-gray border-2 p-1 gap-1'>
          <svg
            width='20'
            height='20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <image
              href='https://www.svgrepo.com/show/352352/plane-departure.svg'
              height='20'
              width='20'
            />
          </svg>

          <input type='text' placeholder='' />
        </div>
        <div className='flex flex-row rounded-xl items-center border-gray border-2 p-1 gap-1'>
          <svg
            width='20'
            height='20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <image
              href='https://www.svgrepo.com/show/352351/plane-arrival.svg'
              height='20'
              width='20'
            />
          </svg>

          <input type='text' placeholder='' />
        </div>
        <div className='flex flex-row rounded-xl border-gray border-2 p-1 gap-1'>
          <svg
            width='20'
            height='20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <image
              href='https://www.svgrepo.com/show/446841/calendar.svg'
              height='20'
              width='20'
            />
          </svg>
          <input type='date' placeholder='' />
        </div>
        <div className='flex flex-row rounded-xl border-gray border-2 p-1 gap-1'>
          <svg
            width='20'
            height='20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <image
              href='https://www.svgrepo.com/show/446841/calendar.svg'
              height='20'
              width='20'
            />
          </svg>

          <input type='date' />
        </div>
      </div>

      <button className='bg-[#4a1b96] w-[130px] text-white rounded-xl py-2 font-semibold'>
        Show flights
      </button>
    </div>
  );
}

export default FlightSearch;
