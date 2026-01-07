export const COLD_TEMPERATURE = 15;
export const NORMAL_TEMPERATURE = 30;

export const MIN_TEMPERATURE = -10;
export const MAX_TEMPERATURE = 49;

export enum WeatherCondition {
  FREEZING = "FREEZING",
  COLD = "COLD",
  NORMAL = "NORMAL",
  HOT = "HOT",
}
export const WEATHER_CONFIG = {
  FREEZING: {
    color: "#E0E0F0",
    icon: "❄️",
  },
  COLD: {
    color: "#6a9cf8ff",
    icon: "🥶",
  },
  NORMAL: {
    color: "#f5dd08ff",
    icon: "😊",
  },
  HOT: {
    color: "#f55f55ff",
    icon: "🥵",
  },
} as const;
