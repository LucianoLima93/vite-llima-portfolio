import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twMerge } from 'tailwind-merge';

interface ISocialMediasProps extends React.HTMLAttributes<HTMLDivElement> {}

const SocialMedias:React.FC<ISocialMediasProps> = ({...rest}) => {
  return (
    <div
      {...rest}
      className={twMerge(`flex flex-col gap-6 fixed bottom-0 left-14
      after:block after:w-[1px] after:h-24 after:my-0 after:mx-auto after:bg-gray-400`, rest.className)}>
      <a href="https://github.com/LucianoLima93" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="dark:text-gray-400 text-gray-800 transition-all dark:hover:text-teal-300 hover:text-teal-500 hover:-translate-y-1 cursor-pointer md:text-[1.4em] text-[1.8em]" />
      </a>
      <a href="https://www.linkedin.com/in/luciano-lima-144137150/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className="dark:text-gray-400 text-gray-800 transition-all dark:hover:text-teal-300 hover:text-teal-500 hover:-translate-y-1 cursor-pointer md:text-[1.4em] text-[1.8em]" />
      </a>
      <a href="https://www.instagram.com/_lucianolima93/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="dark:text-gray-400 text-gray-800 transition-all dark:hover:text-teal-300 hover:text-teal-500 hover:-translate-y-1 cursor-pointer md:text-[1.4em] text-[1.8em]" />
      </a>
    </div>
  )
}

export default SocialMedias;