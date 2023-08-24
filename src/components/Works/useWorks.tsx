import { useTranslation } from "react-i18next";

const useWorks = () => {
  const { t } = useTranslation();
  const technologies = new Array(5).fill('technologies');
  return { technologies, t };
};

export default useWorks;