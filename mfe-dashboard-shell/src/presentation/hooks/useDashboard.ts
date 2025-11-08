import { useRef, useState } from "react";
import { Weather } from "../../domain/entities/weather.entity";
import { MyCrypto } from "../../domain/entities/crypto.entity";

// TODO: Cambiar por variables de entorno
// BFF
const BASE_URL = "http://localhost:8081/api/v1";

// Jmockver
// const BASE_URL = "http://localhost:8080/api/v1";

const fetchData = async <T>(url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json() as T;
    return data;
  } catch (error) {
    throw error;
  }
}

export const useDashboard = (cityName: string, cryptoName: string) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [crypto, setCrypto] = useState<MyCrypto | null>(null);
  const [isLoading, setIsLoading] = useState({ weather: false, crypto: false });
  const queries = useRef({ city: cityName, crypto: cryptoName });


  const fetchDashboardInfo = async (cityName: string, cryptoName: string) => {
    try {
      queries.current.city = cityName;
      queries.current.crypto = cryptoName;

      setIsLoading({ weather: true, crypto: true });

      const url = `${BASE_URL}/dashboard?city=${cityName}&crypto=${cryptoName}`;
      const data = await fetchData<{ weather: Weather; crypto: MyCrypto }>(url);

      setWeather(data.weather);
      setCrypto(data.crypto)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading({ weather: false, crypto: false });
    }
  };

  const fetchWeather = async (cityName: string) => {
    const previousWeather = weather;
    try {
      setIsLoading(prev => ({ ...prev, weather: true }));
      queries.current.city = cityName;
      const url = `${BASE_URL}/dashboard?city=${cityName}&crypto=${queries.current.crypto}`;
      const data = await fetchData<{ weather: Weather }>(url);

      setWeather(data.weather);
    } catch (error) {
      setWeather(previousWeather);
      console.error(error);
    } finally {
      setIsLoading(prev => ({ ...prev, weather: false }));
    }
  };

  const fetchCrypto = async (cryptoName: string) => {
    try {
      queries.current.crypto = cryptoName;
      setIsLoading(prev => ({ ...prev, crypto: true }));
      const url = `${BASE_URL}/dashboard?crypto=${cryptoName}&city=${queries.current.city}`;
      const data = await fetchData<{ crypto: MyCrypto }>(url);

      setCrypto(data.crypto);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(prev => ({ ...prev, crypto: false }));
    }
  };

  return { weather, crypto, isLoading, fetchDashboardInfo, fetchWeather, fetchCrypto };
};
