import React from 'react';
import {StyledMenu} from './styles';
import {Button, ButtonList} from '../button';
import {Link} from 'react-scroll';
import useWindowDimensions from '../getWindowDimension';

function Menu(){ 
    const {height} = useWindowDimensions();

    function viewHeigthToPx(distance: number) {
        return (distance/100) * height;
    };
    return(
        <StyledMenu>
            <Button>
                <Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-viewHeigthToPx(10)}
                  >Oscar Worell Filho
                </Link>
            </Button>    
            <ButtonList>
                <Button>                    
                    <Link
                        activeClass="active"
                        to="AboutMe"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-viewHeigthToPx(10)}
                    >About me
                    </Link>
                </Button>
                <Button>              
                    <Link
                        activeClass="active"
                        to="Experience"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-viewHeigthToPx(10)}
                    >Career
                    </Link>
                </Button> 
                <Button>            
                    <Link
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-viewHeigthToPx(10)}
                    >Contact
                    </Link>
                </Button>
                <Button><a href="https://github.com/Worell97/Certificados">Certification</a></Button>
                <Button><a href="https://github.com/Worell97">Github</a></Button>
            </ButtonList>
        </StyledMenu>
    ); 
}

export default Menu;