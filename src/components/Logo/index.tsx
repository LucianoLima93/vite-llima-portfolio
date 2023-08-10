import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.2,
      ease: 'easeInOut'
    }}
    className={`order-2 md:order-1
    relative w-16 h-16 cursor-pointer
    hover:scale-110 transition-all duration-200`}>
      <FontAwesomeIcon icon={faDiamond} size='4x' className={`text-teal-300`} />
      <span className={`block font-bold text-4xl text-gray-950 absolute top-0 left-0 translate-x-full translate-y-1/4`}>L</span>        
    </motion.div>
  )
}

export default Logo