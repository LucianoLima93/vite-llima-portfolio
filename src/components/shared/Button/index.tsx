import React from 'react'
import { ButtonProps } from './Button.types'
import { twMerge } from 'tailwind-merge'
import { useTranslation } from 'react-i18next';
import './styles.css';

const Button:React.FC<ButtonProps> = ({icon, variant='primary', label, ...rest}) => {
  const { t } = useTranslation();

  const buttonVariants = {
    primary: 'border-teal-300 text-teal-300 hover:border-transparent hover:text-gray-800 hover:bg-teal-300 border-2 rounded-md py-1 px-2 font-semibold hover:scale-110 duration-200 transition-all',
    secondary: 'border-gray-900 text-gray-900 hover:border-transparent border-2 rounded-md py-1 px-2 font-semibold hover:scale-110 duration-200 transition-all',
    outlined: 'button-effect',
    'rounded-full': 'border-[3px] border-solid border-teal-300 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center animate-bounce rounded-full',
  };

  return (
    <div>
      <button
        {...rest}
        className={twMerge(`${buttonVariants[variant]}`, rest.className, buttonVariants[variant])}>
        {label && t(label)}
        {icon && icon}
      </button>
    </div>
  )
}

export default Button