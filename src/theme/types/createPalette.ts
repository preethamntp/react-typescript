import {
  SimplePaletteColorOptions,
  ColorPartial,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    brand?: SimplePaletteColorOptions;
    neutral?: SimplePaletteColorOptions;
    blue?: ColorPartial;
    cyan?: ColorPartial;
    green?: ColorPartial;
    orange?: ColorPartial;
    pink?: ColorPartial;
    red?: ColorPartial;
    yellow?: ColorPartial;
    grayscale?: ColorPartial;
    black?: string;
    white?: string;
  }

  interface Palette {
    brand: SimplePaletteColorOptions;
    neutral: SimplePaletteColorOptions;
    blue: ColorPartial;
    cyan: ColorPartial;
    green: ColorPartial;
    orange: ColorPartial;
    pink: ColorPartial;
    red: ColorPartial;
    yellow: ColorPartial;
    grayscale: ColorPartial;
    black: string;
    white: string;
  }
}
