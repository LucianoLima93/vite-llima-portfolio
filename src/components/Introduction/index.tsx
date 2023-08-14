import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialMedias from '../SocialMedias'
import { useTranslation } from 'react-i18next'
import Button from '../shared/Button'

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="grid grid-cols-12 justify-between gap-4 px-16 h-screen1">
      <div className="col-span-12 pb-8 px-5 md:px-0">
        <span className="text-base text-teal-300 mb-6 block" data-aos="fade-up"
          data-aos-delay="1500" data-aos-duration='800'>{t('homepage.introOne')}</span>
        <h1 className="font-semibold md:text-6xl text-3xl text-gray-200 mb-2 md:-ml-1"
          data-aos-delay="1500" data-aos="fade-up" data-aos-duration='700'>Luciano Lima.</h1>
        <h2 className="font-semibold md:text-6xl text-3xl text-gray-400 mb-6 md:-ml-1"
          data-aos-delay="1500" data-aos="fade-up" data-aos-duration='600'>{t('homepage.introTwo')}</h2>
        <p className="font-light mb-12 md:w-6/12" data-aos="fade-up" data-aos-duration='500' data-aos-delay="1500">{t('homepage.introThree')}
          <b className="text-teal-300">{t('homepage.introFour')}</b>{t('homepage.introFive')}</p>
        <Button variant='outlined'
          onClick={() => {
            window.location.href = "mailto:luciano.g.lima93@gmail.com"
          }}
         label={'homepage.contact'}/>
        <SocialMedias />
        <div className='col-span-12 w-full flex justify-center md:mt-32 md:mb-20 mt-16 mb-6 cursor-pointer'>
          <Button
            variant='rounded-full'
            icon={<FontAwesomeIcon icon={faAngleDown} className="text-teal-300 pt-1 md:text-[2em] text-[1.8em]" />}
          />
        </div>
      </div>
    </section>
  )
}

export default Home