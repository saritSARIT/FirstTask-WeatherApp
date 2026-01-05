import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    weatherCard: {
        padding: "1rem",
        borderRadius: "8px",
        color: "#fff",
        textAlign: "center",
        fontFamily: "Asistent, sans-serif",
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

export default useStyles