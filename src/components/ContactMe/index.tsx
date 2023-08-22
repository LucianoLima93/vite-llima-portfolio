// import { useTranslation } from 'react-i18next';
import Button from '../shared/Button'
import Title from '../shared/Title';

const ContactMe = () => {
  // const { t } = useTranslation();
  return (
    <section data-aos="fade-up"
    data-aos-duration='1500'
    className='w-full max-w-[900px] ml-auto mr-32 py-28 px-5' id='contact'>
      <Title title='contactme' />
      <div className='my-12'>
        <p className='mb-12'>Atualmente estou em busca de novas oportunidades de emprego. Entre em contato comigo via <a href="mailto:luciano.g.lima93@gmail.com" className='dark:text-teal-300 text-teal-500 underline'>email</a> que responderei o mais breve possível.
        </p>
        <Button variant='outlined' label='root.contact'/>
      </div>
    </section>
  )
}

export default ContactMe