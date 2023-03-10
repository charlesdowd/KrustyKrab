import styled from 'styled-components';

export const Root = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px 40px;
  position: relative;
`;

export const ItemText = styled.span`
  color: #070f29;
  font-weight: 600;
`;

export const OrderItemRow = styled.div`
  display: flex;
  width: 52%;
  justify-content: space-between;
`;

export const OrderDate = styled(ItemText)`
  position: absolute;
  top: 24px;
  right: 40px;
`;
