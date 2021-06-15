import React from 'react';
import {StyledMenu, StyledNavMenu, NavMenuItem} from './styles';
import {NavBtn, NavBtnLink, Button} from '../button';
import {Link} from 'react-scroll';
import useWindowDimensions from '../getWindowDimension';
import { StyledSandWichButton } from '../button/styles';

function Menu(){ 
    const {height} = useWindowDimensions();

    function viewHeigthToPx(distance: number) {
        return (distance/100) * height;
    };
    return(
        <StyledMenu>
            <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-viewHeigthToPx(10)}
            >
                <Button caption = "Oscar Worell Filho"/>
            </Link> 
            <StyledSandWichButton/>
            <StyledNavMenu>               
                <Link
                    activeClass="active"
                    to="AboutMe"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-viewHeigthToPx(10)}> 
                    <NavMenuItem>About me</NavMenuItem>
                </Link>             
                <Link
                        activeClass="active"
                        to="Experience"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-viewHeigthToPx(10)}>
                    <NavMenuItem>Career</NavMenuItem>
                </Link>          
                <Link
                    activeClass="active"
                    to="Certifications"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-viewHeigthToPx(10)}>
                    <NavMenuItem>Certification</NavMenuItem>
                </Link>        
                <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-viewHeigthToPx(10)}>
                    <NavMenuItem>Contact</NavMenuItem>
                </Link>   
            </StyledNavMenu>
            <NavBtn> 
                <NavBtnLink to="https://github.com/Worell97">
                    Github
                </NavBtnLink>
            </NavBtn>
        </StyledMenu>
    ); 
}

export default Menu;