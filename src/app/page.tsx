import React from 'react';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page Title',
  description: "Red Team UI Homepage",
}

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <h1 className="animate-sign-spin text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-pink-600">
        Word Art woooooow
      </h1>
    </div>
  );
};


export default HomePage;
