import Title from '../shared/Title'
import image from '@/assets/images/portfolio.png';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Works = () => {
  return (
    <section data-aos="fade-up"
      data-aos-duration='1500'
      className='w-fit max-w-[900px] mx-auto py-28' id='works'>
      <Title title='works' />
      <div className='flex flex-col-reverse p-2 mt-12 dark:bg-gray-900/30 bg-gray-900/5 rounded-2xl'>
        <div className='wrapper-image-project'>
          <img src={image} className='rounded-md' alt="Portfolio" />
        </div>
        <div className='py-4 ml-4 pr-4 flex flex-col justify-between'>
          <div>
            <span className='dark:text-teal-300 text-sm font-medium mb-2'>Projeto em Destaque</span>
            <h1 className='text-2xl font-semibold mb-4'>Personal Web Site</h1>
            <p className='dark:text-gray-300 rounded font-light'>Projeto pessoal criado como currículo e portfolio onde falo um pouco sobre mim e demonstro minhas habilidades e competencia como desenvolvedor</p>
          </div>
          <div>
            <ul className='flex gap-2 text-sm dark:text-teal-300 mb-4'>
              <li>React</li>
              <li>Vite</li>
              <li>Tailwind</li>
              <li>Vitest</li>
              <li>Storybook</li>
            </ul>
            <div className='flex gap-3'>
              <a href="https://github.com/LucianoLima93/vite-llima-portfolio" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="dark:text-gray-400 text-gray-800 transition-all dark:hover:text-teal-300 hover:text-teal-500 hover:-translate-y-1 cursor-pointer md:text-[1.4em] text-[1em]" />
              </a>
              {/* <a href="https://github.com/LucianoLima93" target="_blank">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="dark:text-gray-400 text-gray-800 transition-all dark:hover:text-teal-300 hover:text-teal-500 hover:-translate-y-1 cursor-pointer md:text-[1.4em] text-[1em]" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works