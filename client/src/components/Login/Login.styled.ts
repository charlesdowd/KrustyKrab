import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const Root = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled(Form.Group)`
  width: 400px;
`;
