import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 2px solid gray;
  align-items: center;
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 12px;
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
