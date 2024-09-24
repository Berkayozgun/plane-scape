import React from "react";
import CarRental from "../assets/car.jpg";
import HotelBooking from "../assets/hotel.jpg";
import TravelPackages from "../assets/travel.jpg";

function AdSide() {
  // This component displays the ads on the side of the page.
  return (
    <div className='flex flex-col w-2/12 h-full justify-between gap-6'>
      <div className='flex flex-col h-full shadow-2xl rounded-xl gap-6 object-cover w-full '>
        <img
          className='flex flex-col h-full shadow-2xl rounded-xl gap-6 object-cover w-full'
          src={CarRental}
          alt='Car photo'
        ></img>
      </div>
      <img
        className='flex flex-col h-full shadow-2xl rounded-xl gap-6 object-cover w-full'
        src={HotelBooking}
        alt='Hotel photo'
      />
      <img
        className='flex flex-col h-full shadow-2xl rounded-xl gap-6 object-cover w-full'
        src={TravelPackages}
        alt='Travel photo'
      />
    </div>
  );
}

export default AdSide;
