import React from 'react';
import { render, screen } from '@testing-library/react';
import { DashboardApp } from './DashboardApp';
import { useDashboard } from './hooks/useDashboard';

jest.mock('./hooks/useDashboard');

jest.mock('mfeCryptoWidget/CryptoWidget', () => {
  const CryptoWidget = (props: { crypto: any; }) => <div data-testid="crypto-widget" />;
  return CryptoWidget;
}, { virtual: true });
jest.mock('mfeWeatherWidget/WeatherWidget', () => {
  const WeatherWidget = (props: { weather: any; }) => <div data-testid="weather-widget" />;
  return WeatherWidget;
}, { virtual: true });

const mockUseDashboard = useDashboard as jest.Mock;

describe('DashboardApp', () => {
  it('should render 2 skeletons when loading', () => {
    mockUseDashboard.mockReturnValue({
      isLoading: { crypto: true, weather: true },
      weather: null,
      crypto: null,
      fetchDashboardInfo: jest.fn(),
      fetchCrypto: jest.fn(),
      fetchWeather: jest.fn(),
    });

    const { container } = render(<DashboardApp />);

    expect(container.querySelectorAll('.animate-pulse')).toHaveLength(2);
  });

  it('should render widgets when not loading', async () => {
    const mockWeather = { city: 'Santiago', temperature: 25 };
    const mockCrypto = { name: 'Bitcoin', price: 50000 };

    mockUseDashboard.mockReturnValue({
      isLoading: { crypto: false, weather: false },
      weather: mockWeather,
      crypto: mockCrypto,
      fetchDashboardInfo: jest.fn(),
      fetchCrypto: jest.fn(),
      fetchWeather: jest.fn(),
    });

    render(<DashboardApp />);

    const cryptoWidget = await screen.findByTestId('crypto-widget');
    const weatherWidget = await screen.findByTestId('weather-widget');

    expect(cryptoWidget).toBeInTheDocument();
    expect(weatherWidget).toBeInTheDocument();
  });
});
