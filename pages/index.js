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

      <video className='m-' controls class="m-10 w-100% h-80">
        <source src="/assets/Video demonstração controle depósito.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      <p>Sistema de controle de depósito e contas para um depósito de banana.</p>
      <p>Técnologias utilizadas: Python, Flask, SQL, HTML, CSS e Javascript</p>
      <br></br>
    </div>  
  );
}

export default App;