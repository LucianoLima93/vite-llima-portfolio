import './styles.css';

const MenuToggle: React.FC<IMenuToggleProps> = ({refButton, ...rest}) => {
  return (
    <button ref={refButton} {...rest} className="inline-block cursor-pointer z-20">
      <div className='menu-toggle-bar1'/>
      <div className='menu-toggle-bar2'/>
      <div className='menu-toggle-bar3'/>
    </button>
  )
}

export default MenuToggle