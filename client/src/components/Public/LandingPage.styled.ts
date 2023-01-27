import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const Root = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  margin-top: 100px;
`;

export const CustomButton = styled(Button)`
  height: 100px;
  width: 250px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 100px;
`;
