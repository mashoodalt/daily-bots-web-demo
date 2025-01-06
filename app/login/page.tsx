import React from 'react';

import {Input} from '@/components/ui/input';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white w-full">
      <div className="absolute inset-20 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="text-center">
        <div className="mb-8">
          <svg
            className="w-10 h-10 mx-auto"
            fill="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2l10 20H2L12 2z" />
          </svg>
        </div>
        <h1 className="text-5xl mb-4">
          Scale your team with digital workers.
        </h1>
        <p className="mb-8">Enter your email to sign up or login.</p>
        <div className="flex flex-col items-center">
          {/* <input
            type="email"
            placeholder="enter your email"
            className="border border-gray-300 p-2 mb-4 w-64 text-center rounded bg-[#ffffff] focus:outline-none focus:border-primary"
          /> */}
          <Input
            placeholder="enter your email"
            className="w-64 mb-4 focus:outline-none"
          />
          <button className="bg-[#CDFE00] text-black py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;