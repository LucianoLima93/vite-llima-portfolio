import { useTranslation } from 'react-i18next';

const useHeader = () => {
  const { t } = useTranslation();

  const menus:NavigationMenu[] = [
    {
      name: 'about'
    },
    {
      name: 'experience'
    },
    {
      name: 'education'
    }
  ]
  return { menus, t };
};

export default useHeader;