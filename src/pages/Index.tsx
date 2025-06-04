
import React from 'react';
import Hero from '../components/Hero';
import TickerTape from '../components/TickerTape';
import SelectedWorks from '../components/SelectedWorks';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TickerTape />
      <SelectedWorks />
    </div>
  );
};

export default Index;
