import { createUseStyles } from "react-jss";
import type { StylesProperties } from "./weatherCardProperties";

export const useStyles = createUseStyles({
    weatherCard: {
        padding: "1rem",
        borderRadius: "8px",
        color: "#fff",
        textAlign: "center",
        fontFamily: "Asistent, sans-serif",
        backgroundColor: ({ color }: StylesProperties) => color,
    },
    details: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        justifyItems: "center",
        gap: "0.5rem",
    },
    WeatherIcon: {
        fontSize: "2rem",
    },
});

