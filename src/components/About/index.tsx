import image from '@/assets/images/eu.jpg';

const About = () => {
  return (
    <div className='grid grid-cols-12 justify-center w-full gap-x-8' id='about'>
      <div className='flex flex-col gap-8 w-full col-span-7'>
        <h2 className='text-3xl font-semibold text-gray-400'>Sobre Mim</h2>
        <p className='font-light'>Olá, meu nome é Luciano, trabalho com desenvolvimento desde 2017, mas meu interesse com desenvolvimento web iniciou-se em 2019, 
        quando após ser aprovador em uma seleção interna para um novo projeto de desenvolvimento web, comecei a estudar <b className='text-teal-500'>HTML</b>, <b className='text-teal-500'>CSS</b> e <b className='text-teal-500'>JavaScript</b>.<br/><br/>
        Desde então, venho estudando e me aperfeiçoando cada vez mais, buscando sempre aprender novas tecnologias e metodologias de desenvolvimento.<br/>
        Atualmente, desenvolvo aplicações web com <b className='text-teal-500'>React</b>
        </p>
        <h3 className='font-light'>Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</h3>
        <ul className='font-light text-sm grid grid-cols-12 w-fit gap-x-8 gap-y-2'>
          <li className='col-span-6 text-teal-300'>JavaScript (ES6+)</li>
          <li className='col-span-6 text-teal-300'>TypeScript</li>
          <li className='col-span-6 text-teal-300'>React</li>
          <li className='col-span-6 text-teal-300'>NextJS</li>
        </ul>
      </div>
      <div className='col-span-5'>
        <img src={image} alt="Luciano Lima" className='w-72 h-72 rounded' />
      </div>
    </div>
  )
}

export default About