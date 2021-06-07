import React from 'react';
import { Link } from 'react-router-dom';
import {StyledMenu} from './styles';
import {Button, ButtonList} from '../button';

function Menu(){
    return(
        <StyledMenu>
            <Link to="/" style={{textDecoration: 'none'}}>
                <h1> Oscar Worell Filho</h1>               
            </Link>
            <ButtonList>
                <Button><Link to="/about-me">About me</Link></Button>
                <Button><Link to="/career">Career</Link></Button>
                <Button><a href="https://github.com/Worell97/Certificados">Certification</a></Button>
                <Button><a href="https://github.com/Worell97">Github</a></Button>
            </ButtonList>
        </StyledMenu>
    ); 
}

export default Menu;