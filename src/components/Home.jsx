// src/components/Home.js
import React from 'react';
import NextUIButton from './ui/nextui-button'; // Importing the custom button component

function Home() {
  return (
    <div 
      className="flex flex-col lg:flex-row items-center justify-center w-full px-4 space-y-8 lg:space-y-0 lg:space-x-8 relative"
      style={{
        background: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22><path fill=%22%23e5f4f5%22 fill-opacity=%221%22 d=%22M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,266.7C672,267,768,245,864,234.7C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22></path></svg>')",
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Hero text and image sections */}
      <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start">
        <h2 className="bg-clip-text text-transparent text-center lg:text-left bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 font-bold tracking-tight">
          Welcome to IWC<br /> 
        </h2>

        {/* Download Resume Button */}
        <NextUIButton /> {/* Use the custom button component here */}

        <p className="max-w-xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center lg:text-left mt-2">
          Still thinking what to put here
        </p>
      </div>

      {/* Hero image */}
      <div className="order-2 lg:order-1 w-full lg:w-1/2">
        <img
          src="./src/assets/Soham.png"
          alt="Soham Athavale"
          className="w-60 h-60 object-cover rounded-full border-4 border-black"
        />
      </div>
    </div>
  );
}

export default Home;









