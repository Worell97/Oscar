import React from 'react';
import Footer from '../footer';
import Menu from '../menu';
import {Main} from './styles';

type Props = {
  children: React.ReactNode;
}
function PageDefault({ children }: Props) {
    return (
      <>
        <Menu/>
        <Main>
          {children}
        </Main>
        <Footer />
      </>
    );
  }
  
  export default PageDefault;
