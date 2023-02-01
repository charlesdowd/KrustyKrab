import styled, { css } from 'styled-components';

// Change these depending on the theme + color scheme of the project
export type ButtonColor = 'blue' | 'red' | 'green' | 'yellow';
export type ButtonSize = 'small' | 'medium' | 'large';

const getPadding = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return '8px';
    case 'medium':
      return '12px 16px';
    case 'large':
      return '20px 32px';
    default:
      return '8px';
  }
};

export const Root = styled.button<{
  $color: ButtonColor;
  $size: ButtonSize;
  $fullWidth: boolean;
}>(({ $color, $size, $fullWidth }) => {
  const padding = getPadding($size);
  return css`
    background-color: ${$color};
    white-space: nowrap;
    width: ${$fullWidth ? '100%' : 'auto'};
    padding: ${padding};
  `;
});
