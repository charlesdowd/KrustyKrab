import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Root = styled(Container)`
  min-height: 100vh;

  .outsideContainer {
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
    max-width: 100vw;
  }
`;

export const NavContainer = styled(Container)`
  background-color: #353535;
  display: flex;
  justify-content: space-between;
  height: 136px;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  &.active {
    > button {
      background-color: #ffffff;
      color: #f84e54;
      font-weight: 600;
    }
  }
`;
