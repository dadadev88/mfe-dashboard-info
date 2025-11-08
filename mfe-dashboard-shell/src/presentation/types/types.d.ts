declare module 'mfeCryptoWidget/CryptoWidget' {
  import { ComponentType } from 'react';
  const CryptoWidget: ComponentType<{ crypto: MyCrypto | null; isLoading: boolean }>;
  export default CryptoWidget;
}

declare module 'mfeWeatherWidget/WeatherWidget' {
  import { ComponentType } from 'react';
  const WeatherWidget: ComponentType<{ weather: Weather | null; isLoading: boolean }>;
  export default WeatherWidget;
}

