import image from '@/assets/images/eu.jpg';
import Title from '../shared/Title';

const About = () => {
  return (
    <section data-aos="fade-up"
    data-aos-duration='1500'
    className='w-full max-w-[900px] mx-auto py-28' id='about'>
      <Title title='about' />
      <div className='w-full grid grid-cols-3/2 gap-12 mt-12'>
        <div>
          <p className='font-light mb-4'>Olá, meu nome é Luciano, trabalho com desenvolvimento desde 2017, mas meu interesse com desenvolvimento web iniciou-se em 2019,
            quando após ser aprovador em uma seleção interna para um novo projeto de desenvolvimento web, comecei a estudar <b className='text-teal-500'>HTML</b>, <b className='text-teal-500'>CSS</b> e <b className='text-teal-500'>JavaScript</b>.<br /><br />
            Desde então, venho estudando e me aperfeiçoando cada vez mais, buscando sempre aprender novas tecnologias e metodologias de desenvolvimento.<br />
            Atualmente, desenvolvo aplicações web com <b className='text-teal-500'>React</b>
          </p>
          <h3 className='font-light mb-4'>Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</h3>
          <ul role='list' className='font-light text-sm grid grid-cols-12 w-fit gap-x-8 gap-y-2 marker:text-teal-500 list-disc'>
            <li className='col-span-6 text-teal-300'>JavaScript (ES6+)</li>
            <li className='col-span-6 text-teal-300'>TypeScript</li>
            <li className='col-span-6 text-teal-300'>React</li>
            <li className='col-span-6 text-teal-300'>Vitest</li>
          </ul>
        </div>
        <div className='relative w-full max-w-[300px]'>
          <img src={image} alt="Luciano Lima" className='rounded' />
        </div>
      </div>
    </section>
  )
}

export default About