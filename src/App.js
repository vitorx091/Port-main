import React, { useEffect } from 'react';
import './App.css';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import Menu from './Components/menu/Menu';
import Presention from "./Components/Presention/index";
import Contacts from "./Components/Contacts"
import AboutMe from "./Components/AboutMe"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects/Projects"
import Footer from "./Components/Footer"


function App() {



  useEffect(() => {
    // Adiciona o comportamento de rolagem suave a todos os links internos
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <header>
        <MobileMenu
          linkStart='#section1' start='Inicio'
          linkAboutMe='#section2' AboutMe="Sobre mim"
          linkProjects='#section3' Projects='Projetos'
          linkContact='#section4' Contact='Contato'

        />
        <Menu
          name='vitor'
          linkMenu='#section1' contentMenu='Inicio'
          linkSkills='#section2' contentSkills='Habilidades'
          linkProjects='#section3' contentProjects='Projetos'
          linkContact='#section4' contentContact='Contato' />
      </header>
      <main>
        <Presention id="section1"
          machinedescribe="Olá, me chamo Vitor"
          P="Um Dev em Apredizagem" />

        <Contacts />

        <div className="box-container">
          <AboutMe
            title="Sobre mim"
            discretion="Um Dev Full Stack. Atualmente minhas linguagens favoritas são Python utilizando o Django Framework para criação de API's e React  para desenvolvimento web." />

          <div className="box-skills" id="section2">
            <div className="title-Skill">
              <h2>Habilidades</h2></div>
            <div className="skill">
              <Skills skill="HTML" />
              <Skills skill="JAVASCRIPT" />
              <Skills skill="TYPESCRIPT" />
              <Skills skill="REACT" />
              <Skills skill="NODE" />
              <Skills skill="SQL" />
              <Skills skill ="PYTHON"/>
              <Skills skill="GIT" /></div>
          </div>

        </div>

        <div className="container-projects" id="section3">
          <Projects
            titleProject="chatgr"
            linkProject='https://chatgr.vercel.app//'
            title='Projetos'
            discretionproject='O chatgr é um chat-bate papo em grupo aonde é utilizando o banco de dados da FireBase. O chat faz login com a conta Google, podendo assim se identificar com quem está conversando através da foto do usuário  '
            />
          <Projects
          titleProject="Lista de tarefas"
            linkProject="https://lista-de-tarefas-ten-rose.vercel.app/"
            discretionproject='Lista de tarefas é um bloco de notas feita para auxiliar nas atividades diárias'
            />
          <Projects
            linkProject=''
            discretionproject='Em breve Novidades!!'
            />
        </div>

      </main>

      <footer>
        <div id="section4">
          <Footer name='Vitor' description="Um Dev Full-stack, aberto para novas oportunidades" Copyright='© Copyright 2023.Feito por' />
        </div>
      </footer>

    </div>
  );
}

export default App;