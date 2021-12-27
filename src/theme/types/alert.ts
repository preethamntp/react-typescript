import '@mui/material/Alert';

declare module '@mui/material/Alert' {
  interface AlertPropsColorOverrides {
    neutral: true;
  }
}
