import { FunctionComponent } from 'react';
import { ClipLoader } from 'react-spinners';
import { Root, ButtonColor, ButtonSize } from './Button.styled';

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  form?: string;
  fullWidth?: boolean;
  id?: string;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: ButtonColor;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  color = 'blue',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  loading = false,
  id,
  className,
  form,
}) => {
  return (
    <Root
      id={id}
      type={type}
      disabled={disabled || loading}
      $color={color}
      $size={size}
      $fullWidth={fullWidth}
      onClick={onClick}
      className={className}
      form={form}
    >
      {loading ? <ClipLoader size={20} color='blue' loading /> : children}
    </Root>
  );
};

export default Button;
