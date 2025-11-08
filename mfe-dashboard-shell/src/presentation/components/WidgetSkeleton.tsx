import React from 'react';

export const WidgetSkeleton = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md  md:max-w-[500px] mx-auto">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
      </div>
    </div>
  );
};
