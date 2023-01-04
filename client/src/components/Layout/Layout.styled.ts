import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Root = styled(Container)`
  height: 100vh;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  height: calc(100vh - 80px);
`;

export const NavRoot = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
  gap: 12px;
`;

export const NavItem = styled(NavLink)`
  &.active {
    > button {
      display: none;
    }
  }
`;

export const NavHome = styled(NavItem)`
  flex-grow: 1;
`;
