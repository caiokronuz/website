import React from 'react';

import './styles.css'

interface backdropProps{
    click: any;
}

function Backdrop({click}: backdropProps){
    return(
        <div className="backdrop" onClick={click}/>
    )
}

export default Backdrop;