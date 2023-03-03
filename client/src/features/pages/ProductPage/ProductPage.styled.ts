import styled from 'styled-components';

export const ProductTable = styled.table`
  width: 100%;
  margin-top: 32px;
`;

export const Root = styled.td`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px;
`;

export const OrderInput = styled.input`
  width: 75px;
  border-radius: 12px;

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
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 85px;
  border-radius: 16px;
  margin: -10px 0;
  padding: 5px;
  :hover {
    background-color: #d3d3d3;
  }
`;

export const FilterDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 32px;
`;

export const Filter = styled.input`
  width: 65%;
  height: 48px;
  border-radius: 12px;
  padding: 12px;
  font-size: x-large;
`;

export const ProductRow = styled.tr`
  border: 2px solid gray;
`;
