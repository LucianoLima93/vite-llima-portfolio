import useNavigation from "./useNavigation";

const Navigation:React.FC<INavigationProps> = ({menus, ...rest}) => {
  const { t, navigateToComponent } = useNavigation();
  let increment = 0;
  return (
    <nav {...rest}>
      <ul className={`hidden md:flex md:flex-row flex-col md:gap-8 md:items-center md:justify-normal`}>
        {menus.map((menu: NavigationMenu) => {
          increment += 100;
          return <li data-aos="fade-down" data-aos-duration={`${1000 + increment}`} onClick={() => navigateToComponent(menu.name)} key={menu.name} className="hover:text-teal-300 hover:scale-110 duration-200 transition-all">
            {t(`menu.${menu.name}`)}
          </li>
        })}
      </ul>
    </nav>
  )
}

export default Navigation;