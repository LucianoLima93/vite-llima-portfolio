import { useState } from 'react';
import useDarkTheme from '../../../hooks/useDarkTheme';
import './styles.css';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

interface ToggleThemeProps extends React.HTMLAttributes<HTMLDivElement> {}

const ToggleTheme:React.FC<ToggleThemeProps> = ({...rest}) => {
  const { t } = useTranslation();
  const {colorTheme, setTheme} = useDarkTheme();
  const [darkSide, setDarkSide] = useState(
      colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked:boolean) => {
      setTheme(colorTheme);
      setDarkSide(checked);
  };
  return (
    <div {...rest} className={twMerge('flex flex-col items-center gap-1', rest.className)}>
      <input id="toggle"
        onChange={() => toggleDarkMode(!darkSide)}
        checked={darkSide}
        className="toggle-theme"
        type="checkbox"/>
      <span className='text-xs md:block hidden'>{t(`root.${darkSide ? 'themeLight' : 'themeDark'}`)}</span>
    </div>
  )
}

export default ToggleTheme