import React from 'react';
import {StyledNavBtn, StyledButton, StyledButtonList, StyledNavBtnLink} from './styles';

type Props = {
    caption: string;
}

type ListProps = {
    children: React.ReactNode;
}

type LinkProps = {
    children: React.ReactNode;
    to: string;
}

export function Button({caption}: Props){
    return(
        <StyledButton>
            {caption} 
        </StyledButton>
    );
};

export function ButtonList({children}: ListProps){
    return(
        <StyledButtonList>
            {children}
        </StyledButtonList>
    );
};

export function NavBtn({children}: ListProps){
    return(
        <StyledNavBtn>
            {children}
        </StyledNavBtn>
    );
};

export function NavBtnLink({children, to}: LinkProps){
    return(
        <StyledNavBtnLink href={to}>
            {children}
        </StyledNavBtnLink>
    );
}