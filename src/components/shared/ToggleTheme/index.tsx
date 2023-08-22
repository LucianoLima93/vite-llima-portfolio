import { useState } from 'react';
import useDarkTheme from '../../../hooks/useDarkTheme';
import './styles.css';
import { twMerge } from 'tailwind-merge';

interface ToggleThemeProps extends React.HTMLAttributes<HTMLDivElement> {}

const ToggleTheme:React.FC<ToggleThemeProps> = ({...rest}) => {
  const {colorTheme, setTheme} = useDarkTheme();
  const [darkSide, setDarkSide] = useState(
      colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked:boolean) => {
      setTheme(colorTheme);
      setDarkSide(checked);
  };
  return (
    <div {...rest} className={twMerge('flex', rest.className)}>
      <input id="toggle"
        onChange={() => toggleDarkMode(!darkSide)}
        checked={darkSide}
        className="toggle-theme"
        type="checkbox"/>
    </div>
  )
}

export default ToggleTheme