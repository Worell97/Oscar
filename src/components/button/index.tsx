import React from 'react';
import {StyledButton, StyledButtonList} from './styles';

type Props = {
    children: React.ReactNode;
}

type ListProps = {
    children: React.ReactNode;
}

export function Button({children}: Props){
    return(
        <StyledButton>
            {children}  
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