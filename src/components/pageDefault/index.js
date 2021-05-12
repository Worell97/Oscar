import React from 'react';
import styled, {css} from 'styled-components';
import Footer from '../footer';
import Menu from '../menu';

const Main = styled.main`{    
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5px;
    padding-right: 5%; 
    ${({ paddingAll }) => css`
    padding: ${paddingAll};
    `
    };
}
`;

function PageDefault({ children, paddingAll }) {
    return (
      <>
        <Menu/>
        <Main paddingAll={paddingAll}>
          {children}
        </Main>
        <Footer />
      </>
    );
  }
  
  export default PageDefault;
