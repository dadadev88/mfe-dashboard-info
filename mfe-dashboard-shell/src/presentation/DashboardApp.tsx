import React, { lazy, Suspense, useEffect, useCallback, useMemo } from 'react';
import { useDashboard } from './hooks/useDashboard';
import { WidgetSkeleton } from './components/WidgetSkeleton';

const CryptoWidget = lazy(() => import('mfeCryptoWidget/CryptoWidget'));
const WeatherWidget = lazy(() => import('mfeWeatherWidget/WeatherWidget'));

export const DashboardApp: React.FC = () => {
  const { fetchDashboardInfo, fetchCrypto, fetchWeather, isLoading, weather, crypto } = useDashboard('lima', 'BTC');

  useEffect(() => {
    fetchDashboardInfo('lima', 'BTC');
  }, []);

  const getRandomCities = useMemo(() => {
    const cities = ['new york', 'tokyo', 'paris', 'london', 'sydney', 'osaka', 'caracas', 'madrid', 'barcelona'];
    const randomCities = cities.sort(() => Math.random() - 0.5).slice(0, 3);
    return randomCities;
  }, []);

  const getRandomCrypto = useMemo(() => {
    const cryptos = ['ETH', 'SOL', 'DOT', 'LTC', 'DOGE', 'ADA', 'XLM', 'TRX'];
    const randomCryptos = cryptos.sort(() => Math.random() - 0.5).slice(0, 3);
    return randomCryptos;
  }, []);

  return (
    <>
      <header className="bg-blue-500 text-center">
        <h1 className="text-2xl font-bold text-white p-2">Dashboard App</h1>
      </header>
      <main className="min-h-screen bg-gray-200 p-6">
        <Suspense fallback={<></>}>
          <WidgetContainer
            title="Crypto Widget"
            fetchData={fetchCrypto}
            primaryQuery="BTC"
            queries={['BTC', ...getRandomCrypto]}
            children={
              isLoading.crypto
                ? <WidgetSkeleton />
                : <CryptoWidget crypto={crypto} isLoading={isLoading.crypto} />
            }
          />
        </Suspense>
        <Suspense fallback={<></>}>
          <WidgetContainer
            title="Weather Widget"
            fetchData={fetchWeather}
            primaryQuery="lima"
            queries={['lima', ...getRandomCities]}
            children={
              isLoading.weather
                ? <WidgetSkeleton />
                : <WeatherWidget weather={weather} isLoading={isLoading.weather} />
            }
          />
        </Suspense>
      </main>
    </>
  );
};

interface WidgetContainerProps {
  children: React.ReactNode;
  title: string;
  queries: string[];
  primaryQuery: string;
  fetchData: (query: string) => void;
}

const WidgetContainer = ({ children, fetchData, title, queries, primaryQuery }: WidgetContainerProps) => {
  return <div className="max-w-[500px] mx-auto">
    <h1 className="text-xl font-bold my-4 text-center"> {title} </h1>
    <div className="flex justify-center gap-4 my-4">
      {queries.map((query) => (
        <ChipButton
          onClick={() => fetchData(query)}
          key={query}
          isPrimary={query === primaryQuery}
          isSelected={query === primaryQuery}
        >
          {query.toUpperCase()}
        </ChipButton>
      ))}
    </div>
    {children}
  </div>;
};

const ChipButton = ({ onClick, children, isPrimary, isSelected }: { onClick: () => void; children: React.ReactNode; isPrimary: boolean; isSelected: boolean }) => {
  return <button
    type="button"
    className={`text-white text-xs px-4 py-1 rounded-2xl hover:bg-blue-600 transition-colors hover:cursor-pointer ${isSelected ? 'bg-blue-600' : 'bg-gray-800'}`}
    onClick={onClick}>
    {children} {isPrimary ? '⭐️' : ' '}
  </button>;
};