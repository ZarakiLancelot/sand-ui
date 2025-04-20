import React from 'react';
import { StyledButton, ButtonWrapper, IconWrapper } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'link' | 'outline';
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Icon to render on the left */
  leftIcon?: React.ReactNode;
  /** Icon to render on the right */
  rightIcon?: React.ReactNode;
  /** Full-width button */
  fullWidth?: boolean;
  /** Icon-only mode */
  iconOnly?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  fullWidth = false,
  iconOnly = false,
  children,
  ...props
}) => (
  <ButtonWrapper fullWidth={fullWidth}>
    <StyledButton
      variant={variant}
      size={size}
      iconOnly={iconOnly}
      {...props}
    >
      {leftIcon && <IconWrapper position="left">{leftIcon}</IconWrapper>}
      {!iconOnly && children}
      {rightIcon && <IconWrapper position="right">{rightIcon}</IconWrapper>}
    </StyledButton>
  </ButtonWrapper>
);

export default Button;
