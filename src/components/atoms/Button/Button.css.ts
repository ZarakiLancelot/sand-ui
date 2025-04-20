import { style, styleVariants } from '@vanilla-extract/css';
import { tokens } from '../../../styles/tokens/tokens';

const baseButton = style({
  borderRadius: tokens.borderRadius.sm,
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
});

export const sizeVariants = styleVariants({
  small: { padding: tokens.spacing.sm },
  medium: { padding: tokens.spacing.md },
  large: { padding: tokens.spacing.lg },
});

export const variantVariants = styleVariants({
  primary: {
    backgroundColor: tokens.colors.primary,
    color: 'white',
    border: 'none',
    ':hover': {
      backgroundColor: tokens.colors.primaryDark,
    },
  },
  secondary: {
    backgroundColor: 'transparent',
    color: tokens.colors.primary,
    border: `1px solid ${tokens.colors.primary}`,
    ':hover': {
      backgroundColor: 'rgba(52, 152, 219, 0.1)',
    },
  },
  text: {
    backgroundColor: 'transparent',
    color: tokens.colors.primary,
    border: 'none',
    padding: '0',
    ':hover': {
      color: tokens.colors.primaryDark,
    },
  },
});

export const fullWidth = style({
  width: '100%',
});

export const disabled = style({
  opacity: 0.6,
  cursor: 'not-allowed',
});

export const button = {
  base: baseButton,
  size: sizeVariants,
  variant: variantVariants,
  fullWidth,
  disabled,
};
