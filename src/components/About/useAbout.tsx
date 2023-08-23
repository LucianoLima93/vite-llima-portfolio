import { useTranslation } from 'react-i18next';

const useAbout = () => {
  const { t } = useTranslation();
  const tecnlogies = new Array(5).fill('technologies');
  return {
    tecnlogies,
    t
  };
};

export default useAbout;
