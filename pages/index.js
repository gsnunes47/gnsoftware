import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6'

function App() {
  return (
    <div className='w-full h-full'>
      <nav className="bg-black md:text-4xl sm:text-2xl text-white flex flex-wrap justify-between p-4">
        {/* Icon */}
        <div className='m-1 bg-white rounded-full'>
          <a href="/" rel="noopener noreferrer">
            <img src="/assets/gnlogo.png" alt="GN Logo" className="h-8 w-8 md:h-16 md:w-16 sm:h-12 sm:w-12" />
          </a>
        </div>

        {/* Botão Whats */}
        <a
          href='https://wa.me/5511951178396'
          className='bg-green-600 hover:bg-green-700 w-min p-3 rounded-full fixed bottom-10 right-4 cursor-pointer md:right-8 transition-colors duration-300 ease-in-out'
        >
          <FaWhatsapp color='white' className='w-7 h-7 md:w-10 md:h-10' />
        </a>

        {/* Links */}
        <div className="mt-2 flex md:gap-7 sm:gap-7 gap-2 ">
          <a href="#Sobre-mim">Sobre</a>
          <a href="#Projetos">Projetos</a>
          <a href="https://wa.me/5511951178396">Contato</a>
        </div>

        {/* Redes */}
        <div className="flex gap-5">

        <div className='h-8 w-8 md:h-16 md:w-16 sm:h-12 sm:w-12 p-1 bg-white rounded-full'>
          <a href="https://www.linkedin.com/in/gsnunes47/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="Linkedin Logo"/>
          </a>
        </div>

        <div className='h-8 w-8 md:h-16 md:w-16 sm:h-12 sm:w-12 p-1 bg-white rounded-full'>
          <a  href="https://github.com/gsnunes47" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github-logo.png" alt="GitHub Logo" className="" />
          </a>
        </div>

        </div>
      </nav>

      <div className="m-2 mt-10 p-2 text-lg 2xl:p-5 sm:text-2xl">
        <div className="p-2 mt-4">
          <h1 className="text-4xl font-bold mb-2" id="Sobre-mim">Sobre mim</h1> <br />
          <p>
            Olá, eu sou o Gustavo! Tenho 20 anos e sou um desenvolvedor de software, formado em Análise e Desenvolvimento de Sistemas pela UNICSUL.
          </p><br />
          <h2 className="text-3xl font-semibold mb-2 mt-4">Como eu trabalho?</h2><br />
          <p className='mt-2'>
            Procuro entender como funciona o seu fluxo de trabalho, identificar os gargalos e propor soluções utilizando softwares personalizados.
          </p>
          <br />
          <p>
            Seja o software um site para anunciar seus serviços ou marca digitalmente, um sistema para controlar estoque e contas, ou até mesmo uma automação de serviços repetitivos e entediantes.
          </p><br />
        </div>

        <h1 className="m-2 mt-4 text-4xl font-bold" id="Projetos">Projetos</h1><br />
        <div className="m-4">
          <div>
            {[
            {
            title: "Controle de Depósito (Mini ERP)",
            description: ["Sistema de controle de depósito e contas para um depósito de bananas.",
                          "Projeto desenvolvido sob encomenda de um cliente, dono de depósito. Ele me procurou porque queria ter controle de tudo que entrava e saía do depósito.",
                          "Antes, ele fazia todo o controle utilizando papéis para fazer as notas e cadernos para manter as contas de cada cliente. Agora, todo o controle é feito pelo sistema."],
            tecs: ["Python", "Flask", "SQL", "HTML", "CSS", "Javascript"],
            video: "/assets/Video demonstração controle depósito.mp4"
            },
            {
              title: "Landing Page Profissional",
              description: ["Landing Page profissional com um design intuitivo, totalmente customizável", 
                            "Projetada para atrair a atenção de potenciais clientes e facilitar o contato imediato por meio de um botão direto para o WhatsApp.",
                            "Ideal para transformar visitantes em clientes.",
                            "Essa em específico foi feita para um advogado."],
              tecs: ["React", "Next", "Tailwind", "HTML", "CSS", "JS"],
              video: "assets/video landing page.mp4"
              }
            ]
            .map((area, index) => (
              
              <div key={index}>
              
              <h2 className="text-3xl font-semibold mt-6">{area.title}</h2>

              <div className="flex flex-col lg:flex-row gap-8 mt-8">
                <video className="w-full lg:w-1/2" controls>
                  <source src={area.video} type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>

                <div className="w-full h- justify-between flex flex-col">

                  <div>

                    {area.description.map((texts, idx) =>(
                    
                    <div>
                      <p key={idx}>{texts}</p><br/>
                    </div>

                  ))}

                  </div>
                  <br/>

                  <div className="flex flex-col sm:flex-row w-full">
                    <p className="font-semibold text-2xl mr-2 mt-4">Tecnologias utilizadas:</p>
                    <ul className="flex flex-wrap gap-2 text-neutral-100 mt-6 sm:mt-3">
                      {area.tecs.map((tec, idx) => (
                        <li key={idx} className="bg-green-600 font-bold p-1 rounded-lg">{tec}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
                
              <br/>
              </div>
            ))}
          </div>

        </div>
        <br/>
      </div>

      <footer>
        <div className='flex justify-between p-2 m-5 text-12m md:text-xl sm:text-xl pb-2'>
          <p>GN SOLUÇÕES DE SOFTWARE</p>

          <div className='flex flex-col 2xl:flex-row gap-2 justify-between'>
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
