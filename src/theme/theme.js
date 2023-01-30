import { createTheme } from '@mui/material';

export const theme = createTheme({
   palette: {
      mode: 'light',
      primary: {
         main: '#4051b7',
         secondary: '#9906FF',
         accent: "#3D4451"
      },
   },
   components: {
      MuiContainer: {
         defaultProps: {
            maxWidth: 'lg', // 1200
         },
      },
      MuiButton: {
         styleOverrides: {
            root: {
               fontSize: '1rem',
               padding: '0.6rem 2.5rem',
            },
         },
         defaultProps: {
            variant: 'contained',
            color: 'primary',
            // disableRipple: true,
         },
      },
   },
});

export const theme2 = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: '#4051b7',
         secondary: '#FBE145',
         green: '#9BB259'
      },
   },
   components: {
      MuiContainer: {
         defaultProps: {
            maxWidth: 'lg', // 1200
         },
      },
      MuiButton: {
         styleOverrides: {
            root: {
               fontSize: '1rem',
               padding: '0.6rem 2.5rem',
            },
         },
         defaultProps: {
            variant: 'contained',
            color: 'primary',
            // disableRipple: true,
         },
      },
   },
});