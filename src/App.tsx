import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Projeto from './models/Projeto';
import {api} from './services/service';
//import Projetos from './components/projetos';

const listProjects = [
  { nome: 'GeneratEdu' },
  { nome: 'GeneratEdu' },
  { nome: 'GeneratEdu' },
  { nome: 'GeneratEdu' },
]

function App() {

  const [value, setValue] = useState('')
  const [displayB, setDisplayB] = useState('none')
  const [displayCa, setDisplayCa] = useState('none')

  const [projetos, setProjetos] = useState<Projeto[]>([])

  const Ca = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (value === 'AADGLRY') {
      setDisplayB('block')
    } else {
      setDisplayB('none')
    }
  }

  return (
    <div className="container">
      <NavBar />
      <div className="home">
        <div className='siteTitulo'>
          <h1>Generation Projetos<br /><span>Projetos dos alunos da Generation Brasil</span></h1>
        </div>
        <div></div>
        <div className='background'>
          <img src="https://cdn.wallpapersafari.com/4/24/yomiXr.jpg" className="backHome" alt="" />
        </div>
      </div>
      <div className="pageDois">
        <div className='nullPage'></div>
        <div className='projectArea'>
          <div className='inputArea'>
            <input type="text" placeholder='Turma' value={value} onChange={Ca} />
            <input type="text" placeholder='Grupo' />
            <input type="text" placeholder='Nome Projeto' />
            {/* <button
              //style={{display: displayB}} 
              onClick={() => displayCa === 'none' ? setDisplayCa('flex') : setDisplayCa('none')}
            >Cadastrar Projeto</button> */}
          </div>
          <div className='listProject'>
            olá
            {projetos.map((item, index) => (
              <div key={index} className="eachProject">
                {item.nomeProjeto}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className='cadastrarProjeto' style={{ display: displayCa }}>
        <div className="closeForm">
          <div onClick={() => displayCa === 'none' ? setDisplayCa('flex') : setDisplayCa('none')}>X</div>
        </div>
        <Projetos />
      </div> */}

      <Footer />

    </div>
  );
}

export default App;
