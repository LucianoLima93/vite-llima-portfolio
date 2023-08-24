import React, { useRef } from 'react'
import useNavigation from './useNavigation';
import MenuToggle from './MenuToggle';
import { twMerge } from 'tailwind-merge';
import Button from '../shared/Button';

const NavigationMobile: React.FC<INavigationProps> = ({ menus, ...rest }) => {
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const asideRef = useRef<HTMLHeadingElement>(null);
  const { t, navigateToComponent, setIsOpen, isOpen } = useNavigation(menuToggleRef, asideRef);

  return (
    <nav {...rest} className={twMerge('flex', rest.className)}>
      <MenuToggle refButton={menuToggleRef} className='z-20' onClick={() => {
        setIsOpen(!isOpen);
      }} />
      <aside ref={asideRef}
      className={`z-10 translate-x-0 visible flex items-center justify-center fixed -top-4 bottom-0 right-0 py-12 px-2 
      w-min75vw h-screen outline-0 bg-teal-500 dark:bg-teal-300 transition-all`}>
        <ul className='flex flex-col gap-4'>
          {menus.map((menu: NavigationMenu) => (
            <li key={menu.name}
              onClick={() => {
                setIsOpen(!isOpen);
                navigateToComponent(menu.name);
              }}
              className='font-semibold text-base text-gray-950 text-center'>
              {t(`menu.${menu.name}`)}
            </li>
          ))}
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" type="application/pdf">
            <Button variant='secondary'
              label='menu.resume'
            />
          </a>
        </ul>
      </aside>
    </nav>
  )
}

export default NavigationMobile