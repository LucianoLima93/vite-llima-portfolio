import image from '@/assets/images/eu.jpg';
import Title from '../shared/Title';
import './styles.css';

const About = () => {
  return (
    <section data-aos="fade-up"
    data-aos-duration='1500'
    className='w-full max-w-[900px] mx-auto pt-28 px-5 sm:px-8' id='about'>
      <Title title='about' />
      <div className='w-full xl:grid xl:grid-cols-3/2 flex flex-col gap-12 mt-12'>
        <div>
          <p className='mb-4'>Olá, meu nome é Luciano, trabalho com desenvolvimento desde 2017, mas meu interesse com desenvolvimento web iniciou-se em 2019,
            quando após ser aprovador em uma seleção interna para um novo projeto de desenvolvimento web, comecei a estudar <b className='text-teal-500'>HTML</b>, <b className='text-teal-500'>CSS</b> e <b className='text-teal-500'>JavaScript</b>.<br /><br />
            Desde então, venho estudando e me aperfeiçoando cada vez mais, buscando sempre aprender novas tecnologias e metodologias de desenvolvimento.<br />
            Atualmente, desenvolvo aplicações web com <b className='text-teal-500'>React</b>
          </p>
          <h3 className='mb-4'>Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</h3>
          <ul role='list' className='text-sm grid grid-cols-12 md:w-fit w-full gap-x-8 gap-y-2 marker:text-teal-500 list-disc px-4'>
            <li className='col-span-6 dark:text-teal-300 text-teal-500 w-fit'>JavaScript (ES6+)</li>
            <li className='col-span-6 dark:text-teal-300 text-teal-500 w-fit'>TypeScript</li>
            <li className='col-span-6 dark:text-teal-300 text-teal-500 w-fit'>React</li>
            <li className='col-span-6 dark:text-teal-300 text-teal-500 w-fit'>Vitest</li>
          </ul>
        </div>
        <div className="wrapper-image">
          <img src={image} alt="Luciano Lima" className='rounded' />
        </div>
      </div>
    </section>
  )
}

export default About