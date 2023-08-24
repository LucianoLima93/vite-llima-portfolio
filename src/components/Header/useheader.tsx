import { useTranslation } from 'react-i18next';
import useScroll from '../../hooks/useScroll';
import { useEffect } from 'react';

const useHeader = ({ headerRef }: IUseHeaderProps) => {
  const { t } = useTranslation();
  const { visible, scroll } = useScroll();

  useEffect(() => {
    if (headerRef.current) {
      if (!visible) {
        headerRef.current.style.top = '-100px';
      } else if (visible && scroll.y === 0) {
        headerRef.current.style.top = '16px';
      } else {
        headerRef.current.style.top = '0px';
      }
    }
  }, [visible, scroll.y]);

  const menus: NavigationMenu[] = [
    {
      name: 'about'
    },
    {
      name: 'experience'
    },
    {
      name: 'works'
    },
    {
      name: 'contact'
    }
  ]
  return { menus, t };
};

export default useHeader;