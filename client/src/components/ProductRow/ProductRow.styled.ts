import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import FavoritedIcon from '../../assets/favorited-icon.svg';
import NonFavoritedIcon from '../../assets/non-favorited-icon.svg';

export const ActionsRoot = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 36px;
  gap: 12px;
`;

export const AddToCartButton = styled(Button)`
  background-color: white;
  color: #f84e54;
  border: 1px solid #f84e54;
  border-radius: 8px;
  font-weight: 600;

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

  @media (max-width: 768px) {
    width: 32px;
  }

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

export const BigButton = styled(AddToCartButton)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SmallButton = styled(AddToCartButton)`
  font-size: small !important;
  padding: 0 11px;
  font-weight: 800;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const FavoritedButton = styled.button`
  background-image: url(${FavoritedIcon});
`;

export const NonFavoritedButton = styled.button`
  background-image: url(${NonFavoritedIcon});
`;
