import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const useNavigation = () => {
  const { t } = useTranslation();
  const navigateToComponent = (component:string) => {
    window.location.href = `#${component}`;
  };

  const ulVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  const sidebarVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 36px 41px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(20px at 36px 41px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const Path = (props:any) => (
    <motion.path
    className={`fill-transparent stroke-current`}
    strokeWidth={3}
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
    />
  );
  return {ulVariants, itemVariants, sidebarVariants, Path, t, navigateToComponent};
};

export default useNavigation;