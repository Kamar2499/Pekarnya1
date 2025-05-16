import { AppBar, Box, Button, Container, CssBaseline, Toolbar, Typography, styled, useScrollTrigger, Slide, Fade } from '@mui/material';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';

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

const Layout = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

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
            backgroundColor: scrolled ? 'rgba(121, 85, 72, 0.95)' : 'primary.main',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            py: scrolled ? 0.5 : 0,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Fade in={!scrolled} timeout={500}>
                <Typography 
                  variant="h5" 
                  component="div" 
                  sx={{ 
                    flexGrow: 1, 
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #FFD700 30%, #FFA000 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: { xs: 'none', md: 'block' },
                    mr: 4,
                    fontFamily: '"Playfair Display", serif',
                    letterSpacing: '1px',
                  }}
                >
                  Пекарня "Вкусный уголок"
                </Typography>
              </Fade>
              
              <Box sx={{ display: 'flex', flexGrow: { xs: 1, md: 0 }, justifyContent: 'flex-end' }}>
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
                      px: { xs: 1, sm: 2 },
                    }}
                  >
                    {item.label}
                  </NavButton>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar /> {/* Отступ для фиксированного AppBar */}
      
      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default Layout;
