import { getWeatherCondition } from "../../functions";
import { WEATHER_CONFIG } from "../../consts";
import useStyles from "./styles";
import { Props } from "./types";

export const WeatherCard = ({ data }: Props) => {
    const classes = useStyles();

    const condition = getWeatherCondition(data.temp);
    const { color, icon } = WEATHER_CONFIG[condition];

    return (
        <div
            className={classes.weatherCard}
            style={{ backgroundColor: color }}
        >
            <h2>{data.city}</h2>
            <div className={classes.details}>
                <span className={classes.WeatherIcon} >{icon}</span>
                <div>
                    <p>Temperature: {data.temp}°C</p>
                    <p>Humidity: {data.humidity}%</p>
                </div>
            </div>
        </div>
    );
};

