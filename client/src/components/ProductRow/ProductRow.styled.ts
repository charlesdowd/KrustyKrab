import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const Root = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  position: relative;
  height: 86px;
  padding: 25px 32px;
  align-items: center;
`;

export const ActionsRoot = styled.div`
  position: absolute;
  left: 72%;
  display: flex;
  right: calc(0% + 32px);
  justify-content: space-between;
  max-height: 36px;
`;

export const AddToOrderButton = styled(Button)`
  background-color: white;
  color: #f84e54;
  border: 1px solid #f84e54;
  border-radius: 8px;
  font-size: normal;

  @media (max-width: 992px) {
    font-size: x-small !important;
    padding: 4px;
  }

  :hover {
    color: white;
    background-color: #f84e54;
    border: 1px solid #f84e54;
  }

  :focus {
    background-color: #f84e54;
    color: white;
  }

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const OrderInput = styled.input`
  border: 1px solid #c6c6c6;
  border-radius: 8px;
  width: 65px;
  text-align: right;
  padding: 6px;

  // Hide arrows
  /* Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  [type='number'] {
    -moz-appearance: textfield;
  }
`;

export const FavoriteDiv = styled.div`
  cursor: pointer;
  align-self: center;
`;
