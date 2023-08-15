import useLocaleSwitcher from './useLocaleSwitcher';

const LocaleSwitcher:React.FC<LocaleSwitcherProps> = ({customClass, animationDuration=100}) => {
  const { changeLanguage, t, language } = useLocaleSwitcher();
  
  return (
    <div className={`${customClass}`}
    data-aos="fade-down" data-aos-duration={`${animationDuration}`}
    >
      <select name="locale-switcher" id="locale-switcher"
      defaultValue={language}
      className="bg-transparent text-gray-950 font-medium md:text-slate-50 text-base outline-none cursor-pointer"
      onChange={(e) => {
        e.preventDefault();
        changeLanguage(e.target.value);
      }}>
        <option className='text-gray-950' value='pt-BR'>{t('localeLang.pt-BR')}</option>
        <option className='text-gray-950' value='en'>{t('localeLang.en')}</option>
      </select>
    </div>
  )
}

export default LocaleSwitcher;