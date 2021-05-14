import React from 'react';
import {DeafaultSection, Header} from './styles';

type Props = {
  children: React.ReactNode;
  HeaderText: string;
  customstyle: string;
}
function Section({ children, HeaderText, customstyle }: Props) {
    return (
      <DeafaultSection customstyle={customstyle}>
        {(HeaderText !== ''? <Header>{HeaderText}</Header>:<></>)}
        {children}
      </DeafaultSection>
    );
};
  
export default Section;