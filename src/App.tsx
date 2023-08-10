import { useEffect } from 'react'
import WebFont from 'webfontloader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat:300,400,500,600,700,900&display=swap', 'sans-serif'],
      }
    });
  },[])
  return (
    <>
      <Header/>
      <main className="flex flex-col justify-between h-screen w-full max-w-[88rem] mx-auto md:mt-24 mt-4 text-slate-50">
        <Home />
        <About />
        <Footer/>
      </main>
    </>
  )
}

export default App
