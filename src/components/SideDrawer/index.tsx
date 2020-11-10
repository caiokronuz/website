import React from 'react';

import {AiOutlineCloseCircle} from 'react-icons/ai';

import './styles.css';

interface SideDrawerProps{
    show: boolean;
    click: any;
}

function SideDrawer({show, click}: SideDrawerProps){
    let drawerClasses = 'side-drawer';

    if(show){
        drawerClasses = 'side-drawer open';
    }

    return(
        <nav className={drawerClasses}>
            <div className="side-logo">
                <h1>Caio Gabriel</h1>
                <AiOutlineCloseCircle size={24} color="#FFF" onClick={click} />
            </div>
            <ul>
                <li onClick={click}><a href="#about-me">Sobre</a></li>
                <li onClick={click}><a href="#skills">Habilidades</a></li>
                <li onClick={click}><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer;