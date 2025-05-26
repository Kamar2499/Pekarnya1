import { Box, Typography, styled, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LogoContainer = styled(RouterLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  '&:hover': {
    '& .logo-text': {
      color: theme.palette.secondary.main,
    },
    '& .logo-image': {
      transform: 'scale(1.05)',
    },
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  height: '60px',
  width: 'auto',
  marginRight: '12px',
  transition: 'all 0.3s ease',
  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
  '@media (max-width: 600px)': {
    height: '50px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '45px',
    marginRight: '8px',
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  background: 'linear-gradient(45deg, #FFC107 0%, #FF9800 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontFamily: '"Playfair Display", serif',
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease',
  fontSize: '1.8rem',
  lineHeight: 1.1,
  textShadow: '0 1px 2px rgba(0,0,0,0.1)',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.3rem',
  },
}));

const Logo = () => {
  const theme = useTheme();
  
  return (
    <LogoContainer to="/">
      <Box 
        component="img" 
        src="/Pekarnya1/images/logo/bakery-logo.png" 
        alt="Логотип пекарни" 
        className="logo-image"
        sx={{
          height: '60px',
          width: 'auto',
          marginRight: '12px',
          transition: 'all 0.3s ease',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
          '@media (max-width: 600px)': {
            height: '50px',
          },
          [theme.breakpoints.down('sm')]: {
            height: '45px',
            marginRight: '8px',
          },
          '&:hover': {
            transform: 'scale(1.05)',
          }
        }}
      />
      <Typography 
        variant="h5" 
        className="logo-text"
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(45deg, #FFD700 30%, #FFA000 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: '"Playfair Display", serif',
          letterSpacing: '1px',
          transition: 'color 0.3s ease',
          fontSize: '1.5rem',
          lineHeight: 1.2,
          '@media (max-width: 900px)': {
            display: 'none',
          },
        }}
      >
        Свежая выпечка
      </Typography>
    </LogoContainer>
  );
};

export default Logo;
