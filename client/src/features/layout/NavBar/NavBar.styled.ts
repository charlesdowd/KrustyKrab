import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.12);
  height: 56px;
  border-radius: 12px;
`;

export const NavButton = styled.button`
  color: rgba(255, 255, 255, 0.6);
  border: none;
  background-color: rgba(255, 255, 255, 0);
  font-size: 16px;
  height: 100%;
  border-radius: 12px;
  font-weight: 500;
  padding: 16px 24px;

  :hover {
    color: white;
  }
`;

export const Logo = styled.img`
  height: 69px;
  width: 150px;
`;

export const SignOutIcon = styled.img`
  height: 14px;
  width: auto;
  margin-right: 10px;
`;

export const LogoutButton = styled.button`
  height: 48px;
  padding: 0 30px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background-color: #353535;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: white;
`;
