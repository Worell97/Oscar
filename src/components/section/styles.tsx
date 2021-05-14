import styled from 'styled-components';

type Props ={
    customstyle: string 
}

export const DeafaultSection = styled.section<Props>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    scroll-snap-align: center;
    padding: 5%;
    ${props => (props.customstyle !== '' ? props.customstyle : '')}
`;
export const Header = styled.h1` 
    text-align: center;
`;