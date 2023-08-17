import { useState } from 'react';
import useDarkTheme from '../../../hooks/useDarkTheme';
import './styles.css';

const ToggleTheme = () => {
  const {colorTheme, setTheme} = useDarkTheme();
  const [darkSide, setDarkSide] = useState(
      colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked:boolean) => {
      setTheme(colorTheme);
      setDarkSide(checked);
  };
  return (
    <>
      <input id="toggle"
        onChange={() => toggleDarkMode(!darkSide)}
        checked={darkSide}
        className="toggle-theme"
        type="checkbox"/>
    </>
  )
}

export default ToggleTheme