export const CITIES = ["Jerusalem", "Tel Aviv", "Haifa", "Eilat"];

export const COLD_TEMPERATURE = 15
export const NORMAL_TEMPERATURE = 30

export const MIN_TEMPERATURE = -10;
export const MAX_TEMPERATURE = 49;

export type WeatherCondition =
    | "FREEZING"
    | "COLD"
    | "NORMAL"
    | "HOT";

export const WEATHER_CONFIG = {
    FREEZING: {
        color: "rgba(224, 224, 240, 1)",
        icon: "❄️",
    },
    COLD: {
        color: "#6396f5ff",
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
