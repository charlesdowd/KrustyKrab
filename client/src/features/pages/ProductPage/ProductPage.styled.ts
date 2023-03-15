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

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 32px;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

export const Filter = styled.input`
  width: 420px;
  height: 40px;
  border-radius: 8px;
  padding: 8px 8px 8px 36px;
  font-size: medium;
  background-color: #3131311f;
  border: none;
  left: 0px;
`;

export const ProductRow = styled.tr`
  border: 2px solid gray;
`;

export const SearchIcon = styled.img`
  position: absolute;
  height: 20px;
  left: 8px;
  top: 10px;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 24px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  gap: 6px;
`;

export const EmailLink = styled.a`
  color: #070f29;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

export const EmailText = styled.span`
  color: rgba(0, 0, 0, 0.3);
  line-height: 24px;
`;
