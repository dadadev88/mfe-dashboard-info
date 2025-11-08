import React from 'react';

interface CryptoWidgetCardProps {
  children: React.ReactNode;
}

export const CryptoWidgetCard: React.FC<CryptoWidgetCardProps> = ({ children }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        {children}
      </div>
    </div>
  );
}