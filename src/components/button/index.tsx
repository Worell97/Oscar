import React from 'react';
import {StyledButton, StyledButtonList} from './styles';

type Props = {
    className: string;
    href: string;
    children: React.ReactNode;
}

export function Button({className, href, children}: Props){
    return(
        <StyledButton>
            <a className={className} href={href}>
                {children}    
            </a>
        </StyledButton>
    );
};

export function ButtonList({className, href, children}: Props){
    return(
        <StyledButtonList>
            {children}
        </StyledButtonList>
    );
};