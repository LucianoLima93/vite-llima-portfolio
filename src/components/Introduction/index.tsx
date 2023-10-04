import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import Button from '../shared/Button'
import useNavigation from '../Navigation/useNavigation'

const Introduction = () => {
  const { t } = useTranslation();
  const { navigateToComponent } = useNavigation({});
  return (
    <section className="w-full max-w-[900px] mx-auto pt-32 md:pt-12 md:h-[calc(100vh-160px) h-full]">
      <div className="pb-8 px-5 h-[calc(100vh-160px)]">
        <span className="dark:text-teal-300 text-teal-500 mb-6 block" data-aos="fade-up"
          data-aos-delay="1500" data-aos-duration='800'>
          {t('homepage.introOne')}
        </span>
        <h1 className="font-semibold md:text-6xl text-3xl dark:text-gray-200 text-gray-800 mb-2 md:-ml-1"
          data-aos-delay="1500" data-aos="fade-up" data-aos-duration='700'>
          Luciano Lima.
        </h1>
        <h2 className="font-semibold md:text-6xl text-3xl dark:text-gray-400 text-gray-700 mb-6 md:-ml-1"
          data-aos-delay="1500" data-aos="fade-up" data-aos-duration='600'>
          {t('homepage.introTwo')}
        </h2>
        <p className="mb-12 md:w-6/12" data-aos="fade-up" data-aos-duration='500' data-aos-delay="1500">
          {t('homepage.introThree')}
          <b className="dark:text-teal-300 text-teal-500">{t('homepage.introFour')}</b>
          {t('homepage.introFive')}
        </p>
        <Button
          onClick={() => {
            window.location.href = "mailto:luciano.g.lima93@gmail.com"
          }}
          variant='outlined'
          data-aos="fade-up"
          data-aos-duration='400'
          data-aos-delay="1500"
          label={'homepage.contact'} />
        <div className='w-full flex justify-center items-center h-min35vh cursor-pointer'>
          <Button
            onClick={() => navigateToComponent('about')}
            className='hover:-translate-y-1 transition-all'
            variant='rounded-full'
            icon={<FontAwesomeIcon icon={faAngleDown}
            className="dark:text-teal-300 text-teal-500 pt-1 md:text-[2em] text-[1.8em]" />}
          />
        </div>
      </div>
    </section>
  )
}

export default Introduction;