import React from 'react';
import { StyledMenu, StyledNavMenu, NavMenuItem } from './styles';
import { NavBtn, NavBtnLink, Button } from '../button';
import { StyledSandWichButton } from '../button/styles';

const Menu = () => {

    function convertPXToVW() {
        return document.documentElement.clientHeight * -0.10;
    }

    function scrollToElement(elementId: string) {
        var element = document.getElementById(elementId);
        const yOffset = convertPXToVW();
        console.log(yOffset);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            console.log(y);
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }
    return (
        <StyledMenu>
            <Button caption="Oscar Worell Filho" onClick={(event: React.MouseEvent<HTMLElement>) => { scrollToElement("Home") }} />
            <StyledNavMenu>
                <NavMenuItem onClick={(event: React.MouseEvent<HTMLElement>) => { scrollToElement("AboutMe") }}>About me</NavMenuItem>
                <NavMenuItem onClick={(event: React.MouseEvent<HTMLElement>) => { scrollToElement("Experience") }}>Career</NavMenuItem>
                <NavMenuItem onClick={(event: React.MouseEvent<HTMLElement>) => { scrollToElement("Certifications") }}>Certification</NavMenuItem>
                <NavMenuItem onClick={(event: React.MouseEvent<HTMLElement>) => { scrollToElement("Contact") }}>Contact</NavMenuItem>
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
