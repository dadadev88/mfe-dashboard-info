import { useState } from "react";
import { Weather } from "../../domain/entities/weather.entity";
import { MyCrypto } from "../../domain/entities/crypto.entity";

// TODO: Cambiar por variables de entorno
// BFF
const BASE_URL = "http://localhost:8081/api/v1";

// Jmockver
// const BASE_URL = "http://localhost:8080/api/v1";


export const useDashboard = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [crypto, setCrypto] = useState<MyCrypto | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (city: string, crypto: string) => {
    try {
      setIsLoading(true);
      const url = `${BASE_URL}/dashboard?city=${city}&crypto=${crypto}`;
      console.log(url);
      const response = await fetch(url);
      const data = await response.json() as { weather: Weather; crypto: MyCrypto };

      setWeather(data.weather);
      setCrypto(data.crypto)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { weather, crypto, isLoading, fetchData };
};
