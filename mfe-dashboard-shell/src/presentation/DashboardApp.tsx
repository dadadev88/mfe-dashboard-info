import React, { lazy, Suspense, useEffect } from 'react';
import { useDashboard } from './hooks/useDashboard';
import { WidgetSkeleton } from './components/WidgetSkeleton';

const CryptoWidget = lazy(() => import('mfeCryptoWidget/CryptoWidget'));
const WheatherWidget = lazy(() => import('mfeWeatherWidget/WeatherWidget'));

export const DashboardApp: React.FC = () => {
  const { fetchData, isLoading, weather, crypto } = useDashboard();

  useEffect(() => {
    fetchData('lima', 'BTC');
  }, []);

  return (
    <>
      <header className="bg-blue-500 text-center">
        <h1 className="text-2xl font-bold text-white p-2">Dashboard App</h1>
      </header>
      <main className="min-h-screen bg-gray-200 p-6">
        <Suspense fallback={<></>}>
          <h1 className="text-xl font-bold my-4 text-center"> Crypto Widget </h1>
          {isLoading ? <WidgetSkeleton /> : <CryptoWidget crypto={crypto} isLoading={isLoading} />}
        </Suspense>
        <Suspense fallback={<></>}>
          <h1 className="text-xl font-bold my-4 text-center">Weather Widget</h1>
          {isLoading ? <WidgetSkeleton /> : <WheatherWidget weather={weather} isLoading={isLoading} />}
        </Suspense>
      </main>
    </>
  );
};