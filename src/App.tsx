import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, type ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode, GlobalStyles } from '@mui/material';
import { useMemo, useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Cart from './components/Cart/Cart';

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
      main: '#5D4037', // Теплый коричневый
      light: '#8D6E63',
      dark: '#3E2723',
      contrastText: '#FFF8E1',
    },
    secondary: {
      main: '#FFA000', // Теплый оранжево-желтый
      light: '#FFC046',
      dark: '#C67100',
      contrastText: '#3E2723',
    },
    ...(mode === 'light'
      ? {
          background: {
            default: '#FFF8F0', // Кремовый фон
            paper: '#FFF8E1', // Светло-кремовый для карточек
          },
          text: {
            primary: '#3E2723',
            secondary: '#5D4037',
          },
        }
      : {
          background: {
            default: '#212121',
            paper: '#424242',
          },
          text: {
            primary: '#FFF8E1',
            secondary: '#FFECB3',
          },
        }),
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontFamily: '"Playfair Display", serif',
    },
    h2: {
      fontWeight: 600,
      fontFamily: '"Playfair Display", serif',
    },
    h3: {
      fontWeight: 600,
      fontFamily: '"Playfair Display", serif',
    },
    h4: {
      fontWeight: 600,
      fontFamily: '"Playfair Display", serif',
    },
    button: {
      textTransform: 'none' as const,
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
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
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            '@keyframes grain': {
              '0%, 100%': { transform: 'translate(0, 0)' },
              '10%': { transform: 'translate(-5%, -10%)' },
              '20%': { transform: 'translate(-15%, 5%)' },
              '30%': { transform: 'translate(7%, -25%)' },
              '40%': { transform: 'translate(-5%, 25%)' },
              '50%': { transform: 'translate(-15%, 10%)' },
              '60%': { transform: 'translate(15%, 0%)' },
              '70%': { transform: 'translate(0%, 15%)' },
              '80%': { transform: 'translate(3%, 35%)' },
              '90%': { transform: 'translate(-10%, 10%)' },
            },
            '::selection': {
              background: theme.palette.secondary.main,
              color: theme.palette.getContrastText(theme.palette.secondary.main),
            },
            '::-webkit-scrollbar': {
              width: '8px',
              height: '8px',
            },
            '::-webkit-scrollbar-track': {
              background: theme.palette.background.default,
            },
            '::-webkit-scrollbar-thumb': {
              background: theme.palette.secondary.main,
              borderRadius: '4px',
              '&:hover': {
                background: theme.palette.secondary.dark,
              },
            },
          }}
        />
        <Router>
          <Routes>
            <Route path="/" element={<Layout onCartClick={openCart} />}>
              <Route index element={<Home />} />
              <Route path="menu" element={<Menu />} />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>
          </Routes>
        </Router>
        <Cart open={isCartOpen} onClose={closeCart} />
      </ThemeProvider>
    </CartProvider>
  );
};

export default App;
