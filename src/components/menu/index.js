import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Button from '../button';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                    Begin                
            </Link>
            <Button className="ButtonLink">Technologies</Button>
            <Button className="ButtonLink">Certification</Button>
            <Button className="ButtonLink">Github</Button>
    </nav>
    );
}

export default Menu;