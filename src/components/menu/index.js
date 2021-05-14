import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import {Button, ButtonList} from '../button';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/" style={{textDecoration: 'none'}}>
                <h1> Oscar Worell Filho</h1>               
            </Link>
            <ButtonList>
                <Button className="ButtonLink">About me</Button>
                <Button className="ButtonLink">Technologies</Button>
                <Button className="ButtonLink">Certification</Button>
                <Button className="ButtonLink" href="https://github.com/Worell97">Github</Button>
            </ButtonList>
        </nav>
    ); 
}

export default Menu;