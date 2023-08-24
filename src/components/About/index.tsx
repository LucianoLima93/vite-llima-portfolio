import image from '@/assets/images/eu.jpg';
import SectionWrapper from '../shared/SectionWrapper';
import useAbout from './useAbout';
import './styles.css';

const About = () => {
  const { t, tecnlogies } = useAbout();
  return (
    <SectionWrapper oddEven='odd' title='about' id='about' className='sm:px-8'> 
      <div className='w-full xl:grid xl:grid-cols-3/2 flex flex-col gap-12 mt-12'>
        <div>
          <p className='mb-4' dangerouslySetInnerHTML={
            {__html: t('about.description')}
          }></p>
          <h3 className='mb-4'>{t('about.subtitle')}</h3>
          <ul role='list' className='text-sm grid grid-cols-12 md:w-fit w-full gap-x-8 gap-y-2 marker:text-teal-500 list-disc px-4'>
            {tecnlogies.map((tech, index) => (
              <li key={index} className='col-span-6 dark:text-teal-300 text-teal-500 w-fit'>{t(`about.${tech}.${index}`)}</li>
            ))}
          </ul>
        </div>
        <div className="wrapper-image">
          <img src={image} alt="Luciano Lima" className='rounded' />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About