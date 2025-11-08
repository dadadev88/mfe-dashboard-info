import React from 'react';
import { Weather } from '../domain/entities/weather.entity';
import { CircularProgressIndicator } from './components/CircularProgressIndicator';
import { WeatherWidgetCard } from './components/WeatherWidgetCard';

interface WeatherWidgetProps {
  weather: Weather | null;
  isLoading: boolean;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weather, isLoading }) => {

  if (isLoading) {
    return <WeatherWidgetCard children={<CircularProgressIndicator />} />
  }

  if (!weather) {
    return <WeatherWidgetCard children="Clima no encontrado" />
  }

  return (<WeatherWidgetCard>
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-10 w-10" src={weather.icon} alt={`${weather.condition} icon`} />
          <div className="ml-4">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{weather.city}</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black">{weather.condition}</p>
          </div>
        </div>
        <div>
          <p className="text-5xl font-semibold">{weather.temperature}°</p>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <div>
          <p className="text-sm text-gray-600">Humedad</p>
          <p className="text-lg font-semibold">{weather.humidity}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Vel. del viento</p>
          <p className="text-lg font-semibold">{weather.windSpeed} km/h</p>
        </div>
      </div>
    </>
  </WeatherWidgetCard>);
};


export default WeatherWidget;

