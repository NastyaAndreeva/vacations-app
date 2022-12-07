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
      // most basic recommended timing
      standard: 300,
    },
  },
  components: {
    // Название компонента
    MuiButton: {
      styleOverrides: {
        root: {
          // Root - стили для всех вариаций кнопки
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