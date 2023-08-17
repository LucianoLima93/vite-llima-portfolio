import Logo from '../Logo';
import useHeader from './useheader';
import Navigation from '../Navigation';
import { useRef } from 'react';
import NavigationMobile from '../Navigation/NavigationMobile';
import LocaleSwitcher from '../LocaleSwitcher';
import Button from '../shared/Button';
import ToggleTheme from '../shared/ToggleTheme';

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const { menus } = useHeader({headerRef});

  return (
    <>
      <NavigationMobile menus={menus}/>
      <header ref={headerRef}
        className='transition-all dark:bg-gray-950/75 bg-gray-100/75 backdrop-blur-sm fixed w-full md:px-14 px-3 mx-auto pt-2 pb-2 dark:text-gray-50 text-gray-900 flex justify-between items-center z-40'>
        <Logo/>
        <div className='order-1 md:order-2 relative'>
          <div className="flex gap-x-8 w-full justify-end items-center cursor-pointer">
            <Navigation menus={menus}/>
            <div className='md:block hidden'
              data-aos="fade-down" data-aos-duration='1400'>
              <Button
                label='menu.resume'
                onClick={() => {
                  window.open('../../../public/assets/resume.pdf', '_blank');
                }}
              />
            </div>
            <ToggleTheme/>
            <LocaleSwitcher animationDuration={1600} customClass='md:block hidden'/>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;