import { useTranslation } from 'react-i18next';

const useLocaleSwitcher = () => {
  const { i18n, t } = useTranslation();
  const { language } = i18n;
  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };

  return {changeLanguage, t, language};
};

export default useLocaleSwitcher;