import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useNavigation = ({menuToggleRef, asideRef}:IUseNavigationPros) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navigateToComponent = (component:string) => {
    window.location.href = `#${component}`;
  };
  useEffect(() => {
    if (isOpen) {
      if(menuToggleRef) menuToggleRef.current?.classList.add("menu-toggle-change");
      if(asideRef) asideRef.current?.classList.remove('aside-toggle-menu');
      document.body.classList.add('body-blur-overflow-effect');
    } else {
      if(menuToggleRef) menuToggleRef.current?.classList.remove("menu-toggle-change");
      if(asideRef) asideRef.current?.classList.add('aside-toggle-menu');
      document.body.classList.remove('body-blur-overflow-effect');
    }
  }, [isOpen]);
  const goToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  return { t, navigateToComponent, goToTop, isOpen, setIsOpen };
};

export default useNavigation;