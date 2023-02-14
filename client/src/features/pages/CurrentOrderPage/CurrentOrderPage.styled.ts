import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PendingApprovalDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 10px solid red;
  padding: 24px;
  border-radius: 24px;
  gap: 8px;
`;

export const BannerTitle = styled.h3`
  font-weight: bold;
`;

export const OrderItemRow = styled.div`
  display: flex;
  gap: 32px;
  padding: 24px;
`;
