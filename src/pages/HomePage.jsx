import React from "react";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className='flex flex-col w-full h-screen p-8 bg-[#f5f3f7]'>
      <Header />
      <h1>Uçuşlarım</h1>
      {/* Kullanıcının yaptığı uçuş rezervasyonlarının listelendiği alan */}
    </div>
  );
};

export default HomePage;
