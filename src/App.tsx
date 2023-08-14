import { useEffect, useState } from 'react'
import WebFont from 'webfontloader';
import Header from './components/Header';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import About from './components/About';
import Loading from './components/Loading';
import Jobs from './components/Jobs';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat:300,400,500,600,700,900&display=swap', 'sans-serif'],
      }
    });
  },[])
  const verifyHash = () => {
    const hash = window.location.hash;
    if(hash) {
      const element = document.querySelector(hash);
      if(element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      verifyHash();
    }, 2000)
  }, [])
  return (
    <>
    {loading ? (
      <Loading/>
    ):(
      <>
        <Header/>
        <main className="flex flex-col justify-between h-screen w-full max-w-[88rem] mx-auto md:mt-24 mt-4 text-slate-50">
          <Introduction />
          <div>
            <About />
            <Jobs />
          </div>
          <Footer/>
        </main>
      </>
    )}
    </>
  )
}

export default App
