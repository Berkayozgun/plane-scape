import React from "react";

function AdSide() {
  return (
    <div className='flex flex-col w-2/12 h-full justify-between gap-6'>
      <div className='flex flex-col h-full shadow-2xl rounded-xl gap-6'>
        Car Rental
      </div>
      <div className='flex flex-col  h-full shadow-2xl rounded-xl gap-6'>
        Hotel Booking
      </div>
      <div className='flex flex-col  h-full shadow-2xl rounded-xl gap-6'>
        Travel Packages
      </div>
    </div>
  );
}

export default AdSide;
