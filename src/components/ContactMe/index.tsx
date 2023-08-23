// import { useTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import Button from '../shared/Button'
import SectionWrapper from '../shared/SectionWrapper';

const ContactMe = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper title='contactme' id='contact' className='ml-auto mr-32 py-28 px-5'>
      <div className='my-12'>
        <p className='mb-12'>{t('contatcme.titleOne')}
        <a href="mailto:luciano.g.lima93@gmail.com"
          className='dark:text-teal-300 text-teal-500 underline'>{t('contatcme.email')}</a>
          {t('contatcme.titleTwo')}
        </p>
        <Button variant='outlined' label='root.contact'/>
      </div>
    </SectionWrapper>
  )
}

export default ContactMe