import Logo from '../Logo';
import useHeader from './useheader';
import Navigation from '../Navigation';
import { useRef } from 'react';
import ToggleTheme from '../shared/ToggleTheme';
import NavigationMobile from '../Navigation/NavigationMobile';

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const { menus } = useHeader({headerRef});

  return (
    <>
      <header ref={headerRef}
        className={`transition-all dark:bg-gray-950/75 bg-gray-100/75 backdrop-blur-sm 
        fixed w-full md:px-14 px-3 mx-auto pt-2 pb-2 dark:text-gray-50 text-gray-900 flex justify-between items-center z-40`}>
        <Navigation className='md:order-2 md:block hidden' menus={menus}/>
        <Logo className='order-1'/>
        <NavigationMobile className='md:hidden order-3' menus={menus}/>
        <ToggleTheme className='order-2 md:hidden flex' data-aos="fade-down" data-aos-duration='1600'/>
      </header>
    </>
  )
}

export default Header;