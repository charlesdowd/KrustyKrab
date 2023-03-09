import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const Root = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled(Form.Group)`
  width: 400px;
`;
