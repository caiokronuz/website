import React, {useState} from 'react';

import { FaBars, FaCss3Alt, FaPython, FaGitAlt, FaWhatsapp, FaGithub} from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiJavascript, DiMysql } from 'react-icons/di'

import SideDrawer from '../../components/SideDrawer';
import Backdrop from '../../components/Backdrop';

import './styles.css'

function LandingPage(){

    const [sideDrawer, setSideDrawer] = useState(false);

    function drawerToggleClickHandler(){
        setSideDrawer(true)
    }

    function backdropClickHandler(){
        setSideDrawer(false)
    }

    let backdrop;

    if(sideDrawer){ 
        backdrop = <Backdrop click={backdropClickHandler} />
    }

    return(
        <div id="landing-page">
            <header className="menu">
                <nav className="nav-menu">
                    <div className="menu_toggle-button">
                        <FaBars onClick={drawerToggleClickHandler}/>
                    </div>
                    <div className="menu-logo"><a href="/">Caio Gabriel</a></div>
                    <div id="spacer" />
                    <div className="menu-items">
                        <ul>
                            <li><a href="#about-me">SOBRE</a></li>
                            <li><a href="#skills">HABILIDADES</a></li>
                            <li><a href="#contact">CONTATO</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <SideDrawer show={sideDrawer} click={backdropClickHandler}/>
            {backdrop}

            <main>
                <div id="about-me">
                    <h1 id="title-about">Desenvolvedor Web &amp; Mobile</h1>
                    <img 
                        src={`https://avatars3.githubusercontent.com/u/62447520?s=460&u=1e5f09507c4e7f787b02c0e75258ca65e793426d&v=4`} 
                        title="Caio Gabriel" 
                        alt="Foto de Caio Gabriel"
                    />
                    <h1>&lt;Sobre/&gt;</h1>
                    <p>
                        Tenho 17 anos, sou técnico em redes de computadores e estudo programação a dois anos e meio. Atualmente
                        estou focado em desenvolvimento web e mobile, e sou apaixonado por frameworks javascript, 
                        sendo que minhas preferidas são React e Node.js. Gosto muito de resolver problemas e estou sempre em busca de mais aprendizado
                        para que possa melhorar como programador! Quer ver alguns de meus projetos além desse site?
                        <a href="https://github.com/caiokronuz" target="_blank" rel="noopener noreferrer"> Clique aqui </a>
                        para dar uma olhadinha no meu github!
                    </p>
                </div>

                <div id="skills">
                    <h1 id="title-skills">&lt;Habilidades/&gt;</h1>
                    <div id="skills-icons">

                        <div id="high">
                            <ul>
                                <li>
                                    <AiFillHtml5 size={165}/>
                                    <p>HTML5</p>
                                </li>
                                <li>
                                    <FaCss3Alt size={165}/>
                                    <p>CSS3</p>
                                </li>
                                <li>
                                    <DiJavascript size={165}/>
                                    <p>JavaScript</p>
                                </li>
                            </ul>
                        </div>

                        <div id="low">
                            <ul>
                                <li>
                                    <FaPython size={165}/>
                                    <p>Python</p>
                                </li>
                                <li>
                                    <DiMysql size={165}/>
                                    <p>MySQL</p>
                                </li>
                                <li>
                                    <FaGitAlt size={165}/>
                                    <p>Git</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div id="contact">
                    <h1 id="title-contact">&lt;Contato/&gt;</h1>
                    <a href={`https://api.whatsapp.com/send?phone=5585985915914&text=Ola`}><FaWhatsapp size={32} color="#FFF" /> Whatsapp</a>
                </div>
            </main>

            <footer>
                <p> &copy; Caio Gabriel - 2020</p>
                <a href="https://github.com/caiokronuz" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} color="#FFF" />
                </a>
            </footer>
        </div>
    )
}

export default LandingPage;