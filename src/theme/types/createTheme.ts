import '@mui/material/styles/createTheme';

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    alpha: (color: string, value: number) => string;
  }
}

declare module '@mui/system/createTheme' {
  interface Theme {
    alpha: (color: string, value: number) => string;
  }
}
