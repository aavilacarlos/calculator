import React from "react"
import '../hojas-de-estilo/logofree.css';


const LogoFree = (props) => (
    <div className="freecodecamp-logo-contenedor">
        <img src={props.src} alt={props.alt} className='freecodecamp-logo'/>
    </div>
)

export default LogoFree;