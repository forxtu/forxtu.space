// hooks
import useLanguage from "hooks/useLanguage";

export const translatedMessage = (ruMessage, enMessage) => {
  const { language } = useLanguage();

  return language === "ru" ? ruMessage : enMessage;
};
