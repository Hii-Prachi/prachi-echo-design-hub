
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-start p-8">
        <div>
          <h1 className="text-2xl font-bold text-coral-600 tracking-tight">PRACHI</h1>
          <p className="text-sm text-gray-600 mt-1 font-inter">DESIGNER, FACILITATOR, CREATIVE</p>
        </div>
        
        <div className="flex space-x-3 text-2xl">
          <span>🏠</span>
          <span>📸</span>
          <span>🧠</span>
          <span>⭐</span>
          <span>❤️</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-8 py-16">
        <div className="max-w-4xl">
          <div className="mb-16">
            <p className="text-4xl font-inter font-light mb-4">Hello my name is</p>
            <div className="relative">
              <span className="text-9xl handwriting text-coral-600 font-bold leading-none">Prachi</span>
            </div>
            <p className="text-4xl font-inter font-light mt-2 mb-6">and I am into...</p>
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="absolute top-32 right-8">
        <div className="text-right">
          <p className="font-playfair italic text-lg mb-2">Currently...</p>
          <div className="space-y-1">
            <div className="flex items-center justify-end space-x-2">
              <span className="text-coral-500">📍</span>
              <span className="font-playfair font-bold text-xl">Location</span>
            </div>
            <p className="text-sm text-gray-600 font-inter">WEDNESDAY 4 JUNE, 2025 AT 04:10:08</p>
          </div>
          
          <div className="mt-6 space-y-2 text-sm font-inter">
            <div className="flex items-start justify-end">
              <div className="text-right">
                <p>• LEARNING EXPERIENCE DESIGN</p>
                <p className="text-coral-600 underline">@DESIGN_SCHOOL</p>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="text-right">
                <p>• PROGRAM MANAGEMENT @COMPANY</p>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="text-right">
                <p>• CREATING ZINES/ILLUSTRATIONS</p>
                <p className="text-coral-600 underline">@PRACHI_CREATES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
