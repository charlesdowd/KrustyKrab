import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
`;

export const OrderSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  padding: 24px 40px;
  gap: 32px;
`;

export const OrderItemRow = styled.div`
  position: relative;
  margin-bottom: 32px;
`;

export const RemoveDiv = styled.div`
  display: flex;
  gap: 8px;
  color: #f84e54;
  cursor: pointer;
  align-items: center;
  text-align: center;
`;

const calculateFontStyle = ($header: boolean) => {
  if ($header) {
    return css`
      font-size: 12px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.32);
    `;
  } else {
    return css`
      font-size: 14px;
      font-weight: 600;
      color: #070f29;
    `;
  }
};
