'use client'
import useNavigation from "./useNavigation";

const MenuToggle: React.FC<IMenuToggleProps> = ({ toggle }) => {
  const { Path } = useNavigation();

  return (
    <button onClick={toggle} 
      className={`outline-none border-none cursor-pointer absolute top-[23px] left-4 w-10 h-10 rounded-full bg-transparent`}>
      <svg width="23" height="23" viewBox="0 0 23 23" className="mx-auto">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  )
}

export default MenuToggle