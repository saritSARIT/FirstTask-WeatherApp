/* eslint-disable unicorn/no-nested-ternary */
/* eslint-disable no-nested-ternary */

import { random, flow, assign } from "lodash/fp";
import type { WeatherCardProperties } from "./weatherCardProperties";
import {
    COLD_TEMPERATURE, MAX_TEMPERATURE, MIN_TEMPERATURE, NORMAL_TEMPERATURE,
    type WeatherCondition
} from "./consts";


export const generateRandomWeather = (city: string): WeatherCardProperties =>
    flow(
        () => ({}),
        assign({ city }),
        assign({ temporary: random(MIN_TEMPERATURE, MAX_TEMPERATURE) }),
        assign({ humidity: random(0, 100) })
    )();


export const getWeatherCondition = (temporary: number): WeatherCondition =>
    temporary <= 0 ? "FREEZING"
        : temporary <= COLD_TEMPERATURE ? "COLD"
            : temporary <= NORMAL_TEMPERATURE ? "NORMAL"
                : "HOT";
