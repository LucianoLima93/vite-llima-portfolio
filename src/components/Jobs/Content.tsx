const Content = () => {
  return (
    <>
      <div id="Fmx1" className="hidden tabcontent animate-fade-in">
        <div className="flex flex-col">
          <span className="text-gray-50">Desenvolvedor Front End Pleno na
            <span className="text-teal-300"> @
              <a href="https://fmxsolucoes.com.br/"
                target="_blank" rel="noopener noreferrer"
                className="text-teal-300 font-semibold hover:underline transition-all">FMX</a>
            </span>
          </span>
          <span className="font-light text-sm text-gray-300">Junho - Agosto 2022</span>
        </div>
      </div>
      <div id="Nelogica" className="hidden tabcontent animate-fade-in">
        <span className="text-gray-50">Desenvolvedor Front End II na
          <span className="text-teal-300"> @
            <a href="https://www.nelogica.com.br/"
              target="_blank" rel="noopener noreferrer"
              className="text-teal-300 font-semibold hover:underline transition-all">Nelogica</a>
          </span>
        </span>
      </div>
      <div id="Fmx2" className="hidden tabcontent animate-fade-in">
        <span className="text-gray-50">Analista de Desenvolvimento II na
          <span className="text-teal-300"> @
            <a href="https://fmxsolucoes.com.br/"
              target="_blank" rel="noopener noreferrer"
              className="text-teal-300 font-semibold hover:underline transition-all">FMX</a>
          </span>
        </span>
      </div>
    </>
  )
}

export default Content