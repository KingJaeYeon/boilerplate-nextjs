"use client";

import React, { useEffect } from "react";
import i18n from "i18next";
import HttpApi from "i18next-http-backend/esm";
import { initReactI18next } from "react-i18next";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

function LocaleProvider({ children }: Props) {
  const [init, setInit] = React.useState(false);

  useEffect(() => {
    if (init) return;
    initLocale();
    setInit(true);
  }, []);

  function initLocale() {
    const langList = ["ko", "en"];
    let lang;
    if (localStorage.getItem("lang")) {
      lang = localStorage.getItem("lang");
      if (!lang) localStorage.removeItem("lang");
    } else {
      // @ts-ignore
      lang = (navigator.language || navigator.userLanguage).split("-")[0];
    }

    const userLang =
      langList
        .find((l) => l?.toLowerCase() === lang?.toLowerCase())
        ?.toLowerCase() || "ko";

    i18n
      .use(HttpApi)
      .use(initReactI18next)
      .init({
        lng: userLang,
        fallbackLng: userLang,
        debug: true,
        interpolation: {
          escapeValue: false,
        },
        backend: {
          loadPath: `/lang/{{lng}}.json`,
        },
      })
      .then((r) => {
        console.log("i18n initialized");
      });
  }

  if (!init) return <></>;

  return <>{children}</>;
}

export default LocaleProvider;
