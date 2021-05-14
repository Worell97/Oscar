import styled from 'styled-components';

export const StyledMenu = styled.nav`
  width: 100%;
  height: 10vh;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--primary);
  border-bottom: 0.2px solid var(--grayHigh);
}`;
