import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Button from '../button';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                    Inicio                
            </Link>
            <Button className="ButtonLink">Tecnologias</Button>
    </nav>
    );
}

export default Menu;