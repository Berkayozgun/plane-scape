import React from "react";
import Header from "../components/Header";
import FlightSearch from "../components/FlightSearch";
import FlightCard from "../components/FlightCard";
import SortFlights from "../components/SortFlights";
import AdSide from "../components/AdSide";

const HomePage = () => {
  return (
    <div className='flex flex-col w-full h-screen p-8 gap-6 bg-[#f5f3f7]'>
      <Header />
      <div className='flex flex-row h-screen gap-6 justify-between'>
        <div className='flex flex-col w-9/12 gap-6 '>
          <FlightSearch />
          <div className='flex flex-row w-full gap-6'>
            <div className='flex flex-col gap-6 w-full'>
              <FlightCard />
              <FlightCard />
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
