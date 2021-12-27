import { TypographyStyle } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    body1md: TypographyStyle;
    body1bold: TypographyStyle;
    body2md: TypographyStyle;
    body2bold: TypographyStyle;
    body3: TypographyStyle;
    body3md: TypographyStyle;
    body3bold: TypographyStyle;
    small1: TypographyStyle;
    small2: TypographyStyle;
  }

  interface TypographyOptions {
    body1md?: TypographyStyleOptions;
    body1bold?: TypographyStyleOptions;
    body2md?: TypographyStyleOptions;
    body2bold?: TypographyStyleOptions;
    body3?: TypographyStyleOptions;
    body3md?: TypographyStyleOptions;
    body3bold?: TypographyStyleOptions;
    small1: TypographyStyleOptions;
    small2: TypographyStyleOptions;
  }
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    body1md: true;
    body1bold: true;
    body2md: true;
    body2bold: true;
    body3: true;
    body3md: true;
    body3bold: true;
    small1: true;
    small2: true;
  }
}
