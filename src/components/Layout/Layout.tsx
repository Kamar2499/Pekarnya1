import { AppBar, Box, Button, Container, CssBaseline, Toolbar, styled, useScrollTrigger, Slide, Badge, IconButton } from '@mui/material';
import { Outlet, useLocation, Link as RouterLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../contexts/CartContext';

// Стилизованная кнопка навигации
const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  mx: 1,
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '2px',
    bottom: '8px',
    left: '50%',
    backgroundColor: theme.palette.secondary.main,
    transition: 'all 0.3s ease-in-out',
    transform: 'translateX(-50%)',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '&:after': {
      width: '60%',
    },
  },
  '&.active': {
    color: theme.palette.secondary.main,
    '&:after': {
      width: '60%',
      backgroundColor: theme.palette.secondary.main,
    },
  },
  transition: 'all 0.3s ease-in-out',
  padding: '8px 16px',
  borderRadius: '8px',
}));

// Обертка для кнопки с поддержкой RouterLink
const NavButton = (props: any) => {
  return (
    <StyledButton
      component={RouterLink}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

// Компонент для скрытия AppBar при прокрутке вниз
function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

interface LayoutProps {
  onCartClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ onCartClick }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          color="primary" 
          elevation={scrolled ? 4 : 0}
          sx={{
            transition: 'all 0.3s ease-in-out',
            backgroundColor: scrolled ? 'rgba(93, 64, 55, 0.98)' : 'primary.main',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            py: scrolled ? 0.5 : 0,
            width: '100%',
            maxWidth: '100%',
            px: 0,
            m: 0,
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '1440px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
            <Toolbar disableGutters sx={{ px: 0 }}>
              <Box sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                alignItems: 'center', 
                mr: 4,
                transition: 'all 0.3s ease-in-out',
                transform: scrolled ? 'scale(0.9)' : 'scale(1)',
                '&:hover': {
                  transform: scrolled ? 'scale(0.95)' : 'scale(1.05)',
                }
              }}>
                <Logo />
              </Box>
              
              <Box sx={{ display: 'flex', flexGrow: { xs: 1, md: 0 }, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', mr: { xs: 1, sm: 2 } }}>
                  {[
                    { path: '/', label: 'Главная' },
                    { path: '/menu', label: 'Меню' },
                    { path: '/about', label: 'О нас' },
                    { path: '/contacts', label: 'Контакты' },
                  ].map((item) => (
                    <NavButton
                      key={item.path}
                      to={item.path}
                      className={location.pathname === item.path ? 'active' : ''}
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                        px: { xs: 1, sm: 1.5 },
                        display: { xs: 'none', sm: 'inline-flex' },
                      }}
                    >
                      {item.label}
                    </NavButton>
                  ))}
                </Box>
                <IconButton 
                  color="inherit" 
                  onClick={onCartClick}
                  sx={{
                    ml: 1,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  <Badge 
                    badgeContent={totalItems} 
                    color="secondary" 
                    overlap="circular"
                    sx={{
                      '& .MuiBadge-badge': {
                        right: 4,
                        top: 8,
                        border: `2px solid ${scrolled ? '#5D4037' : '#FFF8F0'}`,
                        padding: '0 4px',
                      },
                    }}
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Box>
            </Toolbar>
          </Box>
        </AppBar>
      </HideOnScroll>
      <Toolbar /> {/* Отступ для фиксированного AppBar */}
      
      <Box component="main" sx={{ flexGrow: 1, width: '100%', maxWidth: '100%', p: 0, m: 0 }}>
        <Outlet />
      </Box>
      
      <Footer />
    </Box>
  );
};

export default Layout;
