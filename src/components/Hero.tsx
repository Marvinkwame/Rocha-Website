import React from "react";

const Hero = () => {
  return (
    <div className="mt-16 py-[280px] bg-blend-multiply bg-gray-700 text-white bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1482685945432-29a7abf2f466?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[50px] text-center font-bold">
          Welcome To My Website
        </h1>
        <p className="text-2xl text-center font-medium">
          Where You see my work
        </p>
      </div>
    </div>
  );
};

export default Hero;
