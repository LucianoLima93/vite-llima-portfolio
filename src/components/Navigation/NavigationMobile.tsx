'use client';
import React, { useRef } from 'react'
import { motion, useCycle } from "framer-motion";
import useNavigation from './useNavigation';
import { useDimensions } from '../../hooks/useDimensions';
import MenuToggle from './MenuToggle';
import Button from '../shared/Button';
import useHeader from '../Header/useheader';

interface INavigationMobileProps {
  menus: NavigationMenu[];
}

const NavigationMobile: React.FC<INavigationMobileProps> = ({ menus }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { ulVariants, itemVariants, sidebarVariants, t } = useNavigation();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { height } = useDimensions(containerRef);
  useHeader({headerRef: containerRef});
  
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="fixed left-0 bottom-0 w-72 z-10 md:hidden block"
    >
      <motion.div className="absolute top-0 left-0 bottom-0 w-72 bg-teal-300"
        variants={sidebarVariants} />
      <motion.ul variants={ulVariants} className='absolute top-24 w-full px-6 pt-4 flex flex-col gap-4 h-full'>
        {menus.map((menu: NavigationMenu) => (
          <motion.li variants={itemVariants} key={menu.name} className='font-bold text-base'>
            {t(`menu.${menu.name}`)}
          </motion.li>
        ))}
        <motion.div variants={itemVariants} className='flex flex-col gap-4 mt-6'>
          <Button
            label='menu.resume'
            onClick={() => {
              window.open('../../../public/assets/resume.pdf', '_blank');
            }}
          />
          {/* <LocaleSwitcher /> */}
        </motion.div>
      </motion.ul>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default NavigationMobile