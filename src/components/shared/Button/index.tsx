import React from 'react'
import { ButtonProps } from './Button.types'
import { twMerge } from 'tailwind-merge'
import { useTranslation } from 'react-i18next';
import './styles.css';

const Button:React.FC<ButtonProps> = ({icon, variant='primary', label, ...rest}) => {
  const { t } = useTranslation();

  const buttonVariants = {
    primary: `dark:border-teal-300 dark:text-teal-300 border-teal-500 text-teal-500
    hover:border-transparent hover:text-gray-950 dark:hover:text-gray-950 dark:hover:bg-teal-300 hover:bg-teal-500 border-2 
    rounded-md py-1 px-2 font-semibold hover:scale-110 duration-200 transition-all`,
    secondary: 'border-gray-900 text-gray-900 hover:border-transparent border-2 rounded-md md:py-1 md:px-2 py-2 px-6 font-semibold hover:scale-110 duration-200 transition-all',
    outlined: 'button-effect',
    'rounded-full': 'border-[3px] border-solid dark:border-teal-300 border-teal-500 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full',
  };

  return (
    <>
      <button
        {...rest}
        className={twMerge(`${buttonVariants[variant]}`, rest.className, buttonVariants[variant])}>
        {label && t(label)}
        {icon && icon}
      </button>
    </>
  )
}

export default Button