import { useContext } from "react";

// utils
import { LanguageContext } from "components/layouts/Layout";

const useLanguage = () => {
  const { language, languages } = useContext(LanguageContext);

  return {
    language,
    languages
  };
};

export default useLanguage;
