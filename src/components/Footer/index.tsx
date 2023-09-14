import { useTranslation } from "react-i18next"
import SocialMedias from "../SocialMedias";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='px-3 w-full py-8 h-full flex flex-col justify-center items-center text-sm dark:text-gray-300 text-gray-950'>
      <SocialMedias className="after:hidden flex-row relative left-auto w-full mb-2 justify-center items-center" />
      {/* <span className="dark:hover:text-teal-300 hover:text-teal-500 w-full text-center">{t('footer.inspiration')}<a href="https://github.com/bchiang7"
        target="_blank"
        className="hover:underline dark:hover:text-teal-300 hover:text-teal-500"
        rel="noopener noreferrer">{t('footer.author')}</a></span> */}
      <span className="dark:hover:text-teal-300 hover:text-teal-500 w-full text-center">
        {t('footer.developed')}
      </span>
    </footer>
  )
}

export default Footer