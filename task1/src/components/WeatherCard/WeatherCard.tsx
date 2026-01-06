import { getWeatherCondition } from "./functions";
import { WEATHER_CONFIG } from "./consts";
import { useStyles } from "./styles";
import type { WeatherCardProperties } from "./weatherCardProperties";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const WeatherCard: FC<WeatherCardProperties> = ({ city, temporary, humidity }) => {


    const condition = getWeatherCondition(temporary);
    const { color, icon } = WEATHER_CONFIG[condition];

    const classes = useStyles({ color });

    const { t } = useTranslation();

    return (
        <div
            className={classes.weatherCard}

        >
            <h2>{city}</h2>
            <div className={classes.details}>
                <span className={classes.WeatherIcon} >{icon}</span>
                <div>
                    <p>
                        {t("WEATHER_CARD.TEMPERATURE")}
                        {" :"}
                        {temporary}
                        {" °C"}
                    </p>
                    <p>
                        {t("WEATHER_CARD.HUMIDITY")}
                        {" :"}
                        {humidity}
                        {" %"}
                    </p>
                </div>
            </div>
        </div>
    );
};

