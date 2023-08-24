interface NavigationMenu {
  name: string;
}
interface INavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  menus: NavigationMenu[];
};

interface IMenuToggleProps {
  toggle: () => void;
}

interface INavigationMobileProps {
  menus: NavigationMenu[];
}