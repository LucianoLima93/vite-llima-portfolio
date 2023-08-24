import { Suspense, useEffect, lazy } from 'react'
import WebFont from 'webfontloader';
import useDarkTheme from './hooks/useDarkTheme';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Introduction = lazy(() => import('./components/Introduction'));
const About = lazy(() => import('./components/About'));
const Jobs = lazy(() => import('./components/Jobs'));
const ContactMe = lazy(() => import('./components/ContactMe'));
const Works = lazy(() => import('./components/Works'));
const Loading = lazy(() => import('./components/Loading'));
const SocialMedias = lazy(() => import('./components/SocialMedias'));

function App() {
  const { setTheme } = useDarkTheme();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat:300,400,500,600,700,900&display=swap', 'sans-serif'],
      }
    });
  },[])
  const verifyHash = () => {
    setTimeout(() => {
      const hash = window.location.hash;
      if(hash) {
        const element = document.querySelector(hash);
        if(element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }
    }, 150);
  };
  useEffect(() => {
    verifyHash();
    if(localStorage.theme === 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, [])
  return (
    <>
      <Suspense fallback={<Loading />} >
        <Header/>
        <main className="flex flex-col justify-between h-screen w-full max-w-[88rem] mx-auto md:mt-40 mt-4">
          <Introduction />
          <div>
            <About />
            <Jobs />
            <Works />
            <ContactMe />
          </div>
          <SocialMedias className='hidden xl:flex' />
          <SocialMedias className='hidden xl:flex' left={false} />
          <Footer/>
        </main>
      </Suspense >
    </>
  )
}

export default App
