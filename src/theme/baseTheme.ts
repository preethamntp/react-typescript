import { createTheme, alpha } from '@mui/material/styles';
import { breakpoints } from './breakpoints';
import { palette } from './palette';
import { typography } from './typography';

export const baseTheme = createTheme({
  alpha,
  breakpoints,
  palette,
  typography,
  spacing: (factor: number) => `${factor}rem`,
});
