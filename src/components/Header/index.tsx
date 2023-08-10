import Logo from '../Logo';
import useHeader from './useheader';
import Navigation from '../Navigation';
import NavigationMobile from '../Navigation/NavigationMobile';
import ResumeButton from '../ResumeButton';
import LocaleSwitcher from '../LocaleSwitcher';

const Header = () => {
  const { menus, t } = useHeader();
  return (
    <>
      <NavigationMobile menus={menus}/>
      <header className='md:sticky shadow-lg shadow-gray-900 transition-all bg-gray-900/75 backdrop-blur-sm fixed top-0 w-full md:px-14 px-3 mx-auto md:mt-8 pt-2 pb-2 text-slate-50 flex justify-between items-center'>
        <Logo/>
        <div className='order-1 md:order-2 relative'>
          <div className="flex gap-x-8 w-full justify-end items-center cursor-pointer">
            <Navigation menus={menus}/>
            <div className='md:block hidden'>
              <ResumeButton label={t('menu.resume')}/>
            </div>
            <LocaleSwitcher className='md:block hidden'/>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;