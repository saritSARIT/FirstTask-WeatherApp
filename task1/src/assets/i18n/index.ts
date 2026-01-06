import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./en.json";

await i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEn },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    })
    .catch((error: unknown) => {
        console.error("i18n initialization failed:", error);
    });

console.log("i18n initialized successfully");

export default i18n;
