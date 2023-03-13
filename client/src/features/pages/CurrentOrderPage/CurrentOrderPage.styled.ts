import styled from 'styled-components';
import Button from '../../../components/Button/Button';

export const Root = styled.div`
  margin-top: 64px;
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

export const BannerRoot = styled.div`
  display: flex;
  padding: 24px 32px;
  border-radius: 12px;
  background-color: #353535;
  color: white;
  gap: 12px;
`;

export const DeadlineText = styled.span`
  font-size: 14px;
  font-weight: 600;
  max-width: 272px;
`;

export const BannerTitle = styled.h3`
  font-weight: bold;
`;

export const OrderItemRow = styled.div`
  width: 50%;
  justify-content: space-between;
  display: flex;
  align-self: center;
  gap: 32px;
  padding: 24px;
`;

export const HalfWidthButton = styled(Button)`
  width: 50%;
  align-self: center;
`;
