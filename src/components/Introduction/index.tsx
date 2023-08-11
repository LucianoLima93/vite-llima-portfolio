import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialMedias from '../SocialMedias'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="grid grid-cols-12 justify-between gap-4">
      <div className="col-span-12 pb-8 px-5 md:px-0">
        <span className="text-base text-teal-300 mb-6 block" data-aos="fade-up"
          data-aos-delay="1500" data-aos-duration='800'>{t('homepage.introOne')}</span>
        <h1 className="font-semibold md:text-7xl text-3xl text-gray-200 mb-2 md:-ml-1"
          data-aos-delay="1500" data-aos="fade-up" data-aos-duration='700'>Luciano Lima.</h1>
        <h2 className="font-semibold md:text-7xl text-3xl text-gray-400 mb-6 md:-ml-1"
          data-aos-delay="1500" data-aos="fade-up" data-aos-duration='600'>{t('homepage.introTwo')}</h2>
        <p className="font-light mb-12 md:w-6/12" data-aos="fade-up" data-aos-duration='500' data-aos-delay="1500">{t('homepage.introThree')}
          <b className="text-teal-300">{t('homepage.introFour')}</b>{t('homepage.introFive')}</p>
        <a href="mailto:luciano.g.lima93@gmail.com" className="button-effect"
          data-aos-delay="1500" data-aos="fade-up" data-aos-duration='400'>{t('homepage.contact')}</a>
        <SocialMedias />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut'
        }}
        className="col-span-12 w-full flex justify-center md:mt-32 md:mb-20 mt-16 mb-6">
        <div className="border-[3px] border-solid border-teal-300 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center animate-bounce rounded-full">
          <FontAwesomeIcon icon={faAngleDown} className="text-teal-300 pt-1 md:text-[2em] text-[1.8em]" />
        </div>
      </motion.div>
    </section>
  )
}

export default Home