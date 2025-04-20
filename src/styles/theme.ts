// src/styles/theme.ts
import { tokens } from './tokens/tokens';
type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

// Define the theme interface
export interface Theme {
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    secondaryDark: string;
    text: string;
    background: string;
    error: string;
    warning: string;
    success: string;
    info: string;
    [key: string]: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    [key: string]: string;
  };
  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    [key: string]: string;
  };
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    round: string;
    [key: string]: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    [key: string]: string;
  };
  typography: {
    fontFamily: string;
    [key: string]: string;
  };
}

export const defaultTheme: Theme = tokens;

export function createTheme(customTheme: DeepPartial<Theme>): Theme {
  return {
    ...defaultTheme,
    colors: { 
      ...defaultTheme.colors, 
      ...Object.fromEntries(
        Object.entries(customTheme.colors || {}).map(([key, value]) => [key, value ?? defaultTheme.colors[key]])
      ) 
    },
    spacing: { 
      ...defaultTheme.spacing, 
      ...Object.fromEntries(
        Object.entries(customTheme.spacing || {}).map(([key, value]) => [key, value ?? defaultTheme.spacing[key]])
      ) 
    },
    fontSizes: { 
      ...defaultTheme.fontSizes, 
      ...Object.fromEntries(
        Object.entries(customTheme.fontSizes || {}).map(([key, value]) => [key, value ?? defaultTheme.fontSizes[key]])
      ) 
    },
    borderRadius: { 
      ...defaultTheme.borderRadius, 
      ...Object.fromEntries(
        Object.entries(customTheme.borderRadius || {}).map(([key, value]) => [key, value ?? defaultTheme.borderRadius[key]])
      ) 
    },
    shadows: { 
      ...defaultTheme.shadows, 
      ...Object.fromEntries(
        Object.entries(customTheme.shadows || {}).map(([key, value]) => [key, value ?? defaultTheme.shadows[key]])
      ) 
    },
    typography: { 
      ...defaultTheme.typography, 
      ...Object.fromEntries(
        Object.entries(customTheme.typography || {}).map(([key, value]) => [key, value ?? defaultTheme.typography[key]])
      ) 
    },
  };
}
export type DefaultTheme = typeof defaultTheme;
