import React from 'react';
import {DeafaultSection, Header} from './styles';

type Props = {
  children: React.ReactNode;
  HeaderText: String;
}
function Section({ children, HeaderText }: Props) {
    return (
      <DeafaultSection>
        {(HeaderText.length > 0 ? <Header>{HeaderText}</Header>: '')}
        {children}
      </DeafaultSection>
    );
};
  
export default Section;