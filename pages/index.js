import React from 'react';

function App() {
  return (
    <div className="bg-neutral-200 w-full h-full">

      <nav className="bg-black text-white flex justify-around">

        {/* icon */}
        <div className='flex justify-end gap-5 m-1'>
          <a href="/" rel="noopener noreferrer">
            {/* <img src="/assets/gnlogo.png" alt="Gn Logo" className="h-6 w-6 bg-white p-0.5 rounded-full" /> */}
          </a>
        </div>

        {/* links */}
        <div className='flex justify-end gap-4 m-1'>
          <a href='#Sobre mim'>Sobre</a>
          <a href='#Projetos'>Projetos</a>
          <a href='#'>Contato</a> 
        </div>
        
        {/* redes */}
        <div className='flex justify-end gap-5 m-1'>

          <a href="https://www.linkedin.com/in/gsnunes47/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="Linkedin Logo" className="h-6 w-6 bg-white p-0.5 rounded-full" />
          </a>
          
          <a href="https://github.com/gsnunes47" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github-logo.png" alt="GitHub Logo" className="h-6 w-6 bg-white p-0.5 rounded-full" />
          </a>

        </div>

      </nav>

      <br></br>
      <h1>Sobre mim</h1>
      <p>Olá eu sou o Gustavo! tenho 20 anos e sou um desenvolvedor de software, formado em Análise e Desenvolvimento de Sistemas pela UNICSUL.</p>
      <br></br>
      <h2>Como eu trabalho?</h2>
      <p>Procuro entender como funciona o seu fluxo de trabalho, identificar os gargálos e propor soluções utilizando softwares personalizados.</p>
      
      <p>Seja o software um site para anunciar seus serviços ou marca digitalmente, um sistema para ter controle de estoque e contas, ou até mesmo uma automação de serviços repetitivos e entediantes.</p>

      <br></br>

      <h1>Projetos</h1>

      <br></br>
      <h2>Controle Depósito</h2>

      <br></br>

      <div className='flex center-item'>

        <video className='h-80  mx-auto block' controls>
          <source src="/assets/Video demonstração controle depósito.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video> 


        <div className='flex justify-between flex-col'>
        <p>Sistema de controle de depósito e contas para um depósito de banana.<br></br><br></br>
        Projeto desenvolvido sob encomenda de cliente, dono de depósito, ele me procurou pois queria ter controle de tudo que entrava e saía do depósito.<br></br><br></br>
        Antes ele fazia todo o controle utilizando papéis para fazer as notas e cadernos pra manter a conta de cada cliente, agora todo o controle é feito pelo sistema.</p>

        <p></p>


          <ul className='flex items-center gap-3 text-neutral-100'>
          <p className='text-black'>Técnologias utilizadas:</p>
            <li className=' bg-gray-500 font-bold p-1 rounded-lg'>Python</li>
            <li className=' bg-gray-500 font-bold p-1 rounded-lg'>Flask</li>
            <li className=' bg-gray-500 font-bold p-1 rounded-lg'>SQL</li>
            <li className=' bg-gray-500 font-bold p-1 rounded-lg'>HTML</li>
            <li className=' bg-gray-500 font-bold p-1 rounded-lg'>CSS</li>
            <li className=' bg-gray-500 font-bold p-1 rounded-lg'>Javascript</li>
          </ul>

        </div>

        </div>
<br></br>
      </div>
  );
}


export default App;