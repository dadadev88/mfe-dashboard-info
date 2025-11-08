import React from 'react';

interface WeatherWidgetCardProps {
  children: React.ReactNode;
}

export const WeatherWidgetCard: React.FC<WeatherWidgetCardProps> = ({ children }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        {children}
      </div>
    </div>
  );
};