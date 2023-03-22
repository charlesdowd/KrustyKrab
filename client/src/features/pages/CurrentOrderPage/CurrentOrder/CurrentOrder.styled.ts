import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
`;

export const Headers = styled.div`
  position: relative;
  margin-bottom: 32px;
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
  position: absolute;
  line-height: 32px;
  right: 0px;
  display: flex;
  gap: 8px;
  color: #f84e54;
  cursor: pointer;
  align-items: center;
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

export const ItemId = styled.div<{ $header?: boolean }>(
  ({ $header }) => css`
    position: absolute;
    line-height: 32px;

    ${calculateFontStyle($header)}
  `,
);

export const Description = styled.div<{
  $header?: boolean;
  $position?: number;
}>(
  ({ $header, $position }) => css`
    position: absolute;
    line-height: 32px;
    left: ${$position ? `${$position}%` : '15%'};

    ${calculateFontStyle($header)};
  `,
);

export const CasePack = styled.div<{ $header?: boolean; $position?: number }>(
  ({ $header, $position }) => css`
    position: absolute;
    line-height: 32px;
    left: ${$position ? `${$position}%` : '35%'};

    ${calculateFontStyle($header)}
  `,
);

export const CaseWeight = styled.div<{ $header?: boolean; $position?: number }>(
  ({ $header, $position }) => css`
    position: absolute;
    line-height: 32px;
    left: ${$position ? `${$position}%` : '48%'};

    ${calculateFontStyle($header)}
  `,
);

export const Quantity = styled.div<{ $header?: boolean; $position?: number }>(
  ({ $header, $position }) => css`
    position: absolute;
    line-height: 32px;
    left: ${$position ? `${$position}%` : '70%'};

    ${calculateFontStyle($header)}
  `,
);
