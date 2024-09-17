import React from "react";
import Header from "../components/Header";
import FlightSearch from "../components/FlightSearch";
import FlightCard from "../components/FlightCard";

const HomePage = () => {
  return (
    <div className='flex flex-col w-full h-screen p-8 gap-6 bg-[#f5f3f7]'>
      <Header />
      <FlightSearch />
      <FlightCard />
      <FlightCard />
    </div>
  );
};

export default HomePage;
