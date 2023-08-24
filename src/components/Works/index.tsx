import image from '@/assets/images/portfolio.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SectionWrapper from '../shared/SectionWrapper';
import useWorks from './useWorks';
import './styles.css';

const Works = () => {
  const { t, technologies } = useWorks();
  return (
    <SectionWrapper id="works" title="works" oddEven="odd">
      <div className='flex flex-col-reverse p-2 mt-12 dark:bg-gray-900/30 bg-gray-900/5 rounded-2xl'>
        <div className='wrapper-image-project w-full max-w-[900px]'>
          <img src={image} className='rounded-md w-full' alt="Portfolio" />
        </div>
        <div className='py-4 md:ml-4 px-4 flex flex-col justify-between w-full'>
          <div className='flex flex-col'>
            <span className='dark:text-teal-300 text-sm font-medium mb-2 w-full'>{t('works.subtitle')}</span>
            <h1 className='text-2xl font-semibold mb-4 w-full'>{t('works.title')}</h1>
            <p className='dark:text-gray-300 rounded font-light mb-4'>{t('works.description')}</p>
          </div>
          <div className='flex flex-col'>
            <ul className='flex gap-2 text-sm dark:text-teal-300 text-teal-500 mb-4'>
              {technologies.map((tech, index) => (
                <li key={index}>{t(`works.${tech}.${index}`)}</li>
              ))}
            </ul>
            <div className='flex gap-3'>
              <a href="https://github.com/LucianoLima93/vite-llima-portfolio" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="dark:text-gray-400 text-gray-800 transition-all dark:hover:text-teal-300 hover:text-teal-500 hover:-translate-y-1 cursor-pointer md:text-[1.4em] text-[1em]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Works