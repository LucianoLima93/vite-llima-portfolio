import { twMerge } from "tailwind-merge";
import Button from "../shared/Button";
import ToggleTheme from "../shared/ToggleTheme";
import useNavigation from "./useNavigation";

const Navigation: React.FC<INavigationProps> = ({ menus, ...rest }) => {
  const { t, navigateToComponent } = useNavigation();
  let increment = 0;
  return (
    <div {...rest} className={twMerge('relative', rest.className)}>
      <div className="flex gap-x-8 w-full justify-end items-center cursor-pointer">
        <nav>
          <ul className={`hidden md:flex md:flex-row flex-col 
          md:gap-8 md:items-center md:justify-normal`}>
            {menus.map((menu: NavigationMenu) => {
              increment += 100;
              return <li
                data-aos="fade-down"
                data-aos-once="false"
                data-aos-duration={`${1000 + increment}`}
                onClick={() => navigateToComponent(menu.name)} key={menu.name}
                className="dark:hover:text-teal-300 hover:text-teal-500 hover:scale-110 duration-200 transition-all">
                {t(`menu.${menu.name}`)}
              </li>
            })}
          </ul>
        </nav>
        <div className='md:block hidden'
          data-aos="fade-down" data-aos-duration='1400'>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" type="application/pdf">
            <Button
              label='menu.resume'
            />
          </a>
        </div>
        <ToggleTheme data-aos="fade-down" data-aos-duration='1600'/>
        {/* <LocaleSwitcher animationDuration={1600} customClass='md:block hidden'/> */}
      </div>
    </div>
  )
}

export default Navigation;