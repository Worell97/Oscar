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
                <Button className="ButtonLink" href="https://github.com/Worell97">About me</Button>
                <Button className="ButtonLink" href="https://github.com/Worell97">Technologies</Button>
                <Button className="ButtonLink" href="https://github.com/Worell97">Certification</Button>
                <Button className="ButtonLink" href="https://github.com/Worell97">Github</Button>
            </ButtonList>
        </StyledMenu>
    ); 
}

export default Menu;