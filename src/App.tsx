import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, type ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';
import { useMemo, useState } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontWeightSemiBold: number;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    fontWeightSemiBold?: number;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fontWeightSemiBold: true;
  }
}

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: '#8B4513', // Коричневый цвет выпечки
      light: '#A0522D',
      dark: '#5D4037',
      contrastText: '#FFF8E1',
    },
    secondary: {
      main: '#FFD700', // Золотистый цвет
      light: '#FFECB3',
      dark: '#FFA000',
      contrastText: '#5D4037',
    },
    ...(mode === 'light'
      ? {
          background: {
            default: '#FFF8F0', // Кремовый фон
            paper: '#FFFDE7', // Светло-желтый для карточек
          },
        }
      : {
          background: {
            default: '#212121',
            paper: '#424242',
          },
        }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none' as const,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          overflow: 'hidden',
        },
      },
    },
  },
});

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('light');
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
