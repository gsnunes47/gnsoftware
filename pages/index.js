import React from 'react';

function App() {
  return (
    <div className=' bg-neutral-200 w-full h-full'>
      <nav className="bg-black md:text-4xl sm:text-2xl text-white flex flex-wrap justify-between p-4">
        {/* Icon */}
        <div>
        <a href="/" rel="noopener noreferrer">
            <img src="/assets/gnlogo.png" alt="GN Logo" className="md:h-16 md:w-16 sm:h-8 sm:w-8 bg-white  rounded-full" />
          </a>
        </div>

        {/* Links */}
        <div className="mt-2 flex gap-7">
          <a href="#Sobre-mim">Sobre</a>
          <a href="#Projetos">Projetos</a>
          <a href="#">Contato</a>
        </div>

        {/* Redes */}
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/gsnunes47/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="Linkedin Logo" className="md:h-16 md:w-16 sm:h-8 sm:w-8 bg-white p-0.5 rounded-full" />
          </a>
          <a href="https://github.com/gsnunes47" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github-logo.png" alt="GitHub Logo" className="md:h-16 md:w-16 sm:h-8 sm:w-8 bg-white p-0.5 rounded-full" />
          </a>
        </div>
      </nav>

    <div className="p-5 text-2xl">


      <div className="p-2 mt-4">
        <h1 className="text-4xl font-bold mb-2" id="Sobre-mim">Sobre mim</h1> <br></br>
        <p>
          Olá eu sou o Gustavo! tenho 20 anos e sou um desenvolvedor de software, formado em Análise e Desenvolvimento de Sistemas pela UNICSUL.
        </p><br></br>
        <h2 className="text-3xl font-semibold mb-2 mt-4">Como eu trabalho?</h2><br></br>
        <p className='mt-2'>
          Procuro entender como funciona o seu fluxo de trabalho, identificar os gargálos e propor soluções utilizando softwares personalizados.
        </p>
        <br></br>
        <p>
          Seja o software um site para anunciar seus serviços ou marca digitalmente, um sistema para ter controle de estoque e contas, ou até mesmo uma automação de serviços repetitivos e entediantes.
        </p><br></br>
      </div>

        <h1 className="m-2 mt-4 text-4xl font-bold" id="Projetos">Projetos</h1><br></br>
      <div className="m-4 ">
        <h2 className="text-3xl font-semibold mt-6">Controle Depósito</h2>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <video className="w-full lg:w-1/2" controls>
            <source src="/assets/Video demonstração controle depósito.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>

          <div className="w-full h- justify-between flex flex-col">


              <p>Sistema de controle de depósito e contas para um depósito de banana.</p><br></br>
              <p>Projeto desenvolvido sob encomenda de cliente, dono de depósito, ele me procurou pois queria ter controle de tudo que entrava e saía do depósito.</p><br></br>
              <p>Antes ele fazia todo o controle utilizando papéis para fazer as notas e cadernos pra manter a conta de cada cliente, agora todo o controle é feito pelo sistema.</p><br></br>


          <div className='flex flex-row'>
              <p className="text-black font-semibold text-2xl mr-2 mt-4">Tecnologias utilizadas:</p>
              <ul className="flex flex-wrap gap-2 text-neutral-100 mt-2">
                <li className="bg-gray-500 font- p-1 rounded-lg">Python</li>
                <li className="bg-gray-500 font- p-1 rounded-lg">Flask</li>
                <li className="bg-gray-500 font- p-1 rounded-lg">SQL</li>
                <li className="bg-gray-500 font- p-1 rounded-lg">HTML</li>
                <li className="bg-gray-500 font- p-1 rounded-lg">CSS</li>
                <li className="bg-gray-500 font- p-1 rounded-lg">Javascript</li>
              </ul>
          </div>
          
          </div>
        </div>

      </div>
      <br></br>
    </div>

    <footer>
      
      <div className='flex row justify-between p-2 m-5 text-xl pb-2'>
        <p>GN SOLUÇÕES DE SOFTWARE</p>

      <div className='flex row gap-2 justify-between'>
        <p>Icon Design by:</p>
        <a href='https://www.instagram.com/sasaa.goiabinha/' target="_blank" rel="noopener noreferrer">
          <p className='text-blue-600'>@Sasaagoiabinha</p>
        </a>
      </div>
        
      </div>

    </footer>

    </div>
  );
}

export default App;
