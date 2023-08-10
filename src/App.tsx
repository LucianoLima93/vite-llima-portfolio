import { useEffect, useState } from 'react'
import WebFont from 'webfontloader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Logo from './components/Logo';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat:300,400,500,600,700,900&display=swap', 'sans-serif'],
      }
    });
  },[])
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
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
          <Home />
          <About />
          <Footer/>
        </main>
      </>
    )}
    </>
  )
}

export default App
