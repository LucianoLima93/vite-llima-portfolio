import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twMerge } from 'tailwind-merge';
import './styles.css';

const SocialMedias: React.FC<ISocialMediasProps> = ({ left = true, ...rest }) => {
  return (
    <div
      {...rest}
      className={twMerge(`flex flex-col gap-6 fixed bottom-0 ${left ? 'left-14' : 'right-14'}
      after:block after:w-[1px] after:h-24 after:my-0 after:mx-auto after:bg-gray-400`, rest.className)}>
      {left ? (
        <>
          <a href="https://wa.me/+5518997611038" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} className="social-media-icon" />
          </a>
          <a href="https://github.com/LucianoLima93" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="social-media-icon" />
          </a>
          <a href="https://www.linkedin.com/in/luciano-lima-144137150/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="social-media-icon" />
          </a>
          <a href="https://www.instagram.com/_lucianolima93/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="social-media-icon" />
          </a>
        </>
      ) : (
        <a style={{ writingMode: 'vertical-rl' }}
          className='dark:text-gray-300 text-gray-800 transition-all text-sm dark:font-light font-normal tracking-wider dark:hover:text-teal-300 hover:text-teal-500 hover:-translate-y-1 cursor-pointer'
          href="mailto:luciano.g.lima93@gmail.com">luciano.g.lima93@gmail.com</a>
      )}
    </div>
  )
}

export default SocialMedias;