import useLocaleSwitcher from './useLocaleSwitcher';

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ customClass, animationDuration = 100 }) => {
  const { changeLanguage, t, language } = useLocaleSwitcher();

  return (
    <div className={`${customClass}`}
      data-aos="fade-down" data-aos-duration={`${animationDuration}`}
    >
      <select name="locale-switcher" id="locale-switcher"
        defaultValue={language}
        className="bg-transparent dark:text-gray-50 text-gray-950 font-medium dark:md:text-slate-50 md:text-gray-950 text-base outline-none cursor-pointer"
        onChange={(e) => {
          e.preventDefault();
          changeLanguage(e.target.value);
        }}>
        <option value='pt-BR'>{t('localeLang.pt-BR')}</option>
        <option value='en'>{t('localeLang.en')}</option>
      </select>
    </div>
  )
}

export default LocaleSwitcher;