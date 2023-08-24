import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge';
import useNavigation from '../Navigation/useNavigation';

const Logo:React.FC<LogoProps> = ({animation='initializing', ...rest}) => {
  const { goToTop } = useNavigation();
  return (
    <div {...rest}
      onClick={() => goToTop()}
      className={twMerge(`hover:scale-110 transition-all duration-200`, rest.className)}>
      <div
        data-aos-once="false"
        data-aos={animation === 'initializing' ? 'zoom-in' : ''}
        data-aos-duration={animation === 'initializing' ? '1500' : ''}
        data-aos-easing={animation === 'initializing' ? 'ease-in-out' : ''}
        className={`${animation === 'initializing' ? 'w-16 h-16' : 'w-24 h-24'}
        relative cursor-pointer`}>
        <FontAwesomeIcon icon={faDiamond} className={`dark:text-teal-300 text-teal-500 ${animation === 'initializing' ? 'text-[4em]' : 'text-[6em]'}`} />
        {animation === 'loading' && <span className="animate-ping absolute left-0 top-0 inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>}
        <span className={`block font-bold ${animation === 'initializing' ? 'text-4xl left-0' : 'text-6xl left-[-8px]'} text-gray-950 absolute top-0 translate-x-full translate-y-1/4`}>L</span>        
      </div>
    </div>
  )
}

export default Logo