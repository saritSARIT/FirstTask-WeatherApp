import type { FC } from "react";
import WeatherCard from "../../components/WeatherCard";
import { CITIES } from "../../components/WeatherCard/consts";
import { generateRandomWeather } from "../../components/WeatherCard/functions";
import type { WeatherCardProperties } from "../../components/WeatherCard/weatherCardProperties";

import { map } from "lodash/fp";
import { useStyles } from "./styles";


export const WeatherPage: FC = () => {
    const classes = useStyles();
    const weatherList: WeatherCardProperties[] = map(generateRandomWeather, CITIES);

    return (<div className={classes.grid}>
        {map(data => <WeatherCard key={data.city} {...data} />, weatherList)}
    </div>);
};



