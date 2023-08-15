import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twMerge } from 'tailwind-merge';

interface ISocialMediasProps extends React.HTMLAttributes<HTMLDivElement> {}

const SocialMedias:React.FC<ISocialMediasProps> = ({...rest}) => {
  return (
    <div
      {...rest}
      className={twMerge('flex gap-6', rest.className)}>
      <a href="https://github.com/LucianoLima93" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="text-slate-400 transition-all hover:text-teal-300 cursor-pointer md:text-[1.8em] text-[1.8em]" />
      </a>
      <a href="https://www.linkedin.com/in/luciano-lima-144137150/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className="text-slate-400 transition-all hover:text-teal-300 cursor-pointer md:text-[1.8em] text-[1.8em]" />
      </a>
      <a href="https://www.instagram.com/_lucianolima93/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="text-slate-400 transition-all hover:text-teal-300 cursor-pointer md:text-[1.8em] text-[1.8em]" />
      </a>
    </div>
  )
}

export default SocialMedias;