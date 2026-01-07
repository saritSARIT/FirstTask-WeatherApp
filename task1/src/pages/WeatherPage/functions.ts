import { random } from "lodash/fp";
import type { WeatherCardProps } from "@components/WeatherCard/types";
import {
  MAX_TEMPERATURE,
  MIN_TEMPERATURE,
} from "@components/WeatherCard/consts";

export const generateRandomWeather = (city: string): WeatherCardProps => ({
  city,
  temperature: random(MIN_TEMPERATURE, MAX_TEMPERATURE),
  humidity: random(0, 100),
});
