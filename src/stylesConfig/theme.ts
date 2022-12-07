import { Theme } from '@emotion/react';

const theme: Theme = {
  colors: {
      accentColor: 'hotpink',
      primaryColor: 'aqua',
  },
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  shape: {
    borderRadius: 20,
  },
  transitions: {
    duration: {
      standard: 300,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 50,
          width: 300,
          fontSize: 18,
          letterSpacing: 0.1,
          textTransform: 'uppercase',
        },
      },
    },
  },
};

export default theme;
