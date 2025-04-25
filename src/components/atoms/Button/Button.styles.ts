import styled, { css, DefaultTheme } from 'styled-components';
import type { ButtonProps } from './Button';
import { defaultTheme } from '../../../styles/theme';

// Size variants
const sizeStyles = {
  sm: css`
    padding: ${defaultTheme.spacing.sm} ${defaultTheme.spacing.md};
    font-size: ${defaultTheme.fontSizes.sm};
  `,
  md: css`
    padding: ${defaultTheme.spacing.md} ${defaultTheme.spacing.lg};
    font-size: ${defaultTheme.fontSizes.md};
  `,
  lg: css`
    padding: ${defaultTheme.spacing.lg} ${defaultTheme.spacing.xl};
    font-size: ${defaultTheme.fontSizes.lg};
  `,
};

// Visual styles
const variantStyles: Record<NonNullable<ButtonProps['variant']>, ReturnType<typeof css>> = {
  primary: css`
    background-color: ${defaultTheme.colors.primary};
    color: ${defaultTheme.colors.background};
    border: none;

    &:hover {
      background-color: ${defaultTheme.colors.primaryDark};
    }
  `,
  secondary: css`
    background-color: ${defaultTheme.colors.secondary};
    color: ${defaultTheme.colors.text};
    border: none;

    &:hover {
      background-color: ${defaultTheme.colors.secondaryDark};
    }
  `,
  danger: css`
    background-color: ${defaultTheme.colors.error};
    color: ${defaultTheme.colors.background};
    border: none;

    &:hover {
      background-color: ${defaultTheme.colors.errorDark};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${defaultTheme.colors.primary};
    border: 1px solid ${defaultTheme.colors.primary};
  `,
  link: css`
    background: none;
    border: none;
    text-decoration: underline;
    color: ${defaultTheme.colors.primary};
    padding: 0;
  `,
  outline: css`
    background: none;
    color: ${defaultTheme.colors.primary};
    border: 1px solid ${defaultTheme.colors.primary};
  `,
};

export const ButtonWrapper = styled.div<{ fullWidth?: boolean }>`
  display: inline-block;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;

export const IconWrapper = styled.span<{ position: 'left' | 'right' }>`
  display: inline-flex;
  align-items: center;
  ${({ position }) =>
    position === 'left'
      ? css`margin-right: ${defaultTheme.spacing.sm};`
      : css`margin-left: ${defaultTheme.spacing.sm};`
  }
`;

export const StyledButton = styled.button<{
  variant: ButtonProps['variant'];
  size: ButtonProps['size'];
  iconOnly: boolean;
  fullWidth: boolean;
}>`
  font-family: ${defaultTheme.typography.fontFamily};
  border-radius: ${defaultTheme.borderRadius.md};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${({ size }) => size && sizeStyles[size]};
  ${({ variant }) => variant && variantStyles[variant]};

  ${({ iconOnly, size }) =>
    iconOnly &&
    css`
      padding: ${defaultTheme.spacing.sm};
      width: ${size === 'sm' ? '32px' : size === 'md' ? '40px' : '48px'};
      height: ${size === 'sm' ? '32px' : size === 'md' ? '40px' : '48px'};

      & > span {
        margin: 0;
      }
    `
  };

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
