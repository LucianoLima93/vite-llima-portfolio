import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface LogoProps {
  animation?: 'loading' | 'initializing';
};

const Logo:React.FC<LogoProps> = ({animation='initializing'}) => {
  return (
    <div className='hover:scale-110 transition-all duration-200'>
      <div
        data-aos={animation === 'initializing' ? 'zoom-in' : ''}
        data-aos-duration={animation === 'initializing' ? '1500' : ''}
        data-aos-easing={animation === 'initializing' ? 'ease-in-out' : ''}
        className={`${animation === 'initializing' ? 'w-16 h-16' : 'w-24 h-24'} order-2 md:order-1
        relative cursor-pointer`}>
        <FontAwesomeIcon icon={faDiamond} className={`text-teal-300 ${animation === 'initializing' ? 'text-[4em]' : 'text-[6em]'}`} />
        {animation === 'loading' && <span className="animate-ping absolute left-0 top-0 inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>}
        <span className={`block font-bold ${animation === 'initializing' ? 'text-4xl left-0' : 'text-6xl left-[-8px]'} text-gray-950 absolute top-0 translate-x-full translate-y-1/4`}>L</span>        
      </div>
    </div>
  )
}

export default Logo