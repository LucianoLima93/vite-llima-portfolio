interface NavigationMenu {
  name: string;
}
interface INavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  menus: NavigationMenu[];
}

interface IMenuToggleProps extends React.HTMLAttributes<HTMLButtonElement> {
  refButton: React.RefObject<HTMLButtonElement>;
}
