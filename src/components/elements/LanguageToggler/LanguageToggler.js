import React from "react";
import { changeLocale } from "gatsby-plugin-intl";
import styled from "styled-components";
import { theme } from "styled-tools";

// hooks
import useLanguage from "hooks/useLanguage";

const ChangeLanguage = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color: ${theme("colors.header.navItem")};
  padding-left: 20px;
  font-size: ${theme("sizes.fonts.mediumValuesPlus")};
  cursor: pointer;
  font-weight: 700;
`;

const LanguageToggler = () => {
  const { language: currentLanguage } = useLanguage();

  const languages = {
    ru: {
      icon: "🇷🇺",
      key: ""
    },
    en: {
      icon: "🇺🇸",
      key: "en"
    }
  };

  const { ru, en } = languages;

  return (
    <div>
      {currentLanguage === "ru" ? (
        <ChangeLanguage key={en.key} onClick={() => changeLocale(en.key)}>
          <span role="img" aria-label="us">
            {en.icon}
          </span>
        </ChangeLanguage>
      ) : (
        <ChangeLanguage key={ru.key} onClick={() => changeLocale(ru.key)}>
          <span role="img" aria-label="ru">
            {ru.icon}
          </span>
        </ChangeLanguage>
      )}
    </div>
  );
};

export default LanguageToggler;
